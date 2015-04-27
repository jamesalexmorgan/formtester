//NEED CUSTOM STRINGIFY FUNCTION because JSON.stringify doesn't save functions
var stringify = function(obj, prop) {
  var placeholder = '____PLACEHOLDER____';
  var fns = [];
  var json = JSON.stringify(obj, function(key, value) {
    if (typeof value === 'function') {
      fns.push(value);
      return placeholder;
    }
    return value;
  }, 2);
  json = json.replace(new RegExp('"' + placeholder + '"', 'g'), function(_) {
    return fns.shift();
  });
  return 'this["' + prop + '"] = ' + json + ';';
};


var loc = document.location;
var m = {
  initDelay: 3,
  actionStepDelay: 0.2,
  storage: null,
  data: { //this data object will be what is stored and retrieved
    finishingAfterThisTest: false,
    nextScenarioAfterThisTest: false,
    availableTestScenarios: [],
    runningTestScenarios: [], 
    currentScenarioIndex: 0, 
    currentTestIndex: 0,
    nextPageAssert: false,
    results: []
  },
  ui: {
    $controlBar: null
  },
  init: function() { 

    //viewing start page with ?testing suffix
    if(loc.href.indexOf('?testing') !== -1){
      var jsPath = loc.protocol + '//' + loc.host + loc.pathname + '/form-test.js?SQ_DESIGN_NAME=blank';    //json file path, with blank design applied
      $.getScript(jsPath, function (data) {
        //TODO do check if json Data is valid
        if(testScenarios) {
          m.data.availableTestScenarios = testScenarios;
          m.initControlBar(testScenarios);
        } else {
          alert('Could not find testJson variable in form-test.js.');
        }
        
      });      
    } else {
      //viewing another page
      m.storage = sessionStorage.getItem('form-test');//try getting storage

      if(m.storage){
        //storage found so init control bar
        m.data = eval(m.storage);//NEED EVAL because need to parse functions from string as well
        m.initControlBar(m.data.availableTestScenarios);
        
        if(m.data.runningTestScenarios.length){
          m.initContinueTestCountdown();  
        }
      }

    }

  },//end init

  initControlBar: function(testScenarios) {
    if(!m.ui.$controlBar) {
      var cssHtml = '<style>#form-testing-bar {overflow:auto;box-sizing: border-box;position: fixed;top: 0;left: 0;z-index: 1000000000;background: #ccc;width: 100%;padding: 10px;color: #555;} #form-testing-bar .test-form-box {width: 33%; float:left;} #form-testing-bar select,#form-testing-bar button  {padding: 4px;margin: 0;vertical-align: middle;}</style>';
      m.ui.$controlBar = $('<div id="form-testing-bar"></div>');
      $('body').prepend(cssHtml);
      $('body').prepend(m.ui.$controlBar);  

      m.initScenarios(testScenarios);
    }
  },

  initScenarios: function(initTestScenarios) { 
    //if scenariosAvailable then put select in top bar

    var $scenariosContainer = $('<div class="scenario-container test-form-box">Scenarios:<br/> </div>');
    var $testingCaseSelect = $('<select id="form-testing-select" multiple></select>');
    var $testingBtnSelectAll = $('<button id="form-testing-select-all">All</button>');
    var $testingBtnGo = $('<button id="form-testing-go">Go</button>');


    $.each(initTestScenarios, function(ind, scenario) {
      var $testOption = $('<option value="' + ind + '">' + (ind+1) + ' - ' + scenario.name + '</option>');
      $testingCaseSelect.append($testOption);
    });

    $testingBtnGo.click(function() {
      var selectedTestScenariosIndexes = $testingCaseSelect.val();
      
      m.resetValues();

      $.each(selectedTestScenariosIndexes,function(ind,scenarioIndex){
        m.data.runningTestScenarios.push(initTestScenarios[scenarioIndex]);
      });

      m.continueTest();
    });

    $testingBtnSelectAll.click(function(){
      var $ops = $('#form-testing-select option');
      if($ops.prop) {
        $ops.prop('selected',true);  
      } else {
        $ops.attr('selected',true);           
      }
    });

    $scenariosContainer.append($testingCaseSelect).append('<br/>').append($testingBtnSelectAll).append($testingBtnGo);
    m.ui.$controlBar.append($scenariosContainer);

  },

  initContinueTestCountdown: function() { 
    m.ui.$timerContainer = $('<div class="timer-container test-form-box" style="float:right;"></div>');
    m.ui.$timerText = $('<span>Test will proceed in </span>')      
    m.ui.$timer = $('<span class="timer" style="margin-right:5px; font-size:20px; font-weight: bold;"></span>');
    m.ui.$timerGo = $('<button>Go</button>');
    m.ui.$timerPause = $('<button>Pause timer</button>');
    m.ui.$testCancel = $('<button>Cancel Test</button>');
    m.ui.$storageClear = $('<button>Clear storage</button>');

    var go = function(){
        m.ui.$timer.html('Executing...');
        m.ui.$timerText.hide();
        m.ui.$timerGo.hide();
        m.ui.$timerPause.hide();
        m.ui.$testCancel.hide();
        m.continueTest();
    }

    m.ui.$controlBar.append(m.ui.$timerContainer);
    m.ui.$timerContainer.append(m.ui.$timerText).append(m.ui.$timer).append(m.ui.$timerGo).append(m.ui.$timerPause).append(m.ui.$testCancel).append(m.ui.$storageClear);

    var time = m.initDelay;
    var timer = window.setInterval(function(){
      if(time > 0){
        m.ui.$timer.html(time);
        time--;
      } else {
        //count down finished
        window.clearTimeout(timer);
        go();
      }
    },1000);

    m.ui.$timerGo.click(function(){
      window.clearTimeout(timer);
      go();
    });

    m.ui.$timerPause.click(function(){
      window.clearTimeout(timer);
    });

    m.ui.$testCancel.click(function(){
      window.clearTimeout(timer);
      m.ui.$timerContainer.hide();
      m.resetValues();
    });

    m.ui.$storageClear.click(function(){
      sessionStorage.clear();
    });    
  },

  resetValues: function(){
    m.data.finishingAfterThisTest = false;
    m.data.nextScenarioAfterThisTest = false;
    m.data.currentScenarioIndex = 0; 
    m.data.currentTestIndex = 0;
    m.data.nextPageAssert = false;
    m.data.results = [];
    m.data.runningTestScenarios = [];
    m.save();
  },

  save: function() {
    // save data into storage
    sessionStorage.setItem('form-test', stringify(m.data));
  },
  continueTest: function() {
    //if if not first page then increment currentTestIndex and save
    var nextTest = m.data.runningTestScenarios[m.data.currentScenarioIndex].tests[m.data.currentTestIndex];
    var nextNextTest = m.data.runningTestScenarios[m.data.currentScenarioIndex].tests[m.data.currentTestIndex + 1];
    var thisScenario = m.data.runningTestScenarios[m.data.currentScenarioIndex];
    var nextScenario = m.data.runningTestScenarios[m.data.currentScenarioIndex + 1];

    if(nextTest) {
      m.data.currentTestIndex++;
      m.finishingAfterThisTest = (nextNextTest || nextScenario) ? false : true;
      m.nextScenarioAfterThisTest = (nextNextTest || !nextScenario) ? false : true;
    } else if (nextScenario) {
      m.data.currentScenarioIndex++;
      m.data.currentTestIndex = 0;
      nextTest = m.data.runningTestScenarios[m.data.currentScenarioIndex].tests[m.data.currentTestIndex];
    }

    if(nextTest){
      m.executeTest(nextTest);
      m.save();
    } else {
      m.finish();
    }
  },

  executeTest: function(test) {
    console.log('----------------------\n\nExecuting: ' + test.desc + '...\n\n----------------------');
    m.executing = true;

    //Execute Actions
    if(test.actions && test.actions.length) {
      test.results = [];

      //THIS WILL MAKE THEM EXECUTE ONE AT A TIME EVERY SECOND

      m.actionsPrepared = [];
      var count = 0;

      $.each(test.actions, function(ind, action) {
        var func = function(test, count) {
          m.runAction(test.actions[count], test, count, function(count) {
            count++;
       console.log(count+' of '+m.actionsPrepared.length);
            window.setTimeout(function() {
              if(m.actionsPrepared[count]) {
                m.actionsPrepared[count](test, count);
              } else {
                if(m.finishingAfterThisTest){
                  m.finish();
                } else {
                  if(m.nextScenarioAfterThisTest) {
                    m.data.currentScenarioIndex++;
                    m.data.currentTestIndex = 0;
                  }
                  // var nextTest = m.data.runningTestScenarios[m.data.currentScenarioIndex].tests[m.data.currentTestIndex];
                  //m.executeTest(nextTest);
                  m.save();
                }
              }
            }, m.actionStepDelay * 1000);
          });
        }
        m.actionsPrepared.push(func);
      });

      m.actionsPrepared[0](test,count);//begin first action
    } else {
      // console.log('No actions');
    }
  },
  runAction: function(action, test, count, callback) {
    var $element = action.selector ? $(action.selector) : null;

    switch(action.type) {
      case 'load':
        window.location = action.url;
        break;

      case 'set':
        if($element.length) {
          if(action.value === true || action.value === false) {
            //if boolean, then CHECKBOX
            if($element.prop) {
              $element.prop('checked',action.value);  
            } else {
              $element.attr('checked',action.value);           
            }
          } else {
            //all other vals
            $element.val(action.value);
          }
        }
        break;

      case 'click':
        $element.click();
        break;

      case 'custom':
        action.func();
        break;

      case 'assert':
        var testResult = {
          assert: action,
          value: ''
        };

        if($element.length) {
          testResult.value = $element.html();
        } else {
          testResult.value = 'Could not find element "' + action.selector + '"';
        }
        //push into saved results
        test.results.push(testResult);
        break;
    }
    if(action.type !== 'load') {
      callback(count);      
    }
  },
  finish: function() {
    m.ui.$timer.text('Finished');
    m.printResults();
    m.resetValues();
  },
  printResults: function() {
    var $resultsWrapper = $('<div class="test-results-wrapper"><h2>Results</h2></div>');
    var $results = $('<div class="test-results" style="display:none;"></div>');
    var $resultsBtn = $('<button class="test-results-button">Show</button>');

    $.each(m.data.runningTestScenarios, function(ind, scenario) {
      var $scenario = $('<div class="test-results-scenario"><h3>Scenario '+(ind+1) + ' - '+ scenario.name + '</h3></div>');
      $.each(scenario.tests, function(ind2, test) {
        // var $test = $('<div class="test-results-test"><h4>Test '+(ind2+1) + ' - '+ test.desc + '</h4></div>');
        var $test = $('<div class="test-results-test"></div>');
        if(test.results && test.results.length) {
          $.each(test.results, function(ind3, result) {
            var print = 'Test <strong>' + (ind2+1) + '</strong>, Assert <strong>'+(ind3+1)+'</strong>: ';
            var assertVal = result.assert.value;
            var resultVal = result.value;
            if(resultVal === assertVal) {
              print += 'PASS - "' + resultVal + '"' + '\n';
            } else {
              print += 'FAIL - "' + resultVal + '", should be ' + assertVal + '\n';         
            }
            var $assert = $('<div class="test-results-assert">' + print + '</div>');
            $test.append($assert);
          });
        }
        $scenario.append($test);
      });
      $results.append($scenario);
    });
    $resultsWrapper.append($resultsBtn).append($results);
    m.ui.$controlBar.append($resultsWrapper);

    $resultsBtn.click(function(){
      $results.slideToggle();
    });
  }
};

$(document).ready(function() {
  if($('form').length) {
    m.init();  
  }
});



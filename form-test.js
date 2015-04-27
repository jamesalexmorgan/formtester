var testScenarios = [

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 0 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/


    {
        "name": "New Will Registration",
        "tests": [
             {
                "desc": "Loading test page",
                "actions": [
                        {
                            "type": "load",
                            "url": "./?a=41663?SQ_ACTION=logout"
                        }
                    ]
            },{
                "desc": "Submit page 1 - checkbox checked",
                "actions": [
                        {
                            "type": "click",
                            "selector": "#easywill-suitable"
                        },{
                            "type": "click",
                            "selector": "#imp-info-next"
                        }
                    ]
            },{
                "desc": "Create Account",
                "actions": [
                        {
                    "type": "assert",
                    "selector": "#section-header-account-details",
                    "value": "1. Account details"
      },{
                   "selector": "#user_0_419",
                   "type": "set",
                   "value": "test%globals_date_YmdH%@mailinator.com"
                  },
                  {
                   "selector": "#emailConfirm",
                   "type": "set",
                   "value": "test%globals_date_YmdH%@mailinator.com"
                  },
                  {
                   "selector": "#user_0_420_one",
                   "type": "set",
                   "value": "abc123"
                  },
                  {
                   "selector": "#user_0_420_two",
                   "type": "set",
                   "value": "abc123"
                  },
                  {
                   "selector": "#metadata_field_select_6035_accept",
                   "type": "click"
                  },
                  {
                   "type": "click",
                   "selector": "#commit-button"
                  }
                ]
            },{
                "desc": "Login Prompt",
                "actions": [
                        {
                            "type": "assert",
                "selector": "#content > div > h2",
                "value": "Thank you"
                  }
                ]
            }
        ]
    },
    {
        "name": "Login (Registration from last hour)",
        "tests": [
             {
                "desc": "Loading test page",
                "actions": [
                        {
                            "type": "load",
                            "url": "./?a=41045?SQ_ACTION=logout"
                  }
                ]
            },{
                "desc": "Loggin In",
                "actions": [
                  {
                   "type": "set",
                   "selector": "#SQ_LOGIN_USERNAME",
                   "value": "test%globals_date_YmdH%@mailinator.com"
                  },
                  {
                   "type": "set",
                   "selector": "#SQ_LOGIN_PASSWORD",
                   "value": "abc123"
                  },
                  {
                   "type": "click",
                   "selector": "#log_in_out_button"
                  }
                ]
            },{
                "desc": "Logged In Check",
                "actions": [
                        {
                            "type": "assert",
                "selector": "#logged-in-user",
                "value": "Logged in as: <strong>test%globals_date_YmdH%@mailinator.com</strong>"
                  }
                ]
            }
       ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 1 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/


    {
        "name": "Will Single no children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-single li:visible:contains('With no children (and don’t plan to have any)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Female') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains(other named persons,) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41708_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41708_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41708_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41708_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Australian Executor Trustees as sole Executor) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 2 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/


    {
        "name": "Single planning children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-single li:visible:contains('With no children (and plan to have children in the future)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "Barry"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Mathew"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Johnson"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "28"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "7"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1973"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Female') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Architect"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 Kent Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Bourke Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Surry Hills"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0488888888"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0211111111"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0433333333"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains(other named persons,) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41708_q1",
                        "value": "Averill"
                    },{
                        "type": "set",
                        "selector": "#q41708_q2",
                        "value": "Lotus"
                    },{
                        "type": "set",
                        "selector": "#q41708_q3",
                        "value": "Berny"
                    },{
                        "type": "set",
                        "selector": "#q41708_q4",
                        "value": "daughter"
                    },{
                        "type": "click",
                        "selector": "input#btn-beneficiaries-named-persons"
                    },{
                        "type": "set",
                        "selector": "#q41709_q1",
                        "value": "Clint"
                    },{
                        "type": "set",
                        "selector": "#q41709_q2",
                        "value": "Fulton"
                    },{
                        "type": "set",
                        "selector": "#q41709_q3",
                        "value": "Konnor"
                    },{
                        "type": "set",
                        "selector": "#q41709_q4",
                        "value": "son"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(Yes) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41756_q1",
                        "value": "ActionAid Australia"
                    },{
                        "type": "set",
                        "selector": "#q41756_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Australian Executor Trustees with another person) a"
                    },{
                        "type": "set",
                        "selector": "#q41768_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41768_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41768_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41768_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41768_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41768_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41768_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41768_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41768_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41768_q11",
                        "value": "2000"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list > ul > li:visible:contains(Yes) > span a"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-section-instructions ul > li:visible:contains(buried) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 3 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "Single under 18 children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-single li:visible:contains('With children (and some or all are under 18 years of age)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "Barry"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Mathew"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Johnson"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "28"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "7"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1973"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Architect"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 Kent Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Bourke Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Surry Hills"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0488888888"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0211111111"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0433333333"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('In equal parts to my children and if none live to survive me then to my grandchildren in equal shares') > span a"
                    },{
                        "type": "click",
                        "selector": "#children-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(Yes) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41756_q1",
                        "value": "Aboriginal Children's Advancement Society"
                    },{
                        "type": "set",
                        "selector": "#q41756_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41757_q1",
                        "value": "ActionAid Australia"
                    },{
                        "type": "set",
                        "selector": "#q41757_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41758_q1",
                        "value": "ADRA Australia Ltd"
                    },{
                        "type": "set",
                        "selector": "#q41758_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41759_q1",
                        "value": "AFFIRM - Australian Foundation for Mental Health Research"
                    },{
                        "type": "set",
                        "selector": "#q41759_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41760_q1",
                        "value": "Ageing & Alzheimer's Research Foundation"
                    },{
                        "type": "set",
                        "selector": "#q41760_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41761_q1",
                        "value": "Aid to the Church in Need"
                    },{
                        "type": "set",
                        "selector": "#q41761_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41762_q1",
                        "value": "Aids Trust Of Australia"
                    },{
                        "type": "set",
                        "selector": "#q41762_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41763_q1",
                        "value": "Alkira Centre"
                    },{
                        "type": "set",
                        "selector": "#q41763_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41764_q1",
                        "value": "Alzheimer's Australia"
                    },{
                        "type": "set",
                        "selector": "#q41764_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "#btn-charity-gifts"
                    },{
                        "type": "set",
                        "selector": "#q41765_q1",
                        "value": "Alzheimer's Australia NSW"
                    },{
                        "type": "set",
                        "selector": "#q41765_q2",
                        "value": "1200"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Children and guardians",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "7. Children and guardians"
                    },{
                        "type": "click",
                        "selector": "#guardian-option-list > ul > li:visible:contains(No) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Two people) a"
                    },{
                        "type": "set",
                        "selector": "#q41768_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41768_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41768_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41768_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41768_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41768_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41768_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41768_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41768_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41768_q11",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41769_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41769_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41769_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41769_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41769_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41769_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41769_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41769_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41769_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41769_q11",
                        "value": "2000"
                    },{                            
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 4 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/


    {
        "name": "Single over 18 children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-single li:visible:contains('With children (all aged over 18 years)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Female') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 James Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('In equal parts to my children and if none live to survive me then to one person') > span a"
                    },{
                        "type": "click",
                        "selector": "#children-option-list ul > li:visible:contains(Yes) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41698_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41698_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41698_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41698_q4",
                        "value": "daughter of both of us"
                    },{
                        "type": "set",
                        "selector": "#q41708_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41708_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41708_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41708_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Australian Executor Trustees as sole Executor) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 5 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/


    {
        "name": "De facto no children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-de-facto li:visible:contains('With no children (and don’t plan to have any)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('No, I do not want a duplicate Will') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('other named persons, in equal shares (e.g. a parent, a sibling, etc.)') > span a"
                    },{
                        "type": "set",
                        "selector": "#q41708_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41708_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41708_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41708_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "input#btn-beneficiaries-named-persons"
                    },{
                        "type": "set",
                        "selector": "#q41709_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41709_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41709_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41709_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "input#btn-beneficiaries-named-persons"
                    },{
                        "type": "set",
                        "selector": "#q41710_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41710_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41710_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41710_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "input#btn-beneficiaries-named-persons"
                    },{
                        "type": "set",
                        "selector": "#q41711_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41711_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41711_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41711_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(My partner with Australian Executor Trustees) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },        

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 6 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/


    {
        "name": "De facto planning children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-de-facto li:visible:contains('With no children (and plan to have children in the future)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]

            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('Yes, my spouse/partner would like me to purchase a duplicate Will for them') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Female') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('a group of people in equal shares (e.g. brothers, sisters, etc.)') > span a"
                    },{
                        "type": "set",
                        "selector": "#q41733_q1",
                        "value": "my wife's children"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(My partner with another person) a"
                    },{


                        "type": "set",
                        "selector": "#q41768_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41768_q2",
                        "value": "Barry"
                    },{
                        "type": "set",
                        "selector": "#q41768_q3",
                        "value": "Mathew"
                    },{
                        "type": "set",
                        "selector": "#q41768_q4",
                        "value": "Johnson"
                    },{
                        "type": "set",
                        "selector": "#q41768_q5",
                        "value": "friend"
                    },{
                        "type": "set",
                        "selector": "#q41768_q7",
                        "value": "123 Bourke Street"
                    },{
                        "type": "set",
                        "selector": "#q41768_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41768_q9",
                        "value": "Surry Hills"
                    },{
                        "type": "set",
                        "selector": "#q41768_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41768_q11",
                        "value": "2017"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 7 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "De Facto under 18 children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-de-facto li:visible:contains('With children (and some or all are under 18 years of age)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]

            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('No, I do not want a duplicate Will') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('In equal parts to my children and if none live to survive me then in equal parts to other named persons (e.g. a parent, a sibling, etc.)') > span a"
                    },{
                        "type": "click",
                        "selector": "#children-option-list li:visible:contains('No') a"
                    },{
                        "type": "set",
                        "selector": "#q41708_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41708_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41708_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41708_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "input#btn-beneficiaries-named-persons"
                    },{
                        "type": "set",
                        "selector": "#q41709_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41709_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41709_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41709_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Guardians",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "7. Children and guardians"
                    },{
                        "type": "click",
                        "selector": "#guardian-option-list > ul > li:visible:contains(Yes) a"
                    },{
                        "type": "set",
                        "selector": "#q41766_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41766_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41766_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41766_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41766_q5",
                        "value": "cousin"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]          
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Two people) a"
                    },{
                        "type": "set",
                        "selector": "#q41768_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41768_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41768_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41768_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41768_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41768_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41768_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41768_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41768_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41768_q11",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41769_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41769_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41769_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41769_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41769_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41769_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41769_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41769_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41769_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41769_q11",
                        "value": "2000"
                    },{                            
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 8 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "De Facto over 18 children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-de-facto li:visible:contains('With children (all aged over 18 years)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]

            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('No, I do not want a duplicate Will') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Female') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('In equal parts to my children and if none live to survive me then to a group of people in equal shares (e.g. brothers, sisters)') > span a"
                    },{
                        "type": "click",
                        "selector": "#children-option-list ul > li:visible:contains('Yes') > span a"
                    },{
                        "type": "set",
                        "selector": "#q41698_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41698_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41698_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41698_q4",
                        "value": "son of both of us"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-children"
                    },{
                        "type": "set",
                        "selector": "#q41699_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41699_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41699_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41699_q4",
                        "value": "daughter of both of us"                            

                    },{
                        "type": "set",
                        "selector": "#q41733_q1",
                        "value": "my brothers"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41734_q1",
                        "value": "my brothers-in-law"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41735_q1",
                        "value": "my brothers and sisters"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41736_q1",
                        "value": "my brothers-in-law and sisters-in-law"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41737_q1",
                        "value": "my grandchildren"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41738_q1",
                        "value": "my granddaughters"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41739_q1",
                        "value": "my grandsons"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41740_q1",
                        "value": "my husband's children"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41741_q1",
                        "value": "my husband's daughters"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-groups"
                    },{
                        "type": "set",
                        "selector": "#q41742_q1",
                        "value": "my husband's nephews"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Australian Executor Trustees as sole Executor) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 9 ********************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "Married no children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-married li:visible:contains('With no children (and don’t plan to have any)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]

            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('No, I do not want a duplicate Will') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41061_q22",
                        "value": "Wife"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('one or more charities in equal shares') > span a"
                    },{
                        "type": "set",
                        "selector": "#q41746_q1",
                        "value": "Aboriginal Children's Advancement Society"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41747_q1",
                        "value": "ActionAid Australia"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41748_q1",
                        "value": "ADRA Australia Ltd"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41749_q1",
                        "value": "AFFIRM - Australian Foundation for Mental Health Research"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41750_q1",
                        "value": "Ageing & Alzheimer's Research Foundation"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41751_q1",
                        "value": "Aid to the Church in Need"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41752_q1",
                        "value": "Aids Trust Of Australia"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41753_q1",
                        "value": "Alkira Centre"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41754_q1",
                        "value": "Alzheimer's Australia"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-charities"
                    },{
                        "type": "set",
                        "selector": "#q41755_q1",
                        "value": "Alzheimer's Australia NSW"
                    },{                            
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(My spouse with Australian Executor Trustees) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 10 *******************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "Married planning children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-married li:visible:contains('With no children (and plan to have children in the future)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]

            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('Yes, my spouse/partner would like me to purchase a duplicate Will for them') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41061_q22",
                        "value": "Wife"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('then in equal parts to other persons') > span a"
                    },{
                        "type": "set",
                        "selector": "#q41708_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41708_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41708_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41708_q4",
                        "value": "aunt"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41709_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41709_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41709_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41709_q4",
                        "value": "brother"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41710_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41710_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41710_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41710_q4",
                        "value": "brother-in-law"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41711_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41711_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41711_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41711_q4",
                        "value": "cousin"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41712_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41712_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41712_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41712_q4",
                        "value": "daughter"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41713_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41713_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41713_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41713_q4",
                        "value": "daughter-in-law"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41714_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41714_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41714_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41714_q4",
                        "value": "father"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41715_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41715_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41715_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41715_q4",
                        "value": "father-in-law"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41716_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41716_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41716_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41716_q4",
                        "value": "friend"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "set",
                        "selector": "#q41717_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41717_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41717_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41717_q4",
                        "value": "goddaughter"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-persons"

                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(My spouse with another person) a"
                    },{


                        "type": "set",
                        "selector": "#q41768_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41768_q2",
                        "value": "Barry"
                    },{
                        "type": "set",
                        "selector": "#q41768_q3",
                        "value": "Mathew"
                    },{
                        "type": "set",
                        "selector": "#q41768_q4",
                        "value": "Johnson"
                    },{
                        "type": "set",
                        "selector": "#q41768_q5",
                        "value": "friend"
                    },{
                        "type": "set",
                        "selector": "#q41768_q7",
                        "value": "123 Bourke Street"
                    },{
                        "type": "set",
                        "selector": "#q41768_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41768_q9",
                        "value": "Surry Hills"
                    },{
                        "type": "set",
                        "selector": "#q41768_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41768_q11",
                        "value": "2017"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 11 *******************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "Married under 18 children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-married li:visible:contains('With children (and some or all are under 18 years of age)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]

            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('No, I do not want a duplicate Will') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Female') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41061_q22",
                        "value": "Wife"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('In equal parts to my children and if none live to survive me then to one or more charities in equal shares.') > span a"
                    },{
                        "type": "click",
                        "selector": "#children-option-list ul > li:visible:contains(Yes) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41698_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41698_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41698_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41698_q4",
                        "value": "daughter of both of us"
                    },{
                        "type": "set",
                        "selector": "#q41746_q1",
                        "value": "AFFIRM - Australian Foundation for Mental Health Research"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Guardians",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "7. Children and guardians"
                    },{
                        "type": "click",
                        "selector": "#guardian-option-list > ul > li:visible:contains(Yes) a"
                    },{
                        "type": "set",
                        "selector": "#q41766_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41766_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41766_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41766_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41766_q5",
                        "value": "cousin"
                    },{
                        "type": "click",
                        "selector": "#btn-add-guardian-names"
                    },{
                        "type": "set",
                        "selector": "#q41767_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41767_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41767_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41767_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41767_q5",
                        "value": "cousin"                            
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]                       
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Two people) a"
                    },{
                        "type": "set",
                        "selector": "#q41768_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41768_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41768_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41768_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41768_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41768_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41768_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41768_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41768_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41768_q11",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41769_q1",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41769_q2",
                        "value": "Brad"
                    },{
                        "type": "set",
                        "selector": "#q41769_q3",
                        "value": "Brody"
                    },{
                        "type": "set",
                        "selector": "#q41769_q4",
                        "value": "Burke"
                    },{
                        "type": "set",
                        "selector": "#q41769_q5",
                        "value": "cousin"
                    },{
                        "type": "set",
                        "selector": "#q41769_q7",
                        "value": "42 Walloughby Way"
                    },{
                        "type": "set",
                        "selector": "#q41769_q8",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41769_q9",
                        "value": "Pyrmont"
                    },{
                        "type": "set",
                        "selector": "#q41769_q10",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41769_q11",
                        "value": "2000"
                    },{                            
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    },

    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/
    /**************** Scenario 12 *******************/
    /************************************************/
    /************************************************/
    /************************************************/
    /************************************************/

    {
        "name": "Married over 18 children",
        "tests": [
            {
                "desc": "Loading test page",
                "actions": [
                    {
                        "type": "load",
                        "url": "./?a=41045"
                    }
                ]
            },{
                "desc": "Family situation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "1. Family situation"
                    },{
                        "type": "click",
                        "selector": "#family-situation-married li:visible:contains('With children (all aged over 18 years)') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Duplicate will",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "2. Duplicate will"
                    },{                            
                        "type": "click",
                        "selector": "#duplicate-will-option-list li:visible:contains('No, I do not want a duplicate Will') a"
                    },{
                        "type": "click",
                        "selector": "#form_email_41046_submit span span" //for some reason, needs to click on inner span
                    }
                ]
            },{                    
                "desc": "Personal details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "3. Personal details"
                    },{
                        "type": "set",
                        "selector": "#q41048_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41048_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41048_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41048_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41048_q23_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41048_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41691_q6",
                        "value": "123 George Street"
                    },{
                        "type": "set",
                        "selector": "#q41048_q7",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41048_q8",
                        "value": "Sydney"
                    },{
                        "type": "set",
                        "selector": "#q41048_q9",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41691_q10",
                        "value": "2000"
                    },{
                        "type": "set",
                        "selector": "#q41692_q3",
                        "value": "123 Crown Street"
                    },{
                        "type": "set",
                        "selector": "#q41692_q4",
                        "value": ""
                    },{
                        "type": "set",
                        "selector": "#q41692_q5",
                        "value": "Waterloo"
                    },{
                        "type": "set",
                        "selector": "#q41692_q6",
                        "value": "NSW"
                    },{
                        "type": "set",
                        "selector": "#q41692_q7",
                        "value": "2017"
                    },{
                        "type": "set",
                        "selector": "#q41693_q1",
                        "value": "0412345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q2",
                        "value": "0212345678"
                    },{
                        "type": "set",
                        "selector": "#q41693_q3",
                        "value": "0487654321"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{                    
                "desc": "Spouse/partner details",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "4. Spouse/partner details"
                    },{
                        "type": "set",
                        "selector": "#q41061_q16",
                        "value": "Mr"
                    },{
                        "type": "set",
                        "selector": "#q41061_q17",
                        "value": "John"
                    },{
                        "type": "set",
                        "selector": "#q41061_q18",
                        "value": "Alexander"
                    },{
                        "type": "set",
                        "selector": "#q41061_q19",
                        "value": "Smith"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_d",
                        "value": "4"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_m",
                        "value": "2"
                    },{
                        "type": "set",
                        "selector": "#q41061_q20_value_y",
                        "value": "1982"
                    },{
                        "type": "click",
                        "selector": "#gender-select-wrapper li:visible:contains('Male') a"
                    },{
                        "type": "set",
                        "selector": "#q41061_q21",
                        "value": "Web Developer"
                    },{
                        "type": "set",
                        "selector": "#q41061_q22",
                        "value": "Wife"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                 ]
            },{
                "desc": "Beneficiaries",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "5. Beneficiaries"
                    },{
                        "type": "click",
                        "selector": "#beneficiaries-option-list ul > li:visible:contains('In equal parts to my children and if none live to survive me then to my grandchildren in equal shares') > span a"
                    },{
                        "type": "click",
                        "selector": "#children-option-list ul > li:visible:contains(Yes) > span a"
                    },{
                        "type": "set",
                        "selector": "#q41698_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41698_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41698_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41698_q4",
                        "value": "daughter of both of us"
                    },{
                        "type": "click",
                        "selector": "#btn-beneficiaries-named-children"
                    },{                            
                        "type": "set",
                        "selector": "#q41699_q1",
                        "value": "Bill"
                    },{
                        "type": "set",
                        "selector": "#q41699_q2",
                        "value": "Harry"
                    },{
                        "type": "set",
                        "selector": "#q41699_q3",
                        "value": "Jones"
                    },{
                        "type": "set",
                        "selector": "#q41699_q4",
                        "value": "daughter of both of us"                            
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Charity",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "6. Gift to charity"
                    },{
                        "type": "click",
                        "selector": "#charity-option-list > ul > li:visible:contains(No) > span a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Executors",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "8. Executors"
                    },{
                        "type": "click",
                        "selector": "#executor-option-list li:visible:contains(Australian Executor Trustees as sole Executor) a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Funeral",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#will-progress-steps h2.current",
                        "value": "9. Funeral options"
                    },{
                        "type": "click",
                        "selector": "#funeral-option-list li:visible:contains('No') a"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Confirmation",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Confirmation"
                    },{
                        "type": "click",
                        "selector": "button#form_email_41046_submit"
                    }
                ]
            },{
                "desc": "Payment",
                "actions": [
                    {
                        "type": "assert",
                        "selector": "#tabs-will-progress .current > span > span",
                        "value": "Payment"
                    },
                    {
                        "type": "custom",
                        "func": function(){
                            var val = $('input[name="SQ_LOGIN_REFERER"]').val();
                            var matches = val.match(/[\d]+(?=\&form_id)/g);
                            if(matches){
                              var pdfId = parseInt(matches[0],10) + 1;
                              window.open('./?a=41045?a=' + pdfId, '_blank');
                            }
                        }
                    }
                ]
            }
        ]
    }        
];



$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginUser.feature");
formatter.feature({
  "line": 2,
  "name": "User login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "The user registers in the portal",
  "description": "",
  "id": "user-login;the-user-registers-in-the-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the customer is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click sig in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter the email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click the create an account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click title \u003ctitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "put firstname \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "put lastname \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "put password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select day \u003cday\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select month \u003cmonth\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select year \u003cyear\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "put address \u003caddress\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "put city \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select state \u003cstate\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "put postal \u003cpostal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select country \u003ccountry\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "put mobilephone \u003cphone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "put alias \u003calias\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click register",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "log out with new user \u003cfirstname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "user-login;the-user-registers-in-the-portal;",
  "rows": [
    {
      "cells": [
        "email",
        "title",
        "firstname",
        "lastname",
        "password",
        "day",
        "month",
        "year",
        "address",
        "city",
        "state",
        "postal",
        "country",
        "phone",
        "alias"
      ],
      "line": 30,
      "id": "user-login;the-user-registers-in-the-portal;;1"
    },
    {
      "cells": [
        "dd@doritos.com.pe",
        "Mr.",
        "christian",
        "mujica",
        "12345",
        "18",
        "4",
        "1979",
        "jr. bb 324",
        "lima",
        "Florida",
        "00001",
        "United States",
        "945451241",
        "near to home"
      ],
      "line": 31,
      "id": "user-login;the-user-registers-in-the-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "The user registers in the portal",
  "description": "",
  "id": "user-login;the-user-registers-in-the-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ValidLogin"
    },
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the customer is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click sig in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter the email dd@doritos.com.pe",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click the create an account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click title Mr.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "put firstname christian",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "put lastname mujica",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "put password 12345",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select day 18",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select month 4",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select year 1979",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "put address jr. bb 324",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "put city lima",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select state Florida",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "put postal 00001",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select country United States",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "put mobilephone 945451241",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "put alias near to home",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click register",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "log out with new user christian",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUserSteps.elClienteSeEncuentraEnLaPaginaDeBusqueda()"
});
formatter.result({
  "duration": 10186410875,
  "status": "passed"
});
formatter.match({
  "location": "LoginUserSteps.theCustomerClickTheLoginButton()"
});
formatter.result({
  "duration": 3580390167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dd@doritos.com.pe",
      "offset": 16
    }
  ],
  "location": "LoginUserSteps.enterUserUser(String)"
});
formatter.result({
  "duration": 2337484042,
  "status": "passed"
});
formatter.match({
  "location": "LoginUserSteps.pageShowsProductTitle()"
});
formatter.result({
  "duration": 2186887292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 12
    }
  ],
  "location": "LoginUserSteps.theCustomerADDTOCARTOfTheProductProduct(String)"
});
formatter.result({
  "duration": 2695970792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "christian",
      "offset": 14
    }
  ],
  "location": "LoginUserSteps.putfirstname(String)"
});
formatter.result({
  "duration": 2214652875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mujica",
      "offset": 13
    }
  ],
  "location": "LoginUserSteps.lastname(String)"
});
formatter.result({
  "duration": 2222046791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 13
    }
  ],
  "location": "LoginUserSteps.password(String)"
});
formatter.result({
  "duration": 2142533333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 11
    }
  ],
  "location": "LoginUserSteps.selectday(String)"
});
formatter.result({
  "duration": 1167896458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 13
    }
  ],
  "location": "LoginUserSteps.selectmonth(String)"
});
formatter.result({
  "duration": 1099049708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1979",
      "offset": 12
    }
  ],
  "location": "LoginUserSteps.selectyear(String)"
});
formatter.result({
  "duration": 1150594333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jr. bb 324",
      "offset": 12
    }
  ],
  "location": "LoginUserSteps.putaddress(String)"
});
formatter.result({
  "duration": 1390629083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lima",
      "offset": 9
    }
  ],
  "location": "LoginUserSteps.putcity(String)"
});
formatter.result({
  "duration": 1150787750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Florida",
      "offset": 13
    }
  ],
  "location": "LoginUserSteps.selectstate(String)"
});
formatter.result({
  "duration": 1112960959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00001",
      "offset": 11
    }
  ],
  "location": "LoginUserSteps.putpostal(String)"
});
formatter.result({
  "duration": 1176545750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 15
    }
  ],
  "location": "LoginUserSteps.selectcountry(String)"
});
formatter.result({
  "duration": 1070632459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "945451241",
      "offset": 16
    }
  ],
  "location": "LoginUserSteps.selectmobile(String)"
});
formatter.result({
  "duration": 1143867875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "near to home",
      "offset": 10
    }
  ],
  "location": "LoginUserSteps.selectalias(String)"
});
formatter.result({
  "duration": 4505160416,
  "status": "passed"
});
formatter.match({
  "location": "LoginUserSteps.clickregister()"
});
formatter.result({
  "duration": 3709357958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "christian",
      "offset": 22
    }
  ],
  "location": "LoginUserSteps.logoutwithnewuser(String)"
});
formatter.result({
  "duration": 121163209,
  "status": "passed"
});
formatter.after({
  "duration": 84031625,
  "status": "passed"
});
});
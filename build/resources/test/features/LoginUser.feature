@SmokeTest
Feature:  User login

  @ValidLogin
  Scenario Outline: The user registers in the portal

    Given the customer is on the main page
    When click sig in
    And enter the email <email>
    And click the create an account
    And click title <title>
    And put firstname <firstname>
    And put lastname <lastname>
    And put password <password>
    And select day <day>
    And select month <month>
    And select year <year>
    And put address <address>
    And put city <city>
    And select state <state>
    And put postal <postal>
    And select country <country>
    And put mobilephone <phone>
    And put alias <alias>
    And click register
    Then log out with new user <firstname>


    Examples:
      | email             | title | firstname | lastname | password | day | month | year | address    | city | state   | postal | country       | phone     | alias        |
      | dd@doritos.com.pe | Mr.   | christian | mujica   | 12345    | 18  | 4     | 1979 | jr. bb 324 | lima | Florida | 00001  | United States | 945451241 | near to home |


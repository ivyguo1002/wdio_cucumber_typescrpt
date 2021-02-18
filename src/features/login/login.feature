@login
Feature: login
As a bank manager, I should be able to log in to the bank website.

Background: 
    Given the browser is on login page
Scenario: log in with valid credential
    Given the manager has been registered in the bank
    When the manager logs in with "valid" username and password
    Then the manager should be navigated to home page
    And the manager should see the welcome message

Scenario: log in with invalid credential
    Given the manager has been registered in the bank
    When the manager logs in with "invalid" username and password
    Then alert message should pop up

@regression
Scenario Outline: log in with wrong username and password
    When the manager log in with "<username>" and "<password>"
    Then alert message should pop up

    Examples:
      | username           | password   |
      | 123_dev@gmail.com  | random     |
      | 345_int@gmail.com  | random     |



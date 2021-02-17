Feature: login
As a bank manager, I should be able to log in to the bank website.

Scenario: log in with valid credential
    Given the manager has been registered in the bank
    When the manager logs in with valid username and password
    Then the manager logs in with valid username and password
    And the manager should see the welcome message





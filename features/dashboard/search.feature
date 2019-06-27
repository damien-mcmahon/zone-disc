Feature: Dashboard 
  Scenario: Searching shows some results
    Given I am on the dashboard
    When I search for "er"
    Then I should see a list of results

  Scenario: Empty Search results
    Given I am on the dashboard
    When I search for "sdewe"
    Then I should see a message saying "Nothing Found"
    Given when I click on the message
    Then the results list disappears
@VodafonePrepay
Feature: My Vodafone Prepay customer journeys.
  As a tester
  I want to log in to My Vodafone.

  Scenario: Logged in prepay user and navigate to international calling page to update status
    Given I open Vodafone login page
    When I log in with an "prepay_voice" msisdn and "Password"
    Then I navigate to International Calling page
    Then I change my existing International Calling settings
    Then I save the International Calling settings
    Then I should see my updated International Calling settings status
    Then I logout

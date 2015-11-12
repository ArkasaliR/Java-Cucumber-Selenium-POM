@VodafonePostpay
Feature: My Vodafone Postpay customer journeys.
  As a tester
  I want to log in to My Vodafone.

  Scenario: I should be able to update the Direct Debit details from bank account to Credit card then cancel the Direct Debit
    Given I open Vodafone login page
    When I log in with "postpay_complex" msisdn and "Password"
    When I navigate to Bills & Payments Page
    Then I enter a valid pin and submit
    Then I select Setup Direct Debit option
    Then I select the Credit Card option for Direct Debit
    Then I enter the credit card details
    Then I submit request
    Then I should see the setup success message
    Then I navigate to Bills & Payments Page
    Then I select Manage Direct Debit option
    Then I select Cancel Direct Debit option
    Then I should see the cancellation success message
    Then I logout

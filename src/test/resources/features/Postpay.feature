@VodafonePostpay
Feature: My Vodafone Postpay customer journeys.
  As a tester
  I want to log in to My Vodafone.

  Scenario: As a vodafone customer I want to login with going to WSSA/AAA first
    Given I open Vodafone login page
    When I log in with a valid "postpay_simple" msisdn and "Password"
    Then I am directed to My usage page
    Then I should see "Vodafone" as my service plan
    Then I logout

  Scenario: As a postpay complex customer I want to purchase data addons
    Given I open Vodafone login page
    When I log in with a "postpay_complex_new" msisdn and "Password"
    When I navigate to the My addons page
    When I select Add Data
    When I select the my "$ 10 /month 1GB" add-on to purchase
    Then I should see Review "$10 1GB Data Add-on Month to Month" addon page details
    Then I Agree to the terms and conditions
    Then I press the cancel button
    Then I logout

  Scenario: Display the data the days left as per the entitlements on the Data usage dials
    Given I open Vodafone login page
    When I log in with a valid "postpay_simple" msisdn and "Password"
    Then I should retrieve my entitlements
    Then I follow Data Usage
    Then I should see data usage dials
    Then I logout

  Scenario: As a postpay user I want to view my usage details
    Given I open Vodafone login page
    When I log in with a valid "postpay_simple" msisdn and "Password"
    Then I follow Data Usage
    Then I follow All Usage
    Then I should see "Vodafone" as my service plan
    Then I logout

  Scenario: Logged in postpay complex user navigate to to international calling page to update status
    Given I open Vodafone login page
    When I log in with "postpay_complex" msisdn and "Password"
    When I navigate to Account settings page
    When I navigate to the International Calling page
    When I enter a valid pin and submit
    Then I change my International Calling settings
    Then I logout

  Scenario: As a simple customer I want to change my vodafone alert
    Given I open Vodafone login page
    When I log in with a valid "postpay_simple" msisdn and "Password"
    When I navigate to the Vodafone Alerts page from the My usage page
    Then I change my Vodafone Alerts settings
    Then I logout

  Scenario: Postpay complex user should be able to submit a proof of purchase request
    Given I open Vodafone login page
    When I log in with "postpay_complex" msisdn and "Password"
    When I navigate to Account settings page
    When I navigate to Proof of purchase page
    When I enter a valid pin and submit
    Then I should see Proof of purchase as my page title
    Then I fill the form to request proof of purchase
    Then I select secondary number
    Then I submit proof of purchase request
    Then I should see proof of purchase confirmation page
    Then I logout

  Scenario: I should be able to setup the Direct Debit with bank account view the saved Direct Debit details
    Given I open Vodafone login page
    When I log in with "postpay_complex" msisdn and "Password"
    Then I navigate to Bills & Payments Page
    Then I enter a valid pin and submit
    Then I select Setup Direct Debit option
    Then I select the Bank Account option for Direct Debit
    Then I enter the bank account details
    Then I submit the request
    Then I should see the setup success message
    Then I navigate to Bills & Payments Page
    Then I select Manage Direct Debit option
    Then I select Cancel Direct Debit option
    Then I should see the cancellation success message
    Then I logout

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
    
    

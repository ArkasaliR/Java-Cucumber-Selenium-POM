package step_definitions;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.DataHelper;
import pageobjects.AccountSettings;
import pageobjects.BillPayments;
import pageobjects.HomePage;
import pageobjects.LoginPage;

public class Postpay_steps {
	public WebDriver driver;

	public Postpay_steps() throws Exception {
		driver = Hooks.driver;
		PageFactory.initElements(driver, LoginPage.class);
		PageFactory.initElements(driver, HomePage.class);
		PageFactory.initElements(driver, BillPayments.class);
		PageFactory.initElements(driver, AccountSettings.class);
	}

	@Given("^I open Vodafone login page$")
	public void i_open_Vodafone_login_page() {
		driver.get(DataHelper.getAppURL("production"));
	}

	@When("^I log in with a valid \"([^\"]*)\" msisdn and \"([^\"]*)\"$")
	public void i_log_in_with_a_valid_msisdn_and(String arg1, String arg2) throws Throwable {
		String username = DataHelper.getData("postpay_simple", "username");
		String password = DataHelper.getData("postpay_simple", "password");
		LoginPage.username.sendKeys(username);
		LoginPage.password.sendKeys(password);
		LoginPage.signin_button.click();

	}

	@Then("^I capture screenshot$")
	public void i_capture_screenshot() throws Throwable {
		DataHelper.takeScreenshot(driver);

	}

	@Then("^I am directed to My usage page$")
	public void i_am_directed_to_My_usage_page() {
		HomePage.my_usage.getText();
	}

	@Then("^I should see \"([^\"]*)\" as my service plan$")
	public void i_should_see_as_my_service_plan(String arg1) {
		HomePage.vodafone.getText();
	}

	@Then("^I logout$")
	public void i_logout() {
		HomePage.sign_out.click();
	}

	@When("^I log in with a \"([^\"]*)\" msisdn and \"([^\"]*)\"$")
	public void i_log_in_with_a_msisdn_and(String arg1, String arg2) throws Throwable {
		String username = DataHelper.getData("postpay_complex_new", "username");
		String password = DataHelper.getData("postpay_complex_new", "password");
		LoginPage.username.sendKeys(username);
		LoginPage.password.sendKeys(password);
		LoginPage.signin_button.click();
	}

	@When("^I navigate to the My addons page$")
	public void i_navigate_to_the_My_addons_page() {
		HomePage.view_and_bug_add_ons.click();
	}

	@When("^I select Add Data$")
	public void i_select_Add_Data() {
		HomePage.add_data_again.click();
	}

	@When("^I select the my \"([^\"]*)\" add-on to purchase$")
	public void i_select_the_my_add_on_to_purchase(String arg1) {
		HomePage.addons_carousel_product_cost.click();
	}

	@Then("^I should see Review \"([^\"]*)\" addon page details$")
	public void i_should_see_Review_addon_page_details(String arg1) {
		HomePage.offer.getText();
	}

	@Then("^I Agree to the terms and conditions$")
	public void i_Agree_to_the_terms_and_conditions() {
		HomePage.buy_addon.click();
		HomePage.add_ons_terms_and_conditions.click();
	}

	@Then("^I press the cancel button$")
	public void i_press_the_cancel_button() {
		HomePage.cancel_purchase_addon.click();
	}

	@Then("^I should retrieve my entitlements$")
	public void i_should_retrieve_my_entitlements() {
		HomePage.entitlements.getText();
	}

	@When("^I follow Data Usage$")
	public void i_follow_Data_Usage() {
		HomePage.view_data_usage.click();

	}

	@Then("^I should see data usage dials$")
	public void i_should_see_data_usage_dials() {
		HomePage.data_usage.getText();

	}

	@When("^I navigate to Bills & Payments Page$")
	public void i_navigate_to_Bills_Payments_Page() {
		BillPayments.bill_payment.click();
	}

	@Then("^I select Setup Direct Debit option$")
	public void i_select_Setup_Direct_Debit_option() {
		BillPayments.setup_direct_debit.click();
	}

	@Then("^I select the Bank Account option for Direct Debit$")
	public void i_select_the_Bank_Account_option_for_Direct_Debit() {
		BillPayments.bank_account.click();
	}

	@Then("^I enter the bank account details$")
	public void i_enter_the_bank_account_details() throws IOException {
		String BSB = DataHelper.getData("postpay_complex_new", "BSB");
		String ACCOUNT_NUMBER = DataHelper.getData("postpay_complex_new", "ACCOUNT NUMBER");
		String ACCOUNT_NAME = DataHelper.getData("postpay_complex_new", "ACCOUNT NAME");
		BillPayments.BSB.sendKeys(BSB);
		BillPayments.account_number.sendKeys(ACCOUNT_NUMBER);
		BillPayments.account_name.sendKeys(ACCOUNT_NAME);

	}

	@Then("^I submit the request$")
	public void i_submit_the_request() {
		BillPayments.TnC_bank.click();
		BillPayments.submit_request.click();

	}

	@Then("^I should see the setup success message$")
	public void i_should_see_the_setup_success_message() {
		BillPayments.success_message.getText();

	}

	@Then("^I select Manage Direct Debit option$")
	public void i_select_Manage_Direct_Debit_option() {
		BillPayments.manage_direct_debit.click();

	}

	@Then("^I select Cancel Direct Debit option$")
	public void i_select_Cancel_Direct_Debit_option() {
		BillPayments.cancel_direct_debit.click();
		BillPayments.cancel_debit.click();

	}

	@Then("^I should see the cancellation success message$")
	public void i_should_see_the_cancellation_success_message() {
		BillPayments.cancel_message.getText();

	}

	@Then("^I follow All Usage$")
	public void i_follow_All_Usage() {
		HomePage.view_all_usage.click();

	}

	@When("^I log in with \"([^\"]*)\" msisdn and \"([^\"]*)\"$")
	public void i_log_in_with_msisdn_and(String arg1, String arg2) throws Throwable {
		String username = DataHelper.getData("postpay_complex", "username");
		String password = DataHelper.getData("postpay_complex", "password");
		LoginPage.username.sendKeys(username);
		LoginPage.password.sendKeys(password);
		LoginPage.signin_button.click();

	}

	@When("^I navigate to Account settings page$")
	public void i_navigate_to_Account_settings_page() {
		AccountSettings.account_settings.click();

	}

	@When("^I navigate to the International Calling page$")
	public void i_navigate_to_the_International_Calling_page() {
		AccountSettings.international_calling.click();

	}

	@When("^I enter a valid pin and submit$")
	public void i_enter_a_valid_pin_and_submit() throws Throwable {
		String pin = DataHelper.getData("postpay_complex", "pin");
		AccountSettings.pin.sendKeys(pin);
		AccountSettings.next.click();

	}

	@Then("^I change my International Calling settings$")
	public void i_change_my_International_Calling_settings() {
		DataHelper.waitForPageToLoad(driver);
		AccountSettings.change_status.click();

	}

	@When("^I navigate to the Vodafone Alerts page from the My usage page$")
	public void i_navigate_to_the_Vodafone_Alerts_page_from_the_My_usage_page() {
		HomePage.vodafone_alerts.click();

	}

	@Then("^I change my Vodafone Alerts settings$")
	public void i_change_my_Vodafone_Alerts_settings() {
		DataHelper.waitForPageToLoad(driver);
		HomePage.alert_status.click();

	}

	@When("^I navigate to Proof of purchase page$")
	public void i_navigate_to_Proof_of_purchase_page() {
		AccountSettings.proof_of_purchase.click();

	}

	@Then("^I should see Proof of purchase as my page title$")
	public void i_should_see_Proof_of_purchase_as_my_page_title() {
		AccountSettings.purchase.getText();

	}

	@Then("^I fill the form to request proof of purchase$")
	public void i_fill_the_form_to_request_proof_of_purchase() throws Throwable {
		String Name = DataHelper.getData("postpay_complex", "Name");
		String Email = DataHelper.getData("postpay_complex", "Email");
		String Handset = DataHelper.getData("postpay_complex", "Handset");
		String Reason = DataHelper.getData("postpay_complex", "Reason");
		String IMEI = DataHelper.getData("postpay_complex", "IMEI");
		String From = DataHelper.getData("postpay_complex", "From");
		AccountSettings.your_name.sendKeys(Name);
		AccountSettings.email.sendKeys(Email);
		AccountSettings.handset.sendKeys(Handset);
		AccountSettings.reason.sendKeys(Reason);
		AccountSettings.imei.sendKeys(IMEI);
		AccountSettings.purchased_from.sendKeys(From);

	}

	@Then("^I select secondary number$")
	public void i_select_secondary_number() throws Throwable {
		AccountSettings.msisdn.click();
		String Number = DataHelper.getData("postpay_complex", "Number");
		AccountSettings.msisdn.sendKeys(Number);

	}

	@Then("^I submit proof of purchase request$")
	public void i_submit_proof_of_purchase_request() {
		AccountSettings.submit.click();

	}

	@Then("^I should see proof of purchase confirmation page$")
	public void i_should_see_proof_of_purchase_confirmation_page() {
		AccountSettings.confirmation.getText();

	}

	@Then("^I select the Credit Card option for Direct Debit$")
	public void i_select_the_Credit_Card_option_for_Direct_Debit() {
		BillPayments.credit_card.click();

	}

	@Then("^I enter the credit card details$")
	public void i_enter_the_credit_card_details() throws Throwable {
		driver.switchTo().frame("paymentFrame");
		String name_on_card = DataHelper.getData("postpay_complex", "Name on card");
		String card_number = DataHelper.getData("postpay_complex", "Card number");
		String expiry_date = DataHelper.getData("postpay_complex", "Expiry date");
		String cvv = DataHelper.getData("postpay_complex", "CVV");
		BillPayments.card_name.sendKeys(name_on_card);
		BillPayments.card_number.sendKeys(card_number);
		BillPayments.card_expiry.sendKeys(expiry_date);
		BillPayments.cvv.sendKeys(cvv);
		driver.switchTo().defaultContent();
	}

	@Then("^I submit request$")
	public void i_submit_request() throws Throwable {
		BillPayments.TnC_card.click();
		BillPayments.credit_submit.click();

	}

}
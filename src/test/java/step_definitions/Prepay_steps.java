package step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.DataHelper;
import pageobjects.HomePage;
import pageobjects.LoginPage;
import pageobjects.PrepayPage;

public class Prepay_steps {
	public WebDriver driver;

	public Prepay_steps() throws Exception {
		driver = Hooks.driver;
		PageFactory.initElements(driver, LoginPage.class);
		PageFactory.initElements(driver, HomePage.class);
		PageFactory.initElements(driver, PrepayPage.class);
	}

	@When("^I log in with an \"([^\"]*)\" msisdn and \"([^\"]*)\"$")
	public void i_log_in_with_an_msisdn_and(String arg1, String arg2) throws Throwable {
		String username = DataHelper.getData("prepay_voice", "username");
		String password = DataHelper.getData("prepay_voice", "password");
		LoginPage.username.sendKeys(username);
		LoginPage.password.sendKeys(password);
		LoginPage.signin_button.click();

	}

	@Then("^I navigate to International Calling page$")
	public void i_navigate_to_International_Calling_page() {
		HomePage.activate_international_roaming.click();

	}

	@Then("^I change my existing International Calling settings$")
	public void i_change_my_existing_International_Calling_settings() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		PrepayPage.global_roaming.click();

	}

	@Then("^I save the International Calling settings$")
	public void i_save_the_International_Calling_settings() {
		PrepayPage.terms_and_conditions.click();
		PrepayPage.save_settings.click();

	}

	@Then("^I should see my updated International Calling settings status$")
	public void i_should_see_my_updated_International_Calling_settings_status() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		PrepayPage.save_settings.getText();

	}

}
package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BaseClass {
	public LoginPage(WebDriver driver) {
		super(driver);
	}

	@CacheLookup
	@FindBy(how = How.ID, using = "userid")
	public static WebElement username;

	@CacheLookup
	@FindBy(how = How.ID, using = "password")
	public static WebElement password;

	@CacheLookup
	@FindBy(how = How.ID, using = "loginButton")
	public static WebElement signin_button;
}

package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountSettings extends BaseClass {

	public AccountSettings(WebDriver driver) {
		super(driver);
	}

	@FindBy(how = How.LINK_TEXT, using = "Account settings")
	public static WebElement account_settings;

	@FindBy(how = How.LINK_TEXT, using = "International calling")
	public static WebElement international_calling;

	@FindBy(how = How.ID, using = "pin_pin")
	public static WebElement pin;

	@FindBy(how = How.CSS, using = ".btn-primary")
	public static WebElement next;

	@FindBy(how = How.ID, using = "international-calling-status")
	public static WebElement change_status;

	@FindBy(how = How.LINK_TEXT, using = "Proof of purchase")
	public static WebElement proof_of_purchase;

	@FindBy(how = How.CSS, using = ".page-title")
	public static WebElement purchase;

	@FindBy(how = How.ID, using = "msisdn")
	public static WebElement msisdn;

	@FindBy(how = How.ID, using = "your_name")
	public static WebElement your_name;

	@FindBy(how = How.ID, using = "email")
	public static WebElement email;

	@FindBy(how = How.ID, using = "handset")
	public static WebElement handset;

	@FindBy(how = How.ID, using = "reason")
	public static WebElement reason;

	@FindBy(how = How.ID, using = "imei")
	public static WebElement imei;

	@FindBy(how = How.ID, using = "purchased_from")
	public static WebElement purchased_from;

	@FindBy(how = How.ID, using = "submit-proof-of_purchase")
	public static WebElement submit;

	@FindBy(how = How.CSS, using = ".form-confirmation-paragraph")
	public static WebElement confirmation;
}

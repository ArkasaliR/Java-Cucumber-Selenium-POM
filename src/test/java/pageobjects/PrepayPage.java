package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PrepayPage extends BaseClass {
	public PrepayPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(how = How.ID, using = "global_roaming")
	public static WebElement global_roaming;

	@FindBy(how = How.ID, using = "terms-and-conditions")
	public static WebElement terms_and_conditions;

	@FindBy(how = How.CSS, using = ".btn-primary")
	public static WebElement save_settings;

	@FindBy(how = How.CSS, using = ".page-title")
	public static WebElement settings_saved;

	@FindBy(how = How.LINK_TEXT, using = "View rates and offers")
	public static WebElement view_rates_and_offers;

}

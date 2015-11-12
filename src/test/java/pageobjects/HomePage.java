package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage extends BaseClass {
	public HomePage(WebDriver driver) {
		super(driver);
	}

	@FindBy(how = How.LINK_TEXT, using = "View and buy add-ons")
	public static WebElement view_and_bug_add_ons;

	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "My usage")
	public static WebElement my_usage;

	@FindBy(how = How.CSS, using = ".account-overview__plan")
	public static WebElement vodafone;

	@FindBy(how = How.LINK_TEXT, using = "Add Data")
	public static WebElement add_data;

	@FindBy(how = How.CSS, using = ".addons_carousel__product__details")
	public static WebElement offer;

	@FindBy(how = How.CLASS_NAME, using = "addons_carousel__product__cost")
	public static WebElement addons_carousel_product_cost;

	@FindBy(how = How.CSS, using = "a[href='#/data']")
	public static WebElement add_data_again;

	@FindBy(how = How.ID, using = "buy-addon")
	public static WebElement buy_addon;

	@FindBy(how = How.ID, using = "add-ons__terms-and-conditions-label")
	public static WebElement add_ons_terms_and_conditions;

	@FindBy(how = How.ID, using = "cancel-purchase-addon")
	public static WebElement cancel_purchase_addon;

	@FindBy(how = How.LINK_TEXT, using = "Sign out")
	public static WebElement sign_out;

	@FindBy(how = How.CSS, using = ".billing_cycle")
	public static WebElement entitlements;

	@FindBy(how = How.LINK_TEXT, using = "View data usage")
	public static WebElement view_data_usage;

	@FindBy(how = How.CSS, using = ".usage-category__main__content")
	public static WebElement data_usage;

	@FindBy(how = How.LINK_TEXT, using = "View all usage")
	public static WebElement view_all_usage;

	@FindBy(how = How.LINK_TEXT, using = "Manage Vodafone Alerts")
	public static WebElement vodafone_alerts;

	@FindBy(how = How.ID, using = "alert-status")
	public static WebElement alert_status;

	@FindBy(how = How.LINK_TEXT, using = "Activate international roaming")
	public static WebElement activate_international_roaming;

}

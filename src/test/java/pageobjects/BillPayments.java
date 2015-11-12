package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BillPayments extends BaseClass {
	public BillPayments(WebDriver driver) {
		super(driver);
	}

	@FindBy(how = How.LINK_TEXT, using = "Bills & payments")
	public static WebElement bill_payment;

	@FindBy(how = How.ID, using = "pin_pin")
	public static WebElement pin;

	@FindBy(how = How.CSS, using = "a[href='/direct_debit']")
	public static WebElement setup_direct_debit;

	@FindBy(how = How.ID, using = "direct-debit-payment-method-bank-account")
	public static WebElement bank_account;

	@FindBy(how = How.ID, using = "direct_debit_bsb_number")
	public static WebElement BSB;

	@FindBy(how = How.ID, using = "direct_debit_bank_account_number")
	public static WebElement account_number;

	@FindBy(how = How.ID, using = "direct_debit_bank_account_name")
	public static WebElement account_name;

	@FindBy(how = How.ID, using = "terms-and-conditions-bank-account")
	public static WebElement TnC_bank;

	@FindBy(how = How.ID, using = "terms-and-conditions-credit-card")
	public static WebElement TnC_card;

	@FindBy(how = How.CSS, using = ".btn-primary")
	public static WebElement submit_request;

	@FindBy(how = How.CSS, using = ".module__content--basic>p")
	public static WebElement success_message;

	@FindBy(how = How.CSS, using = ".manage-pay-double-line")
	public static WebElement manage_direct_debit;

	@FindBy(how = How.CSS, using = ".btn-secondary")
	public static WebElement cancel_direct_debit;

	@FindBy(how = How.CSS, using = ".btn-primary")
	public static WebElement cancel_debit;

	@FindBy(how = How.CSS, using = ".page-title.ng-scope")
	public static WebElement cancel_message;

	@FindBy(how = How.ID, using = "direct-debit-payment-method-credit-card")
	public static WebElement credit_card;

	@FindBy(how = How.CSS, using = "#cardHolderName")
	public static WebElement card_name;

	@FindBy(how = How.CSS, using = "#cardNo")
	public static WebElement card_number;

	@FindBy(how = How.CSS, using = "#cardExpiry")
	public static WebElement card_expiry;

	@FindBy(how = How.CSS, using = "#cardSecureId")
	public static WebElement cvv;
	
	@FindBy(how = How.CSS, using = ".module__footer:last-child .btn-primary")
	public static WebElement credit_submit;

}

package helpers;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import step_definitions.Hooks;

public class DataHelper {
	public static WebDriver driver;

	public static String getAppURL(String URL) {

		String AppURL = null;
		switch (URL) {
		case "production":
			AppURL = "http://myaccount.myvodafone.com.au";
			break;
		case "preproduction":
			AppURL = "http://selfservice-preprod1.myaccount.test.services.vodafone.com.au";
			break;
		}
		return AppURL;

	}

	public static String getData(String dataType, String data) throws IOException {
		File src = new File("C:/Users/ArkasaliR/workspace/Demo/src/test/resources/Testdata/TestData.xlsx");
		FileInputStream fis = new FileInputStream(src);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet sheet1 = wb.getSheetAt(0);
		DataFormatter formatter = new DataFormatter();
		int rowNo = 0;
		int cellNo = 0;
		switch (dataType) {

		case "postpay_simple":
			rowNo = 2;
			break;

		case "postpay_complex_new":
			rowNo = 3;
			break;

		case "postpay_complex":
			rowNo = 4;
			break;

		case "prepay_voice":
			rowNo = 5;
			break;
		}

		switch (data) {
		case "username":
			cellNo = 1;
			break;
		case "password":
			cellNo = 2;
			break;
		case "BSB":
			cellNo = 4;
			break;
		case "ACCOUNT NAME":
			cellNo = 5;
			break;
		case "ACCOUNT NUMBER":
			cellNo = 6;
			break;
		case "pin":
			cellNo = 3;
			break;
		case "Name":
			cellNo = 7;
			break;
		case "Email":
			cellNo = 8;
			break;
		case "Handset":
			cellNo = 9;
			break;
		case "Reason":
			cellNo = 10;
			break;
		case "IMEI":
			cellNo = 11;
			break;
		case "From":
			cellNo = 12;
			break;
		case "Number":
			cellNo = 13;
			break;
		case "Name on card":
			cellNo = 14;
			break;
		case "Card number":
			cellNo = 15;
			break;
		case "Expiry date":
			cellNo = 16;
			break;
		case "CVV":
			cellNo = 17;
			break;

		}

		XSSFCell cell = null;
		cell = (XSSFCell) sheet1.getRow(rowNo).getCell(cellNo);
		wb.close();
		return formatter.formatCellValue(cell);
	}

	public static void waitForPageToLoad(WebDriver driver) {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	}

	public static void takeScreenshot(WebDriver driver) throws IOException {
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		File targetFile = new File("C:/Users/ArkasaliR/workspace/Demo/target/screenshots/" + Hooks.scenarioName + ".jpg");
		FileUtils.copyFile(scrFile, targetFile);
	}

	public static void browserRefresh(WebDriver driver) {
		driver.navigate().refresh();
	}

	public static void browseForward(WebDriver driver) {
		driver.navigate().forward();
	}

	public static void browseBackward(WebDriver driver) {
		driver.navigate().back();
	}
}

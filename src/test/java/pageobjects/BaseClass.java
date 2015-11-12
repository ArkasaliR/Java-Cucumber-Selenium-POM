package pageobjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

public abstract class BaseClass {
	public static WebDriver driver;

	public BaseClass(WebDriver driver) {
		BaseClass.driver = driver;
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

}

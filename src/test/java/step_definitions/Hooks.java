package step_definitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver driver;
	public static String scenarioName;

	@Before
	public void openBrowser(Scenario scenario) {
		driver = new FirefoxDriver();
		driver.manage().deleteAllCookies();
		scenarioName = scenario.getName();

	}

	@After
	public void embedScreenshot(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				scenario.write("Current page URL is" + driver.getCurrentUrl());
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformDontSupportScreenshots) {
				System.err.println(somePlatformDontSupportScreenshots.getMessage());

			}
		}
		driver.close();
	}

}
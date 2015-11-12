$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Postpay.feature");
formatter.feature({
  "line": 2,
  "name": "My Vodafone Postpay customer journeys.",
  "description": "As a tester\nI want to log in to My Vodafone.",
  "id": "my-vodafone-postpay-customer-journeys.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@VodafonePostpay"
    }
  ]
});
formatter.before({
  "duration": 6094369304,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I should be able to update the Direct Debit details from bank account to Credit card then cancel the Direct Debit",
  "description": "",
  "id": "my-vodafone-postpay-customer-journeys.;i-should-be-able-to-update-the-direct-debit-details-from-bank-account-to-credit-card-then-cancel-the-direct-debit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open Vodafone login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I log in with \"postpay_complex\" msisdn and \"Password\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to Bills \u0026 Payments Page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter a valid pin and submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select Setup Direct Debit option",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the Credit Card option for Direct Debit",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter the credit card details",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I submit request",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see the setup success message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I navigate to Bills \u0026 Payments Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select Manage Direct Debit option",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I select Cancel Direct Debit option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see the cancellation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Postpay_steps.i_open_Vodafone_login_page()"
});
formatter.result({
  "duration": 3366193713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postpay_complex",
      "offset": 15
    },
    {
      "val": "Password",
      "offset": 44
    }
  ],
  "location": "Postpay_steps.i_log_in_with_msisdn_and(String,String)"
});
formatter.result({
  "duration": 10591755101,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"userid\"}\nCommand duration or timeout: 10.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027H157512\u0027, ip: \u0027192.168.231.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d42.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b6280f7a-39c3-423c-b02a-8a944e09a95b\n*** Element info: {Using\u003did, value\u003duserid}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat step_definitions.Postpay_steps.i_log_in_with_msisdn_and(Postpay_steps.java:190)\r\n\tat ✽.When I log in with \"postpay_complex\" msisdn and \"Password\"(features/Postpay.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"userid\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027H157512\u0027, ip: \u0027192.168.231.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ARKASA~1/AppData/Local/Temp/anonymous6764218163425308867webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10667)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/ARKASA~1/AppData/Local/Temp/anonymous6764218163425308867webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:623)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Postpay_steps.i_navigate_to_Bills_Payments_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_enter_a_valid_pin_and_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_select_Setup_Direct_Debit_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_select_the_Credit_Card_option_for_Direct_Debit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_enter_the_credit_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_submit_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_should_see_the_setup_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_navigate_to_Bills_Payments_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_select_Manage_Direct_Debit_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_select_Cancel_Direct_Debit_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_should_see_the_cancellation_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current page URL ishttps://www.myvodafone.com.au/auth/login?url\u003dhttps%3A%2F%2Fmyaccount.myvodafone.com.au%2F\u0026pcode\u003dmybill");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 36140250704,
  "status": "passed"
});
formatter.uri("features/Prepay.feature");
formatter.feature({
  "line": 2,
  "name": "My Vodafone Prepay customer journeys.",
  "description": "As a tester\r\nI want to log in to My Vodafone.",
  "id": "my-vodafone-prepay-customer-journeys.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@VodafonePrepay"
    }
  ]
});
formatter.before({
  "duration": 4266505029,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Logged in prepay user and navigate to international calling page to update statusl",
  "description": "",
  "id": "my-vodafone-prepay-customer-journeys.;logged-in-prepay-user-and-navigate-to-international-calling-page-to-update-statusl",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open Vodafone login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I log in with an \"prepay_voice\" msisdn and \"Password\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to International Calling page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I change my existing International Calling settings",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I save the International Calling settings",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see my updated International Calling settings status",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Postpay_steps.i_open_Vodafone_login_page()"
});
formatter.result({
  "duration": 2358328477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prepay_voice",
      "offset": 18
    },
    {
      "val": "Password",
      "offset": 44
    }
  ],
  "location": "Prepay_steps.i_log_in_with_an_msisdn_and(String,String)"
});
formatter.result({
  "duration": 4518767818,
  "status": "passed"
});
formatter.match({
  "location": "Prepay_steps.i_navigate_to_International_Calling_page()"
});
formatter.result({
  "duration": 9364264610,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027H157512\u0027, ip: \u0027192.168.231.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:243)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat step_definitions.Prepay_steps.i_navigate_to_International_Calling_page(Prepay_steps.java:37)\r\n\tat ✽.Then I navigate to International Calling page(features/Prepay.feature:9)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:161)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:89)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:134)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:170)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:393)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:243)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat step_definitions.Prepay_steps.i_navigate_to_International_Calling_page(Prepay_steps.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 61 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Prepay_steps.i_change_my_existing_International_Calling_settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Prepay_steps.i_save_the_International_Calling_settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Prepay_steps.i_should_see_my_updated_International_Calling_settings_status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Postpay_steps.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2014172261,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027H157512\u0027, ip: \u0027192.168.231.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:459)\r\n\tat step_definitions.Hooks.embedScreenshot(Hooks.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:143)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:89)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:134)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:170)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:393)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\r\n\t... 40 more\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 55 more\r\n",
  "status": "failed"
});
});
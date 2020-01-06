$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/carSearch.feature");
formatter.feature({
  "name": "validation of car search page",
  "description": "  In order to validate car search\n  as a buyer\n  I navigate http://www.carsguide.com.au",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@car"
    }
  ]
});
formatter.scenario({
  "name": "Searching for a new car",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@car"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page http://www.carsguide.com.au of carsguide website",
  "keyword": "Given "
});
formatter.match({
  "location": "CarSearch.i_am_on_the_home_page_http_www_carsguide_com_au_of_carsguide_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to Car for Sale Menu",
  "keyword": "When "
});
formatter.match({
  "location": "CarSearch.i_move_to_Car_for_Sale_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Search Cars",
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearch.i_click_on_Search_Cars()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"u_H\"]/div/div[1]/ul/li[1]/div/div/div[1]/ul/li[1]/b\"}\n  (Session info: chrome\u003d78.0.3904.108)\n  (Driver info: chromedriver\u003d77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 84 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027malolat\u0027, ip: \u0027192.168.1.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61094}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}), userDataDir\u003dC:\\Users\\MICHA~1\\AppData\\Local\\Temp\\scoped_dir6356_627296679}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d78.0.3904.108, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 25b116aacec1016a53930557eb288faa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat steps.CarSearch.i_click_on_Search_Cars(CarSearch.java:54)\r\n\tat ✽.I click on Search Cars(file:src/test/java/features/carSearch.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select Make as \"BMW\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearch.i_select_Make_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Model as \"1 Series\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearch.i_select_Model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select location as \"ACT - All\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearch.i_select_location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select price as \"$10,000\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearch.i_select_price_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Find My Next Car button",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearch.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see list of searched cars from \"BMW\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearch.i_should_see_list_of_searched_cars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"Bmw 1 Series Under 10000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearch.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});
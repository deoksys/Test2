package steps;

import cucumber.api.PendingException;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Map;

public class LoginStep {

//    protected static WebDriver driver;


    @Given("^user navigates to facebook website$")
    public void user_navigates_to_facebook_website() {
        System.out.println("@Given -- User navigates to Facebook");
    }

    @When("^user validates the homepage title$")
    public void user_validates_the_homepage_title() {
        System.out.println("@When -- User validates the home");
    }

    @Then("^user entered \"([^\"]*)\" username$")
    public void user_entered_the_username(String username) {
        System.out.println("@Then - user entered " + username + " username");
    }

    @And("^user entered \"([^\"]*)\" password$")
    public void user_entered_the_password(String password) {
        System.out.println("@And - user entered " + password + " password");
    }

    @Then("^user \"([^\"]*)\" succesfully logged in$")
    public void user_should_be_succesfully_logged_in(String validateLogin) {
        System.out.println("@Then - user " + validateLogin + " successfully logged in");
    }

//    @And("^user select the age category$")
//    public void select_select_that_age_category(List<String> list) {
//        System.out.println("@And - user select the age category :" + list.get(2));
//    }

    @And("^user select the age category$")
    public void select_select_that_age_category(DataTable table) {
        List<Map<String, String>> data = table.asMaps(String.class, String.class);
        System.out.println("@And - user select the age category : " + data.get(0).get("Age") + " ---Selected location as : " + data.get(0).get("location"));
    }

}

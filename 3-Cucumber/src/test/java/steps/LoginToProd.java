package steps;

import io.cucumber.java.en.Then;

public class LoginToProd {

    @Then("^user validates the captcha image$")
    public void user_entered_the_username() {
        System.out.println("@And -- user validates the captcha image");
    }

}

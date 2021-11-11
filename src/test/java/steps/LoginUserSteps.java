package steps;

import Utils.TestNGSecuenciaRunner;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;
import pageobjects.LoginUserPage;

import java.util.Locale;

public class LoginUserSteps extends TestNGSecuenciaRunner {

    @Given("^the customer is on the main page$")
    public void elClienteSeEncuentraEnLaPaginaDeBusqueda() {
        driver = new ChromeDriver();
        driver.get(Utils.Constants.baseURL);
    }

    @And("^click sig in$")
    public void theCustomerClickTheLoginButton() {
        LoginUserPage login = new LoginUserPage(driver);
        login.clickBtnSignIn();
    }

    @When("^enter the email (.*)$")
    public void enterUserUser(String email) {
        LoginUserPage login = new LoginUserPage(driver);
        login.textEmail(email);
    }

    @Then("^click the create an account$")
    public void pageShowsProductTitle() {
        LoginUserPage login = new LoginUserPage(driver);
        login.clickBtnCreateAccount();
    }


    @And("^click title (.*)$")
    public void theCustomerADDTOCARTOfTheProductProduct(String bntName) {
        LoginUserPage login = new LoginUserPage(driver);
        switch (bntName.toUpperCase(Locale.ROOT)){
            case "MR.":
                login.clickRbtMr();
                break;
            case "MRS.":
                login.clickRbtMrs();
                break;
        }
    }

    @And("^put firstname (.*)$")
    public void putfirstname(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putTextFirstName(pass);
    }

    @And("^put lastname (.*)$")
    public void lastname(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putTextLastName(pass);
    }

    @And("^put password (.*)$")
    public void password(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putTextPass(pass);
    }

    @And("^select day (.*)$")
    public void selectday(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.selectDay(pass);
    }

    @And("^select month (.*)$")
    public void selectmonth(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.selectMonth(pass);
    }

    @And("^select year (.*)$")
    public void selectyear(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.selectYear(pass);
    }

    @And("^put address (.*)$")
    public void putaddress(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putTextAddress(pass);
    }

    @And("^put city (.*)$")
    public void putcity(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putTextCity(pass);
    }

    @And("^select state (.*)$")
    public void selectstate(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.selectState(pass);
    }

    @And("^put postal (.*)$")
    public void putpostal(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putPostal(pass);
    }

    @And("^select country (.*)$")
    public void selectcountry(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.selectCountry(pass);
    }

    @And("^put mobilephone (.*)$")
    public void selectmobile(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putMobile(pass);
    }

    @And("^put alias (.*)$")
    public void selectalias(String pass) {
        LoginUserPage login = new LoginUserPage(driver);
        login.putAlias(pass);
    }

    @And("^click register$")
    public void clickregister() {
        LoginUserPage login = new LoginUserPage(driver);
        login.clickBtnRegister();

    }

    @Then("^log out with new user (.*)$")
    public void logoutwithnewuser(String text) {
        LoginUserPage login = new LoginUserPage(driver);
        SoftAssert softAssert = new SoftAssert();
        softAssert.assertTrue(login.validateLogOut(text));
        softAssert.assertTrue(login.validateMyAccount("My account"));
        softAssert.assertAll();
    }


    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed())
            takeScreenshot(scenario);
        driver.quit();
    }

    public void takeScreenshot(Scenario scenario){
        final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshot,"image/png");
    }



}

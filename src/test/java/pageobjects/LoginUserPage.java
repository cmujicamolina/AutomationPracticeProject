package pageobjects;

import Utils.Wait;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginUserPage {
    private WebDriver driver;
    private WebDriverWait wait;

    //Constructor
    public LoginUserPage(WebDriver browser){
        driver = browser;
        PageFactory.initElements(driver, this);
        wait = new WebDriverWait(driver,20);
    }

    //Locators
    @FindBy(xpath = "//*[@id=\"header\"]/div[2]/div/div/nav/div[1]/a")
    private WebElement btnSignIn;

    @FindBy(id = "email_create")
    private WebElement TextEmail;

    @FindBy(id = "SubmitCreate")
    private WebElement btnCreateAccount;

    @FindBy(xpath = "//*[@id=\"account-creation_form\"]/div[1]/div[1]/div[1]/label")
    private WebElement rbtMr;

    @FindBy(xpath = "//*[@id=\"account-creation_form\"]/div[1]/div[1]/div[2]/label")
    private WebElement rbtMrs;

    @FindBy(id = "customer_firstname")
    private WebElement textFirstName;

    @FindBy(id = "customer_lastname")
    private WebElement textLastName;

    @FindBy(id = "passwd")
    private WebElement textPass;

    @FindBy(id = "address1")
    private WebElement TextAddress;

    @FindBy(id = "city")
    private WebElement TextCity;

    @FindBy(id = "postcode")
    private WebElement TextPostCode;

    @FindBy(id = "phone_mobile")
    private WebElement TextMobile;

    @FindBy(id = "alias")
    private WebElement TextAlias;

    @FindBy(id = "submitAccount")
    private WebElement btnRegister;

    @FindBy(xpath = "//*[@id=\"header\"]/div[2]/div/div/nav/div[1]/a/span")
    private WebElement TextLogOut;

    @FindBy(xpath = "//*[@id=\"columns\"]/div[1]/span[2]")
    private WebElement TextMyAccount;


    //Actions
    public void clickBtnSignIn(){
        Wait.waitVisibility(driver,btnSignIn,20);
        btnSignIn.click();

        Wait.waitSeconds(2);
    }

    public void textEmail(String text){
        Wait.waitVisibility(driver,TextEmail,20);
        TextEmail.click();
        TextEmail.sendKeys(text);

        Wait.waitSeconds(2);
    }

    public void clickBtnCreateAccount(){
        Wait.waitVisibility(driver,btnCreateAccount,20);
        btnCreateAccount.click();

        Wait.waitSeconds(2);
    }

    public void clickRbtMr(){
        Wait.waitVisibility(driver,rbtMr,20);
        rbtMr.click();

        Wait.waitSeconds(2);
    }

    public void clickRbtMrs(){
        Wait.waitVisibility(driver,rbtMrs,20);
        rbtMrs.click();

        Wait.waitSeconds(2);
    }

    public void putTextFirstName(String text){
        Wait.waitVisibility(driver,textFirstName,20);
        textFirstName.click();
        textFirstName.sendKeys(text);

        Wait.waitSeconds(2);
    }

    public void putTextLastName(String text){
        Wait.waitVisibility(driver,textLastName,20);
        textLastName.click();
        textLastName.sendKeys(text);

        Wait.waitSeconds(2);
    }

    public void putTextPass(String text){
        Wait.waitVisibility(driver,textPass,20);
        textPass.click();
        textPass.sendKeys(text);

        Wait.waitSeconds(2);
    }

    public void selectDay(String textOrd){

        JavascriptExecutor jsi = (JavascriptExecutor)driver;
        jsi.executeScript("window.scrollBy(0,350)", "");

        WebElement valorCombo = driver.findElement(By.name("days"));
        Select selValorCombo = new Select(valorCombo);
        selValorCombo.selectByValue(textOrd);
        Wait.waitSeconds(1);
    }

    public void selectMonth(String textMonth){
        WebElement valorCombo = driver.findElement(By.name("months"));
        Select selValorCombo = new Select(valorCombo);
        selValorCombo.selectByValue(textMonth);
        Wait.waitSeconds(1);
    }

    public void selectYear(String textYear){
        WebElement valorCombo = driver.findElement(By.name("years"));
        Select selValorCombo = new Select(valorCombo);
        selValorCombo.selectByValue(textYear);
        Wait.waitSeconds(1);
    }

    public void putTextAddress(String text){
        Wait.waitVisibility(driver,TextAddress,20);
        TextAddress.click();
        TextAddress.sendKeys(text);

        Wait.waitSeconds(1);
    }

    public void putTextCity(String text){
        Wait.waitVisibility(driver,TextCity,20);
        TextCity.click();
        TextCity.sendKeys(text);

        Wait.waitSeconds(1);
    }

    public void selectState(String text){
        WebElement valorCombo = driver.findElement(By.name("id_state"));
        Select selValorCombo = new Select(valorCombo);
        selValorCombo.selectByVisibleText(text);
        Wait.waitSeconds(1);
    }

    public void putPostal(String text){
        Wait.waitVisibility(driver,TextPostCode,20);
        TextPostCode.click();
        TextPostCode.sendKeys(text);

        Wait.waitSeconds(1);
    }

    public void selectCountry(String text){
        WebElement valorCombo = driver.findElement(By.name("id_country"));
        Select selValorCombo = new Select(valorCombo);
        selValorCombo.selectByVisibleText(text);
        Wait.waitSeconds(1);
    }

    public void putMobile(String text){
        Wait.waitVisibility(driver,TextMobile,20);
        TextMobile.click();
        TextMobile.sendKeys(text);

        Wait.waitSeconds(1);
    }

    public void putAlias(String text){
        Wait.waitVisibility(driver,TextAlias,20);
        TextAlias.click();
        TextAlias.clear();
        TextAlias.sendKeys(text);

        Wait.waitSeconds(4);
    }

    public void clickBtnRegister(){
        Wait.waitVisibility(driver,btnRegister,20);
        btnRegister.click();

        Wait.waitSeconds(2);
    }

    public boolean validateLogOut(String message){
        boolean result = false;
        Wait.waitVisibility(driver,TextLogOut,4);

        if(TextLogOut.getText().contains(message)){
            result = true;
        }
        return result;
    }

    public boolean validateMyAccount(String message){
        boolean result = false;
        Wait.waitVisibility(driver,TextMyAccount,4);

        if(TextMyAccount.getText().contains(message)){
            result = true;
        }
        return result;
    }

}

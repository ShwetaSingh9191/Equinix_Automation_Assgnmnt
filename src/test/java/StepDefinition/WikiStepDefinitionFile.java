package StepDefinition;

import PageObjects.MainPage;
import PageObjects.MainPageInDiffLang;
import PageObjects.SearchResultPage;
import Utils.Base;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;

public class WikiStepDefinitionFile extends Base {

    Logger log= LogManager.getLogger(WikiStepDefinitionFile.class.getName());

    @Before
    public void initialize_the_browser_with_chrome() throws Throwable {
        driver=initializeWebDriver();
        log.info("Initialised browser");
        driver.manage().window().maximize();
    }


    @After
    public void logout_and_close_browser(Scenario scenario) throws Throwable {
        if (scenario.isFailed()) {
            // Take a screenshot...
            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
        }
        Thread.sleep(5000);
        driver.close();
        log.info("Closed browser");
    }

    @Given("^User navigates to Wiki Main Page$")
    public void user_navigates_to_Wiki_Main_Page() throws Throwable {
        driver.get(prop.getProperty("url"));
        MainPage mp=new MainPage(driver);
        wait.until(ExpectedConditions.visibilityOf(mp.getLanguageList()));
        wait.until(ExpectedConditions.visibilityOf(mp.getSearchBox()));
        log.info("User is on Wiki Main Page ");
    }

    HashMap<String,String> hm= new HashMap<String,String>();

    @When("^User selects \"([^\"]*)\" language$")
    public void user_selects_language(String inputLang) throws Throwable {
        log.info("Selected language is : " +inputLang);
        //Store all language title and lang atrribute as key value pair in a hashmap from HomePage(rendered in English) and use it later for comparision
        List<WebElement> list = driver.findElements(By.className("interlanguage-link-target"));
        for(WebElement webElmnt: list){
            hm.put(webElmnt.getAttribute("title"),webElmnt.getAttribute("lang"));
            hm.put("English","en");
        }
        if( !(inputLang.equalsIgnoreCase("English"))) {
            MainPage mainPg = new MainPage(driver);
            mainPg.getLangOption(inputLang).click();
        }
        Thread.sleep(2000);
    }


    /*
    validating if new page is rendered in selected language by checking if slected language is not present in the language list of the new page
    For eg: if selected lang is Deutsch, after selecting Deutsch lang from wiki main page, Deutsch will not appear in list of Language on the
    new page
    * */
    @Then("^Wiki page should be displayed in the selected \"([^\"]*)\" language$")
    public void wiki_page_should_be_displayed_in_the_selected_language(String inputLang)  {
    try {
        log.info("Page should be dispalyed in language: " +inputLang +" ,with lang attribute : " +hm.get(inputLang));
        boolean flag = true;
        MainPageInDiffLang mpInDiffLang= new MainPageInDiffLang(driver);
        List<WebElement> listOnSelPage = mpInDiffLang.getLanguageListFromSelectedLangPage();
        for (WebElement webElmnt : listOnSelPage) {
            //checking if selected language attribute "lang" is present on new page(in different lang) with the original lang list
            if (webElmnt.getAttribute("lang").equalsIgnoreCase(hm.get(inputLang))) {
                flag = false;
                break;
            }
        }
    Assert.assertTrue(flag);
    } catch (Exception e){
    e.getMessage();
    }
    }

    @When("^User searches for Hollywood celebrities \"([^\"]*)\"$")
    public void user_searches_for_Hollywood_celebrities(String nameToSearch) throws Throwable {
        log.info("User searches for celebrity : " +nameToSearch);
        MainPage mp = new MainPage(driver);
        mp.getSearchBox().sendKeys(nameToSearch);
        Thread.sleep(1000);
        mp.getSearchBox().sendKeys(Keys.ENTER);
        SearchResultPage searchResultPage=new SearchResultPage(driver);
        wait.until(ExpectedConditions.visibilityOf(searchResultPage.getHeaderOnPage()));

        Thread.sleep(2000);
    }


    @Then("^Birthdates and spouses details of the \"([^\"]*)\" should be logged$")
    public void birthdates_and_spouses_details_of_the_should_be_logged(String nameToSearch) throws Throwable {

        SearchResultPage searchResultPage = new SearchResultPage(driver);
        String date = searchResultPage.getBirthDateDetails().getAttribute("innerHTML");

        DateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat outputFormat = new SimpleDateFormat("MMM d, yyyy");
        log.info( "Birthdate of " + nameToSearch + " is : " + outputFormat.format(inputFormat.parse(date)));

        if(searchResultPage.getSpouseHeader().size() != 0)
        {
            List<WebElement> list = searchResultPage.getSpouseDetails();
            if (list.size() != 0) {
                //for multiple spouses
                for (WebElement element : list) {
                    log.info("Spouse(s) details are : " +element.getText());
                }
            } else {
                //for single spouse
                log.info("Spouse details are : " +searchResultPage.getSingleSpouseDetail().getText());
            }
        } else
                //for spuse with no wiki page
                log.info("No spouse details present");
    }
}

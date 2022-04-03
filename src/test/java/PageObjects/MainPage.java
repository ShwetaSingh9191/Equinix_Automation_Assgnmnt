package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class MainPage {

    public WebDriver driver;

    public MainPage(WebDriver driver) {
        this.driver = driver;
    }


    By languageHeading = By.xpath("//span[contains(text(),'Languages')]");
    By searchBox = By.id("searchInput");
//    By langOption = By.xpath("//a[@title='Korean']");


    public WebElement getLanguageList() {
        return driver.findElement(languageHeading);
    }


    public WebElement getSearchBox() {
        return driver.findElement(searchBox);
    }


    public WebElement getLangOption(String inputLang) {
        return driver.findElement(By.xpath("//a[@title='" +inputLang+ "']"));
    }


}
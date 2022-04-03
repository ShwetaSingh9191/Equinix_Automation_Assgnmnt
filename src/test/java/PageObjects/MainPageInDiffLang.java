package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class MainPageInDiffLang {



    public WebDriver driver;

    public MainPageInDiffLang(WebDriver driver) {
        this.driver = driver;
    }



    By langListOnSelPage = By.className("interlanguage-link-target");




    public List<WebElement> getLanguageListFromSelectedLangPage() {
        return driver.findElements(langListOnSelPage);
    }




}

package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class SearchResultPage {

    public WebDriver driver;

    public SearchResultPage(WebDriver driver){
        this.driver=driver;
    }


    By headerElement = By.id("firstHeading");
    By birthdayElement = By.xpath("//span[@class='bday']");
    By multipleSpouseElements= By.xpath("//span[contains(text(),'Spouse')]//ancestor::tr//li");
    By spouseHeaderElement=By.xpath("//span[contains(text(),'Spouse')]");
    By singleSpouseElement= By.xpath("//span[contains(text(),'Spouse')]//ancestor::tr//td");


    public WebElement getHeaderOnPage(){
        return  driver.findElement(headerElement);
    }

    public  WebElement getBirthDateDetails(){
        return  driver.findElement(birthdayElement);
    }

    public List<WebElement> getSpouseDetails(){
        return  driver.findElements(multipleSpouseElements);
    }

    public WebElement getSingleSpouseDetail(){
        return  driver.findElement(singleSpouseElement);
    }

    public List<WebElement> getSpouseHeader(){
        return  driver.findElements(spouseHeaderElement);
    }


}

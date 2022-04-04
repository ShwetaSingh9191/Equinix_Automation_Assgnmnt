package TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
   @CucumberOptions(
            features = "src/test/java/Features",
            glue="StepDefinition",
//            format = {"pretty", "html:target/cucumber"},
           plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
           monochrome = true
   )
    public class TestRunner {

    }


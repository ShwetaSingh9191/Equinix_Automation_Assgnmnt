package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
   @CucumberOptions(
            features = "src/test/java/Features",
            glue="StepDefinition",
            format = {"pretty", "html:target/cucumber"})
    public class TestRunner {
//    public class TestRunner  extends AbstractTestNGCucumberTests {

    }


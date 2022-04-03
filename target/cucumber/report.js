$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WikiFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Wiki language and Person details option in Wikipedia",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"\u003clang\u003e\" language",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"\u003clang\u003e\" language",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;",
  "rows": [
    {
      "cells": [
        "lang"
      ],
      "line": 9,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;1"
    },
    {
      "cells": [
        "Arabic"
      ],
      "line": 10,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;2"
    },
    {
      "cells": [
        "Bangla"
      ],
      "line": 11,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;3"
    },
    {
      "cells": [
        "German"
      ],
      "line": 12,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;4"
    },
    {
      "cells": [
        "Italian"
      ],
      "line": 13,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;5"
    },
    {
      "cells": [
        "Spanish"
      ],
      "line": 14,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;6"
    },
    {
      "cells": [
        "French"
      ],
      "line": 15,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;7"
    },
    {
      "cells": [
        "Indonesian"
      ],
      "line": 16,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;8"
    },
    {
      "cells": [
        "Portuguese"
      ],
      "line": 17,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;9"
    },
    {
      "cells": [
        "Korean"
      ],
      "line": 18,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;10"
    },
    {
      "cells": [
        "English"
      ],
      "line": 19,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4276809000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Arabic\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Arabic\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 1118352700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arabic",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3571888900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arabic",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 699019100,
  "status": "passed"
});
formatter.after({
  "duration": 5097345800,
  "status": "passed"
});
formatter.before({
  "duration": 1662610100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Bangla\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Bangla\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 675400500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangla",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3842990500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangla",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 447353800,
  "status": "passed"
});
formatter.after({
  "duration": 9171412100,
  "status": "passed"
});
formatter.before({
  "duration": 1643414300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"German\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"German\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 685635900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "German",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3414477500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "German",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 555690800,
  "status": "passed"
});
formatter.after({
  "duration": 9155909700,
  "status": "passed"
});
formatter.before({
  "duration": 1660082600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Italian\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Italian\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 1016719000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italian",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3733551400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italian",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 806575500,
  "status": "passed"
});
formatter.after({
  "duration": 9161852200,
  "status": "passed"
});
formatter.before({
  "duration": 1552264300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Spanish\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Spanish\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 723561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spanish",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3434403600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spanish",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 587299600,
  "status": "passed"
});
formatter.after({
  "duration": 9160571100,
  "status": "passed"
});
formatter.before({
  "duration": 1699527200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"French\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"French\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 1192073700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "French",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 4328779100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "French",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 4446349100,
  "status": "passed"
});
formatter.after({
  "duration": 9191112900,
  "status": "passed"
});
formatter.before({
  "duration": 1605482700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Indonesian\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Indonesian\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 750764200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Indonesian",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 9997201400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Indonesian",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 4088062600,
  "status": "passed"
});
formatter.after({
  "duration": 9170496200,
  "status": "passed"
});
formatter.before({
  "duration": 1484405500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Portuguese\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Portuguese\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 723975900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portuguese",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3828787100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portuguese",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 4028927200,
  "status": "passed"
});
formatter.after({
  "duration": 9145405400,
  "status": "passed"
});
formatter.before({
  "duration": 1619588800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Korean\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"Korean\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 710683100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Korean",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 3547236000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Korean",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 478270400,
  "status": "passed"
});
formatter.after({
  "duration": 9138276100,
  "status": "passed"
});
formatter.before({
  "duration": 1627286600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Checking lanugage options on Wiki main page",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;checking-lanugage-options-on-wiki-main-page;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"English\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Wiki page should be displayed in the selected \"English\" language",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 685535900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 14
    }
  ],
  "location": "WikiStepDefinitionFile.user_selects_language(String)"
});
formatter.result({
  "duration": 2906182300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 47
    }
  ],
  "location": "WikiStepDefinitionFile.wiki_page_should_be_displayed_in_the_selected_language(String)"
});
formatter.result({
  "duration": 500589200,
  "status": "passed"
});
formatter.after({
  "duration": 9159685400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"\u003ccelebName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"\u003ccelebName\u003e\" should be logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;",
  "rows": [
    {
      "cells": [
        "celebName"
      ],
      "line": 27,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;1"
    },
    {
      "cells": [
        "Shawn Mendes"
      ],
      "line": 28,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;2"
    },
    {
      "cells": [
        "Tom Cruise"
      ],
      "line": 29,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;3"
    },
    {
      "cells": [
        "Zendaya"
      ],
      "line": 30,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;4"
    },
    {
      "cells": [
        "Ben Affleck"
      ],
      "line": 31,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;5"
    },
    {
      "cells": [
        "Leonardo DiCaprio"
      ],
      "line": 32,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;6"
    },
    {
      "cells": [
        "Emma Watson"
      ],
      "line": 33,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;7"
    },
    {
      "cells": [
        "Robert De Niro"
      ],
      "line": 34,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;8"
    },
    {
      "cells": [
        "Jennifer Aniston"
      ],
      "line": 35,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;9"
    },
    {
      "cells": [
        "Scarlett Johansson"
      ],
      "line": 36,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;10"
    },
    {
      "cells": [
        "Jason Derulo"
      ],
      "line": 37,
      "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1682705800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Shawn Mendes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Shawn Mendes\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 712702000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shawn Mendes",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4400261300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shawn Mendes",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 5091825000,
  "status": "passed"
});
formatter.after({
  "duration": 9168649900,
  "status": "passed"
});
formatter.before({
  "duration": 1616328500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Tom Cruise\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Tom Cruise\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 632230400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom Cruise",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4515563800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom Cruise",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 123531500,
  "status": "passed"
});
formatter.after({
  "duration": 5104523500,
  "status": "passed"
});
formatter.before({
  "duration": 1610439700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Zendaya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Zendaya\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 695779100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zendaya",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4375217700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zendaya",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 5087171300,
  "status": "passed"
});
formatter.after({
  "duration": 9180859800,
  "status": "passed"
});
formatter.before({
  "duration": 1609257100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Ben Affleck\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Ben Affleck\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 666382200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ben Affleck",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4774203700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ben Affleck",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 5114094500,
  "status": "passed"
});
formatter.after({
  "duration": 9211520700,
  "status": "passed"
});
formatter.before({
  "duration": 1612597400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Leonardo DiCaprio\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Leonardo DiCaprio\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 678659800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo DiCaprio",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4695845300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leonardo DiCaprio",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 5078590600,
  "status": "passed"
});
formatter.after({
  "duration": 5166468200,
  "status": "passed"
});
formatter.before({
  "duration": 1477835700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Emma Watson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Emma Watson\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 679031600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emma Watson",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4522058000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emma Watson",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 5091301500,
  "status": "passed"
});
formatter.after({
  "duration": 5188026600,
  "status": "passed"
});
formatter.before({
  "duration": 1473430000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Robert De Niro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Robert De Niro\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 667316200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert De Niro",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4619916900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert De Niro",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 80812500,
  "status": "passed"
});
formatter.after({
  "duration": 5207371300,
  "status": "passed"
});
formatter.before({
  "duration": 1412284700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Jennifer Aniston\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Jennifer Aniston\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 724524200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jennifer Aniston",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4938751500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jennifer Aniston",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 91653600,
  "status": "passed"
});
formatter.after({
  "duration": 5160806500,
  "status": "passed"
});
formatter.before({
  "duration": 1576580800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Scarlett Johansson\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Scarlett Johansson\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 643350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scarlett Johansson",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4671163700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scarlett Johansson",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 117804800,
  "status": "passed"
});
formatter.after({
  "duration": 5179402700,
  "status": "passed"
});
formatter.before({
  "duration": 1455160500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search for Hollywood celebrities and log their details",
  "description": "",
  "id": "testing-wiki-language-and-person-details-option-in-wikipedia;search-for-hollywood-celebrities-and-log-their-details;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User navigates to Wiki Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User searches for Hollywood celebrities \"Jason Derulo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Birthdates and spouses details of the \"Jason Derulo\" should be logged",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikiStepDefinitionFile.user_navigates_to_Wiki_Main_Page()"
});
formatter.result({
  "duration": 658789300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jason Derulo",
      "offset": 41
    }
  ],
  "location": "WikiStepDefinitionFile.user_searches_for_Hollywood_celebrities(String)"
});
formatter.result({
  "duration": 4266172600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jason Derulo",
      "offset": 39
    }
  ],
  "location": "WikiStepDefinitionFile.birthdates_and_spouses_details_of_the_should_be_logged(String)"
});
formatter.result({
  "duration": 5044370500,
  "status": "passed"
});
formatter.after({
  "duration": 5165573900,
  "status": "passed"
});
});
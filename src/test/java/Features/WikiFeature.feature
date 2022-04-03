Feature: Testing Wiki language and Person details option in Wikipedia


  Scenario Outline: Checking lanugage options on Wiki main page
    Given User navigates to Wiki Main Page
    When User selects "<lang>" language
    Then Wiki page should be displayed in the selected "<lang>" language
    Examples:
    |   lang    |
    | Arabic    |
    | Bangla    |
    | German    |
    | Italian   |
    | Spanish   |
    | French    |
    | Indonesian|
    | Portuguese|
    | Korean    |
    | English   |


  Scenario Outline: Search for Hollywood celebrities and log their details
    Given User navigates to Wiki Main Page
    When User searches for Hollywood celebrities "<celebName>"
    Then Birthdates and spouses details of the "<celebName>" should be logged
    Examples:
    |   celebName        |
    |   Shawn Mendes     |
    |   Tom Cruise       |
    |   Zendaya          |
    |   Ben Affleck      |
    |   Leonardo DiCaprio|
    |   Emma Watson      |
    |   Robert De Niro   |
    |   Jennifer Aniston |
    |   Scarlett Johansson|
    |   Jason Derulo      |




#    Shawn Mendes,Zendaya,Leonardo DiCaprio,Emma Watson,Jason Derulo don't have spouses


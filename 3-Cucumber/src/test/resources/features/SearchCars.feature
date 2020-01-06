@Search-Cars
Feature: Acceptance testing to validate Search cars page is working fine.
  In order to validate that
  the search cars page is working fine
  we will do the acceptance testing

  @Search-Cars-Positive
  Scenario: Validate search cars page
    Given I am on the home page "http://www.carsguide.com.au" of Carsguide website
    When I move to Car for Sale menu
      | Menu          |
      | Cars for Sale |
      | Sell My Car   |
    Then I click on "Search Cars" link
    And I select carbrand as "BMW" from AnyMake dropdown
    And I select carmodel as "1 Series" from SelectModel dropdown
    And I select location as "Australia" from SelectLocation dropdown
    And I select price as "$1,000" from price dropdown
    And I click on Find_My_Next_Car_button
    Then I should see list of searched cars
    And the page title should be "Bmw 1 Series Under 1000 for Sale ACT | carsguide"

Feature: E2E ecommerce validation

  Testing application regression

  Scenario: Ecommerce product delivery
    Given : I open ecommerce page
    When : I add items to card
    And : Validate the total price
    Then : Select the country and verify thankyou message
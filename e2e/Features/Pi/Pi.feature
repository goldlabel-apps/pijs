Feature: Pi Node Server

    In order to use the app
    As a event organiser
    I want to be be sure the app scores correctly

    Scenario: Starting a new match
        Given I am on the tennis page
        Then I should see "NEW GAME"
        And I wait "1" seconds
        And I click "#start-match"
        Then The score should be "0:0"
        And this scenario is done

    Scenario: Player 1 wins by a Whitewash
        Given I am on the tennis page
        And I click "#start-match"
        And I click "#player1"
        Then The score should be "15:0"
        And I wait "1" seconds
        And I click "#player1"
        Then The score should be "30:0"
        And I wait "1" seconds
        And I click "#player1"
        Then The score should be "40:0"
        And I wait "1" seconds
        And I click "#player1"
        Then I should see "Player 1 Wins"
        And I should see "GAME OVER"
        And this scenario is done

    Scenario: Players 1 & 2 battle it out
        Given I am on the tennis page
        And I click "#start-match"
        And I click "#player2"
        Then The score should be "0:15"
        And I wait "1" seconds
        And I click "#player1"
        Then The score should be "15:15"
        And I wait "1" seconds
        And I click "#player2"
        Then The score should be "15:30"
        And I wait "1" seconds
        And I click "#player1"
        Then The score should be "30:30"
        And I wait "1" seconds
        And I click "#player1"
        Then The score should be "40:30"
        And I wait "1" seconds
        And I click "#player2"
        Then The score should be "Deuce"
        And I wait "1" seconds
        And I click "#player1"
        Then The score should be "Advantage Player 1"
        And I wait "1" seconds
        And I click "#player2"
        Then The score should be "Deuce"
        And I wait "1" seconds
        And I click "#player2"
        Then The score should be "Advantage Player 2"
        And I wait "1" seconds
        And I click "#player2"
        Then I should see "Player 2 Wins"
        And I should see "GAME OVER"
        And this scenario is done
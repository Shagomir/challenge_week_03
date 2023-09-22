# 03 JavaScript: Password Generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Deployed Application

https://shagomir.github.io/challenge_week_03/

![screenshot of completed project](./password%20generator%20screenshot.PNG)

## Notes

The algorithm used prompts the user for length, and then choices of which character sets to include. There is an additional option for simplified passwords that omit commonly confused characters. 

Then it will add one character from each category, then finishes the password by adding random characters to the required length. After this, the password is shuffled so that the required characters are not at the beginning of the password to increase randomness and security. 

I used StackOverflow extensively to learn how to generate a random string, as well as shuffling the string. For shuffling, I am using the [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algorithm to ensure a truly random password. 

After completing the project I was asked by the instructor to refactor the code so that it comprises a series of functions. To demonstrate why you would do this, I have added additional buttons to the page to show how this works - I am able to feed specific parameters to the functions and generate a password. The simple password uses the simplified character list and is 8 characters long, while the complex password is 128 characters and uses the full gamut of charaters available for passwords. 
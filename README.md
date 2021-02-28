GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

-- the button click initiates the prompts

WHEN prompted for password criteria
THEN I select which criteria to include in the password

-- there are five user prompts


WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

-- there is validation that only between 8 and 128 characters can be selected

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

-- there are prompts for each of these character types

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

-- at least one character from each different character type can be used in the random password

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

-- random password is generated from ONLY user provided character types

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

-- password is displayed on-screen
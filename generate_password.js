function generatePassword(length = 12) {
    //Lists all letters, numbers, and punctuation
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_';
    password = '';
    //Starts at 0, and runs through the for loop and adds a character everytime unitl the password reaches 12 characters
    for (let i = 0; i < length; i++) {
    //Takes a number 0-1 and multiplies it by the length of our list of characters and floors it to choose a random character
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
    
}

module.exports = generatePassword;
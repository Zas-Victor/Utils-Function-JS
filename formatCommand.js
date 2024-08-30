exports.formatCommand = (text) => {
    return onlyLettersAndNumbers(
        this.removeAccentsAndSpecialCharacters(text.toLocaleLowerCase().trim())
    );
};
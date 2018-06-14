// window.onbeforeunload = function () {
//     clean();
// };

/* Inputs text (This is for buttons). */
function fillTextArea(text) {
    document.getElementById("mainTextArea").value = text.toString();
}

/* Cleans result box. */
function cleanResultBox() {
    // document.getElementById("mainTextArea").setAttribute('placeholder', 'Nebylo testováno');
    document.getElementById("mainTextArea").setAttribute('style', 'white');
}

/* Cleans input box */
function cleanTextArea() {
    document.getElementById("mainTextArea").value = '';
}

/* Homemade Unit Tests (Sorry I'am Java developer...) */
function unitTest(variant) {
    switch (variant) {
        case 1:
            fillTextArea('Jelenovi pivo nelej');
            break;
        case 2:
            fillTextArea('Tahle věta rozhodně není palindrom');
            break;
        case 3:
            let text = 'a';
            for (let i = 1; i < 1000000; i++) {
                text += 'a'
            }
            fillTextArea(text);
            break;
        case 4:
            fillTextArea('Ř4řEřichAhciřeř4ř');
            break;
        default:
    }
    palindrome();
}

/* This one is simple.. */
function removeSpaces(string) {
    return string.replace(/\s/g, '');
}

function clean() {
    cleanTextArea();
    cleanResultBox();
    showElementById("makePalindromeButton", true);
}

/* I know it's ugly, right? But it's still the way.. */
function removeDiacritic(string) {
    return removeSpaces(string)
        .replace(new RegExp('á', 'g'), 'a')
        .replace(new RegExp('č', 'g'), 'c')
        .replace(new RegExp('ď', 'g'), 'd')
        .replace(new RegExp('é', 'g'), 'e')
        .replace(new RegExp('ě', 'g'), 'e')
        .replace(new RegExp('í', 'g'), 'i')
        .replace(new RegExp('ň', 'g'), 'n')
        .replace(new RegExp('ó', 'g'), 'o')
        .replace(new RegExp('ř', 'g'), 'r')
        .replace(new RegExp('š', 'g'), 's')
        .replace(new RegExp('ť', 'g'), 't')
        .replace(new RegExp('ů', 'g'), 'u')
        .replace(new RegExp('ú', 'g'), 'u')
        .replace(new RegExp('ý', 'g'), 'y')
        .replace(new RegExp('ž', 'g'), 'z')
        .replace(new RegExp('Á', 'g'), 'A')
        .replace(new RegExp('Č', 'g'), 'C')
        .replace(new RegExp('Ď', 'g'), 'D')
        .replace(new RegExp('É', 'g'), 'E')
        .replace(new RegExp('Ě', 'g'), 'E')
        .replace(new RegExp('Í', 'g'), 'I')
        .replace(new RegExp('Ň', 'g'), 'N')
        .replace(new RegExp('Ó', 'g'), 'O')
        .replace(new RegExp('Ř', 'g'), 'R')
        .replace(new RegExp('Š', 'g'), 'S')
        .replace(new RegExp('Ť', 'g'), 'T')
        .replace(new RegExp('Ů', 'g'), 'U')
        .replace(new RegExp('Ú', 'g'), 'U')
        .replace(new RegExp('Ý', 'g'), 'Y')
        .replace(new RegExp('Ž', 'g'), 'Z');
}

function showElementById(id, boolean) {
    document.getElementById(id).disabled = boolean;
}

function palindrome() {
    let colorValid = 'background:lightgreen';
    let colorInvalid = 'background:LightCoral';
    let inputText = document.getElementById("mainTextArea").value;
    let isPalindrome = checkPalindrome(inputText);
    if (isPalindrome) {

        document.getElementById("mainTextArea").setAttribute('style', colorValid);
        showElementById("makePalindromeButton", true);
    }
    else {

        document.getElementById("mainTextArea").setAttribute('style', colorInvalid);
        showElementById("makePalindromeButton", false);
    }
}

/* Mirrors the input if it's not palindrome already. */
function makePalindrome() {
    let inputText = document.getElementById("mainTextArea").value;
    if (checkPalindrome(inputText) === false) {
        inputText += reverse(inputText);
        document.getElementById("mainTextArea").value = inputText;
        palindrome();
    }
}

/* Reverses input string. */
function reverse(string) {
    return string.split("").reverse().join("");
}

/* Returns true if input string is palindrome.  */
module.exports = {
    palindrome: function checkPalindrome(string) {
        /* Remove special characters, spaces and make lowercase. */
        let removeChar = removeDiacritic(string).toString().replace(/[^A-Za-z0-9]/ig, "").toLowerCase();
        /* Reverse text for comparison. */
        let checkPalindrome = reverse(removeChar);
        if (removeChar === '') {
            clean();
            return;
        }
        /* Check to see if string is a palindrome. */
        return removeChar === checkPalindrome;
    }
};



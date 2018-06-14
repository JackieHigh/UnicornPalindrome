/* Returns true if input string is palindrome.  */
function checkPalindrome(string) {
    /* Remove special characters, spaces and make lowercase. */
    let removeChar = removeDiacritic(string).toString().replace(/[^A-Za-z0-9]/ig, "").toLowerCase();
    /* Reverse text for comparison. */
    let checkPalindrome = reverse(removeChar);
    /* Check to see if string is a palindrome. */
    return removeChar === checkPalindrome;
}

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

function removeSpaces(string) {
    return string.replace(/\s/g, '');
}

/* Reverses input string. */
function reverse(string) {
    return string.split("").reverse().join("");
}

QUnit.test("Negative palindrome test", function (assert) {
    var value = checkPalindrome("Abc");
    assert.equal(value, false, "Correct, input is not palindrome.");
}),
    QUnit.test("Negative palindrome test", function (assert) {
        var value = checkPalindrome("Ahoj");
        assert.equal(value, false, "Correct, input is not palindrome.");
    }),
    QUnit.test("Negative palindrome test", function (assert) {
        var value = checkPalindrome("Baf");
        assert.equal(value, false, "Correct, input is not palindrome.");
    }),
    QUnit.test("Negative palindrome test", function (assert) {
        var value = checkPalindrome("Lek");
        assert.equal(value, false, "Correct, input is not palindrome.");
    }),
    QUnit.test("Negative palindrome test", function (assert) {
        var value = checkPalindrome("Palindrom");
        assert.equal(value, false, "Correct, input is not palindrome.");
    }),
    QUnit.test("Positive palindrome test", function (assert) {
        var value = checkPalindrome("Anna");
        assert.equal(value, true, "Correct, input is palindrome.");
    }),
    QUnit.test("Positive palindrome test", function (assert) {
        var value = checkPalindrome("1aba1");
        assert.equal(value, true, "Correct, input is palindrome.");
    }),
    QUnit.test("Positive palindrome test", function (assert) {
        var value = checkPalindrome("V elipse spí lev.");
        assert.equal(value, true, "Correct, input is palindrome.");
    }),
    QUnit.test("Positive palindrome test", function (assert) {
        var value = checkPalindrome("Kuna nese nanuk.");
        assert.equal(value, true, "Correct, input is palindrome.");
    }),
    QUnit.test("Positive palindrome test", function (assert) {
        var value = checkPalindrome("Ahoj #Karle# jak se mášameskajelrakjoha.");
        assert.equal(value, true, "Correct, input is palindrome.");
    });
const palindrome = require('./Palindrome');
QUnit.test("Negative palindrome test", function (assert) {
    var value = palindrome.palindrome("Abc");
    assert.equal(value, false, "Conot palindrome.");
});
QUnit.test("Negative palindrome test", function (assert) {
    var value = palindrome.palindrome("Ahoj");
    assert.equal(value, false, "Correct, input is not palindrome.");
});
QUnit.test("Negative palindrome test", function (assert) {
    var value = palindrome.palindrome("Baf");
    assert.equal(value, false, "Correct, input is not palindrome.");
});
QUnit.test("Negative palindrome test", function (assert) {
    var value = palindrome.palindrome("Lek");
    assert.equal(value, false, "Correct, input is not palindrome.");
});
QUnit.test("Negative palindrome test", function (assert) {
    var value = palindrome.palindrome("Palindrom");
    assert.equal(value, false, "Correct, input is not palindrome.");
});
QUnit.test("Positive palindrome test", function (assert) {
    var value = palindrome.palindrome("Anna");
    assert.equal(value, true, "Correct, input is palindrome.");
});
QUnit.test("Positive palindrome test", function (assert) {
    var value = palindrome.palindrome("1aba1");
    assert.equal(value, true, "Correct, input is palindrome.");
});
QUnit.test("Positive palindrome test", function (assert) {
    var value = palindrome.palindrome("V elipse spí lev.");
    assert.equal(value, true, "Correct, input is palindrome.");
});
QUnit.test("Positive palindrome test", function (assert) {
    var value = palindrome.palindrome("Kuna nese nanuk.");
    assert.equal(value, true, "Correct, input is palindrome.");
});
QUnit.test("Positive palindrome test", function (assert) {
    var value = palindrome.palindrome("Ahoj #Karle# jak se mášameskajelrakjoha.");
    assert.equal(value, true, "Correct, input is palindrome.");
});
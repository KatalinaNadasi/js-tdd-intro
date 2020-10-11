// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javascript'), 'Javascript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

// trois cas de test :
//
// une chaîne avec plusieurs mots
//
// une chaîne avec un seul mot (voire une seule lettre)
//
// une chaîne vide

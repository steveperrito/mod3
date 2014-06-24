/* parts of a url:

http:// = protocol

something.com = url
something.com:80 = port
/path/to/file.html#id =  path
?blala=jack&to=him = essentially object in javascript called meta data.
 */

// eval will run a STRING as javascript. for example
// x="y=4" eval(x) returns 4.

//indexOf str= "string"
// we could do str.indexOf("ing").

//regexp = regular expressions they are noted in these brackets: / regular exp /
//$ means it must match from beginning of string
//() means you are captureing certain things in that expression
//[A-Z] I want to match anything that's uppercase letter
//really good for URLs.

//substring(int start, int end)


var name = "bob hope";
console.log(upperCaseFirstLetter(name));

function upperCaseFirstLetter(str) {

    var words = str.split(" ");
    var capitalized = [];

    words.forEach(function(word){
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        capitalized.push(word);
    });

    return capitalized.join(" ");
};

//better version using map

console.log(uprCaseFirstLetMap(name));

function uprCaseFirstLetMap (string) {
    var words = string.split(" ");

    var capitalized = words.map(function(word){
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    });
    return capitalized.join(" ");
}
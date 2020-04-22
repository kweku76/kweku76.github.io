//CHALLENGE 1: YOUR AGE IN DAYS

function ageInDays() {
    var birthYear = prompt('what year were you born?');
    var current = new Date().getFullYear();
    var daysAge = (current - birthYear) * 365;
    var h1 = document.createElement('h1'); //creating html element from javascript
    var textAnswer = document.createTextNode('you are ' + daysAge + ' days old');
    h1.setAttribute('id', 'ageInDays'); //set the h1 id to 'ageindays' variable
    h1.appendChild(textAnswer); //add the textanswer above
    document.getElementById('flex-box-result').appendChild(h1); //add the text to the div with the id 'flex-box-result'
    console.log(current); //show current year in console
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//CAT GENERATOR

function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
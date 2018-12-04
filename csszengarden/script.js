// Gat all <p> tags
console.dir(document.getElementsByTagName('p'));

document.getElementsByTagName('p')[2].innerHTML = 'Hello Dude';

// Gat all <abbr> tags child of 'explanation' class
console.dir(document.querySelectorAll('.explanation abbr'));

document.querySelectorAll('.explanation abbr')[0].innerHTML = 'Coucou';

// Get first <h3> tag child of 'zen-explenation' id
console.dir(document.querySelector('#zen-explanation h3'));

document.querySelector('#zen-explanation h3').innerHTML = 'Yo!';

// Change the content of all <h3> tags of the document
let i;
let h3List = document.getElementsByTagName('h3');

console.log(h3List.length);

for (i = 0; i < h3List.length; i++) {
    h3List[i].innerHTML = 'New h3 number: ' + (i+1);
}
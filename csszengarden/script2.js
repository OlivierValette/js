// Get summary block
var summary = document.getElementById('zen-summary');
console.log(summary);

// Get select a design block
var design = document.querySelector('#design-selection nav');
console.log(design);

// Write design block on the left
document.getElementById('zen-summary').innerHTML = design.innerHTML;

// Write summary block on the right
design.innerHTML = summary.innerHTML;

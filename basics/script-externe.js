var a = Math.floor(Math.random() * 20);
alert(a);
var b = -1
var i = 1
while (b != a) {
    b = prompt('New guess: ');
    document.write('step ' + i + ' guess: ' + b);
    i++;
    if (b > a) {
        document.write('too big');
    } else {
        document.write('too small');
    }
}
document.write('success, with ' + (i-1) + ' steps ');
// A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive. //

// function cursorCheck(str) { /* your code */ }
// cursorCheck('Hello I am OstaP') // true
// cursorCheck('Superman is here') // false

function cursorCheck(str) { 
    if (str.toLowerCase().includes(`ironman`) || str.toLowerCase().includes(`cursor`) || str.toLowerCase().includes(`ostap`) ) {
        return true;
    }   else {
        return false;
    }
}
cursorCheck('Hello I am OsTaP');
cursorCheck('Superman is here');

 console.log(cursorCheck('Hello I am OsTaP'));
 console.log(cursorCheck('Superman is here'));

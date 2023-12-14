'use strict' 

let lab="LAB2#B";
let labPosition=lab.indexOf("#");
let labRow=lab.substring(labPosition+1);
let lastLetter=labRow.codePointAt(0);

alert(String.fromCodePoint(lastLetter+1));


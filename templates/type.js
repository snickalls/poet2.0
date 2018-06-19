// set up text to print, each item in array is new line
var aText = new Array("A Moon To Magnify The Wheatfields You Tread  ",
"  ",
" ",
" Everything violent with irreducible voices, the salt of the reflection   ",
" and piles of aromatic bread in front of fortnight.   ",
" A raft is not enough to strike me and keep me   ",
" from the boulevard of your spacious mysteries.  ",
"  ",
" Pockets of iron converted into silk.   ",
" So the real pride lives on in a kiwi,   ",
" the absorbent house of the horse,   ",
" the warm cactus that is delicate and electric.  ",
"  ",
" You, who is like a whisper iguana among the kissing of many child.",
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 30; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();

function genQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  var currentQ = quotes[randNum];
  document.getElementById('quote').innerHTML = currentQ;
}

//quote array
var quotes = [
"When your rage is choking you, it is best to say nothing.     Octavia E.   Butler",
"the people who are crazy enough to think they can change the world are the ones who do.     Steve Jobs",
"If you always put limit on everything you do, physical or anything else.   It will spread into your work and into your life.   There are no limits.   There are only plateaus, and you must not stay there, you must go beyond them.   Bruce Lee",
"Don't cry because it's over, smile because it happened.   Dr Seuss",
"There are years that ask questions and years that answer.   Zora Neale Hurston",
"The only thing that is constant is change.   Heraclitus",
"Facts are stubborn, but statistics are more pliable.   Mark Twain",
"It is sometimes an appropriate response to reality to go insane.   Philip K.   Dick"]

genQuote();

function tweetMe() {
  var cq = document.getElementById('quote').innerHTML;
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+cq+'');
}
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

var quotes = [
  {
     quote: 'Los grandes nunca descienden',
     source: 'Bebote Alvarez',
     citation: 'Indesingente',
     year: 2013
  },
  {
     quote: 'Vamos mal, pero venimos bien',
     source: 'El Gato',
   //   citation: 'Chetoslovaquia',
     year: 2015
  },
  {
     quote: 'Los sueños, sueños son, pero aqui se hacen realidad',
     source: 'Eber Hugo',
     citation: 'atrevase a soñar',
     year: 1991
  },
  {
     quote: 'Corte, sonrisa, corte, sonrisa',
     source: 'Diego',
     citation: 'Clasico platense',
     year: 2019,
  },
  {
   quote: 'El que deposito dolares, recibira dolares',
   source: 'Eduardo Duhalde',
   citation: 'Argenzuela',
   year: 2001
},  
];

//
// /***
//  * `getRandomQuote` function
// ***/

function getRandomQuote() {
   let randomQuote;
   for (let i = 0; i < quotes.length; i++) {
       randomQuote = Math.floor(Math.random() * quotes.length);
   }
   randomQuote = quotes[randomQuote];
   return randomQuote;
} 
  /***
 * `printQuote` function
***/

function printQuote() {
   let random = getRandomQuote();
   let print = ' ';
   print = '<p class="quote">' + random.quote + '</p>' +  '<p class="source">' + random.source;
      if( random.hasOwnProperty('citation')){
         print += '<span class="citation">' + random.citation + '</span>';
         } if( random.hasOwnProperty('year')){
            print += '<span class="year">' + random.year + '</span>';
            }         
   print += '</p>';
   document.getElementById('quote-box').innerHTML = print;
   return print;
} 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

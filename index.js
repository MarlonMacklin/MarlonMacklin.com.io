// Array of Quotes
let quotes = [
    "Through out Heaven and Earth You are the Chosen One",
    "Mr.Hero has Good Sandwhiches",
    "Sometimes i whish i was Born with a tint of white hair",
    "To Master the art of rizz one must first master the art of Conversation.",
    "Pizza",
    "GlideguyYT",
    "Even if a Person is successful society will notice the slightest mistake so reminder mistakes are part of the process - Einstein",
    "Making this Took a while.",
    "I like to read Manhwas.",
    "Life is Roblox.",
    "I want a Pet Duck",
    "Im called Unc and im not even that old"
    ];
    
    
    // Run the quote generator every time the page loads
    window.addEventListener("load", quoteGenerator);
    
    
    // Function to generate and display a random quote
    function quoteGenerator() {
       
       // Number of quotes in the array
      let quoteCount = quotes.length;
       
       // Generate a random integer to select a quote
      let randomQuote = randomInt(0, quoteCount-1);
       
       // Retrieve a randomly-selected quote
      let quote = quotes[randomQuote];
       
       
       // Display the random quote
       document.getElementsByTagName("blockquote")[0].innerHTML = quote;
    }
    
    
    
    
    
    
    
    
    /*=================================================================*/
    // Function to return a randomly-selected integer between lowest and highest, inclusive
    function randomInt(lowest, highest) {
       let size = highest - lowest + 1;
       return Math.floor(lowest + size*Math.random());
    }
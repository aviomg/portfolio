// Function to split the .txt content into individual poems
function splitPoemsFromText(fileContent) {
    return fileContent.split('\n\n\n').map((poem) => poem.trim());
  }
  
  // Function to save the updated HTML to entries.html
  function saveToEntriesHTML(content) {
    const blob = new Blob([content], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'entries.html';
    a.click();
  }


var counter = 1;
function createPoemDiv(text){
const article = document.createElement('article');
id = "poem" + counter.toString()
article.id = id;
counter++;
article.classList.add('poem-container');

const header = document.createElement('h1');
header.classList.add('poem-head');
header.id = "heading";

const lines = text.split('\n');

const title = document.createElement('p');
const title1 = document.createElement('p');
title.textContent = lines[0].trim();
flag = lines[1] != null;
header.appendChild(title);
if(flag){
  title1.textContent = lines[1].trim();
  header.appendChild(title1);
}
article.appendChild(header);

const container = document.createElement('div');
container.id="body1";


let paragraphDiv = document.createElement('div');
paragraphDiv.classList.add('poem-para');


  lines.forEach((line, index) => {
    if(index>=2){
    if (line.trim() === '') {
        if (paragraphDiv.childElementCount > 0) {
            container.appendChild(paragraphDiv); // Append the completed paragraph div
            paragraphDiv = document.createElement('div'); // Start a new paragraph div
            paragraphDiv.classList.add('poem-para'); // Apply styling
          }
        } else{
            const p = document.createElement('p');
            p.textContent = line.trim(); // Remove extra spaces
            if (/^\s/.test(line)) {
                p.style.marginLeft = '56px';
            }
            paragraphDiv.appendChild(p);
        }
}});
    if (paragraphDiv.childElementCount > 0) {
        container.appendChild(paragraphDiv);
      }
      article.appendChild(container);
      return article;
  //lines.forEach((line) => {
 //   const p = document.createElement('p');
   // p.textContent = line.trim();
    //if (/^\s/.test(line)) {
      //  p.style.marginLeft = '56px';
   // }
    //container.appendChild(p);
 // });
  //return container
}

function generatePoemHTML(poemsfile) {
  console.log("running genpoemhtml");
  const container = document.createElement('div');
  container.id = 'entries';
  fetch('../assets/nyc.txt')
.then((response) => response.text())
.then((fileContent => {
    const poems = splitPoemsFromText(fileContent);
    poems.forEach((poem) => {
      const poemDiv = createPoemDiv(poem); // Your existing logic
      container.appendChild(poemDiv);
    })
  })).catch((err)=>{ console.error('Error fetching or processing the .txt file:', err);

  });
  return container; // Return the container with all poems
}

function format_poem(num_new){
fetch('../assets/nyc.txt')
.then((response) => response.text())
.then((fileContent => {
    const poems = splitPoemsFromText(fileContent);
    const newEntriesContainer = document.getElementById('entries');
    for(i=0;i<num_new;i++){
      const poemDiv = createPoemDiv(poems[i]);
      newEntriesContainer.appendChild(poemDiv);
    }
    const entriesContainer = document.getElementById('archived-entries');
    console.log(poems.length);
    for(i=num_new;i<poems.length;i++){
      const poemDiv = createPoemDiv(poems[i]);
      entriesContainer.appendChild(poemDiv);
    }
    scrolltoHash();
    
   /* poems.forEach((poem, index=num_new)=>{
        const poemDiv = createPoemDiv(poem);
        entriesContainer.appendChild(poemDiv);
    })*/
})).catch((err)=>{
    console.error('Error fetching or processing the .txt file:', err);
    document.getElementById('archived-entries').textContent = 'Failed to load poems.';
});
//window.generatePoemHTML = generatePoemHTML;
}

function scrolltoHash(){
  const hash=window.location.hash;
  console.log(hash);
  if (hash) {
    
    const targetElement = document.querySelector(hash);
    console.log(targetElement);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
}

// Export the function so it can be used in other files


format_poem(2);
/*
const poem = `routine (revised 11/21 and 12/3)

I’ve thieved one night’s molten rest and spread it like butter 
across the past 5 and my pants pinched my tummy when i bought
them but slide today down my hips
as I walk because my belt doesn’t fit either, anymore and I miss loving 
my favorite snacks and eating 
anything other than junk food text messages and I miss concern 
over my red eyes in the morning or my fallen hairs 
making a graveyard of the kitchen, and I miss craving
a good sleep and a well-rested wake, I miss seeing 
the sunrise or more than 6 months without my clothes 
forgetting how to fit and I miss missing
my friends and my yarn and my art and my bed,
I miss missing

I hate that these days, my best words evaporate
my more seductive sentences solidifying only as I walk, urgent and profound 
but melted by the time I reach my destination, although I never really reach 
my destination because there isn’t one;
I’m just walking to think and it feels like these days that’s all I do is 
walk and think and walk and think and walk and nothing changes and nothing stays the same and there’s always a new grief and I’m not allowed to use 
the elevator or eat breakfast or put cream in my coffee, all I have time to do is walk and follow my foolish rules and eat my words and panic over the hours passing like my back, cracked, and
think 
and walk and think and walk and I wonder 
if I ever lived rule-less, if I even could; I’ve never tried

I’m nearing my non-destination, my body lacks resolution.
though I don’t fret, I’ll
loiter for a bit
forget myself for a minute, maybe two
until the space in between comes to me sated, almost glutted, calls me to rise and so 
I’ll rise, walk again and think 
up a new empire and fill it with brand new ways to think about the same old things;
I imagine that’s what they call routine.

`;

function appendPoem(poem,archive){
    const poemDiv = createPoemDiv(poem);
    if(archive){
        document.getElementById('archived-entries').appendChild(poemDiv);
    }
    else{
        document.getElementById('entries').appendChild(poemDiv);
    }
}

const done = appendPoem(poem,true);
// Generate the div
//const poemDiv = createPoemDiv(poem);
//console.log(id);
// Append it to an existing container on the page
*/




  /*
  // Main function to process the .txt file and generate entries.html
  document.getElementById('poemFileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fileContent = e.target.result;
  
        // Split the content into individual poems
        const poems = splitPoemsFromText(fileContent);
  
        // Create a container for all poems
        const entriesContainer = document.createElement('div');
        entriesContainer.id = 'entries';
        entriesContainer.classList.add('max-w-4xl', 'mx-auto', 'py-10', 'px-6');
  
        // Generate HTML for each poem and append to the container
        poems.forEach((poem) => {
          const poemDiv = createPoemDiv(poem);
          entriesContainer.appendChild(poemDiv);
        });
  
        // Generate the full HTML content for entries.html
        const entriesHTML = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Entries</title>
            <link href="../path-to-tailwind.css" rel="stylesheet">
          </head>
          <body class="bg-gray-100 text-gray-800">
            <header class="pb-6 pt-8">
              <div class="container mx-auto text-center">
                <h2 class="text-4xl font-serif font-bold mb-4">blog posts</h2>
                <p class="text-gray-700 italic">writing and ranting and rhyming and etc..</p>
              </div>
            </header>
            ${entriesContainer.outerHTML}
          </body>
          </html>
        `;
  
        // Save the generated HTML to entries.html
        saveToEntriesHTML(entriesHTML);
      };
      reader.readAsText(file);
    }
  });*/
  


// Fetch "entries.html" and create a sneak peek
//const container = window.generatePoemHTML('../assets/nyc.txt');
//console.log(container.children);
/*function splitPoemsFromText(fileContent) {
  return fileContent.split('\n\n\n').map((poem) => poem.trim());
}*/
/*
var counter = 3;
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
title.textContent = lines[0].trim();
header.appendChild(title);
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
      return article.outerHTML;
      //return article;
}
function generatePoemHTML() {
  //console.log("running genpoemhtml");
  //const container = document.createElement('div');
  //container.id = 'entries';
 return fetch('../assets/nyc.txt')
.then((response) => response.text())
.then((fileContent) => {
    const poems = splitPoemsFromText(fileContent);
    let poemHTML = '';
    poems.forEach((poem) => {
      const poemDivHTML = createPoemDiv(poem);
      poemHTML += poemDivHTML; // Your existing logic
      //container.appendChild(poemDiv);
    });
    const htmlFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Poems</title>
      <link href="../path-to-tailwind.css" rel="stylesheet">
      <style>
       
        .poem-container { margin-bottom: 20px; }
        .poem-head { font-weight: bold; margin-bottom: 10px; }
        .poem-para { margin-top: 10px; }
      </style>
    </head>
    <body>
      <div id="entries">
        ${poemHTML} <!-- Insert the poems here -->
      </div>
    </body>
    </html>
  `;

  return htmlFile; // Return the entire HTML file as a string
})
.catch((err) => {
  console.error('Error fetching or processing the .txt file:', err);
  return `<p>Error loading poems. Please try again later.</p>`;
});

 // console.log(container.childElementCount);
 // return container; // Return the container with all poems
}
*/

/*generatePoemHTML().then((htmlFile) => {
  // Create a Blob and trigger a download
  const blob = new Blob([htmlFile], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'poems.html';
  link.click();
});*/
//const cont = generatePoemHTML();

function fromtxt(limit){
  fetch('../pages/poems2.html')
  .then((response) => response.text())
  .then((html) => {
    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Select the first article to preview
    const articles = doc.querySelectorAll('article');

  console.log(articles);
  console.log(articles.length); //this is a div element with many article elements for each poem. the article ids are the poem numbers
  for (i=0;i<limit;i++){

    firstArticle = articles[i].cloneNode(true);
    const title = firstArticle.querySelector('h1');
    if (title) {
      var id = "";
      id = firstArticle.id;
      const link = document.createElement('a');
      link.href = 'entries.html' + '#' + id; // Link to the full entries page
      lines = title.querySelectorAll('p');
     //console.log(lines);
      let cont = "";
      for (const line of title.querySelectorAll('p')){
        console.log(line.textContent);
        const newline = document.createElement('p');
        newline.textContent = line.textContent;
        link.appendChild(newline);
      }
      link.classList.add('text-indigo-600', 'hover:underline', 'mt-3'); // Add Tailwind styling
      title.innerHTML = ''; // Clear current content
      title.appendChild(link); // Add the link to the title
    }
    const body = firstArticle.querySelector('#body1');
    console.log("look!");
    if(!body){
      console.log("not found");
    }
    else{console.log(body);}
    const paragraphs = body.querySelectorAll('p');
    const trunc = document.createElement('div');
    let wordCount = 0;
    const limit = 30;
    paragraphs.forEach((p) => {
      // console.log(p.innerText);
       if (wordCount < limit){
           words = p.innerText.split(' ');
           const rem = limit - wordCount;
           if(words.length <= rem){
               const newP = document.createElement('p');
               if(words.length == rem){newP.innerText = p.innerText + '...';}
               else{newP.innerText = p.innerText;}
               trunc.appendChild(newP);
               wordCount += words.length;
           }
           else{
               const newP = document.createElement('p');
               newP.innerText = words.slice(0, rem).join(' ') + '...';
               trunc.appendChild(newP);
               wordCount = 150; // Ensure we stop after this
           }}});
           firstArticle.innerHTML = ''; // Clear all original content
    firstArticle.appendChild(title); // Re-add the title
    firstArticle.appendChild(trunc);
    // Add a custom border to the article
    firstArticle.classList.add('border', 'border-indigo-500', 'rounded-lg', 'p-2');
    const previewContainer = document.querySelector('#poetry-preview');
    previewContainer.appendChild(firstArticle);}
  })
  .catch((err) => {
    console.error('Failed to load preview:', err);
    document.querySelector('#poetry-preview').innerText = 'Error loading preview.';
  });
}
  




function sneakpeek(entry_id,limit){
fetch('entries.html')
  .then((response) => response.text())
  .then((html) => {
    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Select the first article to preview
    const articles = doc.querySelectorAll(entry_id);

    len = articles.length;
    console.log(articles.length);
    for(i=0; i<limit;i++){
        firstArticle = articles[i].cloneNode(true);
        limit-=1;

        const title = firstArticle.querySelector('h1');
        if (title) {
          var id = "";
          id = firstArticle.id;
          const link = document.createElement('a');
          link.href = 'entries.html' + '#' + id; // Link to the full entries page
          lines = title.querySelectorAll('p');
         //console.log(lines);
          let cont = "";
          for (const line of title.querySelectorAll('p')){
            console.log(line.textContent);
            const newline = document.createElement('p');
            newline.textContent = line.textContent;
            link.appendChild(newline);
          }
         // link.textContent = cont;//title.textContent.split('\n').join('\n'); // Use the current title text
          //console.log(link.textContent);
          link.classList.add('text-indigo-600', 'hover:underline', 'mt-3'); // Add Tailwind styling
          title.innerHTML = ''; // Clear current content
          title.appendChild(link); // Add the link to the title
        }
    // Optional: Truncate content for preview

      const size = 4;
      const body = firstArticle.querySelector('#body1');
      console.log(body);
  //  console.log(body.querySelectorAll('p'));
    const paragraphs = body.querySelectorAll('p');
    const trunc = document.createElement('div');
    let wordCount = 0;
    const limit = 30;
    /*paragraphs.forEach((p, index) => {
      if (index >= size) p.remove(); // Keep only the first 3 paragraphs
    });*/
    paragraphs.forEach((p) => {
       // console.log(p.innerText);
        if (wordCount < limit){
            words = p.innerText.split(' ');
            const rem = limit - wordCount;
            if(words.length <= rem){
                const newP = document.createElement('p');
                if(words.length == rem){newP.innerText = p.innerText + '...';}
                else{newP.innerText = p.innerText;}
                trunc.appendChild(newP);
                wordCount += words.length;
            }
            else{
                const newP = document.createElement('p');
                newP.innerText = words.slice(0, rem).join(' ') + '...';
                trunc.appendChild(newP);
                wordCount = 150; // Ensure we stop after this
            }
        }
        // Keep only the first 3 paragraphs
      });
   // var lastp = paragraphs[size-1];
   // console.log(lastp);
   // lastp.textContent = lastp.textContent + "...";

  /*  const paragraphs = firstArticle.querySelectorAll('p');
    if (paragraphs.length > 0) {
      // Combine all <p> text content into one string
      const fullText = Array.from(paragraphs)
        .map((p) => p.innerText)
        .join(' '); // Combine paragraphs with spaces

      // Truncate the combined text to 150 words
      const truncatedText = fullText.split(' ').slice(0, 150).join(' ') + '...';
      // Replace the content of the first article with the truncated text
      const truncatedParagraph = document.createElement('p');
      truncatedParagraph.textContent = truncatedText;
      firstArticle.innerHTML = ''; // Clear all original content
      firstArticle.appendChild(title); // Re-add the title
      firstArticle.appendChild(truncatedParagraph); // Add truncated content
    }*/
      firstArticle.innerHTML = ''; // Clear all original content
    firstArticle.appendChild(title); // Re-add the title
    firstArticle.appendChild(trunc);
    // Add a custom border to the article
    firstArticle.classList.add('border', 'border-indigo-500', 'rounded-lg', 'p-2');

    // Add a "Read More" link
    

    // Append the preview to the container
    const previewContainer = document.querySelector('#poetry-preview');
    previewContainer.appendChild(firstArticle);}
  })
  .catch((err) => {
    console.error('Failed to load preview:', err);
    document.querySelector('#poetry-preview').innerText = 'Error loading preview.';
  });
}


let limit = 8;
sneakpeek('#entries article');
fromtxt(limit);

/*
fetch('../assets/nyc.txt')
.then((response) => response.text())
.then((fileContent => {
    const poems = splitPoemsFromText(fileContent);
    const entriesContainer = document.getElementById('archived-entries');
    poems.forEach((poem)=>{
        const poemDiv = createPoemDiv(poem);
        entriesContainer.appendChild(poemDiv);
    })
})).catch((err)=>{
    console.error('Error fetching or processing the .txt file:', err);
    document.getElementById('archived-entries').textContent = 'Failed to load poems.';
});*/
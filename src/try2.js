// Function to split the poems from the .txt file
function splitPoemsFromText(fileContent) {
    return fileContent.split('\n\n\n').map((poem) => poem.trim());
  }

  function num_lines_in_title(text){
    const lines = text.split('\n');
    let count = 0;
    for (const line of lines) {
        if (line.trim() === '') {
          break;
        }
        count++;}
        return count;
  }
  
  // Function to create a single sneak peek article
  function createSneakPeekArticle(text, id, charLimit = 80,index) {
    const article = document.createElement('article');
    article.id = id;
    article.classList.add('preview-poem-container');

    count = num_lines_in_title(text);
    if(count>1){
        flag = true;
    }
    else{flag=false;}
    // Extract the title (first line)
    const lines = text.split('\n');
    const titleText = index + ". " + lines[0].trim();
    let titleText2 = "";
    if (flag){
        titleText2 = lines[1].trim();
       // console.log(titleText2);
    }   
  
    // Create and style the title
    const header = document.createElement('h1');
    header.classList.add('poem-head');
    const title = document.createElement('p');
   
    const title1 = document.createElement('p');
    title.textContent = titleText;
    if(flag){
    title1.textContent = titleText2;}
  
    // Make the title a clickable link
    const link = document.createElement('a');
    link.href = `./entries.html#${id}`; // Link to full poem view
    link.classList.add('preview-title'); // Styling
    link.appendChild(title);
    if(flag){
    link.appendChild(title1);}
    header.appendChild(link);
  
    // Append the title to the article
    article.appendChild(header);
  
    // Create a preview of the content (truncate to character limit)
    const bodyPreview = document.createElement('div');
    bodyPreview.classList.add('poem-preview');
  
    let charCount = 0;

    if(flag){
    //    console.log(lines[1]);
        lines.slice(count).forEach((line) => {
            if (charCount < charLimit) {
              const remainingChars = charLimit - charCount;
              const truncatedLine = line.slice(0, remainingChars);
              const p = document.createElement('p');
        
              if (line.length <= remainingChars) {
                p.textContent = truncatedLine;
                bodyPreview.appendChild(p);
                charCount += truncatedLine.length;
              } else {
                p.textContent = truncatedLine + '...';
                bodyPreview.appendChild(p);
                charCount = charLimit; // Stop further processing
              }
            }
          });
    }
  
    else{lines.slice(1).forEach((line) => {
      if (charCount < charLimit) {
        const remainingChars = charLimit - charCount;
        const truncatedLine = line.slice(0, remainingChars);
        const p = document.createElement('p');
  
        if (line.length <= remainingChars) {
          p.textContent = truncatedLine;
          bodyPreview.appendChild(p);
          charCount += truncatedLine.length;
        } else {
          p.textContent = truncatedLine + '...';
          bodyPreview.appendChild(p);
          charCount = charLimit; // Stop further processing
        }
      }
    });}
  
    // Append the preview content to the article
    article.appendChild(bodyPreview);
  
    return article;
  }
  
  // Function to dynamically generate sneak peeks
  function generateSneakPeeksFromTxt(filePath, previewContainerId, charLimit,numPoems) {
    fetch(filePath)
      .then((response) => response.text())
      .then((fileContent) => {
        const poems = splitPoemsFromText(fileContent);
        const previewContainer = document.querySelector(previewContainerId);

        counter = 0;
        ind = 0;
  
        poems.forEach((poem, index=2) => {
          if(counter<numPoems){  
          const articleId = `poem${index + 1}`;
          const sneakPeekArticle = createSneakPeekArticle(poem, articleId, charLimit,counter+1);
          previewContainer.appendChild(sneakPeekArticle);
          counter++;}
        });
      })
      .catch((err) => {
        console.error('Failed to load and process .txt file:', err);
        const previewContainer = document.querySelector(previewContainerId);
        previewContainer.textContent = 'Error loading poetry previews.';
      });
  }
  
  // Initialize sneak peeks
  generateSneakPeeksFromTxt('../assets/nyc.txt', '#poetry-preview', 60,5);
  

/*function run{
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
});




}*/
// Function to split the poems from the .txt file
/*
function splitPoemsFromText(fileContent) {
    return fileContent.split('\n\n\n').map((poem) => poem.trim());
  }
  
  // Function to create a single sneak peek article
  function createSneakPeekArticle(text, id) {
    const article = document.createElement('article');
    article.id = id;
    article.classList.add('poem-container', 'p-4', 'rounded-lg', 'bg-[#dcabba]');
  
    // Extract the title (first line)
    const lines = text.split('\n');
    const titleText = lines[0].trim();
  
    // Create and style the title
    const header = document.createElement('h1');
    header.classList.add('poem-head', 'text-purple-400');
    const title = document.createElement('p');
    title.textContent = titleText;
  
    // Make the title a clickable link
    const link = document.createElement('a');
    link.href = `#${id}`; // Link to full poem view
    link.appendChild(title);
    header.appendChild(link);
  
    // Append the title to the article
    article.appendChild(header);
  
    // Create a preview of the content (truncate to first 100 words)
    const bodyPreview = document.createElement('div');
    bodyPreview.classList.add('poem-preview');
    let wordCount = 0;
    const wordLimit = 100;
  
    lines.slice(1).forEach((line) => {
      if (wordCount < wordLimit) {
        const words = line.trim().split(' ');
        const remaining = wordLimit - wordCount;
  
        if (words.length <= remaining) {
          const p = document.createElement('p');
          p.textContent = line.trim();
          bodyPreview.appendChild(p);
          wordCount += words.length;
        } else {
          const p = document.createElement('p');
          p.textContent = words.slice(0, remaining).join(' ') + '...';
          bodyPreview.appendChild(p);
          wordCount = wordLimit;
        }
      }
    });
  
    // Append the preview content to the article
    article.appendChild(bodyPreview);
  
    return article;
  }
  
  // Function to dynamically generate sneak peeks
  function generateSneakPeeksFromTxt(filePath, previewContainerId) {
    fetch(filePath)
      .then((response) => response.text())
      .then((fileContent) => {
        const poems = splitPoemsFromText(fileContent);
        const previewContainer = document.querySelector(previewContainerId);
  
        poems.forEach((poem, index) => {
          const articleId = `poem${index + 1}`;
          const sneakPeekArticle = createSneakPeekArticle(poem, articleId);
          previewContainer.appendChild(sneakPeekArticle);
        });
      })
      .catch((err) => {
        console.error('Failed to load and process .txt file:', err);
        const previewContainer = document.querySelector(previewContainerId);
        previewContainer.textContent = 'Error loading poetry previews.';
      });
  }
  
  // Initialize sneak peeks
  generateSneakPeeksFromTxt('../assets/nyc.txt', '#poetry-preview');
  
*/
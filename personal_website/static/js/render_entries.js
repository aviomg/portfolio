// Fetch the "entries.html" content
fetch('./entries.html')
.then((response) => response.text())
.then((html) => {
  // Parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Extract the content of the main poetry container
  const poetryEntries = doc.querySelector('#entries');
  const articles = doc.querySelectorAll('article');
 // const firstArticle = poetryEntries.querySelector('article').cloneNode(true);
// const firstArticle = articles[0].cloneNode(true);
 len = articles.length;
 for(i=0; i<len;i++){
  firstArticle = articles[i].cloneNode(true);
  classlist = firstArticle.classList;
  //console.log(classlist);
  classlist.add("p-4","rounded-lg","bg-[#dcabba]");
  //classlist.add("border-[#4CAF50]");
  
  //classlist.add("text-purple-500");
  const titles = doc.getElementById("heading");
  ch = firstArticle.children;
  //for (const child of firstArticle.children) {
    //console.log(child);
  //}
  title = firstArticle.querySelector("#heading");
  console.log(title);
  CL = title.classList;
  CL.add("text-purple-400");
  //if(titles){
  //console.log(titles.classList);}
  //else{console.log("couldnt find");}
  //titles.classList.add("text-purple-400");


//   firstArticle.style.border = '1px solid #4CAF50'; // Add a green border


  const content = firstArticle;
  console.log(content);
  if(content){
    const truncatedText = content.innerText.split(' ').slice(0, 100).join(' ')  + '...';
    content.innerText = truncatedText;
  }
 // console.log(content.classList);
  const previewContainer = document.querySelector('#poetry-preview');
  previewContainer.appendChild(firstArticle);

 }


// Style the article dynamically
/* firstArticle.style.border = '1px solid #4CAF50'; // Add a green border
firstArticle.style.padding = '1rem'; // Add some padding
firstArticle.style.borderRadius = '8px'; // Rounded corners
firstArticle.style.backgroundColor = '#f9f9f9';
firstArticle.style.lineHeight = '1.5rem;' // Light background

// Truncate content for preview (optional)
const content = firstArticle;
if (content) {
  const truncatedText = content.innerText.split('\n').slice(0, 15).join('\n')  + '...';
  content.innerText = truncatedText;
}

// Add the styled preview to the page
const previewContainer = document.querySelector('#poetry-preview');
previewContainer.appendChild(firstArticle);*/
})
.catch((err) => {
console.error('Failed to load poetry preview:', err);
document.querySelector('#poetry-preview').innerText = 'Error loading preview.';
});
  /*
  // Get the first poem (or adjust logic to display more lines)
  const firstPoem = poetryEntries.querySelector('article').innerText;

  // Truncate to show the first few lines (e.g., 100 characters)
  const preview = firstPoem.split('\n').slice(0, 20).join('\n'); // First 3 lines

  // Insert the truncated preview into the main page
  document.querySelector('#poetry-preview').innerText = preview + '...';
})
.catch((err) => {
  console.error('Failed to load poetry preview:', err);
  document.querySelector('#poetry-preview').innerText = 'Error loading preview.';
});*/


// Set the path for the worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.js';

// PDF URL (update with your file path)
const pdfUrl = './COMP 211.pdf';

// DOM Elements
const pdfRender = document.getElementById('pdf-render');

// Load and Render the PDF
pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
  console.log('PDF loaded');

  // Get the first page
  pdf.getPage(1).then((page) => {
    console.log('Page loaded');

    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    pdfRender.appendChild(canvas);

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    page.render(renderContext).promise.then(() => {
      console.log('Page rendered');
    });
  });
});

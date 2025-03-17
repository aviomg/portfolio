
/*const canvas = document.getElementById('pdf-canvas');
const pdfUrl = '../assets/COMP 211.pdf';
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.mjs';

pdfjsLib.getDocument(pdfUrl).promise.then(function (pdfDoc) {
	// Continue with further steps.
    pdfDoc.getPage(1).then(function (page) {
        // Continue with further steps.
        const viewport = page.getViewport({ scale: 1.4 });
canvas.width = viewport.width;
canvas.height = viewport.height;
const ctx = canvas.getContext('2d');
const renderContext = {
	canvasContext: ctx,
	viewport: viewport,
};

page.render(renderContext);
    });
})
	.catch(function (error) {
		console.log('Error loading PDF file:', error);
	});

*/
/*
pdfjsLib.getDocument(pdfUrl).promise.then(function (pdfDoc) {
	// Continue with further steps.
    pdfDoc.getPage(1).then(function (page) {
        // Continue with further steps.
        const viewport = page.getViewport({ scale: 1.4 });
canvas.width = viewport.width;
canvas.height = viewport.height;
const ctx = canvas.getContext('2d');
const renderContext = {
	canvasContext: ctx,
	viewport: viewport,
};

page.render(renderContext);
    });
});


    const initialState = {
        pdfDoc: null,
        currentPage: 1,
        zoom: 1,
    };
    
    document
        .getElementById('prev-page')
        .addEventListener('click', function () {
            if (initialState.pdfDoc && initialState.currentPage > 1) {
                initialState.currentPage--;
                renderPage(initialState.currentPage);
            }
        });
    
    document
        .getElementById('next-page')
        .addEventListener('click', function () {
            if (
                initialState.pdfDoc &&
                initialState.currentPage < initialState.pdfDoc.numPages
            ) {
                initialState.currentPage++;
                renderPage(initialState.currentPage);
            }
        });
    
    function renderPage(pageNumber) {
        if (!initialState.pdfDoc) return;
    
        initialState.pdfDoc
            .getPage(pageNumber)
            .then((page) => {
                const viewport = page.getViewport({
                    scale: 1.4,
                });
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext('2d');
                const renderContext = {
                    canvasContext: ctx,
                    viewport: viewport,
                };
    
                page
                    .render(renderContext)
                    .promise.then(() => {
                        console.log('Rendering complete');
                    })
                    .catch((error) => {
                        console.log('Error rendering page:', error);
                    });
            })
            .catch((error) => {
                console.log('Error loading page:', error);
            });
    }*/
import { GlobalWorkerOptions } from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.min.mjs';
GlobalWorkerOptions.workerSrc =
	'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.worker.min.mjs';
    const pdf = '../assets/COMP 211.pdf';

    const pageNum = document.querySelector('#page_num');
    const pageCount = document.querySelector('#page_count');
    const currentPage = document.querySelector('#current_page');
    const previousPage = document.querySelector('#prev_page');
    const nextPage = document.querySelector('#next_page');
    const zoomIn = document.querySelector('#zoom_in');
    const zoomOut = document.querySelector('#zoom_out');
    
    const initialState = {
        pdfDoc: null,
        currentPage: 1,
        pageCount: 0,
        zoom: 1.5,
    };
    // Render the page.
const renderPage = () => {
	// Load the first page.
	console.log(initialState.pdfDoc, 'pdfDoc');
	initialState.pdfDoc
		.getPage(initialState.currentPage)
		.then((page) => {
          //  var scale = 1.5;
			console.log('page', page);

			const canvas = document.querySelector('#canvas');
			const ctx = canvas.getContext('2d');
        //    const viewport=page.getViewport(scale);
			const viewport = page.getViewport({
				scale: initialState.zoom,
			});
          //  console.log(viewport.scale);
            var resolution = 4;

			//canvas.height = viewport.height;
            canvas.height = resolution * viewport.height; 
			//canvas.width = viewport.width;
            canvas.width  = resolution * viewport.width;
         //   canvas.style.height = viewport.height; //showing size will be smaller size
       // canvas.style .width = viewport.width;

			// Render the PDF page into the canvas context.
			const renderCtx = {
				canvasContext: ctx,
				viewport: viewport,
			};

			page.render(renderCtx);

			pageNum.textContent = initialState.currentPage;
		});
};
    // Load the document.
pdfjsLib
.getDocument(pdf)
.promise.then((data) => {
    initialState.pdfDoc = data;
    console.log('pdfDocument', initialState.pdfDoc);

    pageCount.textContent = initialState.pdfDoc.numPages;

    renderPage();
})
.catch((err) => {
    alert(err.message);
});
const showPrevPage = () => {
	if (initialState.pdfDoc === null || initialState.currentPage <= 1)
		return;
	initialState.currentPage--;
	// Render the current page.
	currentPage.value = initialState.currentPage;
	renderPage();
};

const showNextPage = () => {
	if (
		initialState.pdfDoc === null ||
		initialState.currentPage >= initialState.pdfDoc._pdfInfo.numPages
	)
		return;

	initialState.currentPage++;
	currentPage.value = initialState.currentPage;
	renderPage();
};

// Button events.
previousPage.addEventListener('click', showPrevPage);
nextPage.addEventListener('click', showNextPage);
// Keypress event.
currentPage.addEventListener('keypress', (event) => {
	if (initialState.pdfDoc === null) return;
	// Get the key code.
	const keycode = event.keyCode ? event.keyCode : event.which;

	if (keycode === 13) {
		// Get the new page number and render it.
		let desiredPage = currentPage.valueAsNumber;
		initialState.currentPage = Math.min(
			Math.max(desiredPage, 1),
			initialState.pdfDoc._pdfInfo.numPages,
		);

		currentPage.value = initialState.currentPage;
		renderPage();
	}
});

// Zoom events.
zoomIn.addEventListener('click', () => {
	if (initialState.pdfDoc === null) return;
	initialState.zoom *= 4 / 3;
	renderPage();
});

zoomOut.addEventListener('click', () => {
	if (initialState.pdfDoc === null) return;
	initialState.zoom *= 2 / 3;
	renderPage();
});

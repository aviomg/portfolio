const canvas = document.getElementById('pdf-canvas');
const pdfUrl = '../assets/COMP 211.pdf';
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.mjs';

/*pdfjsLib.getDocument(pdfUrl).promise.then(function (pdfDoc) {
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
    }
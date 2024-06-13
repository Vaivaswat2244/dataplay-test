import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViwer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [winWidth, setWinWidth] = useState(1);

  // get window width
  useEffect(() => {
    setWinWidth(window?.innerWidth);
  }, []);

  // set pdf viewer width according to window width
  var PdfScale = 1.5;
  if (winWidth) {
    PdfScale = 1.5 * (winWidth / 1920);
    if (PdfScale < 1) {
      PdfScale = 1;
    }
  }

  // set page number
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const prevPageHandle = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextPageHandle = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  var foo = [];

  for (var i = 1; i <= numPages; i++) {
    foo.push(i);
  }

  return (
    <div className="pdf-viewer-wrapper">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
        loadings={"Loading"}
      >
        {Array.from({ length: numPages }, (_, i) => i + 1).map((idx) => {
          return (
            <>
              <Page
                pageNumber={idx}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                scale={PdfScale}
                key={idx}
                loading={<p>Loading</p>}
              />
              <p className="pageNum">
                Page {idx} of {numPages}
              </p>
            </>
          );
        })}
      </Document>
      {/* <div className="modal-pages-btn d-flex align-items-center">
        <button
          className="pdf-page-btn prev-btn"
          onClick={prevPageHandle}
        ></button>
        <p className="m-0">{pageNumber}</p>
        <button
          className="pdf-page-btn next-btn"
          onClick={nextPageHandle}
        ></button>
      </div> */}
    </div>
  );
}

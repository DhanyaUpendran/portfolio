//-------portfolio page-------------//
document.addEventListener('DOMContentLoaded', function () {
    // Get the download button element
    var downloadButton = document.getElementById('downloadButton');

    // Define the path to the PDF file
    var pdfPath = './images/dhanya.pdf';

    // Add a click event listener to the button
    downloadButton.addEventListener('click', function () {
        // Create a link element
        var downloadLink = document.createElement('a');

        // Set the href attribute to the PDF file path
        downloadLink.href = pdfPath;

        // Set the download attribute to specify the filename
        downloadLink.download = 'dhanya.pdf';

        // Append the link to the body
        document.body.appendChild(downloadLink);

        // Trigger a click on the link to start the download
        downloadLink.click();

        // Remove the link from the body
        document.body.removeChild(downloadLink);
    });
});

//contact page------------need to write code to store the user input data to the excel----------//


       

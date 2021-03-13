const getHTMLContent = () => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="description" content="This editor uses Adobe Embed API to render the PDF">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keyword" content="Adobe Embed API">
        <meta name="author" content="Sheik Faridh">
        <title>Editor</title>
        <link rel="icon" href="https://www.spi-global.com/wp-content/uploads/2020/07/cropped-favicon-228-32x32.png" />
        <script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
    </head>
    <body>
        <div id="toast-container"></div>
        <div id="loader-container"></div>
        <div id="app"></div>
    </body>
    </html>`

module.exports = {
    getHTMLContent
}
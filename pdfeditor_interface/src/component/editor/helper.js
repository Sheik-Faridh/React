export const getFileAsArray = file => new Promise(resolve => {
    const fileReader = new FileReader();

    fileReader.onloadend  = e => resolve(e.target.result)
    
    fileReader.onerror = e => {
        console.error("Failed to convert the file as an array");
        console.error(e);
    }

    fileReader.readAsArrayBuffer(file);
})
    
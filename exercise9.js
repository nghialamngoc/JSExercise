//get extension of the file

function getExtensionOfTheFile(file){
    var index = file.lastIndexOf(".");
    return file.substring(index + 1);
}

getExtensionOfTheFile("javascript.js");

// or shorter way
filename = "system.php"
console.log(filename.split('.').pop());


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
if (fileName.startsWith("#") || fileName.includes(".pdf") || fileName.includes(".docx")) {
    console.log("Store");
} else {
    console.log("Delete");
}
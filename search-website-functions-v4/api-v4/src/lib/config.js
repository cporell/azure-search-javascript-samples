<<<<<<< HEAD
const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "good-books",
    SearchApiQueryKey: process.env["SearchApiKey"] || "",
    SearchServiceName: process.env["SearchServiceName"] || "",
    SearchFacets: process.env["SearchFacets"] || "authors*,language_code", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiQueryKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

module.exports = { CONFIG };
=======
const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "good-books",
    SearchApiQueryKey: process.env["SearchApiKey"] || "",
    SearchServiceName: process.env["SearchServiceName"] || "",
    SearchFacets: process.env["SearchFacets"] || "authors*,language_code", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiQueryKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

module.exports = { CONFIG };
>>>>>>> 5814cc0ecd37bef1db2f64b540f78dd76ef50d42

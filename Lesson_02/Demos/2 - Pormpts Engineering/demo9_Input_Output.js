// Create a function that creates a proper XML from the following JSONs:
//[{name : "John", age : 20}, {name : "Jane", age : 21}, {name : "Jim", age : 22}]




function jsonToXml(jsonArray) {
    let xml = '<people>\n';
    jsonArray.forEach(person => {
        xml += `  <person>\n`;
        for (let key in person) {
            xml += `    <${key}>${person[key]}</${key}>\n`;
        }
        xml += `  </person>\n`;
    });
    xml += '</people>';
    return xml;
}
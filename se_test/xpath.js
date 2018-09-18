// page title
xml = document.evaluate("/html/head/title", document, null, XPathResult.STRING_TYPE, null).stringValue;
// publish date
xml = document.evaluate("/html/body/div[5]/article/div[1]/div[2]/div[1]/p[3]", document, null, XPathResult.STRING_TYPE, null).stringValue;

// author name
xml = document.evaluate("/html/body/div[5]/article/div[1]/div[2]/div[1]/p[1]/span", document, null, XPathResult.STRING_TYPE, null).stringValue;

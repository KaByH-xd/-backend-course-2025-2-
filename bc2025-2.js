const date = "202302";       
const time_period = "m";      

const { URL } = require('url');
const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation");

nbuUrl.searchParams.set("period", time_period);
nbuUrl.searchParams.set("date", date);
nbuUrl.searchParams.set("json", ""); 

console.log(nbuUrl.href);


//for quick and easy testing 
const string = "this is string that contains some URLS and a bunch of gobbledygook https://regexr.com/6qvl1 asda saasdas https://www.google.com/6qvl1 asdasdasd.asdasdasd www.google.com  asdasd adasd.com  gjasjbhvbhhbbas fnbeirngknua docs.google.edu afahscuqweaa sjanbfjqwe jvnboasdhiqwe https://docs.google.com/spreadsheets/d/1s4KqdF84O6LZvbzahbogyrKxokaN18QrlBRbEd-WMdE/edit#gid=1386834576 https://swagger.io/docs/specification/describing-request-body/";
const regex =  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%_\+~#=]{1,256}\.[a-zA-Z0-9()]{1,256}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ ;
const arr = string.split(" ");
var urlArr = [] ;

for (let index = 0; index < arr.length; index++) {
    var stringCheck = arr[index];
    const isURL = regex.test(stringCheck); 
    if (isURL == true) {
        urlArr.push(stringCheck);
        console.log(stringCheck);
    }
    
}

//actual fucntion.
function extractUrl(str) {
    const regex =  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%_\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ ;
    const arr = str.split(" ");
    var urlArr = [] ;

    for (let index = 0; index < arr.length; index++) {
        var stringCheck = arr[index];
        const isURL = regex.test(stringCheck); 
        if (isURL == true) {
            urlArr.push(stringCheck);
            console.log(stringCheck);
        }
        
    }
    
}
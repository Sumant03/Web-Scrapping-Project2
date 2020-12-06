let request=require("request");
// npm install cheerio
let ch=require("cheerio");
// file system -> inbuilt to use it you need to require
let fs=require("fs");

request('http://bpitindia.com/computer-science-and-engineering-faculty-profile.html#',teachers);

function teachers(err,response,html){
    // console.log
    //(html);
    // console.log("Recieved file");
let Stool=ch.load(html);
  
let teacherdata=Stool("table.table");
console.log(teacherdata);
let fullHtml="";
let teacher="";
 for(let i=0;i<teacherdata.length;i++){
  
    // extract batsman from the table
 fullHtml+=(i+1)+Stool(teacherdata[i].children[1].children).text();
    fullHtml+=" ";
    

    
 }  
 fs.writeFileSync("new.html",fullHtml);
}


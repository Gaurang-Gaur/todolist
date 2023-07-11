const express=require("express");
const bodyParser=require("body-parser");
const app=express();
let newitems=["Add Daily Items"];
let workitems=["Add Work Items"];

app.use(bodyParser.urlencoded({extended:true}));// to use the req.object 
app.use(express.static("public"));
// ejs library 
app.set("view engine","ejs");


let today=new Date();
let currentDay=today.getDay();
let day="";
switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  const date = new Date();

  let days = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${days}-${month}-${year}`;
  
  day=day+" "+currentDate;
  
app.get("/",function(req,res){

    res.render("list",{listtitle:day,newitems:newitems});
  });
  
  app.get("/work",function(req,res){
  res.render("list",{listtitle:"Workitem",newitems:workitems});

})

app.post("/",function(req,res){
  let newitem = req.body.newitem;
  console.log(req.body);
 if(req.body.list==="Workitem"){
  workitems.push(newitem);
  res.redirect("/work");
 }else{
      newitems.push(newitem);
  res.redirect("/");
 }


});



app.listen(3000,function(){
    console.log("server is listening on 3000");
});

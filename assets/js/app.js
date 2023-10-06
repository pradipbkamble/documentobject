let cl = console.log;
//total 5 methods of object
//2 methods are single selection
//3 methods are multipal selection method


//1 single selection method //document.getElementById("info")

//it returns document object or null

const info = document.getElementById("info");
cl(info)

//info.className = "alert alert-info"
//info.style.background = "blue";
//info.style.color = "red";
//info.style.padding = "30px 0 20px 500px";
//info.style.fontSize ="30px";

//info.className = "alert alert-info m-4";


//2-1 document.getElementsByClassName
//its multipal element selection methods
//it returns htmlcollection 
//html collections is like array object,nor array

let lis= document.getElementsByClassName("list-group-item");
let lisarray= Array.from(lis)
cl(lis);
cl(lisarray)

//2-2 innerHtml
let lis1=info.innerHTML;
cl(lis1)
let list2=info.innerText;
cl(list2)



//innerhtml,innertext, textcontent and value are the properties which are available on document object only
lisarray.forEach(li=>{
    let orignalText= li.innerText;
    cl(orignalText);
    li.innerText =`i love ${orignalText}`
})

//3  documentGetElementBytagname
//its a multipal selection method
//it returns htmlcollection ,htmlcollection is not aarray is like object
let tag1= document.getElementsByTagName("li");
let tag2=[...tag1]///... is spread operator
cl(tag1)
cl(tag2)
tag2.className ="list-group-item";
let tag3= [...`physic is good subject`];
cl(tag3)

//classname,classlist there are document object property

//tag2.forEach(li =>{
 //   cl(li)
   // li.classlist.add("alert");
   // li.classlist.add("alert-info")
//})---foreach anonomus


//4- queryselector
//it is singale selection method
//it return first object specific object of nth chield
let quer1= document.querySelector("li:nth-child(4)");
cl( typeof quer1);//which type object or key
cl(quer1)
quer1.classList.add("active");
let quer = document.querySelector("li:nth-child(2)");
cl(quer)

quer1.style.border = "5px solid black"



//5-queryselectorAll
//its multipal seliction method 

let queryall= document.querySelectorAll("#info1");

cl(queryall);
quer.classList.add("active");

let queryall1= document.querySelectorAll("#info1 > li:nth-child(2)");
cl(queryall1)

//it returns node list
//node list is aarray like object,not a array


function collab(){
  let d1 ={t1:"Chats & video calls",
   t2:"Online meetings",
    t3:"Feed",
   t4:"Calendar",
    t5:"Online-documents",
    t6:"Drive",
    t7:"Webmail",
    t8:"Workgroups",
   img:"./images/collab.png"};
 appendData(d1);
   
}


function crm(){
 let d2 = {t1:'Leads,Deals,Contacts,Companies',
   t2:'Quetoes,Invoices',
    t3:'Online-Payment',
   t4:'Sales-automation',
    t5:'Rules-and-triggers',
    t6:'Contarct-center',
    t7:'Marketing',
    t8:'Sales-Intelligence',
    img:"./images/crm.png",};
    appendData(d2); 
}
function tasks(){
   let d3 =  {t1:'Tasks',
       t2:'Projects',
        t3:'Gantt-Chart',
       t4:'Kanban-Board',
        t5:'Time-Tracking',
        t6:'Task-and-Project-Templates',
        t7:'Task-Automation',
        t8:'Crm-integration',
        img:"./images/tasks.png",};
      appendData(d3); 
 }
function sites(){
   let d4 =    {t1:'Free-website-builder',
       t2:'Online-store',
        t3:'Free-templates',
       t4:'Mobile-and-Seo-friendly',
        t5:'Web-forms',
        t6:'Web-widgets',
        t7:'Crm-integration',
        t8:'Google-Analatyics-intigration',
        img:"./images/sites.png",};
      appendData(d4); 
 }
 function automation(){
   let d5 =   {t1:"Employee directory",
       t2:"tracking and reports",
        t3:"Absence-management",
       t4:"Announcements",
        t5:'Workflow automation',
        t6:'Requests and approvals',
        t7:'No code Rpa',
        t8:'Knowledge Base',
        img:"./images/hr.png",};
        appendData(d5);
 }


 // calling set inerval
//   let arr_function = [
//     collab,
//     crm,
//     tasks,
//     sites,
//     automation,
//   ];
//   let count = 0;
 
// function start (){


//   id = setTimeout(function(){
//     arr_function[count]();
//     console.log(count);
//     count++;
//   },1000);


// }

// start();


  
   

id = setTimeout(function(){
 collab();
},0000);


 id = setTimeout(function(){
   crm();
 },4000);

 

 id = setTimeout(function(){
   tasks();
 },8000);

 


 id = setTimeout(function(){
   sites();
 },12000);

 

 id = setTimeout(function(){
   automation();
 },16000);

 



 


function appendData(data){
   let items = document.getElementById('items');
   items.innerHTML = "";
   let image =document.getElementById('images'); 
   image.innerHTML = null;
  

   let p1 = document.createElement('li');
   p1.innerText = data.t1;
   let p2 = document.createElement('li');
   p2.innerText = data.t2;
   let p3 = document.createElement('li');
   p3.innerText = data.t3;
   let p4 = document.createElement('li');
   p4.innerText = data.t4;
   let p5 = document.createElement('li');
   p5.innerText = data.t5;
   let p6 = document.createElement('li');
   p6.innerText = data.t6;
   let p7 = document.createElement('li');
   p7.innerText = data.t7;
   let p8 = document.createElement('li');
   p8.innerText = data.t8;
   let img = document.createElement('img');
   img.src = data.img;
   img.style.height="60%";
   img.style.margin="50px 0px";
   let btn = document.createElement('button');
   btn.setAttribute("class","freebtn");
   btn.innerText = "Start For Free";
   btn.style.margin="60px 0px"
   items.append(p1,p2,p3,p4,p5,p6,p7,p8,btn);
   image.append(img);
 

}

// button function

function Goto(){
window.location.href = "https://www.bitrix24.in/prices/buy.php?product=BASIC";


}
let selected = document.getElementById('member').value;
let show = document.getElementById("show");
function member(){


if(selected = "1000 users"){
 show.innerText = "55,493";
}
else if(selected = "5000 users"){
 show.innerText = "1,00,493";
}
else if(selected = "250 users"){
 show.innerText = "24,493";
}
}

function logbtn(){
 window.location.href="http://127.0.0.1:5500/evil-jellyfish-2990/Signup.html";
}
function more(){
 window.location.href = "https://www.bitrix24.in/prices/self-hosted.php";
}
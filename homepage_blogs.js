// let div=document.querySelector("#blog-2")
// let one=document.createElement("div")
// div.append(one)
// console.log("item")


let maindiv=document.querySelector("#blog-2")
let array=[{image:"./images/b1.jpg",name:"Traditional and Simplified Chinese For You On-Premise Bitrix24 By CloudEZ",desc:"For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world"},{image:"./images/b2.jpg",name:"Synchronize Bitrix24 Calendar With Office365",desc:"Synchronize Office365 calendar with your Bitrix24 in few easy steps. Improve your daily routine and keep track of important events."},
{image:"./images/b3.jpg",name:"New Subscription Model For Bitrix24 On-Premise License",desc:"In order to continue providing quality and timely product updates we are switching Bitrix24 On-Premise license to a subscription model from September 1, 2022."},{image:"./images/b4.jpg",name:"We Are Now On Telegram!",desc:"Please welcome our new Bitrix24 Talks on Telegram! A channel for everyone who uses Bitrix24 and wants to learn more about it."}]


array.forEach(function(elem){
    let div=document.createElement('div');
    let image=document.createElement('img');
    image.setAttribute("src",elem.image);
    let name=document.createElement("p");
    name.innerText=elem.name
    let desc=document.createElement("p");
    desc.innerText=elem.desc;
    let btn=document.createElement("button");
    btn.innerText="Read More";
    let link=document.createElement("p");
    link.setAttribute("id","link");
    link.innerText="Bitrix24 tips and updates";

    
    div.append(image,name,desc,btn,link);
    maindiv.append(div)
})
// *********************************************************************************************************

let maindiv2=document.querySelector("#blog-3")
let array2=[{image:"./images/b5.jpg",name:"Synchronize Bitrix24 Calendar with iCloud",desc:"Set up iCloud Сalendar synchronization with your Bitrix24. All events from your iCloud Сalendar will appear in your Bitrix24 Calendar and the other way around."},{image:"./images/b6.jpg",name:"Website Page Settings",desc:"We've gathered website and webpage settings in a single slider for your convenience. Change page design, edit blocks, set up analytics, change rich formatting for social media, etc. - all in a single place."},
{image:"./images/b7.jpg",name:"Website Access Permissions",desc:"Configure Bitrix24 website access permissions - who can access particular site sections or which actions can be performed by specific users (view, edit, edit settings, publish or even delete)."},{image:"./images/b8.jpg",name:"Document Opened Trigger For Sales Automation",desc:"Document opened trigger will help you to automate work with invoices and quotes. It is triggered when the client opens a public link to the document."}]

array2.forEach(function(elem){
    let div=document.createElement('div');
    let image=document.createElement('img');
    image.setAttribute("src",elem.image);
    let name=document.createElement("p");
    name.innerText=elem.name
    let desc=document.createElement("p");
    desc.innerText=elem.desc;
    let btn=document.createElement("button");
    btn.innerText="Read More";
    let link=document.createElement("p");
    link.setAttribute("id","link");
    link.innerText="Bitrix24 tips and updates";

    
    div.append(image,name,desc,btn,link);
    maindiv2.append(div)
})




// ****************************************************************************************



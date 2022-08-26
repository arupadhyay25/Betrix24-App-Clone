// let div=document.querySelector("#blog-2")
// let one=document.createElement("div")
// div.append(one)
// console.log("item")


let maindiv=document.querySelector("#blog-2")
let array=[{image:"https://d57439wlqx3vo.cloudfront.net/iblock/03a/03a8025b9b1b096ac201712995bc2593/34a6eb0d1e4657f7d73f4fadcd492bd2.jpg?1661352910963",name:"Traditional and Simplified Chinese For You On-Premise Bitrix24 By CloudEZ",desc:"For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world"},{image:"https://d57439wlqx3vo.cloudfront.net/iblock/d1a/d1aaf585098b4068d90bcc65c29455a0/b34b5a8010849626e07fe7af0c615cd7.jpg?1661352910963",name:"Synchronize Bitrix24 Calendar With Office365",desc:"Synchronize Office365 calendar with your Bitrix24 in few easy steps. Improve your daily routine and keep track of important events."},
{image:"https://d57439wlqx3vo.cloudfront.net/iblock/99d/99d9e8dff3ab6afd6c54e267e4fdd2fe/d322ba56617932760290881bb10a0952.jpg?1661352910963",name:"New Subscription Model For Bitrix24 On-Premise License",desc:"In order to continue providing quality and timely product updates we are switching Bitrix24 On-Premise license to a subscription model from September 1, 2022."},{image:"https://d57439wlqx3vo.cloudfront.net/iblock/981/98125997a8d33c34d73e040f496ead48/a171845163e67fc116f84b19ab51b103.jpg?1661352910963",name:"We Are Now On Telegram!",desc:"Please welcome our new Bitrix24 Talks on Telegram! A channel for everyone who uses Bitrix24 and wants to learn more about it."}]


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
let array2=[{image:"https://d57439wlqx3vo.cloudfront.net/iblock/69a/69a10ac79203e5a2a11d7e029504fef1/dd5947446007cb062e91d459b15cd1e1.jpg?1661510024953",name:"Synchronize Bitrix24 Calendar with iCloud",desc:"Set up iCloud Сalendar synchronization with your Bitrix24. All events from your iCloud Сalendar will appear in your Bitrix24 Calendar and the other way around."},{image:"https://d57439wlqx3vo.cloudfront.net/iblock/8fb/8fbeb46bc656693e806453da07f73085/193f2af7e275fe8cfff05b94fe38df02.jpg?1661510024953",name:"Website Page Settings",desc:"We've gathered website and webpage settings in a single slider for your convenience. Change page design, edit blocks, set up analytics, change rich formatting for social media, etc. - all in a single place."},
{image:"https://d57439wlqx3vo.cloudfront.net/iblock/9af/9af24bfc0df84b9ec238868e58a2310c/d397239d16ebb0fdac2435ae643d8a48.jpg?1661510024953",name:"Website Access Permissions",desc:"Configure Bitrix24 website access permissions - who can access particular site sections or which actions can be performed by specific users (view, edit, edit settings, publish or even delete)."},{image:"https://d57439wlqx3vo.cloudfront.net/iblock/2d3/2d37c3af0f81da6197a1758dc12e34fb/3b07bb7bff7e100c0246764054f8b343.jpg?1661510024953",name:"Document Opened Trigger For Sales Automation",desc:"Document opened trigger will help you to automate work with invoices and quotes. It is triggered when the client opens a public link to the document."}]

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



let duration = document.getElementById("duration_plan");
duration.addEventListener("change",function(){
    changeDuration();
});

function changeDuration(){
    let discount = document.getElementsByClassName("disc");
    let noDiscount = document.getElementsByClassName("nodisc");
    let basic = document.getElementById("basic");
    let standard = document.getElementById("standard");
    let professional = document.getElementById("professional");
    let enterprise = document.getElementById("enterprise");
    if(duration.value == '1m'){
        for(let i=0;i<discount.length;i++){
            discount[i].style.display = 'none';
            noDiscount[i].style.display = 'none';
        }
        basic.innerText = "Rs.4,360/mo";
        standard.innerText = "Rs.8,740/mo";
        professional.innerText = "Rs.17,490/mo";
        enterprise.innerText = "Rs.34,990/mo";
    }else if(duration.value == '3m'){
        for(let i=0;i<discount.length;i++){
            discount[i].style.display = 'none';
            noDiscount[i].style.display = 'none';
        }
        basic.innerText = "Rs.4,360/mo";
        standard.innerText = "Rs.8,740/mo";
        professional.innerText = "Rs.17,490/mo";
        enterprise.innerText = "Rs.34,990/mo";
        
    }else if(duration.value == '1y'){
        
        location.reload();
        
        
    }
}
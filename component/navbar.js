function navbar(){
    return `<div id="navbar1">
            <img src="./images/bitrex_logo.jpg" alt="">
        </div>
        <div id="navbar2">
            <div id="left_bar">
                <p>TOOLS</p>
                <p>PRICING</p>
                <p>SOLUTION</p>
                <p>PARTNER</p>
                <p>APPS</p>
                <p>BLOG</p>
                <p>SUPPORT</p>
            </div>
            <div id="right_bar">
                <button>START FOR FREE</button>
                <span class="material-symbols-outlined">person</span>
                <p>LOG IN</p>
                <span class="material-symbols-outlined">language</span>
                <p>EN</p>
            </div>
        </div>`
}

export default navbar;

/*

//html
<div id="navbar"></div>
<div class="content"></div>


//js
<script type="module">
    import navbar from "./component/navbar.js"
    document.getElementById("navbar").innerHTML=navbar()
</script> */
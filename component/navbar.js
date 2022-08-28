function navbar(){
    return `<div id="navbar_1">
            <img src="./images/bitrex_logo.jpg" alt="">
        </div>
        <div id="navbar_2">
            <div id="left_bar">
                <p onclick="nav_tools()">TOOLS</p>
                <p onclick="nav_pricing()">PRICING</p>
                <p onclick="nav_solution()">SOLUTION</p>
                <p onclick="nav_partner()">PARTNER</p>
                <p onclick="nav_apps()">APPS</p>
                <p onclick="nav_blog()">BLOG</p>
                <p onclick="nav_support()">SUPPORT</p>
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
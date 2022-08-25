function footer(){
    return `<div id="footer1">
        <div>
            <ul>
                <li>BITRIX</li>	
                <li>Bitrix24</li>	
                <li>Pricing</li>
                <li>Media kit</li>	
                <li>Contact us</li>	
                <li>In the press</li>
                <li>Bitrix24 August Sale</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Support</li>
                <li>Helpdesk</li>
                <li>Webinars</li>
                <li>How-to videos</li>
                <li>Submit a ticket</li>
                <li>Schedule a demo	</li>
                <li>Bitrix24 Status page</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Resources</li>
                <li>Blog</li>
                <li>Solutions</li>
                <li>Testimonials</li>
                <li>Alternatives</li>
                <li>Uses</li>
                <li>Guides</li>
                <li>Research</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>On-premise</li>
                <li>On-premise edition</li>
                <li>Download</li>
                <li>Documentation</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Apps</li>
            <li>Market</li>
            <li>Mobile app</li>
            <li>Desktop app</li>
            <li>API/developers</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Partners</li>
                <li>Find a partner</li>
                <li>Become a partner</li>
                <li>Partner login</li>
            </ul>
        </div>
    </div>
    <hr style="color: white;">
    <div id="footer2">
        <div id="left">
            <p>Terms Privacy GDPR Security Abuse Rules for Bitrix24.Sites</p>
            <p>Copyright © 2022 Bitrix24 </p>
        </div>
        <div id="right">
            <img id="playstore" src="./images/apple store.JPG" alt="">
            <div id="footer_search">
                <img id="social" src="./images/social handle.JPG" alt="">
                <input id="search_input" type="text" placeholder="Search">
                <span class="material-symbols-outlined" id="search_btn">search</span>
            </div>
        </div>
    </div>`
}

export default footer

/*

//html
<div id="footer"></div>


//js
<script type="module">
    import footer from "./component/footer.js"
    document.getElementById("footer").innerHTML=footer()
</script> */
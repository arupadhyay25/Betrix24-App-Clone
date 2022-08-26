window.onscroll = ()=>{
    linkBar();
}

var partnerLinkBar = document.getElementById("partners_link_bar");
var sticky = partnerLinkBar.offsetTop;

function linkBar(){
    if(window.pageYOffset > sticky){
        partnerLinkBar.classList.add("sticky");
        partnerLinkBar.style.margin = 0;
        partnerLinkBar.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    }else{
        partnerLinkBar.classList.remove("sticky");
        partnerLinkBar.style.boxShadow = "none";
    }
}

// showing country list
let country = document.getElementById("country");
let show_country = document.getElementById("search_country_section");
country.addEventListener("click",function(){
    show_country.style.display="block";
});

// hiding country list
let hide_country = document.getElementById("hide_country");
hide_country.addEventListener("click",function(){
    show_country.style.display="none";
})


partners = [
    {
    "name":"Br24",
    "type":"GOLD",
    "address":"São Paulo, BR",
    "phone":"+55 11 3198-9817",
    "email":"contato@br24.io",
    "website":"br24.io?utm_source=bitrix24-partners"
    },
    {
    "name":"ASESORES-E",
    "type":"GOLD",
    "address":"Lima, PE. Bogotá, CO. Ciudad de Mexico, MX",
    "phone":"+55 12 3498-3791",
    "email":"info@asesores-e.com",
    "website":"www.asesores-e.com"
    },
    {
    "name":"CRMThink",
    "type":"GOLD",
    "address":"Joinville, BR. Joinville/SC, BR",
    "phone":"+55 11 3198-3791",
    "email":"comercial@crmthink.com.br",
    "website":"www.crmthink.com.br"
    },
    {
    "name":"Intreface",
    "type":"GOLD",
    "address":"London, GB. New York, US. Kwun Tong, HK",
    "phone":"+44 20 4524 5400",
    "email":"sales@intreface.com",
    "website":"https://www.intreface.com"
    },
    {
    "name":"VITRANET24",
    "type":"GOLD",
    "address":"Hanoi | HCM, VN. 17 Ha Hoi, Hoan Kiem, Ha Noi , VN. 185Bis Võ Thị Sáu, Q.3, TP.HCM, VN",
    "phone":"+84 24 3217 1617",
    "email":"vitranet24@vivicorp.com",
    "website":"https://vitranet24.com"
    },
    {
    "name":"LINXYS GmbH",
    "type":"GOLD",
    "address":"München, DE. St. Gallen / Zürich , CH. Wien, AT",
    "phone":"+49 89 38037417",
    "email":"info@linxys.de",
    "website":"www.linxys.de"
    },
    {
    "name":"NEW TECH CONSULTING",
    "type":"GOLD",
    "address":"Milano, Roma, IT. Dijon, FR. Wilmington (DE), US",
    "phone":"+39 02 9475 0759",
    "email":"info@newtech.consulting",
    "website":"https://newtech.consulting/"
    },
    {
    "name":"Bit24, S.L.",
    "type":"GOLD",
    "address":"Andorra, ES",
    "phone":"+34 937 37 29 27",
    "email":"hola@bit24.es",
    "website":"www.bit24.es"
    },
    {
    "name":"Askarasoft",
    "type":"GOLD",
    "address":"Surabaya, ID. Jakarta, ID",
    "email":"sales@askarasoft.com",
    "website":"www.askarasoft.com"
    },
    {
    "name":"HIRSCHTEC DCS",
    "type":"GOLD",
    "address":"Hamburg, Düsseldorf, Berlin, DE. Wien, AT. Zürich, CH",
    "phone":"+49 40 99999450",
    "email":"bitrix24@hirschtec.eu",
    "website":"https://hirschtec-dcs.de/"
    },
    {
    "name":"Rajlaxmi Solutions Private Limited",
    "type":"GOLD",
    "address":"Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkatta, Dubai, IN. Dubai, AE. New York, US",
    "phone":"+91 97680 00051",
    "email":"bhagwati@rajlaxmiworld.com",
    "website":"www.rajlaxmiworld.com"
    },
    {
    "name":"ALKEM",
    "type":"GOLD",
    "address":"Buenos Aires, AR. Miami, Florida, US",
    "phone":"+54 11 5235-5677",
    "email":"bitrix24@alkem.com.ar",
    "website":"www.bitrix24.alkem.com.ar"
    },
    {
    "name":"RADUNZ COMERCIO E SERVICOS LTDA.",
    "type":"GOLD",
    "address":"Porto Alegre, BR",
    "phone":"+55 11 3197-6525",
    "email":"vendas@radsolucoes.com.br",
    "website":"www.radsolucoes.com.br"
    },
    {
    "name":"Support.pl",
    "type":"GOLD",
    "address":"Warszawa, PL",
    "phone":"+48 790 618 514",
    "email":"ali@support.pl",
    "website":"https://support.pl"
    },
    {
    "name":"Genesis Systems Teknoloji",
    "type":"GOLD",
    "address":"Istanbul, TR",
    "phone":"+90 212 706 63 20",
    "email":"info@genesis-system.net",
    "website":"genesis-system.net"
    },
    {
    "name":"ADIGITRANS",
    "type":"GOLD",
    "address":"Hà Nội | TP.Hồ Chí Minh, VN. 01 Lê Phụng Hiểu, Hà Nội, VN. Lầu 3, Galaxy 9, Số 9 Nguyễn Khoái, Quận 4, Thành phố Hồ Chí Minh, VN",
    "phone":"+84 91 225 85 68",
    "email":"bitrix24@adigitrans.com",
    "website":"https://adigitrans.com"
    },
    {
    "name":"ERP24",
    "type":"GOLD",
    "address":"Porto, PT",
    "phone":"+351 932 787 865",
    "email":"info@erp24.pt",
    "website":"erp24.pt"
    },
    {
    "name":"FullView Solutions",
    "type":"GOLD",
    "address":"Johannesburg, ZA",
    "phone":"+27 10 880 4424",
    "email":"bitrix@fullviewsolutions.co.za",
    "website":"www.fullviewsolutions.co.za"
    },
    {
    "name":"All CAD Services Private Limited",
    "type":"GOLD",
    "address":"Jaipur,Chennai, IN. Dubai,Abu Dhabi, AE. Sharjah, AE",
    "phone":"+91 94140 64174",
    "email":"manish@allcadservices.com",
    "website":"http://www.allcadservices.com/"
    },
    {
    "name":"Webbee Limited",
    "type":"GOLD",
    "address":"Auckland, NZ. Brisbane, AU. Aliso Viejo, CA, US",
    "phone":"+64 21 145 7470",
    "email":"sales@webbee.co.nz",
    "website":"https://webbee.co.nz"
    },
    {
    "name":"WORKFLOW S.A.S.",
    "type":"GOLD",
    "address":"Medellín, CO. Buenos Aires, AR. Quito, EC",
    "phone":"+57 316 0532000",
    "email":"info@workflowteams.com",
    "website":"workflowteams.com"
    },
    {
    "name":"Go Digital Software GmbH",
    "type":"GOLD",
    "address":"Berlin, DE. Basel, CH",
    "phone":"+49 30 91734843",
    "email":"bitrix24@go-digital-software.com",
    "website":"https://go-digital-software.de/"
    },
    {
    "name":"Togma",
    "type":"GOLD",
    "address":"Warszawa, PL",
    "phone":"+48 22 266 24 45",
    "email":"sprzedaz@togma.pl",
    "website":"https://bitrix24.togma.pl/"
    },
    {
    "name":"Scan IT Sp. z o.o.",
    "type":"GOLD",
    "address":"Poznań, PL. Poznań, PL",
    "phone":"+48 603 068 964",
    "email":"office@scan-it.pl",
    "website":"www.bitrix24.scan-it.pl"
    },
    {
    "name":"IZAAP Technologies Private Limited",
    "type":"GOLD",
    "address":"Chennai , Bangalore, IN. Paris, FR. Colombo, LK",
    "phone":"+91 7428 094 109",
    "email":"sales@izaaptech.com",
    "website":"https://izaaptech.com/"
    },
    {
    "name":"Bytebio",
    "type":"GOLD",
    "address":"Ribeirгo Preto, BR",
    "email":"bitrix24@bytebio.com",
    "website":"https://www.bytebio.com"
    },
    {
    "name":"UC Technology do Brasil Soluções",
    "type":"GOLD",
    "address":"Campinas, BR",
    "phone":"+55 19 3500-6450",
    "email":"contato@uctechnology.com.br",
    "website":"uctechnology.com.br"
    },
    {
    "name":"Dreamsite Inc.",
    "type":"GOLD",
    "address":"Montreal, CA",
    "phone":"+1 438-793-7379",
    "email":"sales@dreamsite.ca",
    "website":"www.dreamsite.ca"
    },
    {
    "name":"InformUnity S.L.",
    "type":"GOLD",
    "address":"Madrid, ES",
    "phone":"+34 911 23 40 73",
    "email":"24@informunity.es",
    "website":"informunity.es"
    },
    {
    "name":"BeUpSoft",
    "type":"GOLD",
    "address":"Gdynia, PL",
    "phone":"+48 509 591 159",
    "email":"biuro@beupsoft.pl",
    "website":"https://beupsoft.pl"
    },
    {
    "name":"SBI ADVISORS, LTDA",
    "type":"GOLD",
    "address":"San Jose, CR. Medellín, CO. Monterrey, MX",
    "phone":"+506 4000 1663",
    "email":"bitrix24@sbiasesores.com",
    "website":"www.sbiasesores.com"
    },
    {
    "name":"BuraqLabs International",
    "type":"GOLD",
    "address":"Karachi, PK",
    "phone":"+92 330 3544714",
    "email":"sales@buraqlabs.com",
    "website":"https://buraqlabs.com/"
    },
    {
    "name":"MAKE interactive",
    "type":"GOLD",
    "address":"Tilburg, NL. New York, US. Davao City, PH",
    "phone":"+31 13 762 0150",
    "email":"sander@make-interactive.com",
    "website":"http://www.make-interactive.com"
    },
    {
    "name":"technopeak",
    "type":"GOLD",
    "address":"Dubai, AE",
    "phone":"+971 4 439 6969",
    "email":"info@technopeak.ae",
    "website":"technopeak.ae"
    },
    {
    "name":"Doc Brown GmbH",
    "type":"GOLD",
    "address":"Willich, DE",
    "phone":"+49 2156 4849561",
    "email":"tom.roidl@itronics99.de",
    "website":"https://crmbauer.de/"
    },
    {
    "name":"GLOBALNET Internet Technologies",
    "type":"GOLD",
    "address":"İSTANBUL, ANKARA, İZMİR, ANTALYA, BURSA, TR",
    "phone":"+90 532 111 66 04",
    "email":"bitrix24@globalnet.com.tr",
    "website":"https://bitrix24.globalnet.com.tr"
    },
    {
    "name":"Es24CRM (Grupo Estrategos)",
    "type":"GOLD",
    "address":"Guayaquil, EC. CDMX, MX. Santiago de Chile, CL",
    "phone":"+593 98 720 6478",
    "email":"agencia@estrategos.com.ec",
    "website":"www.es24crm.com"
    },
    {
    "name":"YouNet SI",
    "type":"GOLD",
    "address":"Ho Chi Minh, VN. D2 Giang Vo, Ba Dinh District, Ha Noi, VN",
    "phone":"+84 91 958 73 88",
    "email":"info@younetsi.com",
    "website":"www.younetsi.com"
    },
    {
    "name":"Corporate Intellect Solutions",
    "type":"GOLD",
    "address":"Delhi, Mumbai, Bangalore, IN. Toronto, CA. Dubai, AE",
    "phone":"+91 98713 00205",
    "email":"solutions@cis.cx",
    "website":"www.cis.cx"
    },
    {
    "name":"AlterEGO",
    "type":"GOLD",
    "address":"Lisboa, PT",
    "phone":"+351 912 572 503",
    "email":"mail@alterego.digital",
    "website":"https://alterego.digital"
    },
    {
    "name":"Taka Company",
    "type":"GOLD",
    "address":"Ho Chi Minh, VN",
    "phone":"+84 93 629 77 49",
    "email":"tony@taka.com.vn",
    "website":"http://giaiphaphotrodn.com/"
    },
    {
    "name":"Nevpro Business Solutions Pvt. Ltd.",
    "type":"GOLD",
    "address":"Mumbai, IN. Toronto, CA. Delaware, US",
    "phone":"+91 99209 41186",
    "email":"sales@nevpro.co.in",
    "website":"www.nevpro.co.in"
    },
    {
    "name":"FIRST MIND CO., LTD",
    "type":"GOLD",
    "address":"Ho Chi Minh , VN",
    "phone":"+84 91 131 41 54",
    "email":"info@firstmindsoftwaresolution.com",
    "website":"https://firstmindsoftwaresolution.com/"
    },
    {
    "name":"Charm24",
    "type":"GOLD",
    "address":"Jundiaí, BR",
    "phone":"+55 11 4230-0450",
    "email":"comercial@charm24.com.br",
    "website":"link.charm24.com.br/website"
    },
    {
    "name":"Zedney",
    "type":"GOLD",
    "address":"Riyadh, SA. Bizerta, TN. Paris, FR",
    "phone":"+966 56 070 7326",
    "email":"it@zedney.com",
    "website":"www.zedney.com"
    },
    {
    "name":"Net2one Corp",
    "type":"GOLD",
    "address":"San Isidro, AR. Miami, US",
    "phone":"+54 11 5353-5533",
    "email":"info@net2one.com.ar",
    "website":"www.net2one.com.ar"
    },
    {
    "name":"Zopu",
    "type":"GOLD",
    "address":"Joinville, BR",
    "phone":"+55 47 3307-9280",
    "email":"contato@zopu.com.br",
    "website":"www.zopu.com.br"
    },
    {
    "name":"EQVN",
    "type":"GOLD",
    "address":"Ho Chi Minh City, VN. Ho Chi Minh City, VN",
    "phone":"+84 97 718 12 82",
    "email":"crmx@eqvn.net",
    "website":"http://www.eqvn.net"
    },
    {
    "name":"Skala Teknoloji",
    "type":"GOLD",
    "address":"Istanbul, TR",
    "phone":"+90 505 857 55 22",
    "email":"iletisim@skalateknoloji.com",
    "website":"www.skalateknoloji.com"
    },
    {
    "name":"L.E.T JSC",
    "type":"GOLD",
    "address":"Hà Nội, VN. Hanoi & Ho Chi Minh City, VN",
    "email":"sales@let.vn",
    "website":"https://let.vn/"
    },
    {
    "name":"GF7 Brasil Sistemas Ltda",
    "type":"GOLD",
    "address":"Rio Pardo, BR",
    "phone":"+55 11 4063-7533",
    "email":"comercial@gf7.com.br",
    "website":"gf7.com.br"
    },
    {
    "name":"WayUnique Inc",
    "type":"GOLD",
    "address":"Conroe, US",
    "phone":"+1 713-201-6420",
    "email":"info@wayunique.com",
    "website":"WayUnique.com"
    },
    {
    "name":"7 Sense, s.r.o.",
    "type":"GOLD",
    "address":"Bratislava, SK. Praha, CZ",
    "phone":"+421 2/327 846 83",
    "email":"info@7sense.sk",
    "website":"https://7sense.sk"
    },
    {
    "name":"Softkey Bulgaria",
    "type":"GOLD",
    "address":"Sofia, BG",
    "phone":"+359 71 818 870",
    "email":"info@softkey.bg",
    "website":"www.softkey.bg"
    },
    {
    "name":"Office Digital 24 GmbH",
    "type":"GOLD",
    "address":"Erfurt, DE",
    "phone":"+49 176 63482917",
    "email":"bitrix@office-digital.org",
    "website":"https://office-digital.org"
    },
    {
    "name":"SBC Sp. z o.o.",
    "type":"GOLD",
    "address":"Warszawa, PL",
    "phone":"+48 22 307 95 94",
    "email":"bitrix@sbc-group.pl",
    "website":"https://sbc-group.bitrix24.site/"
    },
    {
    "name":"Polus Digital Solutions",
    "type":"GOLD",
    "address":"La Crosse, US. Manila, PH",
    "phone":"+1 608-897-1788",
    "email":"support@polus.io",
    "website":"polus.io"
    },
    {
    "name":"Atteli Sp. z o.o.",
    "type":"GOLD",
    "address":"Warsaw, PL",
    "phone":"+48 533 533 779",
    "email":"info@atteli.com",
    "website":"atteli.com"
    },
    {
    "name":"ITC America LLC",
    "type":"GOLD",
    "address":"Pembroke Pines, US. Udaondo, AR",
    "phone":"+1 754-900-5149",
    "email":"info@itcamerica.net",
    "website":"https://itcamerica.net/"
    },
    {
    "name":"TRAEVO",
    "type":"GOLD",
    "address":"Brasília, BR",
    "phone":"+55 61 99598-1809",
    "email":"comercial@traevo.com.br",
    "website":"www.traevo.com.br"
    },
    {
    "name":"VAM Consulting",
    "type":"GOLD",
    "address":"Abu Dhabi, AE. Office 201, 2nd Floor, Mahdi Tawafsheh Building, University Street, Irbid, Jordan, JO",
    "phone":"+971 56 750 7521",
    "email":"huthayfa@getvam.com",
    "website":"https://www.getvam.com/"
    },
    {
    "name":"Nextcoders",
    "type":"GOLD",
    "address":"Lima, PE",
    "phone":"+51 1 6419482",
    "email":"hola@nextcoders.work",
    "website":"https://www.nextcoders.work/site/"
    },
    {
    "name":"Academia CRM",
    "type":"GOLD",
    "address":"São João da Boa Vista, BR",
    "phone":"+55 19 99319-9469",
    "email":"lucas@academiacrm.online",
    "website":"www.academiacrm.online"
    },
    {
    "name":"Meta-Web",
    "type":"GOLD",
    "address":"VILLEURBANNE, FR",
    "phone":"+33 805 08 10 81",
    "email":"info@sirh24.fr",
    "website":"sirh24.fr"
    },
    {
    "name":"Reyada Business Services & Consulting Co.",
    "type":"GOLD",
    "address":"Cairo, EG. Riyadh, SA. Abu Dhabi, AE",
    "phone":"+20 109 198 5280",
    "email":"info@reyadabusiness.com",
    "website":"https://www.reyadabusiness.com/"
    },
    {
    "name":"visoma gmbh",
    "type":"GOLD",
    "address":"Uelzen, DE",
    "email":"office@visoma.de",
    "website":"visoma.de"
    },
    {
    "name":"InoQ",
    "type":"GOLD",
    "address":"Gliwice, PL",
    "phone":"+48 606 439 214",
    "email":"biuro@inoq.pl",
    "website":"https://www.inoq.pl/"
    },
    {
    "name":"SABA",
    "type":"GOLD",
    "address":"ULAANBAATAR, MN",
    "phone":"+976 7600 5599",
    "email":"INFO@SABAX.MN",
    "website":"www.sabax.mn"
    },
    {
    "name":"izofis bilgi islem",
    "type":"GOLD",
    "address":"Antalya, TR",
    "phone":"+90 850 304 8580",
    "email":"info@izofis.com",
    "website":"www.izofis.com"
    },
    {
    "name":"CloudEZ",
    "type":"GOLD",
    "address":"Taichung City, TW",
    "phone":"+886 4 2378 0220",
    "email":"vincentzhan@cloudez.com.tw",
    "website":"https://cloudez.bitrix24.site"
    },
    {
    "name":"Good Computer Guy",
    "type":"GOLD",
    "address":"Boston, MA, US",
    "phone":"+1 508-251-1153",
    "email":"info@goodcomputerguy.com",
    "website":"www.goodcomputerguy.com"
    },
    {
    "name":"Aidem Art Sp. z o.o.",
    "type":"GOLD",
    "address":"Poznan, PL",
    "phone":"+48 61 853 35 34",
    "email":"bitrix@aidemart.pl",
    "website":"https://aidemart.pl/bitrix24"
    },
    {
    "name":"BPM Consulting",
    "type":"GOLD",
    "address":"Warsaw, PL",
    "phone":"+48 579 545 535",
    "email":"info@bpmc.pl",
    "website":"bpmc.pl"
    },
    {
    "name":"Antibiro",
    "type":"GOLD",
    "address":"Belgrade, RS",
    "phone":"+381 63 339546",
    "email":"antibiro@antibiro.com",
    "website":"www.antibiro.com"
    },
    {
    "name":"kreativ web marketing UG (haftungsbeschränkt) & Co. KG",
    "type":"GOLD",
    "address":"Bremen, DE",
    "phone":"+49 421 40897368",
    "email":"bitrix24@kreativ-web-marketing.de",
    "website":"https://www.kreativ-web-marketing.com/de/bitrix24/"
    },
    {
    "name":"Beytech IT Solutions",
    "type":"GOLD",
    "address":"Sao Paulo, BR. Estela 515, BR",
    "phone":"+55 11 3522-3590",
    "email":"bitrix24@beytech.com.br",
    "website":"www.beytech.com.br"
    },
    {
    "name":"Kala Group Technologies LLC",
    "type":"GOLD",
    "address":"Mission, TX, US. Toronto, CA",
    "phone":"+1 956-996-6554",
    "email":"contact@kalagrouptech.com",
    "website":"www.kalagrouptech.com"
    },
    {
    "name":"APPLIMENT",
    "type":"GOLD",
    "address":"Zagreb, HR",
    "phone":"+385 98 239 590",
    "email":"info@appliment.eu",
    "website":"appliment.eu"
    },
    {
    "name":"01Ocean Company Limited",
    "type":"GOLD",
    "address":"Hong Kong, HK",
    "phone":"+852 5542 2474",
    "email":"info@01ocean.com",
    "website":"http://www.01ocean.com"
    },
    {
    "name":"Notamedia Private Limited",
    "type":"GOLD",
    "address":"New Delhi,Mumbai,Pune,Banglore,Chennai,Hyderabad,Kolkata,UAE,UK,USA,Russia, IN",
    "phone":"+91 98222 04788",
    "email":"vipin@notamedia.com",
    "website":"www.notamedia.com"
    },
    {
    "name":"Technopeak IT S.L.",
    "type":"GOLD",
    "address":"Barcelona, ES. Bogota, CO. Ciudad de México, CDMX, MX",
    "phone":"+34 919 03 80 27",
    "email":"info@technopeak.es",
    "website":"technopeak.es"
    },
    {
    "name":"Proyectanda",
    "type":"GOLD",
    "address":"Lucena, ES. Málaga, ES",
    "phone":"+34 955 32 92 04",
    "email":"info@proyectanda.com",
    "website":"www.proyectanda.com"
    },
    {
    "name":"Dorabox",
    "type":"GOLD",
    "address":"Sydney & Melbourne, AU",
    "phone":"+61 406 881 912",
    "email":"sales@dorabox.com.au",
    "website":"dorabox.com.au"
    },
    {
    "name":"LCI Soluções",
    "type":"GOLD",
    "address":"Recife, BR",
    "phone":"+55 81 3224-0053",
    "email":"contato@lcisolucoes.com",
    "website":"www.lcisolucoes.com"
    },
    {
    "name":"FusionETA Sdn Bhd",
    "type":"GOLD",
    "address":"Kuala Lumpur, MY",
    "phone":"+60 12-603 0996",
    "email":"simon@fusioneta.com",
    "website":"https://fusioneta.com"
    },
    {
    "name":"Frigat.NET",
    "type":"GOLD",
    "address":"Bratislava, SK",
    "phone":"+421 911 354 210",
    "email":"office@frigat.net",
    "website":"en.frigat.net"
    },
    {
    "name":"PT. Aurora Solusi Perdana",
    "type":"GOLD",
    "address":"Jakarta Pusat, ID. Semarang, ID",
    "phone":"+62 882-1024-1837",
    "email":"info@aurorasoft.id",
    "website":"https://www.aurorasoft.id/"
    },
    {
    "name":"Lift Brand",
    "type":"GOLD",
    "address":"San José, CR",
    "phone":"+506 2215 0304",
    "email":"mercadeo@liftbrand.com",
    "website":"www.liftbrand.com"
    },
    {
    "name":"RealNet, S.A. de C.V.",
    "type":"GOLD",
    "address":"Ciudad de México, MX",
    "phone":"+52 55 5219 8656",
    "email":"bitrix@realnet.com.mx",
    "website":"http://www.realnet.com.mx"
    },
    {
    "name":"ITREE Consulting & Services",
    "type":"GOLD",
    "address":"Guadalajara, MX. Mexico, MX. Monterrey, MX",
    "phone":"+52 33 2505 2290",
    "email":"info@itree.mx",
    "website":"www.itree.mx"
    },
    {
    "name":"Notamedia Software Design",
    "type":"GOLD",
    "address":"Dubai Marina, AE",
    "phone":"+971 56 173 3079",
    "email":"jijin@notamedia.ae",
    "website":"www.notamedia.ae"
    },
    {
    "name":"OFFICE42",
    "type":"GOLD",
    "address":"Budapest, HU",
    "phone":"+36 70 638 9699",
    "email":"bitrix@office42.hu",
    "website":"office42.hu"
    },
    {
    "name":"HUB CONSULTORES",
    "type":"GOLD",
    "address":"Santa Cruz de Tenerife, ES. Santa Cruz de Tenerife, ES",
    "phone":"+34 822 68 40 08",
    "email":"hola@hubconsultores.com",
    "website":"www.hubconsultores.com"
    },
    {
    "name":"Wsparcie Informatyczne PL",
    "type":"GOLD",
    "address":"Warszawa, PL",
    "phone":"+48 504 590 721",
    "email":"info@wsparcieinformatyczne.pl",
    "website":"https://bitrix24.wsparcieinformatyczne.pl"
    },
    {
    "name":"RENVIS P. C.",
    "type":"GOLD",
    "address":"Thessaloniki, GR",
    "phone":"+30 231 118 0008",
    "email":"info@renvis.gr",
    "website":"renvis.gr"
    },
    {
    "name":"vJednom s.r.o.",
    "type":"GOLD",
    "address":"Praha, CZ",
    "phone":"+420 253 253 970",
    "email":"info@vjednom.cz",
    "website":"https://vjednom.cz"
    },
    {
    "name":"Münstermann GmbH",
    "type":"GOLD",
    "address":"Soest, DE. Paderborn, DE. Herne, DE",
    "phone":"+49 2921 36480",
    "email":"info@muenstermann.de",
    "website":"www.muenstermann.de"
    },
    {
    "name":"Biznes Consulting",
    "type":"GOLD",
    "address":"Kostrzyn Wlkp., PL",
    "phone":"+48 61 616 62 77",
    "email":"office@homesoft.pl",
    "website":"www.homesoft.pl/bitrix24"
    },
    {
    "name":"ivato GmbH - Unternehmensberatung und Lösungen zur Digitalisierung",
    "type":"GOLD",
    "address":"Leipzig, DE. Innsbruck, AT. München, Leipzig , DE",
    "phone":"+49 341 9003993",
    "email":"leipzig@ivato.de",
    "website":"www.ivato.de"
    },
    {
    "name":"OITS Solutions, LLC",
    "type":"GOLD",
    "address":"Miami, US",
    "phone":"+1 302-467-2066",
    "email":"bitrix.info@oits.solutions",
    "website":"https://oits.solutions"
    },
    {
    "name":"Buta Grup AS",
    "type":"GOLD",
    "address":"Ankara, TR",
    "phone":"+90 850 302 2882",
    "email":"info@butagrup.com.tr",
    "website":"bitrix.butagrup.com.tr"
    },
    {
    "name":"Burghold & Frech GmbH",
    "type":"GOLD",
    "address":"Erfurt, DE",
    "phone":"+49 361 4229610",
    "email":"digitalworker@burghold-frech.de",
    "website":"www.burghold-frech.de"
    },
    {
    "name":"PEACH \bConsulting",
    "type":"GOLD",
    "address":"Ho chí minh, VN",
    "phone":"+84 94 221 22 23",
    "email":"hello@peach.vn",
    "website":"peachdigital.vn"
    },
    {
    "name":"B2B Development",
    "type":"GOLD",
    "address":"Glendale, US",
    "phone":"+1 323-647-2261",
    "email":"info@b2bcrmusa.com",
    "website":"b2bcrmusa.com"
    },
    {
    "name":"Notamedia Private Limited",
    "type":"GOLD",
    "address":"Tampa, US",
    "phone":"+1 470-809-9540",
    "email":"vipin@notamedia.com",
    "website":"www.notamedia.com"
    },
    {
    "name":"Web Wolf",
    "type":"GOLD",
    "address":"Miami, US",
    "phone":"+1 786-673-6546",
    "email":"dev@web-wolf.net",
    "website":"https://web-wolf.net/"
    },
    {
    "name":"F&M Computer Systemhaus GmbH",
    "type":"GOLD",
    "address":"Berlin, DE",
    "phone":"+49 30 47400321",
    "email":"vertrieb@fmc.berlin",
    "website":"www.fmc.berlin"
    },
    {
    "name":"DIGIMAT SPA",
    "type":"GOLD",
    "address":"Matera, IT",
    "phone":"+39 0835 345000",
    "email":"b24team@digimat.it",
    "website":"http://www.digimat.it"
    },
    {
    "name":"FLAMIX",
    "type":"GOLD",
    "address":"New York, US",
    "phone":"+1 309-929-9015",
    "email":"sales@flamix.email",
    "website":"https://bitrix24.flamix.software/en/"
    },
    {
    "name":"Notamedia UK",
    "type":"GOLD",
    "address":"London, GB",
    "email":"sales@notamedia.co.uk",
    "website":"notamedia.co.uk"
    },
    {
    "name":"Digital-agency Vedita",
    "type":"GOLD",
    "address":"Köln, DE",
    "phone":"+49 2203 9432351",
    "email":"info@bitrix24-vedita.com",
    "website":"https://bitrix24.vedita.digital/de/"
    },
    {
    "name":"Insider Group",
    "type":"GOLD",
    "address":"WARSZAWA, PL",
    "phone":"+48 788 667 857",
    "email":"office@insidergroup.pro",
    "website":"https://portal.ig24.online/ru"
    },
    {
    "name":"Nia Tecnologia para Negócios",
    "type":"SILVER",
    "address":"Florianópolis, BR",
    "phone":"+55 48 99828-5097",
    "email":"geovane@nia.tech",
    "website":"nia.tech"
    },
    {
    "name":"Hibiscus Technologies",
    "type":"SILVER",
    "address":"Quebec, CA",
    "phone":"+1 514-552-9889",
    "email":"info@hibiscustechnologies.com",
    "website":"https://hibiscustechnologies.com/"
    },
    {
    "name":"Mafer Digital",
    "type":"SILVER",
    "address":"Jardinopolis/SP, BR",
    "phone":"+55 16 98850-8030",
    "email":"contato@maferdigital.com.br",
    "website":"www.maferdigital.com.br"
    },
    {
    "name":"STARMOON CONSULTING SERVICES PVT LTD",
    "type":"SILVER",
    "address":"Gurgaon, IN. Dubai, AE. Sfo, US",
    "phone":"+91 95553 03220",
    "email":"info@starmoon.in",
    "website":"www.starmoon.in"
    },
    {
    "name":"QUBRIKA TECNOLOGIAS DE INOVACION SA DE CV",
    "type":"SILVER",
    "address":"Cancún, MX",
    "phone":"+52 800 953 1667",
    "email":"info@qubrika.com",
    "website":"https://qubrika.com/"
    },
    {
    "name":"Elege.me",
    "type":"SILVER",
    "address":"Barueri, BR",
    "phone":"+55 11 4395-3504",
    "email":"comercial@elege.me",
    "website":"elege.me"
    },
    {
    "name":"KillaLab",
    "type":"SILVER",
    "address":"Lima, PE. Cancún , MX. Medellín, CO",
    "phone":"+51 992 315 422",
    "email":"ventas@killalab.com",
    "website":"www.killalab.com"
    },
    {
    "name":"GAIA CONSULTING SERVIÇOS EM TI LTDA",
    "type":"SILVER",
    "address":"Belo Horizonte, BR",
    "phone":"+55 31 3033-4537",
    "email":"contato@gaiaconsulting.com.br",
    "website":"http://www.gaiaconsulting.com.br/"
    },
    {
    "name":"Aksilia",
    "type":"SILVER",
    "address":"Milano, IT",
    "phone":"+39 351 992 7488",
    "email":"bitrix@aksilia.com",
    "website":"www.aksilia.com"
    },
    {
    "name":"ISO",
    "type":"SILVER",
    "address":"Guatemala, GT. San Salvador, SV",
    "phone":"+502 2382 2727",
    "email":"ventas@soporteiso.com",
    "website":"www.soporteiso.com"
    },
    {
    "name":"DigiClave",
    "type":"SILVER",
    "address":"Bangalore, IN",
    "phone":"+91 99290 67374",
    "email":"contact@digiclave.com",
    "website":"https://digiclave.com"
    },
    {
    "name":"Compass Media",
    "type":"SILVER",
    "address":"Singapore, SG",
    "phone":"+65 6100 9088",
    "email":"info@compassmedia.com.sg",
    "website":"compassmedia.com.sg"
    },
    {
    "name":"hgbplus (business unit of innovrdhi)",
    "type":"SILVER",
    "address":"Bengaluru, IN. Los Angeles, US. Coimbatore/TN, IN",
    "phone":"+91 81975 92166",
    "email":"sales@hgbplus.in",
    "website":"www.hgbplus.com"
    },
    {
    "name":"Magnetic Media Network SpA",
    "type":"SILVER",
    "address":"Trezzo sull'Adda, IT",
    "phone":"+39 02 9092 9396",
    "email":"benvenuto@magneticmedia.com",
    "website":"http://www.magneticmedia.com"
    },
    {
    "name":"DreamOnIT",
    "type":"SILVER",
    "address":"Brasov, RO",
    "phone":"+40 749 030 327",
    "email":"office@dreamonit.ro",
    "website":"https://www.dreamonit.ro/parteneri-B24/"
    },
    {
    "name":"RIPUZ SAS",
    "type":"SILVER",
    "address":"Bogota, CO",
    "phone":"+57 350 3131305",
    "email":"sales@ripuz.co",
    "website":"https://www.ripuz.co/"
    },
    {
    "name":"Brainstorm Asesores",
    "type":"SILVER",
    "address":"Asunción, PY",
    "phone":"+595 961 529511",
    "email":"diego@brainstorm.com.py",
    "website":"www.brainstorm.com.py"
    },
    {
    "name":"Introduce",
    "type":"SILVER",
    "address":"Caxias do Sul, BR",
    "phone":"+55 54 3041-5254",
    "email":"bitrix@introduce.com.br",
    "website":"https://www.introduce.com.br"
    },
    {
    "name":"QRM Solutions",
    "type":"SILVER",
    "address":"Sao Paulo, BR",
    "phone":"+55 11 4117-9700",
    "email":"rafael@qrmsolutions.com.br",
    "website":"www.qrmsolutions.com.br"
    },
    {
    "name":"Building Bridge",
    "type":"SILVER",
    "address":"Bellevue, US",
    "phone":"+1 206-659-5570",
    "email":"sales@buildingbridge.com",
    "website":"www.buildingbridge.com"
    },
    {
    "name":"M2B Partners",
    "type":"SILVER",
    "address":"Paris, FR. Casablanca, MA",
    "phone":"+33 1 89 20 09 73",
    "email":"infos@moncrm.me",
    "website":"https://www.moncrm.me"
    },
    {
    "name":"WL CONSULT",
    "type":"SILVER",
    "address":"SÃO PAULO, BR",
    "phone":"+55 11 95424-1966",
    "email":"waldir@wlconsult.com.br",
    "website":"www.wlconsult.com.br"
    },
    {
    "name":"Hacao Co., Ltd",
    "type":"SILVER",
    "address":"Ho Chi Minh, VN",
    "email":"sales@hacao.com",
    "website":"https://hacao.com"
    },
    {
    "name":"AJP Soluciones Tec",
    "type":"SILVER",
    "address":"ZAPOPAN, MX",
    "phone":"+52 33 8526 2464",
    "email":"info@ajpsolucionestec.com",
    "website":"ajpsolucionestec.com"
    },
    {
    "name":"ITDynamix",
    "type":"SILVER",
    "address":"Сairo, EG",
    "phone":"+20 122 737 3391",
    "email":"info@itdynamix.com",
    "website":"www.itdynamix.com"
    },
    {
    "name":"SmartCloud Solutions",
    "type":"SILVER",
    "address":"Buenos Aires, AR. Bogotá, CO. Santiago, CL",
    "phone":"+54 11 5984-1813",
    "email":"contacto@smartcloudsolutions.global",
    "website":"http://smartcloudsolutions.global"
    },
    {
    "name":"ITrix",
    "type":"SILVER",
    "address":"Poznań, PL",
    "phone":"+48 783 467 892",
    "email":"kontakt@itrix.pl",
    "website":"https://itrix.pl"
    },
    {
    "name":"Korvit Kft.",
    "type":"SILVER",
    "address":"Budapest, VI., HU",
    "phone":"+36 30 444 0541",
    "email":"info@cegmenedzsment.com",
    "website":"cegmenedzsment.com"
    },
    {
    "name":"Libe Sales",
    "type":"SILVER",
    "address":"Goiânia, BR",
    "email":"elvis@1mais1mkt.com",
    "website":"http://www.1mais1mkt.com/"
    },
    {
    "name":"Dinamo",
    "type":"SILVER",
    "address":"Colle Val d'Elsa, IT",
    "email":"info@dinamodigitale.it",
    "website":"dinamodigitale.it"
    },
    {
    "name":"TLJMKT",
    "type":"SILVER",
    "address":"Osasco, BR",
    "phone":"+55 11 98160-9373",
    "email":"contato@tljmkt.com",
    "website":"www.TLJMKT.com"
    },
    {
    "name":"Padazz Crown Inc, S.A. de C.V.",
    "type":"SILVER",
    "address":"Mexico, MX",
    "phone":"+52 55 5322 9900",
    "email":"luisrfortson@padazz.mx",
    "website":"www.padazz.mx"
    },
    {
    "name":"OptimaBSC",
    "type":"SILVER",
    "address":"Durban, ZA",
    "phone":"+27 87 897 5025",
    "email":"queries@optimabsc.com",
    "website":"https://www.optimabsc.com/"
    },
    {
    "name":"spidergroup",
    "type":"SILVER",
    "address":"Fulda, DE",
    "phone":"+49 661 29190538",
    "email":"kontakt@spidergroup.de",
    "website":"spidergroup.de"
    },
    {
    "name":"Acemagick",
    "type":"SILVER",
    "address":"Chennai, IN. Bangalore, IN. New Delhi, IN",
    "phone":"+91 96770 10013",
    "email":"contactus@acemagick.com",
    "website":"https://acemagick.com"
    },
    {
    "name":"HiDo Cloud LLC",
    "type":"SILVER",
    "address":"Ulaanbaatar, MN",
    "phone":"+976 7609 0200",
    "email":"info@hido.mn",
    "website":"www.HiDo.mn"
    },
    {
    "name":"Brasil Leads",
    "type":"SILVER",
    "address":"Curitiba, BR",
    "phone":"+55 41 99740-0014",
    "email":"rodolfo.leonardo@brasilleads.net.br",
    "website":"www.brasilleads.com.br"
    },
    {
    "name":"FBS Solutions",
    "type":"SILVER",
    "address":"Waco, Texas, US",
    "email":"info@fbs.business",
    "website":"www.fbs.business"
    },
    {
    "name":"Fale Fácil Apoio Administrativo LTDA",
    "type":"SILVER",
    "address":"Campina Grande, BR",
    "email":"bitrix24@falefacil.net.br",
    "website":"https://portal.falefacilvoip.com.br/bitrix24/"
    },
    {
    "name":"Partner Group Consulting GmbH",
    "type":"SILVER",
    "address":"Köln, DE",
    "phone":"+49 221 13082900",
    "email":"info@pgc-group.de",
    "website":"https://pgc-group.de/"
    },
    {
    "name":"Infitron Technologies",
    "type":"SILVER",
    "address":"Lagos, NG",
    "phone":"+234 817 987 3317",
    "email":"info@infitron.net",
    "website":"http://infitron.net/"
    },
    {
    "name":"SiSU Soluzioni",
    "type":"SILVER",
    "address":"Subbiano, IT",
    "phone":"+39 366 252 3888",
    "email":"simone.borselli@sisu.it",
    "website":"https://www.sisu.it/bitrix24"
    },
    {
    "name":"93 SOLUÇÕES EMPRESARIAIS",
    "type":"SILVER",
    "address":"CAMPO GRANDE, BR",
    "email":"DIRETORIA@NA93.COM.BR",
    "website":"www.na93.com.br"
    },
    {
    "name":"inno99 UG (haftungsbeschränkt)",
    "type":"SILVER",
    "address":"Düsseldorf, DE",
    "phone":"+49 211 9425510",
    "email":"kontakt@inno99.de",
    "website":"https://inno99.de/smartbusiness-bitrix24/"
    },
    {
    "name":"inno99 UG (haftungsbeschränkt)",
    "type":"SILVER",
    "address":"Düsseldorf, DE",
    "phone":"+49 211 9425510",
    "email":"kontakt@inno99.de",
    "website":"https://inno99.de/smartbusiness-bitrix24/"
    },
    {
    "name":"Bannex System",
    "type":"SILVER",
    "address":"Kowloon, HK",
    "email":"info@bannex.cc",
    "website":"www.bannex.cc"
    },
    {
    "name":"NAS de Guatemala",
    "type":"SILVER",
    "address":"Guatemala, GT",
    "phone":"+502 2279 9600",
    "email":"info@nas.com.gt",
    "website":"www.nas.com.gt"
    },
    {
    "name":"DCENTER VIET NAM TECHNOLOGY COMPANY LIMITED",
    "type":"SILVER",
    "address":"Hanoi, VN",
    "phone":"+84 91 196 66 69",
    "email":"tieukim@dcenter.vn",
    "website":"Dcenter.vn"
    },
    {
    "name":"Cross Technology & Communication",
    "type":"SILVER",
    "address":"Ho Chi Minh city, VN",
    "phone":"+84 98 716 63 51",
    "email":"nguyen@crosstechcom.com",
    "website":"https://crosstechcom.com"
    },
    {
    "name":"GEM Consulting",
    "type":"SILVER",
    "address":"Warsaw, PL. Sopot, PL",
    "phone":"+48 600 056 377",
    "email":"gem@gemconsulting.pl",
    "website":"www.gemconsulting.pl"
    },
    {
    "name":"Arrecife Digital",
    "type":"SILVER",
    "address":"Recife, BR",
    "phone":"+55 81 98706-3780",
    "email":"comercial@arrecifedigital.com.br",
    "website":"www.arrecifedigital.com.br"
    },
    {
    "name":"Squirrel Horizon",
    "type":"SILVER",
    "address":"Indaiatuba, BR",
    "phone":"+55 11 97207-2600",
    "email":"contato@squirrelhorizon.com",
    "website":"https://www.squirrelhorizon.com/"
    },
    {
    "name":"FontuMi - ENRUTAPPS SAS",
    "type":"SILVER",
    "address":"Barranquilla, CO",
    "phone":"+57 333 0333301",
    "email":"alianzas@fontumi.co",
    "website":"https://www.fontumi.co"
    },
    {
    "name":"AWSolutions work Ativos Digitais LTDA",
    "type":"SILVER",
    "address":"Jaguariuna, BR. Jaguariuna, BR",
    "phone":"+55 19 99402-3449",
    "email":"william@awsolutions.work",
    "website":"awsolutions.work"
    },
    {
    "name":"Avidor Pte Ltd",
    "type":"SILVER",
    "address":"SINGAPORE, SG",
    "phone":"+65 6962 0633",
    "email":"info@avidor.com.sg",
    "website":"www.avidor.com.sg"
    },
    {
    "name":"Ralf Wiehmann - IT - & Media Consult",
    "type":"SILVER",
    "address":"Barchfeld-Immelborn, DE",
    "phone":"+49 160 93874968",
    "email":"info@wiehmann-consulting.de",
    "website":"www.wiehmann-consulting.de"
    },
    {
    "name":"BIXIE",
    "type":"SILVER",
    "address":"Spreitenbach, CH. Sarajevo, BA. New York, US",
    "phone":"+41 44 551 41 20",
    "email":"info@bixie.ch",
    "website":"bixie.ch"
    },
    {
    "name":"EG Connects",
    "type":"SILVER",
    "address":"Rockwall, US",
    "phone":"+1 469-321-1110",
    "email":"crm@egconnects.com",
    "website":"www.egconnects.com"
    },
    {
    "name":"MORE MS GROUP PTY LTD",
    "type":"SILVER",
    "address":"Brisbane, AU",
    "phone":"+61 468 955 212",
    "email":"info@morems.com.au",
    "website":"morems.com.au"
    },
    {
    "name":"Chezaad",
    "type":"SILVER",
    "address":"Santo Domingo, DO",
    "phone":"+1 829-956-6330",
    "email":"info@chezaad.com",
    "website":"chezaad.com"
    },
    {
    "name":"Linksoft Inc.",
    "type":"SILVER",
    "address":"New Taipei City, TW",
    "phone":"+886 2 2221 2155",
    "email":"info@linksoft.com.tw",
    "website":"www.linksoft.com.tw"
    },
    {
    "name":"Heptagon Group",
    "type":"SILVER",
    "address":"London, GB. Lyon, FR. Toronto, CA",
    "phone":"+44 20 3808 7630",
    "email":"bitrix24@heptagongroup.io",
    "website":"www.heptagongroup.io"
    },
    {
    "name":"icorp",
    "type":"SILVER",
    "address":"Queretaro, MX",
    "phone":"+52 55 2629 3450",
    "email":"icorp@icorp.com.mx",
    "website":"www.icorp.com.mx"
    },
    {
    "name":"Obremba IT GmbH",
    "type":"SILVER",
    "address":"Schüttorf, DE",
    "phone":"+49 1515 5441101",
    "email":"info@obremba-it.de",
    "website":"https://obremba-it.de"
    },
    {
    "name":"BlockTech Technology",
    "type":"SILVER",
    "address":"Sharq, KW",
    "phone":"+965 6902 5566",
    "email":"info@blocktechtechnology.com",
    "website":"www.blocktechtechnology.com"
    },
    {
    "name":"VRTeknoloji",
    "type":"SILVER",
    "address":"Konya, TR",
    "phone":"+90 545 645 42 46",
    "email":"bilgi@vrbilgisayar.com",
    "website":"www.vrbilgisayar.com"
    },
    {
    "name":"RISK Electronics ltd.",
    "type":"SILVER",
    "address":"Sofia, BG",
    "email":"office@risk.bg",
    "website":"https://risk.bg/"
    },
    {
    "name":"Wisesoft Infotech Pvt Ltd",
    "type":"SILVER",
    "address":"Pune, IN. Mumbai, IN",
    "phone":"+91 79 7284 3686",
    "email":"info@wisesoft.in",
    "website":"www.wisesoft.in"
    },
    {
    "name":"Todo Digital",
    "type":"SILVER",
    "address":"Panamá, PA",
    "phone":"+507 836-7782",
    "email":"ventas@tododigital.com.pa",
    "website":"https://tododigital.com.pa"
    },
    {
    "name":"Communication Plus doo",
    "type":"SILVER",
    "address":"Belgrade, RS",
    "phone":"+381 60 3333303",
    "email":"bitrix24@commplus.rs",
    "website":"www.commplus.rs"
    },
    {
    "name":"TotalCloud",
    "type":"SILVER",
    "address":"San Pedro Garza García, MX. San Pedro Garza García, MX",
    "phone":"+52 81 8601 9229",
    "email":"info@totalcloud.mx",
    "website":"www.totalcloud.mx"
    },
    {
    "name":"Cognos",
    "type":"SILVER",
    "address":"Santa Cruz bolivia, BO",
    "email":"gzelada@cognos.com.bo",
    "website":"www.cognos.com.bo"
    },
    {
    "name":"IntelligentDoing",
    "type":"SILVER",
    "address":"Gold Coast, AU",
    "phone":"+61 431 282 677",
    "email":"engage@intelligentdoing.com",
    "website":"https://www.intelligentdoing.com/"
    },
    {
    "name":"Grouper",
    "type":"SILVER",
    "address":"Dublin, IE. London, GB",
    "phone":"+353 1 960 9098",
    "email":"bitrix24@grouper.ie",
    "website":"www.grouper.ie"
    },
    {
    "name":"Play Solutions SRL",
    "type":"SILVER",
    "address":"Bucharest, RO",
    "phone":"+40 727 574 551",
    "email":"sales@play-solutions.ro",
    "website":"https://play-solutions.ro"
    },
    {
    "name":"More Than Clix",
    "type":"SILVER",
    "address":"Buenos Aires, AR. Santiago, CL. Miami, US",
    "email":"contacto@moreclix.co",
    "website":"https://moreclix.co/"
    },
    {
    "name":"CRM-MEXICO",
    "type":"SILVER",
    "address":"Monterrey, MX",
    "phone":"+52 81 8880 2938",
    "email":"bitrix24@crm-mexico.com",
    "website":"www.crm-mexico.com"
    },
    {
    "name":"GLM IT Solution Sdn. Bhd.",
    "type":"SILVER",
    "address":"Kuala Lumpur, MY",
    "phone":"+60 12-616 2423",
    "email":"info@glmitsolution.com",
    "website":"https://glmitsolution.com"
    },
    {
    "name":"ActiveMedia (Thailand) Co., Ltd.",
    "type":"SILVER",
    "address":"Bangkok, TH",
    "phone":"+66 2 683 5100",
    "email":"sales@activemedia.co.th",
    "website":"https://activemedia.co.th/"
    },
    {
    "name":"BLKPRO SOLUTION LLP",
    "type":"SILVER",
    "address":"Bhubaneswar, IN",
    "phone":"+91 96585 77326",
    "email":"bitrix24@blkpros.com",
    "website":"www.blkpros.com"
    },
    {
    "name":"QFACT",
    "type":"SILVER",
    "address":"Rijeka, HR",
    "phone":"+385 51 579 100",
    "email":"bitrix24@qfact.org",
    "website":"http://www.qfact.org"
    },
    {
    "name":"LabIntech - Soluções e Tecnologia",
    "type":"SILVER",
    "address":"Curitiba, BR",
    "phone":"+55 41 99218-4304",
    "email":"comercial@labintech.com.br",
    "website":"www.labintech.com.br"
    },
    {
    "name":"Matrix24",
    "type":"SILVER",
    "address":"Joinville, BR",
    "phone":"+55 47 99113-8325",
    "email":"emerson@matrix24.online",
    "website":"http://matrix24.online/"
    },
    {
    "name":"Go Digital International Co. (W.L.L)",
    "type":"SILVER",
    "address":"Kuwait, KW",
    "phone":"+965 2207 3332",
    "email":"info@godintl.com",
    "website":"http://godintl.com/"
    },
    {
    "name":"E. A. IBRAIN",
    "type":"SILVER",
    "address":"Prague, CZ",
    "phone":"+420 725 804 675",
    "email":"info@ibrain.pro",
    "website":"ibrain.pro"
    },
    {
    "name":"CRMSiga",
    "type":"SILVER",
    "address":"Mogi das Cruzes, BR",
    "phone":"+55 11 3907-8667",
    "email":"contato@crmsiga.com.br",
    "website":"https://crmsiga.com.br"
    },
    {
    "name":"Catsun",
    "type":"SILVER",
    "address":"Taichung, TW",
    "phone":"+886 4 2326 0260",
    "email":"wservice@catsun.net",
    "website":"https://catsun.net/"
    },
    {
    "name":"Kim Quy Group",
    "type":"SILVER",
    "address":"Hà Nội, VN",
    "email":"support@kimquytech.vn",
    "website":"kimquytech.vn"
    },
    {
    "name":"Lösungsagentur GmbH",
    "type":"SILVER",
    "address":"Oberpullendorf, AT",
    "phone":"+43 664 1358191",
    "email":"office@loesungsagentur.at",
    "website":"www.loesungsagentur.at"
    },
    {
    "name":"MarkenUp",
    "type":"SILVER",
    "address":"Santo Domingo, DO",
    "phone":"+1 829-946-3746",
    "email":"jtaveras@markenup.com",
    "website":"www.markenup.com"
    },
    {
    "name":"AtelierCloud LLC.",
    "type":"SILVER",
    "address":"Shinjuku, JP",
    "phone":"+81 3-6665-0910",
    "email":"hola@ateliercloud.co.jp",
    "website":"https://ateliercloud.co.jp"
    },
    {
    "name":"CloudXchange",
    "type":"SILVER",
    "address":"Auckland, NZ",
    "phone":"+64 21 283 6660",
    "email":"info@cloudxchange.co.nz",
    "website":"www.cloudxchange.co.nz"
    },
    {
    "name":"BIT24 UNITY",
    "type":"SILVER",
    "address":"Pax Sky Building 10, Ho Chi Minh, VN",
    "phone":"+84 837 547 281",
    "email":"start@bit24unity.com",
    "website":"https://bit24unity.com"
    },
    {
    "name":"Inter Vision Business Groups Co., Ltd.",
    "type":"SILVER",
    "address":"Bangkok, TH",
    "phone":"+66 80 526 4515",
    "email":"admin@intervision.co",
    "website":"www.intervision.co"
    },
    {
    "name":"QwerTI Consultores",
    "type":"SILVER",
    "address":"Santiago, CL",
    "phone":"+56 9 8289 4295",
    "email":"contacto@qwerti.cl",
    "website":"www.qwerti.cl"
    },
    {
    "name":"Inchpoint GmbH",
    "type":"SILVER",
    "address":"Hannover, DE",
    "phone":"+49 511 8984735",
    "email":"a@inchweb.de",
    "website":"inchweb.de"
    },
    {
    "name":"Netzleiter GmbH & Co. KG",
    "type":"SILVER",
    "address":"Hamburg, DE",
    "phone":"+49 40 20949766",
    "email":"info@netzleiter.com",
    "website":"www.netzleiter.net"
    },
    {
    "name":"LEXcode",
    "type":"SILVER",
    "address":"Spenge, DE",
    "phone":"+49 163 2373716",
    "email":"bitrix24@lexcode.de",
    "website":"https://www.lexcode.de/bitrix24/"
    },
    {
    "name":"MASTERINSOFT",
    "type":"SILVER",
    "address":"Porto, PT. Porto, PT. Maputo, MZ",
    "phone":"+351 910 480 970",
    "email":"support@masterinsoft.com",
    "website":"www.masterinsoft.com"
    },
    {
    "name":"SLS Digitalization UG",
    "type":"SILVER",
    "address":"München, DE",
    "phone":"+49 172 7173230",
    "email":"schuster@sls-digitalization.de",
    "website":"https://sls-digitalization.de"
    },
    {
    "name":"TDACRM Solutions",
    "type":"SILVER",
    "address":"Bucuresti, RO",
    "phone":"+40 371 783 884",
    "email":"denis@tdacrm.ro",
    "website":"https://tdacrm.ro"
    },
    {
    "name":"Apexcellor Limited",
    "type":"SILVER",
    "address":"Auckland, NZ",
    "phone":"+64 22 500 6610",
    "email":"success@apexcellor.com",
    "website":"www.apexcellor.com"
    },
    {
    "name":"VB DIGITAL TRANSFORMATIONS PVT LTD",
    "type":"SILVER",
    "address":"Hyderabad, IN",
    "email":"info@groupvb.com",
    "website":"www.groupvb.com"
    },
    {
    "name":"ARTISMEDIA SP. Z O.O.",
    "type":"SILVER",
    "address":"Warszawa, PL",
    "phone":"+48 732 081 241",
    "email":"info@artis-media.com.pl",
    "website":"artis-media.com.pl"
    },
    {
    "name":"eb24-einfach mehr Service",
    "type":"SILVER",
    "address":"Dortmund, DE",
    "phone":"+49 231 99760669",
    "email":"anfrage@easydigitalisierung.de",
    "website":"easydigitalisierung.de"
    },
    {
    "name":"Res-Q IT Services",
    "type":"SILVER",
    "address":"Claremont, AU",
    "phone":"+61 8 6555 6500",
    "email":"nick@res-q.com.au",
    "website":"www.res-q.com.au"
    },
    {
    "name":"Sundae Solutions Co., Ltd.",
    "type":"SILVER",
    "address":"Bangrak, TH",
    "phone":"+66 85 359 5551",
    "email":"sales@sundae.co.th",
    "website":"https://www.sundae.co.th"
    },
    {
    "name":"Agência R3 Marketing Digital",
    "type":"SILVER",
    "address":"Guarulhos, BR",
    "phone":"+55 11 3164-1199",
    "email":"danilo@agenciar3.com.br",
    "website":"https://www.agenciar3.com.br"
    },
    {
    "name":"Magnum LLC",
    "type":"SILVER",
    "address":"Ulaanbaatar, MN",
    "email":"info@magnum.mn",
    "website":"magnum.mn"
    },
    {
    "name":"Artti Sp. z o.o.",
    "type":"SILVER",
    "address":"Warsaw, PL",
    "phone":"+48 533 336 583",
    "email":"info@artti.pl",
    "website":"https://artti.pl/bitrix24-free/"
    },
    {
    "name":"krauss connect",
    "type":"SILVER",
    "address":"Ebensfeld, DE",
    "phone":"+49 9547 60208",
    "email":"bitrix24@krauss.de",
    "website":"www.krauss.de"
    },
    {
    "name":"IM Business Solutions",
    "type":"SILVER",
    "address":"Cairo, EG",
    "phone":"+20 102 664 3472",
    "email":"support@imbs.biz",
    "website":"imbs.biz"
    },
    {
    "name":"Idealexport Ltd",
    "type":"SILVER",
    "address":"Zebbug, MT",
    "phone":"+33 5 81 31 41 17",
    "email":"info@idealexport.net",
    "website":"www.idealexport.net"
    },
    {
    "name":"Rawaj Tech",
    "type":"SILVER",
    "address":"Muscat, OM. Istanbul, TR",
    "phone":"+968 9698 0440",
    "email":"Contact@rawaj-tech.com",
    "website":"https://rawaj-tech.com"
    },
    {
    "name":"EMCsoft",
    "type":"SILVER",
    "address":"Potchefstroom, ZA",
    "phone":"+27 84 325 6742",
    "email":"emin.m@emcsoft.pro",
    "website":"https://emcsoft.io/"
    },
    {
    "name":"Fusion",
    "type":"SILVER",
    "address":"Ho Chi Minh City, VN",
    "email":"fusion@fusion.vn",
    "website":"http://fusion.vn"
    },
    {
    "name":"KITE UNION",
    "type":"SILVER",
    "address":"Sydney, AU. Auckland, NZ",
    "phone":"+61 432 833 024",
    "email":"contact@kiteunion.com.au",
    "website":"kiteunion.com.au"
    },
    {
    "name":"MAX CRM",
    "type":"SILVER",
    "address":"Warszawa, PL",
    "phone":"+48 572 526 447",
    "email":"info@max-crm.online",
    "website":"https://max-crm.online/"
    },
    {
    "name":"Şirketim360°",
    "type":"SILVER",
    "address":"Bursa, TR",
    "phone":"+90 224 322 06 04",
    "email":"iletisim@sirketim360.com",
    "website":"https://www.sirketim360.com"
    },
    {
    "name":"E and E Solution",
    "type":"SILVER",
    "address":"La Paz, BO",
    "email":"admin@eande-solution.com",
    "website":"www.eande-solution.com"
    },
    {
    "name":"InfinityBHT, LLC",
    "type":"SILVER",
    "address":"Boulder, US. Gabes, TN. kuala Lumpur, MY",
    "phone":"+216 27 697 769",
    "email":"bitrix-support@infinitybht.com",
    "website":"https://b24.infinitybht.com/"
    },
    {
    "name":"MEDSIRAT",
    "type":"SILVER",
    "address":"Tunis, TN",
    "phone":"+216 29 926 386",
    "email":"sales@medsirat.com",
    "website":"www.medsirat.com/hightech/"
    },
    {
    "name":"GREEN IT CONSULTANT TRAINING COMPANY",
    "type":"SILVER",
    "address":"TP HCM, VN",
    "email":"hung@gits.vn",
    "website":"gits.vn"
    },
    {
    "name":"Samcom Technologies",
    "type":"SILVER",
    "address":"Ahmedabad, IN",
    "phone":"+91 98251 54779",
    "email":"bitrix@samcomtechnologies.com",
    "website":"www.samcomtechnologies.com"
    },
    {
    "name":"361 Degree Consultancy Pte Ltd",
    "type":"SILVER",
    "address":"Singapore, SG",
    "phone":"+65 9646 1160",
    "email":"enquiry@361dc.com",
    "website":"www.361dc.com"
    },
    {
    "name":"Kanban Sales",
    "type":"SILVER",
    "address":"Belgrade, RS",
    "phone":"+381 63 8194414",
    "email":"office@kanbansales.com",
    "website":"www.kanbansales.com"
    },
    {
    "name":"ItachSoft",
    "type":"SILVER",
    "address":"Warszawa, PL",
    "phone":"+48 22 390 64 45",
    "email":"info@itach-soft.com",
    "website":"http://www.itach-soft.com"
    },
    {
    "name":"zynerdata",
    "type":"SILVER",
    "address":"capital federal, AR",
    "phone":"+54 9 11 5338-5070",
    "email":"info@zynerdata.com",
    "website":"www.zynerdata.com"
    },
    {
    "name":"Mitgroupltd",
    "type":"SILVER",
    "address":"Cape Coral, US",
    "phone":"+1 646-568-7662",
    "email":"info@mitgroupltd.com",
    "website":"www.mitgroupltd.com"
    },
    {
    "name":"SKYSITE",
    "type":"SILVER",
    "address":"Guayaquil, EC",
    "phone":"+593 4-390-9059",
    "email":"sales@skycell.com.ec",
    "website":"https://b24.skysite.com.ec/"
    },
    {
    "name":"Hey Youse Consulting",
    "type":"SILVER",
    "address":"Urbana, US",
    "phone":"+1 234-274-1797",
    "email":"success@heyyouseconsulting.com",
    "website":"https://heyyouseconsulting.com/"
    },
    {
    "name":"The Guru Consultancy",
    "type":"SILVER",
    "address":"CHEADLE, GB",
    "phone":"+44 7483 330276",
    "email":"info@theguru.me.uk",
    "website":"https://theguru.me.uk"
    },
    {
    "name":"SAMCOTEC",
    "type":"SILVER",
    "address":"Riyadh, SA",
    "phone":"+966 59 590 7777",
    "email":"sales@samcotec.com",
    "website":"www.samcotec.com"
    },
    {
    "name":"Centurio Business Optimisation GmbH",
    "type":"SILVER",
    "address":"Hünstetten, DE",
    "phone":"+49 6126 5914401",
    "email":"info@optimisation.world",
    "website":"www.optimisation.world"
    },
    {
    "name":"MASTER-OK SP. Z O.O.",
    "type":"SILVER",
    "address":"Warsaw, PL",
    "phone":"+48 791 181 800",
    "email":"info@mit-group.pl",
    "website":"www.mit-group.pl"
    },
    {
    "name":"reficio UG (haftungsbeschränkt) u. Co KG",
    "type":"SILVER",
    "address":"Eschborn, DE",
    "phone":"+49 6196 9994124",
    "email":"info@reficio.digital",
    "website":"https://reficio.digital"
    },
    {
    "name":"max2-consulting GmbH",
    "type":"SILVER",
    "address":"Germering, DE",
    "email":"info@max2-consulting.de",
    "website":"https://max2-consulting.de"
    },
    {
    "name":"Telution GmbH",
    "type":"SILVER",
    "address":"Waiblingen, DE",
    "phone":"+49 7151 250020",
    "email":"hallo@telution.de",
    "website":"https://www.telution.de"
    },
    {
    "name":"ProfessCloud Limited",
    "type":"SILVER",
    "address":"Hong Kong, HK",
    "phone":"+852 3465 9852",
    "email":"bitrix24@professcloud.com",
    "website":"https://www.professcloud.com/"
    },
    {
    "name":"SME CONSULTORES",
    "type":"SILVER",
    "address":"Curridabat, CR",
    "phone":"+506 4702 3131",
    "email":"info@smeconsultores.com",
    "website":"www.smeconsultores.com"
    },
    {
    "name":"FrontlineITS",
    "type":"SILVER",
    "address":"Guayaquil, EC",
    "phone":"+1 346-223-0370",
    "email":"sales@frontlineits.com",
    "website":"www.frontlineits.com"
    },
    {
    "name":"Fusión Digital",
    "type":"SILVER",
    "address":"Santiago, CL. Santiago, CL",
    "phone":"+56 9 9308 9722",
    "email":"contacto@fusiondigital.cl",
    "website":"https://fusiondigital.cl/"
    },
    {
    "name":"Saabsoft Technologies",
    "type":"SILVER",
    "address":"Dubai, AE",
    "phone":"+971 4 770 1845",
    "email":"sales@saabsoft.com",
    "website":"https://www.saabsoft.com"
    },
    {
    "name":"Elite Media Agency",
    "type":"SILVER",
    "address":"Istanbul, TR",
    "email":"info@elite-ema.com",
    "website":"Elite-ema.com"
    },
    {
    "name":"AOLC On-line (Pty) Ltd",
    "type":"SILVER",
    "address":"Boksburg, ZA",
    "phone":"+61 8 7550 0555",
    "email":"info@aolc.co.za",
    "website":"www.bitrix.24crm.co.za"
    },
    {
    "name":"Carbono Marketing",
    "type":"SILVER",
    "address":"Puerto Vallarta, MX",
    "phone":"+52 322 125 7310",
    "email":"contacto@carbonomarketing.com",
    "website":"https://www.carbonomarketing.com/"
    },
    {
    "name":"Phuong Nam Digital",
    "type":"SILVER",
    "address":"Ho Chi Minh, VN",
    "email":"bitrix24@phuongnamdigital.com",
    "website":"phuongnamdigital.com"
    },
    {
    "name":"Linking map",
    "type":"SILVER",
    "address":"Ljubljana, SI",
    "phone":"+386 41 763 005",
    "email":"mitja.krajnc@linking-map.com",
    "website":"www.linking-map.com"
    },
    {
    "name":"Value Consultancy (Singapore) Pte. Ltd.",
    "type":"SILVER",
    "address":"Singapore, SG",
    "phone":"+65 3165 9568",
    "email":"info@vmcsg.com",
    "website":"Value.com.sg"
    },
    {
    "name":"Growth Sales",
    "type":"SILVER",
    "address":"Madrid, ES",
    "phone":"+34 695 49 28 47",
    "email":"hola@growthsales.es",
    "website":"http://growthsales.es/"
    },
    {
    "name":"Computer Pride Limited",
    "type":"SILVER",
    "address":"Naiorbi, KE",
    "email":"info@computer-pride.co.ke",
    "website":"https://computer-pride.co.ke/software/bitrix-24/"
    },
    {
    "name":"Accflex",
    "type":"SILVER",
    "address":"Cairo, EG. Riyadh, SA",
    "email":"sales@accflex.com",
    "website":"www.accflex.com"
    },
    {
    "name":"Cristian Media",
    "type":"SILVER",
    "address":"Campina, RO",
    "phone":"+40 762 888 385",
    "email":"office@cristianmedia.com",
    "website":"cristianmedia.com"
    },
    {
    "name":"pc-web: it-solutions GmbH",
    "type":"SILVER",
    "address":"Wien, AT",
    "phone":"+43 1 8906095",
    "email":"support@pc-web.at",
    "website":"https://www.pc-web.at"
    },
    {
    "name":"Ars Pantheon d.o.o.",
    "type":"SILVER",
    "address":"ZAGREB, HR",
    "phone":"+385 1 3141 590",
    "email":"info@ars-pantheon.hr",
    "website":"www.ars-pantheon.hr"
    },
    {
    "name":"ReBell Telecommunication Zrt.",
    "type":"SILVER",
    "address":"Budapest IX. kerület, HU",
    "phone":"+36 20 289 5602",
    "email":"hrisko.laszlo@rebelltel.hu",
    "website":"www.rebelltel.hu"
    },
    {
    "name":"RC Associats S.L.",
    "type":"SILVER",
    "address":"Arinsal, AD",
    "phone":"+376 744 489",
    "email":"rc@rcassociats.com",
    "website":"www.rcassociats.com"
    },
    {
    "name":"Froling Enterprises",
    "type":"SILVER",
    "address":"Orroroo, AU",
    "phone":"+61 427 581 341",
    "email":"admin@froling.com.au",
    "website":"https://froling.com.au"
    },
    {
    "name":"Valtech Transcend Limited",
    "type":"SILVER",
    "phone":"+82 52-388-9772",
    "email":"vt-admin@vt-transcend.com",
    "website":"vt-transcend.com"
    },
    {
    "name":"B-tools",
    "type":"SILVER",
    "address":"Warszawa, PL",
    "phone":"+48 22 307 41 50",
    "email":"info@b-tools.pl",
    "website":"https://b-tools.pl/bitrix24/pl"
    },
    {
    "name":"GTS TELECOMUNICACIONES S.L",
    "type":"SILVER",
    "address":"Leganes, ES",
    "phone":"+34 912 26 04 30",
    "email":"soporte.clientes@gts.es",
    "website":"www.gts.es"
    },
    {
    "name":"New IT",
    "type":"SILVER",
    "address":"Arlington, US",
    "phone":"+1 415-800-3083",
    "email":"alex@newit.us",
    "website":"https://newit.us/"
    },
    {
    "name":"mediaSol Digital-agency",
    "type":"SILVER",
    "address":"Malaga, ES. Málaga, ES",
    "phone":"+34 951 40 02 32",
    "email":"info@mediasol.es",
    "website":"mediasol.es"
    },
    {
    "name":"O2O IN LIFE, Inc.",
    "type":"SILVER",
    "address":"Uijeongbu-si, KR",
    "phone":"+82 50-71320-5433",
    "email":"info@o2oinlife.net",
    "website":"www.o2oinlife.net"
    },
    {
    "name":"Vetbook",
    "type":"SILVER",
    "address":"Cairo, EG",
    "phone":"+20 101 723 2004",
    "email":"support@vetbook.net",
    "website":"www.vetbook.net"
    },
    {
    "name":"NS2B",
    "type":"SILVER",
    "address":"POISSY, FR",
    "phone":"+33 6 03 46 73 94",
    "email":"contact@ns2b.fr",
    "website":"www.ns2b.fr"
    },
    {
    "name":"Simples Solution LLC",
    "type":"SILVER",
    "address":"Miami, US",
    "phone":"+1 786-405-8080",
    "email":"info@simplessolution.com",
    "website":"simplessolution.com"
    },
    {
    "name":"Smart Tech World S.A.S.",
    "type":"SILVER",
    "address":"Cali, CO",
    "phone":"+57 322 6595979",
    "email":"ventas@smarttechworld.com",
    "website":"www.smarttechworld.com"
    },
    {
    "name":"moncrm / Novway",
    "type":"SILVER",
    "address":"Casablanca, MA",
    "phone":"+212 520-477690",
    "email":"infos@moncrm.ma",
    "website":"www.moncrm.ma"
    },
    {
    "name":"Force Growth International",
    "type":"SILVER",
    "address":"Dubai, AE",
    "phone":"+971 54 424 7399",
    "email":"team@forcegrowth.io",
    "website":"https://forcegrowth.ae/bitrix/"
    },
    {
    "name":"HPP-IT In Company",
    "type":"SILVER",
    "address":"Curitiba, BR",
    "phone":"+55 41 99825-5356",
    "email":"contato@hpp-it.com.br",
    "website":"www.hpp-it.com.br"
    },
    {
    "name":"Arktics s.a.s",
    "type":"SILVER",
    "address":"Bogota, CO",
    "phone":"+57 601 6159560",
    "email":"sales@arktics.com",
    "website":"WWW.ARKTICS.COM"
    },
    {
    "name":"MediaPro Co. Ltd",
    "type":"SILVER",
    "address":"Ho Chi Minh, VN",
    "phone":"+84 96 891 18 88",
    "email":"bitrix24@mediapro.vn",
    "website":"https://bitrix24.mediapro.vn/"
    },
    {
    "name":"Trixpert egypt",
    "type":"SILVER",
    "address":"Cairo, EG",
    "phone":"+20 128 308 3335",
    "email":"nancy@trixperteg.com",
    "website":"www.trixperteg.com"
    },
    {
    "name":"Lahkam Ltd",
    "type":"SILVER",
    "address":"Douala, CM",
    "phone":"+237 6 70 18 44 49",
    "email":"services@lahkam.com",
    "website":"http://www.lahkam.com/"
    },
    {
    "name":"Intuitive Systems Sdn Bhd",
    "type":"SILVER",
    "address":"Sibu, MY",
    "phone":"+60 84-331 712",
    "email":"info@intuitivesystems.com.my",
    "website":"www.intuitivesystems.com.my"
    }
]
    
appendPartnerData(partners);

function appendPartnerData(data){
    let container = document.getElementById("partners_data");
    container.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","partners_cards");

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        div3.setAttribute("id","first_div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let div6 = document.createElement("div");
        div6.setAttribute("id","second_div")
        let div7 = document.createElement("div");
        div7.setAttribute("id","third_div");


        let name = document.createElement("a");
        name.href="#";
        name.innerText = el.name;

        let image1 = document.createElement("img");
        image1.src = "https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/authorized_training_provider.png";

        let image2 = document.createElement("img");
        image2.src = "https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/live_chat.png";

        let image3 = document.createElement("img");
        image3.src = "https://www.bitrix24.com/bitrix/components/bx/b24.partner.list/templates/.default/images/power_seller.png";

        div4.innerText = el.type;
        div5.innerText = el.address;

        let phone = document.createElement("a");
        phone.href = `tel:${el.phone}`;
        phone.innerText = `Phone : ${el.phone}`;

        let email = document.createElement("a");
        email.href = `mailto:${el.email}`;
        email.innerText = `Email : ${el.email}`;

        let website = document.createElement("a");
        website.href = el.website;
        website.innerText = `Website : ${el.website}`;

        let request = document.createElement("button");
        request.innerText = "SEND REQUEST";

        div1.append(name);
        div2.append(image1,image2,image3);
        div3.append(div1,div2);
        div6.append(div4,div5);
        div7.append(website,request)
        div.append(div3,div6,phone,email,div7);
        container.append(div);
    })
}
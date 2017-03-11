/* This is my original JavaScript data (Assignment 3). 
    This time, I created function using AJAX to read JSON file.
    File name : app.js
    Author's name : Yuta Imaizumi #200333869
    Web site name : Yuta Imaizumi Portfolio */

switch (document.title) {

    //index page start

    case "Yuta Imaizumi Portfolio | Home":

        (function(){

            console.log("App Started");
            console.info("Page Title: " + document.title);

            // texts of "Home" by string variables
            var greeting = document.getElementById("greeting");
            var contentGreeting = "Hi! Japanese Graphic Designer Here!";
            greeting.textContent = contentGreeting;

            var myname = document.getElementById("myname");
            var contentMyname = "Yuta Imaizumi";
            myname.textContent = contentMyname;

            var aboutme = document.getElementById("aboutme");
            var contentAboutme = "About Me";
            aboutme.textContent = contentAboutme;

            var careertitle = document.getElementById("careertitle");
            var contentCareertitle = "Career";
            careertitle.textContent = contentCareertitle;

            var careerp = document.getElementById("careerp");
            var contentCareerp = "5-year graphic designer mainly based in Tokyo, Japan. After graduating a university, I worked for a travel agency as a web content master. There I was into the depth of design and web industry, and started to learn graphic design by myself. Then worked for some design firms in Japan, and now I came here to Canada to study web development academically.";
            careerp.textContent = contentCareerp;

            var strengthtitle = document.getElementById("strengthtitle");
            var contentStrengthtitle = "Strength";
            strengthtitle.textContent = contentStrengthtitle;

            var strengthp = document.getElementById("strengthp");
            var contentStrengthp = "A wide range of graphic design skill, from paper media, web to smartphone and tablet UI. And a skill as an illustrator. I can draw illustrations by a variety of style. I also have experience as an art director, so I can manage whole advertising matters, include making marketing strategies, contents, copy and scenario writing in Japanese.";
            strengthp.textContent = contentStrengthp;

            var missiontitle = document.getElementById("missiontitle");
            var contentMissiontitle = "Mission";
            missiontitle.textContent = contentMissiontitle;

            var missionp = document.getElementById("missionp");
            var contentMissionp = "\"Japanese-style attentiveness to the needs of my clients\" --- I highly understand that the design works should be the tools by which clients and their customers will fully communicate with each other, not just designers\' self-satisfaction. I have confidence to fully communicate with my clients and also satisfy them.";
            missionp.textContent = contentMissionp;

        })();

    break;

    // works page start

    case "Yuta Imaizumi Portfolio | Works":

        (function(){

            console.log("App Started");
            console.info("Page Title: " + document.title);

            // texts of "Works" by string variables
            var works = document.getElementById("works");
            var contentWorks = "Works";
            works.textContent = contentWorks;

            var work1title = document.getElementById("work1title");
            var contentWork1title = "Beanstalk Snow";
            work1title.textContent = contentWork1title;

            var work1p = document.getElementById("work1p");
            var contentWork1p = "Beanstalk Snow Co.Ltd is the company which makes foods and goods for babies. This is the special website featured Japanese professional tennis player Ai Sugiyama. We focused on her way of raising her child. Based on the color of the company logo, I made a cute and cheerful design with parallax effect.";
            work1p.textContent = contentWork1p;

            var work2title = document.getElementById("work2title");
            var contentWork2title = "Networld";
            work2title.textContent = contentWork2title;

            var work2p = document.getElementById("work2p");
            var contentWork2p = "Networld is the IT solution company. This is the landing page for introducing a new storage product \"Clustered Data ONTAP.\" Ordered to make a \"pop and catchy\" design, I suggested unique characters named after the products. The leaflet which you can download on this site also designed by me.";
            work2p.textContent = contentWork2p;

            var work3title = document.getElementById("work3title");
            var contentWork3title = "COMP1002";
            work3title.textContent = contentWork3title;

            var work3p = document.getElementById("work3p");
            var contentWork3p = "The final assignment of COMP1002 (Web and Internet Fundamentals, by Mr. McCrindle) last semester. \"Making a small website promoting an actual product that was on the market before the Internet.\" I chose a letterpress and featured the beauty of paper crafts with Christmas design.";
            work3p.textContent = contentWork3p;

        })();

    break;

    // contact page start

    case "Yuta Imaizumi Portfolio | Contact":

        (function(){

            console.log("App Started");
            console.info("Page Title: " + document.title);

            // texts of "Contact" by string variables
            var contact = document.getElementById("contact");
            var contentContact = "Contact";
            contact.textContent = contentContact;

            var mailform = document.getElementById("mailform");
            var contentMailform = "Mail Form";
            mailform.textContent = contentMailform;

            var mandatory = document.getElementById("mandatory");
            var contentMandatory = "Please feel free to contact me for any questions! ( *... Mandatory)";
            mandatory.textContent = contentMandatory;

            // Set event button 
            SendButton.addEventListener("click", function(event){
                event.preventDefault();
            
            // Form data store in variables
            // (I used .value to get the input value of the form ... but is that correct? Are there any other way?? 2017.02.10)
            let Name = document.getElementById("Name").value;
            let Mail = document.getElementById("Mail").value;
            let Tel = document.getElementById("Tel").value;
            let Message = document.getElementById("Message").value;
            // let SendButton = document.getElementById("SendButton");

            console.info("Name: " , Name);
            console.info("Mail: " , Mail);
            console.info("Tel: " , Tel);
            console.info("Message: " , Message);
            });
        
        })();

    break;
}


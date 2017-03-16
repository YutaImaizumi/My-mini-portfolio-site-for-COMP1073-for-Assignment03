"use strict";

(function () { // IIFE started

function Start() {
  LoadNavBar();
  LoadPageContent();
}

// Loads the Main Navigation using AJAX
function LoadNavBar() {
  let mainNav = document.getElementById("mainNav");
    let navbarHTML;

    let navXHR = new XMLHttpRequest();

    navXHR.open("GET", "../navbar.html", true);

    navXHR.send();

    navXHR.onreadystatechange = function() {
      if((this.readyState === 4) && (this.status === 200)) {
        navbarHTML = this.responseText;
      }
    };

    // Link button active on each page
   navXHR.addEventListener("load", function() {
      mainNav.innerHTML = navbarHTML;
      switch(document.title) {
        case "Yuta Imaizumi Portfolio | Home":
          let homeLink = document.getElementById("homeLink");
          homeLink.setAttribute("class", "active");
        break;

        case "Yuta Imaizumi Portfolio | Works":
          let projectsLink = document.getElementById("worksLink");
          projectsLink.setAttribute("class", "active");
        break;

        case "Yuta Imaizumi Portfolio | Contact":
          let contactLink = document.getElementById("contactLink");
          contactLink.setAttribute("class", "active");
        break;
      }
    });
}


// Loads the Content for each page using the Document Title
function LoadPageContent() {
  switch (document.title) {
    case "Yuta Imaizumi Portfolio | Home":
      LoadHomePage();
      break;

    case "Yuta Imaizumi Portfolio | Works":
      LoadWorksPage();
      break;

    case "Yuta Imaizumi Portfolio | Contact":
      LoadContactPage();
      break;
  }
}


// Home Page Contents start

let data = {};
function LoadHomePage() {

let XHR = new XMLHttpRequest();
      XHR.open("GET", "../texts.json", true);
      XHR.send();
      XHR.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
          data = JSON.parse(this.responseText);
        }
      };

      XHR.addEventListener("load", function () {

        // TOP H1
        let greetingsMain = document.getElementById("greetingsMain");
        data.greetings.forEach(function (greeting) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <h1 id="greeting">${greeting.message1}</h1>    
          <h1 id="myname">${greeting.message2}</h1>
          <img src="Assets/me.gif" alt="Current pic of Yuta Imaizumi" id="mepic">
          <h2 id="aboutme">${greeting.message3}</h2>
        `;
          greetingsMain.appendChild(newDiv);
        }, this);

        // 3 column
        let aboutmeDetails = document.getElementById("aboutmeDetails");
        data.aboutmedetails.forEach(function (aboutmedetail) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
          <div class="col-xs-12 col-md-4 adjust-y">
            <h3>${aboutmedetail.message1}</h3>    
            <p id="iconcentr"><i class="fa ${aboutmedetail.icon} fa-3x"></i></p>
            <p>${aboutmedetail.message2}</p>
          </div>
        `;
          aboutmeDetails.appendChild(newDiv);
        }, this);

      });
} // Home Page Contents end









      window.onload = Start;
})(); // IIFE finished
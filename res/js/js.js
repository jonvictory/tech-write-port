window.onload = function() {

const htmlNav = '<ul id="top-nav-items" class="nav justify-content-end">' +
  '<li class="nav-item">' +
    '<a class="nav-link active" href="#">Active</a>' +
  '</li>' +
  '<li class="nav-item">' +
    '<a class="nav-link" href="#">Link</a>' +
  '</li>' +
  '<li class="nav-item">' +
    '<a class="nav-link" href="#">Link</a>' +
  '</li>' +
  '<li class="nav-item">' +
    '<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>' +
  '</li>' +
'</ul>' 

let pageTitles = [
'Home',
'About Me',
'Projects'
]

let pageUrls = [
'index',
'about',
'projects'
]

//top-nav-menu//

$("#top-nav").append('<ul id="top-nav-items" class="nav justify-content-end">' + '</ul>')

let topNav = function() {

  for (x = 0; x < pageUrls.length; x++) {
    $("#top-nav-items").append(
      '<li class="nav-item">' +
        '<a class="nav-li" id="' +
        pageUrls[x] +
        '"href="./' +
        pageUrls[x] +
        '.html">' +
        pageTitles[x] +
        "</a>" +
        "</li>"
    );
  }
}
topNav();
//end top nav//

//begin side nav//
$("#side-menu").append('<div><p class="menu-nav-header">Navigation</p></div>')

  for (x = 0; x < pageUrls.length; x++) {
    $("#side-menu").append(
      '<li class="nav-item menu-nav-li">' +
        '<a class="nav-li" id="' +
       pageUrls[x] +
        '"href="./' +
       pageUrls[x] +
        '.html">' +
       pageTitles[x] +
        "</a>" +
        "</li>"
    );
  }
//end side nav//

//begin current page logic functions//

let currentPageDecision = function() {
  
  if (document.getElementsByTagName("title")[0].id === 'title') {
    sideMenuCurrentClass();

    currentPageTitle();

  }
  function sideMenuCurrentClass() {
    let pageId = document.getElementById("title").text;
    for (i = 0; i < pageUrls.length; i++) {
      if (pageId === pageUrls[i]) {
        let navId = document.getElementById(pageUrls[i]);
        navId.classList.add("active");
        navId.classList.add("disabled")

      }
      else;
    }
  }
  function currentPageTitle() {
    let pageId = document.getElementById("title").text;
    for (y = 0; y < pageTitles.length; y++) {
      if (pageId === pageUrls[y]) {
        let pageTitle = document.getElementById("cur-page-title");
        pageTitle.append("Jon Huynh, Technical Writer: " + pageTitles[y]);
      }
      else;
    }
  }
}
currentPageDecision();

//end current page logic functions//
}
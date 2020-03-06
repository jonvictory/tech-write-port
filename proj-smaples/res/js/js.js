window.onload = function() {
  
  // const documentationNav

  const htmlNav =
    
    "</button>" +
    '<div class="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" target="_blank" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Why Workfront" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" target="_blank" href="why-workfront">Overview</a>' +
    '<a class="dropdown-item" target="_blank" href="case-studies">Customers</a>' +
    "</div>" +
    "</li>" +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" target="_blank" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Solutions" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" target="_blank" href="solutions">All Solutions</a>' +
    '<a class="dropdown-item" target="_blank" href="solutions/marketing">Marketing</a>' +
    '<a class="dropdown-item" target="_blank" href="solutions/it">IT</a>' +
    '<a class="dropdown-item" target="_blank" href="solutions/agencies">Agencies</a>' +
    '<a class="dropdown-item" target="_blank" href="solutions/professional-services">Professional Services</a>' +
    '<a class="dropdown-item" target="_blank" href="solutions/product-development">Product Development</a>' +
    "</div>" +
    "</li>" +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" target="_blank" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Products" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" target="_blank" href="products">All Products</a>' +
    '<a class="dropdown-item" target="_blank" href="products/work-management">Workfront</a>' +
    '<a class="dropdown-item" target="_blank" href="products/fusion">Workfront Fusion</a>' +
    '<a class="dropdown-item" target="_blank" href="products/library">Workfront Library</a>' +
    '<a class="dropdown-item" target="_blank" href="integrations">Integrations</a>' +
    "" +
    "</div>" +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link" target="_blank" href="plans" tabindex="-1" aria-disabled="false">Plans</a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link" target="_blank" href="partners" tabindex="-1" aria-disabled="false">Partners</a>' +
    "</li>" +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" target="_blank" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Resources" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" target="_blank" href="resources">All Resources</a>' +
    '<a class="dropdown-item" target="_blank" href="blog">Blog</a>' +
    '<a class="dropdown-item" target="_blank" href="project-management-knowledge-areas">Knowledge areas</a>' +
    '<a class="dropdown-item" target="_blank" href="events/live-events">Events</a>' +
    '<a class="dropdown-item" target="_blank" href="webinar/all">Webinars</a>' +
    '<a class="dropdown-item" target="_blank" href="ebooks-whitepapers">Ebooks & Whitepapers</a>' +
    '<a class="dropdown-item" target="_blank" href="videos">Videos</a>' +
    '<a class="dropdown-item" target="_blank" href="reports">Reports</a>' +
    '<a class="dropdown-item" target="_blank" href="case-studies">Case Studies</a>' +
    '<div class="dropdown-divider"></div>' +
    '<a class="dropdown-item" target="_blank" href="services-and-support">Service and Support</a>' +
    '<a class="dropdown-item" target="_blank" href="/">System status</a>' +
    '<a class="dropdown-item" target="_blank" href="/">Help</a>' +
    '<a class="dropdown-item" target="_blank" href="">Community</a>' +
    '<a class="dropdown-item" target="_blank" href="">Idea Exchange</a>' +
    '<a class="dropdown-item" target="_blank" href="">Training</a>' +
    "</div>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</nav>";
    console.log(document.getElementsByTagName("title")[0].id)
menuDecision();

    function menuDecision() {
      if (document.getElementsByTagName("title")[0].id === 'admin-title') {
        const adminNav = 
        '<nav class="nav-pad navbar navbar-expand-lg navbar-light bg-light">' +
          '<a class="navbar-brand" target="_blank" href="https://www.workfront.com"><img src="../../res/img/workfront-orange.svg"/></a>' +
          '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
          '<span class="navbar-toggler-icon"></span>' + htmlNav; document.getElementById("admin-cont-nav").innerHTML = adminNav;
      }
      else {
        const documentationNav = 
        '<nav class="nav-pad navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand" target="_blank" href="https://www.workfront.com"><img src="./res/img/workfront-orange.svg"/></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' + htmlNav; document.getElementById("cont-nav").innerHTML = documentationNav;
      }

    }
    

    
  //END NAV//

  //SIDEBAR//
  let pageTitles = [
    "Home",
    "Projects",
    "Tasks",
    "Issues",
    "Users",
    "Documents",
    "Other objects and endpoints",
    "All objects and endpoints",

    // "Test"
  ];

  let pageUrls = [
    "index",
    "projects",
    "tasks",
    "issues",
    "users",
    "documents",
    "other",
    "general",
    
    // "test"
  ];
  $("#side-menu").append('<p class="menu-nav-header">Documentation</p>')
  for (x = 0; x < pageUrls.length; x++) {
    $("#side-menu").append(
      '<li class="nav-item menu-nav-li">' +
        '<a class="nav-link" id="' +
        pageTitles[x] +
        '"href="./' +
        pageUrls[x] +
        '.html">' +
        pageTitles[x] +
        "</a>" +
        "</li>"
    );
  }
  //END DOCUMENTATION SIDEBAR//

  //GET STARTED ADMIN SIDEBAR//
  let adminPageTitles = [
    "Navigation",
    "Intro",
    "REST",
    "GUIs",
    "Authentication",
    "Request",
    "Response",
    "cURL",
    "Project"  
  ];
  
  let adminPageUrls = [
    "navigation",
    "intro",
    "rest",
    "gui",
    "authentication",
    "request",
    "response",
    "curl",
    "project",  
  ]

$("#side-menu-admin").append('<p class="menu-nav-header">Get started</p>')

  for (x = 0; x < adminPageUrls.length; x++) {
    $("#side-menu-admin").append(
      '<li class="nav-item menu-nav-li">' +
        '<a class="nav-link" id="' +
        adminPageTitles[x] +
        '"href="./' +
        adminPageUrls[x] +
        '.html">' +
        adminPageTitles[x] +
        "</a>" +
        "</li>"
    );
  }

  //END ADMIN SIDEBAR//

  //Current Documentation Page Functions//
  

let currentPageDecision = function() {
  
  if (document.getElementsByTagName("title")[0].id === 'admin-title') {
    adminSideMenuCurrentClass();

    adminCurrentPageTitle();

  }
  else {
  sideMenuCurrentClass();

  currentPageTitle();

  }
  function sideMenuCurrentClass() {
    let pageId = document.getElementById("title").text;
    for (i = 0; i < pageTitles.length; i++) {
      if (pageId === pageTitles[i]) {
        let navId = document.getElementById(pageTitles[i]);
        navId.classList.add("active");
      }
      else;
    }
  }
  function currentPageTitle() {
    let pageId = document.getElementById("title").text;
    for (y = 0; y < pageTitles.length; y++) {
      if (pageId === pageTitles[y]) {
        let pageTitle = document.getElementById("cur-page-title");
        pageTitle.append("Developer Documentation: " + pageTitles[y]);
      }
      else;
    }
  }
  function adminSideMenuCurrentClass() {
    let pageId = document.getElementById("admin-title").text;
    for (i = 0; i < adminPageTitles.length; i++) {
      if (pageId === adminPageTitles[i]) {
        let navId = document.getElementById(adminPageTitles[i]);
        navId.classList.add("active");
      }
      else;
    }
  }
  function adminCurrentPageTitle() {
    let pageId = document.getElementById("admin-title").text;
    for (y = 0; y < adminPageTitles.length; y++) {
      if (pageId === adminPageTitles[y]) {
        let pageTitle = document.getElementById("cur-page-title");
        pageTitle.append("Developer Documentation: " + adminPageTitles[y]);
      }
      else;
    }
  }
}
currentPageDecision()
  
//END CURRENT DOCUEMNTATION PAGE FUNCTIONS//

//CURRENT ADMIN PAGE FUNCTIONS//



//END CURRENT ADMIN PAGE FUNCTIONS//



//might use these to consolidate the single nav bar variable. hehe.//
//   const mainNavHeaders = [
//     "Why Workfront",
//     "Solutions",
//     "Products",
//     "Plans",
//     "Partners",
//     "Resources"
//   ];
//   const whyWorkfrontfDropD = ["Overview", "Customer"];
//   const solutionsDropD = [
//     "All Solutions",
//     "Marketing",
//     "IT",
//     "Agencies",
//     "Professional Services",
//     "Product Development"
//   ];
//   const productsDropD = [
//     "All Products",
//     "Workfront",
//     "Workfront Fusion",
//     "Workfront Library",
//     "Integrations"
//   ];
//   const resourcesDropD = [
//     "All Resoures",
//     "Blog",
//     "Knowledge Areas",
//     "Events",
//     "Webinars",
//     "Ebooks & Whitepapers",
//     "Videos",
//     "Reports",
//     "Case Studies"
//   ];
//   const resourcesDropDTwo = [
//     "Service and Support",
//     "System Status",
//     "Help",
//     "Community",
//     "Idea Exchange",
//     "Training"
//   ];
};



// TRENDING SECTION ON SEE MORE AND GO BACK

seeTrendingMore = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");




    document.getElementById("more-trending").style.display = "flex";
    document.getElementById("more-trending2").style.display = "flex";
    document.getElementById("seeMore").style.display = "none";
    document.getElementById("seeLess").style.display = "flex";
    document.getElementById("seeMoreBox").style.display = "none";

    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Local.style.display = "none";
    Foreign.style.display = "none";
    navBar.style.display = "none";

}

seeTrendingLess = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");


    document.getElementById("more-trending").style.display = "none";
    document.getElementById("more-trending2").style.display = "none";
    document.getElementById("seeMore").style.display = "flex";
    document.getElementById("seeLess").style.display = "none";
    document.getElementById("seeMoreBox").style.display = "flex";

    LandingPage.style.display = "block";
    Recently.style.display = "block";
    Local.style.display = "block";
    Foreign.style.display = "block";
    navBar.style.display = "block";
};



// RECENTLY SECTION ON SEE MORE AND GO BACK

seeRecentlyMore = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");




    document.getElementById("more-recently").style.display = "flex";
    document.getElementById("more-recently2").style.display = "flex";
    document.getElementById("seeMoreRecently").style.display = "none";
    document.getElementById("seeLessRecently").style.display = "flex";
    document.getElementById("seeMoreBoxR").style.display = "none";


    LandingPage.style.display = "none";
    Trending.style.display = "none";
    Local.style.display = "none";
    Foreign.style.display = "none";
    navBar.style.display = "none";

}

seeRecentlyLess = () => {
    
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");


    document.getElementById("more-recently").style.display = "none";
    document.getElementById("more-recently2").style.display = "none";
    document.getElementById("seeMoreRecently").style.display = "flex";
    document.getElementById("seeLessRecently").style.display = "none";
    document.getElementById("seeMoreBoxR").style.display = "flex";



    LandingPage.style.display = "block";
    Trending.style.display = "block";
    Local.style.display = "block";
    Foreign.style.display = "block";
    navBar.style.display = "block";
}




// LOCAL SECTION ON SEE MORE AND GO BACK

seeLocalMore = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");




    document.getElementById("more-local").style.display = "flex";
    document.getElementById("more-local2").style.display = "flex";
    document.getElementById("seeMoreLocal").style.display = "none";
    document.getElementById("seeLessLocal").style.display = "flex";
    document.getElementById("seeMoreBoxL").style.display = "none";

    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Trending.style.display = "none";
    Foreign.style.display = "none";
    navBar.style.display = "none";

}

seeLocalLess = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");


    document.getElementById("more-local").style.display = "none";
    document.getElementById("more-local2").style.display = "none";
    document.getElementById("seeMoreLocal").style.display = "flex";
    document.getElementById("seeLessLocal").style.display = "none";
    document.getElementById("seeMoreBoxL").style.display = "flex";


    LandingPage.style.display = "block";
    Recently.style.display = "block";
    Trending.style.display = "block";
    Foreign.style.display = "block";
    navBar.style.display = "block";
}



// FOREIGN SECTION ON SEE MORE AND GO BACK

seeForeignMore = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");




    document.getElementById("more-foreign").style.display = "flex";
    document.getElementById("more-foreign2").style.display = "flex";
    document.getElementById("seeMoreForeign").style.display = "none";
    document.getElementById("seeLessForeign").style.display = "flex";
    document.getElementById("seeMoreBoxF").style.display = "none";

    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Local.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";

}

seeForeignLess = () => {
    let Trending = document.getElementById("trending");
    let Recently = document.getElementById("recently");
    let Local = document.getElementById("local");
    let Foreign = document.getElementById("foreign");
    let LandingPage = document.getElementById("landingPage");
    let navBar = document.getElementById("navBar");


    document.getElementById("more-foreign").style.display = "none";
    document.getElementById("more-foreign2").style.display = "none";
    document.getElementById("seeMoreForeign").style.display = "flex";
    document.getElementById("seeLessForeign").style.display = "none";
    document.getElementById("seeMoreBoxF").style.display = "flex";


    LandingPage.style.display = "block";
    Recently.style.display = "block";
    Local.style.display = "block";
    Trending.style.display = "block";
    navBar.style.display = "block";
}



// DARK MODE
let darkModeBody = document.getElementById("darkModeBody");

darkModeBody.addEventListener("click", () => {
    document.getElementById("darkModeBody").classList.toggle("active");
    document.body.classList.toggle("dark");
    document.getElementsById("lp-content").classList.toggle("dark");
})


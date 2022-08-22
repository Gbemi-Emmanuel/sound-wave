

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
    // Local.style.display = "none";
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
    // Local.style.display = "block";
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
    // Local.style.display = "none";
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
    // Local.style.display = "block";
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
    // Local.style.display = "none";
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
    // Local.style.display = "block";
    Trending.style.display = "block";
    navBar.style.display = "block";
}






//======== DARK MODE AND LIGHT MODE ========

let darkModeBody = document.getElementById("darkModeBody");

darkModeBody.addEventListener("click", () => {
    document.getElementById("darkModeBody").classList.toggle("active");
    document.body.classList.toggle("dark");
})






//======== TRENDING DOWNLOAD =======
var Trending = document.getElementById("trending");
var Recently = document.getElementById("recently");
var Local = document.getElementById("local");
var Foreign = document.getElementById("foreign");
var LandingPage = document.getElementById("landingPage");
var navBar = document.getElementById("navBar");
var downloadPage = document.getElementById("download");
var downloadImg = document.getElementById("downloadImg");
var downloadBtn = document.getElementById("downloadBtn");

downloadGoBack = () => {

    LandingPage.style.display = "block";
    Recently.style.display = "block";
    Foreign.style.display = "block";
    Trending.style.display = "block";
    navBar.style.display = "block";
    downloadPage.style.display = "none";
}



// Bandana
tdownloadMusic1 = () => {

    let tSongTitle1 = document.getElementById("tSongTitle1");
    let tSongTitleText1 = document.getElementById("tSongTitleText1");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle1.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText1.innerHTML;
    downloadBtn.href = "./audio/trending/Bandana.mp3";
    downloadAudio.src = "./audio/trending/Bandana.mp3";
    downloadImg.src = document.getElementById("trendingImg1").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}
// Machala
tdownloadMusic2 = () => {

    let tSongTitle2 = document.getElementById("tSongTitle2");
    let tSongTitleText2 = document.getElementById("tSongTitleText2");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle2.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText2.innerHTML;
    downloadBtn.href = "./audio/trending/Machala.mp3";
    downloadAudio.src = "./audio/trending/Machala.mp3";
    downloadImg.src = document.getElementById("trendingImg2").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//its plenty
tdownloadMusic3 = () => {

    let tSongTitle3 = document.getElementById("tSongTitle3");
    let tSongTitleText3 = document.getElementById("tSongTitleText3");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle3.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText3.innerHTML;
    downloadBtn.href = "./audio/trending/itsplenty.mp3";
    downloadAudio.src = "./audio/trending/itsplenty.mp3";
    downloadImg.src = document.getElementById("trendingImg3").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//common person
tdownloadMusic4 = () => {

    let tSongTitle4 = document.getElementById("tSongTitle4");
    let tSongTitleText4 = document.getElementById("tSongTitleText4");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle4.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText4.innerHTML;
    downloadBtn.href = "./audio/trending/commonPerson.mp3";
    downloadAudio.src = "./audio/trending/commonPerson.mp3";
    downloadImg.src = document.getElementById("trendingImg4").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//peace be unto you
tdownloadMusic5 = () => {

    let tSongTitle5 = document.getElementById("tSongTitle5");
    let tSongTitleText5 = document.getElementById("tSongTitleText5");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle5.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText5.innerHTML;
    downloadBtn.href = "./audio/trending/pbuy.mp3";
    downloadAudio.src = "./audio/trending/pbuy.mp3";
    downloadImg.src = document.getElementById("trendingImg5").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//girlfriend
tdownloadMusic6 = () => {

    let tSongTitle6 = document.getElementById("tSongTitle6");
    let tSongTitleText6 = document.getElementById("tSongTitleText6");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle6.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText6.innerHTML;
    downloadBtn.href = "./audio/trending/girlfriend.mp3";
    downloadAudio.src = "./audio/trending/girlfriend.mp3";
    downloadImg.src = document.getElementById("trendingImg6").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//certified loner
tdownloadMusic7 = () => {

    let tSongTitle7 = document.getElementById("tSongTitle7");
    let tSongTitleText7 = document.getElementById("tSongTitleText7");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle7.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText7.innerHTML;
    downloadBtn.href = "./audio/trending/certifiedloner.mp3";
    downloadAudio.src = "./audio/trending/certifiedloner.mp3";
    downloadImg.src = document.getElementById("trendingImg7").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//Buga
tdownloadMusic8 = () => {

    let tSongTitle8 = document.getElementById("tSongTitle8");
    let tSongTitleText8 = document.getElementById("tSongTitleText8");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle8.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText8.innerHTML;
    downloadBtn.href = "./audio/trending/buga.mp3";
    downloadAudio.src = "./audio/trending/buga.mp3";
    downloadImg.src = document.getElementById("trendingImg8").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//sugarcaneR
tdownloadMusic9 = () => {

    let tSongTitle9 = document.getElementById("tSongTitle9");
    let tSongTitleText9 = document.getElementById("tSongTitleText9");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle9.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText9.innerHTML;
    downloadBtn.href = "./audio/trending/sugarcaneR.mp3";
    downloadAudio.src = "./audio/trending/sugarcaneR.mp3";
    downloadImg.src = document.getElementById("trendingImg9").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// palazzo
tdownloadMusic10 = () => {

    let tSongTitle10 = document.getElementById("tSongTitle10");
    let tSongTitleText10 = document.getElementById("tSongTitleText10");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle10.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText10.innerHTML;
    downloadBtn.href = "./audio/trending/palazzo.mp3";
    downloadAudio.src = "./audio/trending/palazzo.mp3";
    downloadImg.src = document.getElementById("trendingImg10").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//dada remix
tdownloadMusic11 = () => {

    let tSongTitle11 = document.getElementById("tSongTitle11");
    let tSongTitleText11 = document.getElementById("tSongTitleText11");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle11.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText11.innerHTML;
    downloadBtn.href = "./audio/trending/dadaR.mp3";
    downloadAudio.src = "./audio/trending/dadaR.mp3";
    downloadImg.src = document.getElementById("trendingImg11").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//last last
tdownloadMusic12 = () => {

    let tSongTitle12 = document.getElementById("tSongTitle12");
    let tSongTitleText12 = document.getElementById("tSongTitleText12");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle12.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText12.innerHTML;
    downloadBtn.href = "./audio/trending/lastlast.mp3";
    downloadAudio.src = "./audio/trending/lastlast.mp3";
    downloadImg.src = document.getElementById("trendingImg12").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//woman
tdownloadMusic13 = () => {

    let tSongTitle13 = document.getElementById("tSongTitle13");
    let tSongTitleText13 = document.getElementById("tSongTitleText13");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle13.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText13.innerHTML;
    downloadBtn.href = "./audio/trending/woman.mp3";
    downloadAudio.src = "./audio/trending/woman.mp3";
    downloadImg.src = document.getElementById("trendingImg13").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

//finesse
tdownloadMusic14 = () => {

    let tSongTitle14 = document.getElementById("tSongTitle14");
    let tSongTitleText14 = document.getElementById("tSongTitleText14");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle14.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText14.innerHTML;
    downloadBtn.href = "./audio/trending/finesse.mp3";
    downloadAudio.src = "./audio/trending/finesse.mp3";
    downloadImg.src = document.getElementById("trendingImg1").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
   }

// ijo(labalaba)
   tdownloadMusic15 = () => {

    let tSongTitle15 = document.getElementById("tSongTitle15");
    let tSongTitleText15 = document.getElementById("tSongTitleText15");
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle15.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText15.innerHTML;
    downloadBtn.href = "./audio/trending/ijo.mp3";
    downloadAudio.src = "./audio/trending/ijo.mp3";
    downloadImg.src = document.getElementById("trendingImg15").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
   }
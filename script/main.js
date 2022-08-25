

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
    document.getElementById("more-trending3").style.display = "flex";
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
    document.getElementById("more-trending3").style.display = "none";
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
    document.getElementById("more-recently3").style.display = "flex";
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
    document.getElementById("more-recently3").style.display = "none";
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
    document.getElementById("more-foreign3").style.display = "flex";
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
    document.getElementById("more-foreign3").style.display = "none";
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

//new Born Fela
tdownloadMusic14 = () => {

    let tSongTitle14 = document.getElementById("tSongTitle14");
    let tSongTitleText14 = document.getElementById("tSongTitleText14");
    let tMusic14 = "https://cdn.trendybeatz.com/audio/Bella-Shmurda-New-Born-Fela-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = tSongTitle14.innerHTML;
    document.getElementById("downloadP").innerHTML = tSongTitleText14.innerHTML;
    downloadBtn.href = tMusic14;
    downloadAudio.src = tMusic14;
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







/*========= RECENTLY ADDED DOWNLOAD SECTION =========*/

// For My Hand 
rdownloadMusic1 = () => {

    let rSongTitle1 = document.getElementById("rSongTitle1");
    let rSongTitleText1 = document.getElementById("rSongTitleText1");
    let rMusic1 = "https://talktalktoday.com.ng/wp-content/music/2022/07/Burna_Boy_Ft_Ed_Sheeran_-_My_Hand.mp3?_=3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle1.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText1.innerHTML;
    downloadBtn.href = rMusic1;
    downloadAudio.src = rMusic1;
    downloadImg.src = document.getElementById("recentlyImg1").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}
// All Power
rdownloadMusic2 = () => {

    let rSongTitle2 = document.getElementById("rSongTitle2");
    let rSongTitleText2 = document.getElementById("rSongTitleText2");
    let rMusic2 = "https://cdn.trendybeatz.com/audio/Victony-All-Power-(TrendyBeatz.com)1.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle2.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText2.innerHTML;
    downloadBtn.href = rMusic2;
    downloadAudio.src = rMusic2;
    downloadImg.src = document.getElementById("recentlyImg2").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Contour
rdownloadMusic3 = () => {

    let rSongTitle3 = document.getElementById("rSongTitle3");
    let rSongTitleText3 = document.getElementById("rSongTitleText3");
    let rMusic3 = "https://cdn.trendybeatz.com/audio/Joeboy-Contour-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle3.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText3.innerHTML;
    downloadBtn.href = rMusic3;
    downloadAudio.src = rMusic3;
    downloadImg.src = document.getElementById("recentlyImg3").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Terminator
rdownloadMusic4 = () => {

    let rSongTitle4 = document.getElementById("rSongTitle4");
    let rSongTitleText4 = document.getElementById("rSongTitleText4");
    let rMusic4 = "https://fakazagods.com/tag/tmp/Asake%20%E2%80%93%20Terminator%20[Fakazagods.com].mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle4.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText4.innerHTML;
    downloadBtn.href = rMusic4;
    downloadAudio.src = rMusic4;
    downloadImg.src = document.getElementById("recentlyImg4").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Warning
rdownloadMusic5 = () => {

    let rSongTitle5 = document.getElementById("rSongTitle5");
    let rSongTitleText5 = document.getElementById("rSongTitleText5");
    let rMusic5 = "https://cdn.trendybeatz.com/audio/Ruger-Warning-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle5.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText5.innerHTML;
    downloadBtn.href = rMusic5;
    downloadAudio.src = rMusic5;
    downloadImg.src = document.getElementById("recentlyImg5").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Ashawo
rdownloadMusic6 = () => {

    let rSongTitle6 = document.getElementById("rSongTitle6");
    let rSongTitleText6 = document.getElementById("rSongTitleText6");
    let rMusic6 = "https://www.042jam.com/wp-content/uploads/2022/08/Fireboy_DML_-_Ashawo_042jam.com.mp3?_=1";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle6.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText6.innerHTML;
    downloadBtn.href = rMusic6;
    downloadAudio.src = rMusic6;
    downloadImg.src = document.getElementById("recentlyImg6").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// my life
rdownloadMusic7 = () => {

    let rSongTitle7 = document.getElementById("rSongTitle7");
    let rSongTitleText7 = document.getElementById("rSongTitleText7");
    let rMusic7 = "https://cdn.trendybeatz.com/audio/T.I-Blaze-My-Life-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle7.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText7.innerHTML;
    downloadBtn.href = rMusic7;
    downloadAudio.src = rMusic7;
    downloadImg.src = document.getElementById("recentlyImg7").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// watawi
rdownloadMusic8 = () => {

    let rSongTitle8 = document.getElementById("rSongTitle8");
    let rSongTitleText8 = document.getElementById("rSongTitleText8");
    let rMusic8 = "https://www.xclusiveloaded.com/wp-content/uploads/2022/06/CKay_ft_Davido_Focalistic_Abidoza_-_Watawi.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle8.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText8.innerHTML;
    downloadBtn.href = rMusic8;
    downloadAudio.src = rMusic8;
    downloadImg.src = document.getElementById("recentlyImg8").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Electricity
rdownloadMusic9 = () => {

    let rSongTitle9 = document.getElementById("rSongTitle9");
    let rSongTitleText9 = document.getElementById("rSongTitleText9");
    let rMusic9 = "https://www.xclusiveloaded.com/wp-content/uploads/2022/08/Pheelz_Ft_Davido_-_Electricity.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle9.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText9.innerHTML;
    downloadBtn.href = rMusic9;
    downloadAudio.src = rMusic9;
    downloadImg.src = document.getElementById("recentlyImg9").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Jaiye_Foreign
rdownloadMusic10 = () => {

    let rSongTitle10 = document.getElementById("rSongTitle10");
    let rSongTitleText10 = document.getElementById("rSongTitleText10");
    let rMusic10 = "https://www.xclusiveloaded.com/wp-content/uploads/2022/08/Tiwa_Savage_Ft_Zinoleesky_-_Jaiye_Foreign.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle10.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText10.innerHTML;
    downloadBtn.href = rMusic10;
    downloadAudio.src = rMusic10;
    downloadImg.src = document.getElementById("recentlyImg10").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Different size
rdownloadMusic11 = () => {

    let rSongTitle11 = document.getElementById("rSongTitle11");
    let rSongTitleText11 = document.getElementById("rSongTitleText11");
    let rMusic11 = "https://karoloaded.com/wp-content/uploads/2022/07/Burna_Boy_Ft_Victony_-_Different_Size.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle11.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText11.innerHTML;
    downloadBtn.href = rMusic11;
    downloadAudio.src = rMusic11;
    downloadImg.src = document.getElementById("recentlyImg11").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Propeller
rdownloadMusic12 = () => {

    let rSongTitle12 = document.getElementById("rSongTitle12");
    let rSongTitleText12 = document.getElementById("rSongTitleText12");
    let rMusic12 = "https://cdn.trendybeatz.com/audio/JAE5-Ft-Dave-and-BNXN-Propeller-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle12.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText12.innerHTML;
    downloadBtn.href = rMusic12;
    downloadAudio.src = rMusic12;
    downloadImg.src = document.getElementById("recentlyImg12").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Compromise
rdownloadMusic13 = () => {

    let rSongTitle13 = document.getElementById("rSongTitle13");
    let rSongTitleText13 = document.getElementById("rSongTitleText13");
    let rMusic13 = "https://cdn.trendybeatz.com/audio/Fireboy-DML-Ft-Rema-Compromise-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle13.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText13.innerHTML;
    downloadBtn.href = rMusic13;
    downloadAudio.src = rMusic13;
    downloadImg.src = document.getElementById("recentlyImg13").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Elevate (Remix)
rdownloadMusic14 = () => {

    let rSongTitle14 = document.getElementById("rSongTitle14");
    let rSongTitleText14 = document.getElementById("rSongTitleText14");
    let rMusic14 = "https://www.xclusiveloaded.com/wp-content/uploads/2022/06/Balloranking_ft_Bella_Shmurda_-_Elevate_Remix_.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle14.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText14.innerHTML;
    downloadBtn.href = rMusic14;
    downloadAudio.src = rMusic14;
    downloadImg.src = document.getElementById("recentlyImg14").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
   }

// Diana
   rdownloadMusic15 = () => {

    let rSongTitle15 = document.getElementById("rSongTitle15");
    let rSongTitleText15 = document.getElementById("rSongTitleText15");
    let rMusic15 = "https://www.trendyhiphop.com/wp-content/uploads/2022/08/Fireboy_DML_Ft_Chris_Brown_Shensea_-_Diana.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = rSongTitle15.innerHTML;
    document.getElementById("downloadP").innerHTML = rSongTitleText15.innerHTML;
    downloadBtn.href = rMusic15;
    downloadAudio.src = rMusic15;
    downloadImg.src = document.getElementById("recentlyImg15").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}




/*======= Foreign download section =======*/

// First class 
fdownloadMusic1 = () => {

    let fSongTitle1 = document.getElementById("fSongTitle1");
    let fSongTitleText1 = document.getElementById("fSongTitleText1");
    let fMusic1 = "https://www.vistanaij.com.ng/wp-content/dmca/2022/04/Jack_Harlow_-_First_Class_Vistanaij.com.ng.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle1.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText1.innerHTML;
    downloadBtn.href = fMusic1;
    downloadAudio.src = fMusic1;
    downloadImg.src = document.getElementById("foreignImg1").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}
// As it was
fdownloadMusic2 = () => {

    let fSongTitle2 = document.getElementById("fSongTitle2");
    let fSongTitleText2 = document.getElementById("fSongTitleText2");
    let fMusic2 = "https://files.correctvibe.com/audio/2022/04/Harry_Styles_-_As_It_Was(Correctvibe.com).mp3?_=4";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle2.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText2.innerHTML;
    downloadBtn.href = fMusic2;
    downloadAudio.src = fMusic2;
    downloadImg.src = document.getElementById("foreignImg2").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// wait For you
fdownloadMusic3 = () => {

    let fSongTitle3 = document.getElementById("fSongTitle3");
    let fSongTitleText3 = document.getElementById("fSongTitleText3");
    let fMusic3 = "https://cdn.trendybeatz.com/audio/Future-Wait-For-U-Ft-Drake-Tems-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle3.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText3.innerHTML;
    downloadBtn.href = fMusic3;
    downloadAudio.src = fMusic3;
    downloadImg.src = document.getElementById("foreignImg3").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// shivers
fdownloadMusic4 = () => {

    let fSongTitle4 = document.getElementById("fSongTitle4");
    let fSongTitleText4 = document.getElementById("fSongTitleText4");
    let fMusic4 = "https://www.farloaded.com/wp-content/uploads/2022/04/Shivers_Farloadedcom_Ed_Sheeran_farloadedcom.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle4.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText4.innerHTML;
    downloadBtn.href = fMusic4;
    downloadAudio.src = fMusic4;
    downloadImg.src = document.getElementById("foreignImg4").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// jimmy cooks
fdownloadMusic5 = () => {

    let fSongTitle5 = document.getElementById("fSongTitle5");
    let fSongTitleText5 = document.getElementById("fSongTitleText5");
    let fMusic5 = "https://www1.morexlusive.com/wp-content/uploads/2022/06/Drake_ft_21_Savage_-_Jimmy_Cooks.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle5.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText5.innerHTML;
    downloadBtn.href = fMusic5;
    downloadAudio.src = fMusic5;
    downloadImg.src = document.getElementById("foreignImg5").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// out of time
fdownloadMusic6 = () => {

    let fSongTitle6 = document.getElementById("fSongTitle6");
    let fSongTitleText6 = document.getElementById("fSongTitleText6");
    let fMusic6 = "https://www1.morexlusive.com/wp-content/uploads/2022/01/The_Weeknd_-_Out_of_Time.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle6.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText6.innerHTML;
    downloadBtn.href = fMusic6;
    downloadAudio.src = fMusic6;
    downloadImg.src = document.getElementById("foreignImg6").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Dear alcohol
fdownloadMusic7 = () => {

    let fSongTitle7 = document.getElementById("fSongTitle7");
    let fSongTitleText7 = document.getElementById("fSongTitleText7");
    let fMusic7 = "https://www.xclusiveloaded.com/wp-content/uploads/2022/03/Dax_-_Dear_Alcohol.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle7.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText7.innerHTML;
    downloadBtn.href = fMusic7;
    downloadAudio.src = fMusic7;
    downloadImg.src = document.getElementById("foreignImg7").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// pushin p
fdownloadMusic8 = () => {

    let fSongTitle8 = document.getElementById("fSongTitle8");
    let fSongTitleText8 = document.getElementById("fSongTitleText8");
    let fMusic8 = "https://arewamh.com.ng/wp-content/uploads/2022/05/Gunna-Future-Pushin-P.mp3?_=1";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle8.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText8.innerHTML;
    downloadBtn.href = fMusic8;
    downloadAudio.src = fMusic8;
    downloadImg.src = document.getElementById("foreignImg8").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Billie-Eilish
fdownloadMusic9 = () => {

    let fSongTitle9 = document.getElementById("fSongTitle9");
    let fSongTitleText9 = document.getElementById("fSongTitleText9");
    let fMusic9 = "https://jamsbase.com/wp-content/uploads/2020/04/Billie-Eilish-_-_burn_.mp3?_=1";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle9.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText9.innerHTML;
    downloadBtn.href = fMusic9;
    downloadAudio.src = fMusic9;
    downloadImg.src = document.getElementById("foreignImg9").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// break my soul
fdownloadMusic10 = () => {

    let fSongTitle10 = document.getElementById("fSongTitle10");
    let fSongTitleText10 = document.getElementById("fSongTitleText10");
    let fMusic10 = "https://www.vistanaij.com.ng/wp-content/dmca/2022/06/Beyonc_-_BREAK_MY_SOUL_VistaNaija.Com.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle10.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText10.innerHTML;
    downloadBtn.href = fMusic10;
    downloadAudio.src = fMusic10;
    downloadImg.src = document.getElementById("foreignImg10").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// car's outside
fdownloadMusic11 = () => {

    let fSongTitle11 = document.getElementById("fSongTitle11");
    let fSongTitleText11 = document.getElementById("fSongTitleText11");
    let fMusic11 = "https://doksblog.com/wp-content/uploads/2022/08/Doksblog.com-James-Arthur-Cars-Outside.mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle11.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText11.innerHTML;
    downloadBtn.href = fMusic11;
    downloadAudio.src = fMusic11;
    downloadImg.src = document.getElementById("foreignImg11").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Stay
fdownloadMusic12 = () => {

    let fSongTitle12 = document.getElementById("fSongTitle12");
    let fSongTitleText12 = document.getElementById("fSongTitleText12");
    let fMusic12 = "https://cdn.trendybeatz.com/audio/The-Kid-Laroi-Ft-Justin-Bieber-Stay-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle12.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText12.innerHTML;
    downloadBtn.href = fMusic12;
    downloadAudio.src = fMusic12;
    downloadImg.src = document.getElementById("foreignImg12").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Industry Baby
fdownloadMusic13 = () => {

    let fSongTitle13 = document.getElementById("fSongTitle13");
    let fSongTitleText13 = document.getElementById("fSongTitleText13");
    let fMusic13 = "https://cdn.trendybeatz.com/audio/Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle13.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText13.innerHTML;
    downloadBtn.href = fMusic13;
    downloadAudio.src = fMusic13;
    downloadImg.src = document.getElementById("foreignImg13").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

// Burn
fdownloadMusic14 = () => {

    let fSongTitle14 = document.getElementById("fSongTitle14");
    let fSongTitleText14 = document.getElementById("fSongTitleText14");
    let fMusic14 = "https://thinknews.com.ng/wp-content/uploads/2021/12/Juice_WRLD_Burn_(thinkNews.com.ng).mp3";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle14.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText14.innerHTML;
    downloadBtn.href = fMusic14;
    downloadAudio.src = fMusic14;
    downloadImg.src = document.getElementById("foreignImg14").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
   }

// Young dumb and broke
   fdownloadMusic15 = () => {

    let fSongTitle15 = document.getElementById("fSongTitle15");
    let fSongTitleText15 = document.getElementById("fSongTitleText15");
    let fMusic15 = "https://talkglitz.media/wp-content/uploads/2018/07/Khalid_-_Young_Dumb_Broke_talkglitz.tv.mp3?_=2";
   
   
    document.getElementById("downloadH4").innerHTML = fSongTitle15.innerHTML;
    document.getElementById("downloadP").innerHTML = fSongTitleText15.innerHTML;
    downloadBtn.href = fMusic15;
    downloadAudio.src = fMusic15;
    downloadImg.src = document.getElementById("foreignImg15").src;
   
   
    LandingPage.style.display = "none";
    Recently.style.display = "none";
    Foreign.style.display = "none";
    Trending.style.display = "none";
    navBar.style.display = "none";
    downloadPage.style.display = "block";
}

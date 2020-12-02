window.addEventListener("load", (e) => {
    navigationDict = {"NavHome" : "landingPage", "NavAbout" : "about", "NavDemo" : "demo", "NavTeam" : "team_container"}
  /*   NavHome = document.getElementById("NavHome");
    NavDemo = document.getElementById("NavDemo");
    NavTeam = document.getElementById("NavTeam"); */

    NavItems = document.getElementsByClassName("NavOptions");
    
    Array.from(NavItems).forEach((element) => {
            element.addEventListener("click", changeSlide);
    })
});


const changeSlide = (element) => {
    console.log(element);
    ScrollTo = navigationDict[element.target.id];
    document.getElementById(ScrollTo).scrollIntoView({behavior: "smooth", block: "center"});

    NavItems = document.getElementsByClassName("NavOptions");
    Array.from(NavItems).forEach((element) => {
      if(element.classList.contains("activeSlide")){
        element.classList.remove("activeSlide")
      }
    });

    element.target.classList.add("activeSlide");
}
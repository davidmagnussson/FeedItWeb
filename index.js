window.addEventListener("load", (e) => {
    navigationDict = {"NavHome" : "landingPage", "NavAbout" : "about", "NavDemo" : "demo", "NavTeam" : "team_container"}
  /*   NavHome = document.getElementById("NavHome");
    NavDemo = document.getElementById("NavDemo");
    NavTeam = document.getElementById("NavTeam"); */

    NavItems = document.getElementsByClassName("NavOptions");
    
    Array.from(NavItems).forEach((element) => {
            console.log(element);
            element.addEventListener("click", (e) => {
                ScrollTo = navigationDict[e.target.id];
                document.getElementById(ScrollTo).scrollIntoView({behavior: "smooth", block: "center"});
        });
    })
});
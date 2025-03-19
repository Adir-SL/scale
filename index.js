/*

for more information:
https://github.com/Adir-SL/scale

This is maintained by Adir SL,
for any bugs or feature requests
you can use Github or Twitter (@adircode)

*/

function resizeFunc(e) {
    if (e.target.id == "origWidth" || e.target.id == "origHeight") {
        document.getElementById("newHeight").value = document.getElementById("origHeight").value;
        document.getElementById("newWidth").value = document.getElementById("origWidth").value;
    } else {

        if (e.target.id == "newWidth") {
            //Calculate HEIGHT;
            scaleAPI(document.getElementById("origWidth").value, document.getElementById("origHeight").value, document.getElementById("newWidth").value, 0);
            document.getElementById("newHeight").value = window.newHeight;
        } else {
            //Calculate WIDTH;
            scaleAPI(document.getElementById("origWidth").value, document.getElementById("origHeight").value, 0, document.getElementById("newHeight").value);
            document.getElementById("newWidth").value = window.newWidth;
        }
    }

    zoomFunc();

    if (document.body.offsetWidth < 900) {

        if (eval(document.getElementById("origWidth").value) > 350) {
            console.log('For MOBILE');
            percent = (eval(document.getElementById("origWidth").value) / 94);
            document.getElementById("origDiv").style.height = eval(document.getElementById("origHeight").value) / percent + "vw";
        }

        if (eval(document.getElementById("newWidth").value) > 350) {
            percent = (eval(document.getElementById("newWidth").value) / 94);
            document.getElementById("newDiv").style.height = eval(document.getElementById("newHeight").value) / percent + "vw";
        }
    }

}

function resetSelection() {
    var x = document.getElementsByClassName("zoomButton");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("selected");
    }
}

function zoomFunc() {
    //This determines the Zoom Level;
    zoomPercent = 100 / window.zoom;
    document.getElementById("origDiv").style.height = document.getElementById("origHeight").value / zoomPercent + "px";
    document.getElementById("origDiv").style.width = document.getElementById("origWidth").value / zoomPercent + "px";

    document.getElementById("newDiv").style.height = document.getElementById("newHeight").value / zoomPercent + "px";
    document.getElementById("newDiv").style.width = document.getElementById("newWidth").value / zoomPercent + "px";
}

function zoomButtonFunc(event){}

function gotoGithub() {
    window.location.href = "https://github.com/Adir-SL/scale";
}

function gotoDemo() {
    window.location.href = "https://adir-sl.github.io/scale";
}

function gotoTwitter() {
    window.location.href = "https://twitter.com/adircode";
    //Please follow me on Twitter;
    //For questions, DM me, thanks!
}
function gotoWebsite() {
    window.location.href = "https://www.adir.dev";
    //Link to visit my website;
}
function addLogo() {
    //Adding the Github mark (Logo);
    document.body.innerHTML += "<img class='gitLogo' src='github.png' style='position:absolute; right: 0; top: 0;margin: 44px; cursor:pointer;' onclick='gotoGithub();' />";
}

//Those 3 last functions are for debugging only
function printf(r) {
    console.log(r);
}
function Toast(s) {
    alert(s);
}
function toast(t) {
    alert(t);
}
window.zoom = 100;
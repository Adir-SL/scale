/*

for more information:
https://github.com/Adir-SL/scale

*/

function scaleAPI(a, b, x, y) {
    if (x == "") {
        percent = y / b;
        x = Math.round(a) * percent;
        consoleCSS = "color: #9458DF;font-weight: bold;";
        console.log("%c %s", consoleCSS, "window.newWidth: " + x);
        window.newWidth = x;
    }
    if (y == "") {
        percent = x / a;
        y = Math.round(b) * percent;
        consoleCSS = "color: #E38FF8;font-weight: bold;";
        console.log("%c %s", consoleCSS, "window.newHeight: " + y);
        window.newHeight = y;
    }
}

function scaleHelp(){
    TitleCSS = "color: #9458DF;font-weight: bold;font-size: 3em;";
    console.log("%c %s", TitleCSS, "Welcome to Proportinal Scale\n", "This API is used to calculate a Proportinal Scale,\n in order to use it call the function called scaleAPI with 4 parameters,\n in this order: Original Width, Original Height, New Width and New Height,\n you can write 0 in the New Width or New Height in order to let the function calculate it,\n for example: scaleAPI(1920,1080,0,720);")
}
$(document).ready(function () {
    let dark = false;
    let body = document.querySelector('body');
    $("#dark").click(function (){
        if (dark == false)
        {
            body.style.backgroundColor = "rgb(53, 53, 53)";
            document.querySelector('#dark').innerHTML = "Dark mode: ON";
            dark = true;
        }
        else
        {
            body.style.backgroundColor = "rgb(220, 220, 220)";
            document.querySelector('#dark').innerHTML = "Dark mode: OFF";
            dark = false;
        }
    });
});
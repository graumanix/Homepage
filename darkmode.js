let dark;

document.querySelector('#dark').onclick = function() 
{
    /* Checks the value of dark every click, to know wich theme changes need to be made */
    if (dark == "1")
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        sessionStorage.setItem("sheet", 'darkmode.css');
        sessionStorage.setItem("dark", "0");
        dark = sessionStorage.getItem("dark");
    }
    else if (dark == "0")
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById('theme').setAttribute('href', 'light.css');
        sessionStorage.setItem("sheet", 'light.css');
        sessionStorage.setItem("dark", "1");
        dark = sessionStorage.getItem("dark");
    }
    /* If ther's no dark value it creates the first one and set everything to light, being the standard theme*/
    else
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById('theme').setAttribute('href', 'darkmode.css');
        sessionStorage.setItem("sheet", 'darkmode.css');
        sessionStorage.setItem("dark", "0");
        dark = sessionStorage.getItem("dark");
    }
}

/* Swaps the style sheet with the in-session saved previous one  when loading new page */
function swapsheet(sheet)
{
    document.getElementById('theme').setAttribute('href', sheet);
    sessionStorage.setItem("sheet", sheet);
    /* Recovers the dark string and checks it to change the barnav to the theme*/
    dark = sessionStorage.getItem("dark");
    if (dark == "0")
    {
        document.querySelector('#dark').className = "btn btn-light right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
    }
    else if (dark == "1")
    {
        document.querySelector('#dark').className = "btn btn-dark right";
        document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
    }
}
/* Checks for previous sheetstyle saved if null set to light*/
if (sessionStorage.getItem("sheet") == null)
{
    sessionStorage.setItem("sheet", "light.css");
    window.onload = _ => swapsheet(sessionStorage.getItem("sheet") || "default.css");
}
else
{
    window.onload = _ => swapsheet(sessionStorage.getItem("sheet") || "default.css");
}



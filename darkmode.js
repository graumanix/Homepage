let dark = false;
    let body = document.querySelector('body');
    let footer = document.querySelector('#footer');

    document.querySelector('#dark').onclick = function() {
        if (dark == false)
        {
            body.style.backgroundColor = "rgb(70, 70, 80)";
            footer.style.backgroundColor = "rgb(30, 30, 40)";
            document.querySelector('#dark').innerHTML = "Light";
            document.querySelector('#dark').className = "btn btn-light right"
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark"
            dark = true;
        }
        else
        {
            body.style.backgroundColor = "rgb(240, 240, 240)";
            footer.style.backgroundColor = "rgb(180, 180, 190)";
            document.querySelector('#dark').innerHTML = "Dark";
            document.querySelector('#dark').className = "btn btn-dark right"
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light"
            dark = false;
        }
    }
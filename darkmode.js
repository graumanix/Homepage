let dark = false;
    let body = document.querySelector('body');
    let footer = document.querySelector('footer');
    let items = document.querySelector('item');

    document.querySelector('#dark').onclick = function() {
        if (dark == false)
        {
            body.style.backgroundColor = "rgb(70, 70, 80)";
            footer.style.backgroundColor= "rgb(30, 30, 40)";
            document.querySelector('#dark').innerHTML = "Light";
            document.querySelector('#dark').className = "btn btn-light right"
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark"
            for (var i = 0; i < items.length; i++) 
            {
                items[i].style.backgroundColor="rgb(200,200,200)";
            }
            dark = true;
        }
        else
        {
            body.style.backgroundColor = "rgb(240, 240, 240)";
            document.querySelector('#dark').innerHTML = "Dark";
            document.querySelector('#dark').className = "btn btn-dark right"
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light"
            dark = false;
        }
    }
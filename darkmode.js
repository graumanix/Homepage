let dark = false;
    let body = document.querySelector('body');

    document.querySelector('#dark').onclick = function() {
        if (dark == false)
        {
            body.style.backgroundColor = "rgb(70, 70, 80)";
            footer.style.backgroundColor = "rgb(30, 30, 40)";
            document.querySelector('#dark').innerHTML = "Light";
            document.querySelector('#dark').className = "btn btn-light right";
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-dark bg-dark";
            document.querySelector('#footer').style.backgroundColor = "rgb(30, 30, 40)";
            let items = document.querySelector('.item');
            for (let i = 0; i < items.length; i++) 
            {
                items[i].style.backgroundColor= "rgb(50, 50, 60)";
            }
            dark = true;
        }
        else
        {
            body.style.backgroundColor = "rgb(240, 240, 250)";
            footer.style.backgroundColor = "rgb(180, 180, 190)";
            document.querySelector('#dark').innerHTML = "Dark";
            document.querySelector('#dark').className = "btn btn-dark right";
            document.querySelector('#nav').className = "navbar navbar-expand-lg navbar-light bg-light";
            document.querySelector('#footer').style.backgroundColor = "rgb(180, 180, 190)";
            let items = document.querySelector('.item');
            for (let i = 0; i < items.length; i++) 
            {
                items[i].style.backgroundColor= "rgb(220, 220, 230)";
            }
            dark = false;
        }
    }
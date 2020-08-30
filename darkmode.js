let dark = false;
let body = document.querySelector('body');
  
document.querySelector('#dark').onclick = function() 
{
    if (dark == false)
    {
        
        dark = true;
    }
    else
    {
        
        dark = false;
    }
}
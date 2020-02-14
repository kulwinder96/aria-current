var element1=document.getElementById('first_link');
var element2=document.getElementById('second_link');
var element3=document.getElementById('third_link');
var element4=document.getElementById('fourth_link');
var element5=document.getElementById('fifth_link');
function allinone()
{
if(element1.href==window.location.href)
{
element1.setAttribute('aria-current', 'page');
} else if(element2.href ==window.location.href)
{
element2.setAttribute('aria-current', 'page');
} else if(element3.href==window.location.href)
{
element3.setAttribute('aria-current', 'page');
} else if(element4.href==window.location.href)
{
element4.setAttribute('aria-current', 'page');
} else if(element5.href==window.location.href)
{
element5.setAttribute('aria-current', 'page');

} else {
return false;
}
}
window.addEventListener('load', allinone, false);

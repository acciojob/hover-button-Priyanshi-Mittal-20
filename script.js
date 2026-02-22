//your code here
btn=document.querySelector("#btn")
btn.addEventListener("mouseover",changes)
function changes(e)
{
	btn.style.cssText="background-color:yellow; color:black; border-radius:30px;"
}
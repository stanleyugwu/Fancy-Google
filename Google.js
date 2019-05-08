function greet(){
document.querySelector('#greetbox').style.display='inline'
var d=new Date()
var greet; 
var t=d.getHours()
if (t===1 || (t > 1 && t< 12
)){
	greet='Good Morning'
}
else if(t===12 || (t>12 && t <16) ){
	greet='Good Afternoon'
}
else if(t===16||(t>16 && t<19)){
	greet='Good Evening'
}
else if(t===19 || (t>19 && t<23)){
	greet='Good Night'
}
document.querySelector('#greetbox').value=greet}
			function search(){
				if (document.querySelector('.textbox').value.length >0){
				form.action="https://google.com/search"
				document.querySelector('#load').style.display="inline"
				}
				}
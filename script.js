const selectText=document.querySelectorAll("strong")

function highlight() {
    selectText.forEach((element)=>{
		 element.style.color="rgb(0, 128, 0)"
	})
}


function return_normal() {
    selectText.forEach((element)=>{
		 element.style.color="rgb(0, 0, 0)"
	})

}

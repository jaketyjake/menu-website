let menu = dishes
let menuDiv = document.getElementById("menuList")
let mealStage = " "
menu.forEach((iMage)=>{
	
    if (iMage.course == "Starters"){
    let menuImage = `<img class="menuImage" src="${iMage.imageURL}">
    <div class="details">
    <h4 class="titles">${iMage.title}</h4>
    <p class="descriptions">${iMage.description}</p>
    </div>
    <h4 class="prices">${iMage.price}</h4>
    `
    menuDiv.innerHTML += menuImage}
})

   
// récupération de l'input du burger par son selecteur css
let burger = document.querySelector(".burger")
// surveillance du click sur le burger et lance la fonction affiche menu
burger.addEventListener("click", (e) => {
	afficheMenu()
})

function afficheMenu(){
// role : affiche le menu et modifie le logo burger
// parametre : rien
// retour : rien
	// récupération du menu par son selecteur css
	let menu = document.querySelector(".menu")
	// enleve ou ajoute la class menu-ouvert
	menu.classList.toggle("menu-ouvert")
	// récupération du hero, main et footer
	let blurs = document.querySelectorAll(".menu-blur")
	// enleve ou ajoute la class blur2
	blurs.forEach(blur=>{
		blur.classList.toggle("blur2")
	})
	// recupération des 3 trait du burger
	let burgerTop = document.querySelector("span.top")
	let burgerMiddle = document.querySelector("span.middle")
	let burgerBottom = document.querySelector("span.bottom")
	// incline les trait haut et bas avec les class associé et fais s'échapper le trait du milieu
	burgerTop.classList.toggle("top-check")
	burgerMiddle.classList.toggle("middle-check")
	burgerBottom.classList.toggle("bottom-check")
}
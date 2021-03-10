const modalOverlay = document.querySelector(".modal-overlay");
const recipes = document.querySelectorAll(".receita");


for (let recipe of recipes) {
  recipe.addEventListener("click", function(){
    const id = recipe.getAttribute("id");
    modalOverlay.classList.add('active')
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
})

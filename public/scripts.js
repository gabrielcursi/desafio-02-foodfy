const modalOverlay = document.querySelector(".modal-overlay");
const recipes = document.querySelectorAll(".receita");

for (let i = 0; i < recipes.length; i++) {
  const recipeId = i;

  recipes[i].addEventListener("click", () => {
      window.location.href = `/recipes/${recipeId}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
})

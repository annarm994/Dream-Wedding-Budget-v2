// script.js

function filterItems() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const items = document.querySelectorAll(".todo-item");

    items.forEach(item => {
        const itemName = item.querySelector(".item").textContent.toLowerCase();
        const itemBudget = item.querySelector(".budget").textContent.toLowerCase();
        const itemCost = item.querySelector(".cost").textContent.toLowerCase();
        
        if (itemName.includes(searchValue) || itemBudget.includes(searchValue) || itemCost.includes(searchValue)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

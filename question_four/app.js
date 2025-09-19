const form = document.querySelector("form")
const unodrderList = document.querySelector("ul");
const btn_removeItem = document.querySelector("#removeitem");
const input = document.querySelector("input");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let h4 = document.querySelector("h4");
    if (h4) {
        h4.remove();
    }

    if (input.value === "") {
        input.focus();
        let h4 = document.createElement("h4");
        h4.textContent = "Please enter a value";
        h4.style.color = "red";
        document.body.appendChild(h4);
        return;
    }
    
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    unodrderList.appendChild(listItem);
    input.value = "";

    let btn_removeItem = document.createElement("button");
    btn_removeItem.textContent = "Remove Item";
    listItem.appendChild(btn_removeItem);
    btn_removeItem.addEventListener("click", () => {
        listItem.remove();
    });
})


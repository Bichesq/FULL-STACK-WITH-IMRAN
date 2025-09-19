const form = document.querySelector("form");
const userName = document.querySelector("input[type='text']");
const email = document.querySelector("input[type='email']");

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    if (userName.value === "" || email.value === "") {
        let h4 = document.createElement("h4");
        h4.textContent = "Please fill in all fields";
        h4.style.color = "red";
        form.appendChild(h4);
        setTimeout(() => {
            h4.remove();
        }, 3000);
    } else if (!/^[a-zA-Z]+$/.test(userName.value.trim())) {
        let h4 = document.createElement("h4");
        h4.textContent = "Please enter a valid name";
        h4.style.color = "red";
        form.appendChild(h4);
        setTimeout(() => {
            h4.remove();
        }, 3000);
    } else if (!email.value.includes("@gmail.com")) {
        let h4 = document.createElement("h4");
        h4.textContent = "Please enter a valid google email";
        h4.style.color = "red";
        form.appendChild(h4);
        setTimeout(() => {
            h4.remove();
        }, 3000);
    } else { 
        let h4 = document.createElement("h4");
        h4.textContent = "Form submitted successfully";
        h4.style.color = "green";
        form.appendChild(h4);
        setTimeout(() => {
            h4.remove();
        }, 3000);
    }
});
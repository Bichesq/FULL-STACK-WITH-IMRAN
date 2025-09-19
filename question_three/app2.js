const form = document.querySelector('form');
const inps = document.querySelectorAll('input[type="text"]');
const h4 = document.createElement('h4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let i = 0; i < inps.length; i++) {
        let isAllFieldsFilled = true;
        if (inps[i].value.trim() === '') {
            h4.textContent = 'Please fill all the fields';
            h4.style.color = 'red';
            document.body.appendChild(h4);
            isAllFieldsFilled = false;
            // return;
        }
        
        if (isAllFieldsFilled) {
            h4.textContent = 'Form submitted successfully';
            h4.style.color = 'green';
        }
        document.body.appendChild(h4);
    }
})
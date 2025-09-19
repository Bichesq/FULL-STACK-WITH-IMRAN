const heading = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    heading.textContent = heading.textContent === 'I have been cheched by a button click' ? 'I have been changed again by a button click' : 'I have been changed by a button click';
});

function one() {
    return function two() {
        function three() {
            return 'I am three';
        }
        return three();
    };
}
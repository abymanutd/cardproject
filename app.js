//get all the panel
const panels = document.querySelectorAll('.panel')

//loop through foreach
panels.forEach(panel => {
    //do click events
    panel.addEventListener('click', () => {
        removeAllActvieClass();
        panel.classList.add('active');
    })
});

function removeAllActvieClass() {
    panels.forEach(panel  => {
        panel.classList.remove('active');
    })
}
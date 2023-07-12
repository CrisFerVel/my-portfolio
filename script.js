let visibleMenu = false;

//Function to show or hide Navigation Menu
function show_hideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu = false
    } else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu = true
    }
}

//Function to hide the Menu once made selection
function select(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

// Navigation Tab for Tachnical Skills between two types
const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');

targets.forEach(target =>{
    target.addEventListener('click', () => {
        content.forEach(c =>{
            c.classList.remove('active')
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
})
console.log("Script running...")
document.querySelector('.cross').style.display = 'naone';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.cross').style.display = 'none '
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline'
        }, 300);
    }
});
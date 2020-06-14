// by default display the about field
document.getElementById("about").classList.add("show");
// create a function that will turn the background of the clicked btn white AND display the content of the corresponding tab
const makeWhite = (btn) => {
    // first get the btns that were active earlier
    const activeBtns = document.querySelectorAll(".active");
    
    // set the display of all tabs to none
    document.querySelectorAll(".tabs").forEach((tab) => {
        tab.classList.remove("show");
    })

    if(activeBtns){
        // for each of the btns
        activeBtns.forEach((activeBtn) => {
            // remove the class of active and set disabled to false
            activeBtn.classList.remove("active");
            activeBtn.disabled = false;
        })
    }
    
    // the class of the clicked btn === the id of the tab to be displayed
    const id = btn.className;

    // the add it to the clicked btn
    btn.classList.add("active");
    btn.disabled = true;

    // set the display of the corresponding 
    document.getElementById(id).classList.add("show");

    // reflect the selected tab in both views 
    reflectTabs(btn);
}

// get the tab-nav and delegate to the btns
const tabBtns = document.querySelectorAll("[nav-btn]");

// add event listeners
tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", (e) => {
    const btn = e.target;

    makeWhite(btn);
})})

// function to fix the feature that removes the selected tag through mobile and wide view
const reflectTabs = (clickedBtn) => {
    // try to get the class name of the clicked button
    let classname;

    // if the clicked button is disabled
    if(clickedBtn.disabled){
        // get the class of the button
        classname = clickedBtn.className;
    }
    
    // loop through each tab nav btns and see if the classname includes the class of any of them
    tabBtns.forEach((tabBtn) => {
        if (classname.includes(tabBtn.className)){
            // if so, set the class name of tab to classname
            tabBtn.className = classname;
        }
    })
}


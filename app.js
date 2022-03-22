// Attach event handler on each button
// On mouseenter event, show the text inside help-text element
// on mouseleave event, set the text to empty

// loop to go over all the buttons and attach the event handler each time
    // capture the element
    // attach event handler

document.addEventListener('DOMContentLoaded', ()=> {
    const helpTextList = [
         {
             id: 'home',
             text: 'You are already home'
         },
         {
             id: 'about',
             text: 'Get the info about us'
         },
         {
             id: 'contact',
             text: 'Connect with us'
         }
    ]

    const helpTextElm = document.querySelector('.help-text');

    for (let i = 0; i<helpTextList.length; i++){
        let btn = document.querySelector('#' + helpTextList[i].id);

        btn.addEventListener('mouseenter', ()=>{
            helpTextElm.textContent = helpTextList[i].text;
        });
        btn.addEventListener('mouseleave', ()=>{
            helpTextElm.textContent = '';
        } )
    }
})

// testing a new change to github

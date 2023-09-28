// first things first, we have to get all the elements on the page and store them in variables

// clickables
const $ratings = document.querySelectorAll('#rating');
const $submitButton = document.querySelector('.submit-button');

// cards (for the switching later)
const $ratingCard = document.querySelector('.rating-card');
const $thanksCard = document.querySelector('.thankyou-card');
let clicked = false; 

//text for the final part
const $selectedText = document.querySelector('.selection-text');

// for every rating,
$ratings.forEach(element => {
    // it will add a clicking option to it
    element.addEventListener('click', () => {
        // this will check for every rating (again):
        for (let i = 0; i < $ratings.length; i++) {
            // if some rating has already been selected...
            if ($ratings[i].classList.contains('selected')) {
                // ...it will remove its class
                $ratings[i].classList.remove('selected');
            };
            // for the first time, this if section won't be triggered, since none of the ratings were selected
        }
        //this will add a class on the clicked rating element 
        element.classList.add('selected');
        clicked = true; // and define that a element has been clicked
    })
});

$submitButton.addEventListener('click', () => {
    // rating-card - thankyou-card
    // these are the both cards we'll be switching now

    //check if the user has not clicked on a rating
    if (!clicked) {
        alert('Please, support our services with a rating!')
    } else { 
        $ratingCard.style.display = 'none' ;
        $thanksCard.style.display = 'block';

        // now for the selection text. get the ranking's text!
        const $selectedRanking = document.querySelector('.selected').innerHTML;

        // then show it on that selection text
        $selectedText.innerHTML = `You selected ${$selectedRanking} out of 5`
    }
})

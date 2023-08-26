let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');

// Fetch Using xhr 
// numberInput.addEventListener('input', getFactAjax);

// function getFactAjax() {
//     let number = numberInput.value;  
//  // if(number != '';) {let xhr = .....} // 1 way of doing this

//  // another way is:
//  let xhr = new XMLHttpRequest();

//  xhr.open('GET', 'http://numbersapi.com/') // ---> Here we are not using the third parameter "async" whose values are (true/false).

//  xhr.onload = function() {
//     if(this.status == 200 && number != '') {
//         fact.style.display = 'block';
//         factText.innerText = this.responseText;  // factText.innerHTML = this.responseText; <---- you can use innerHTML also.
//     }
//  }

//  xhr.send();
// }



// Fetch using Fetch API
numberInput.addEventListener('input', getFactFetch);

function getFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
    .then((res) => res.text())
    .then((data) => {
        if(number != '') {
            fact.style.display = 'block';
            factText.innerText = data;     // factText.innerHTML = this.responseText; <---- you can use innerHTML also.
        }
    })

    .catch((err) => console.log(err));

}

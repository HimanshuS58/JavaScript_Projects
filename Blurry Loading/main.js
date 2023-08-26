const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);  // it is 30 ms(0.030s) not 30 second. 
                                      // it means that the loading will increment every 30 ms.

function blurring () {
    load++;

    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;  // We can also write loadText.innerText = load; but it will not give you the 
                                      // % sign along with it.
                                     // We can use .innerHTML also.

    loadText.style.opacity = scale(load, 0, 100, 1, 0); // to map loding range to the opacity range of loadText
                                                        // (0, 100)---> for loading
                                                        // (1, 0)---> for opacity
                                                        
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;  // 30 here is the blur effect(in px) of the bg image, 
                                                                // we don't want to set it to 100%.
}

// To map opacity range of loadText to that of the filter range(for blur effect) of the bg image we are using below method

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {  
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
     }  


// in-min --> for loading(0%)  
// in-max --> for loading(100%)   

// out-min --> for opacity(1%) 
// out-max --> for opacity(0%) 

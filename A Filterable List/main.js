let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {

    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Grabbing the ul
    let ul = document.getElementById('names');

    // Grabbing all the list
    let li = ul.querySelectorAll('li.collection-item');  // we can write in this way also :
                                                         // let li = document.querySelectorAll('li.collection-item');

    // for(let i=0; i<li.length; i++) {
    //     let a = li[i].getElementsByTagName('a')[0];

    //     if(a.innerHTML.toUpperCase().indexOf(filterValue) >-1) {
    //         li[i].style.display = '';
    //     }

    //     else {
    //         li[i].style.display = 'none';
    //     }
    // }




    // Below method is much better than the above one
    Array.from(li).forEach(function(item) {  // ---> We can use arrow function also

        // gettting the value of each list
        var liValue = item.textContent; 

        if(liValue.toUpperCase().indexOf(filterValue) != -1) { // ---> this means if value of the list(including each of it's index value also) 
                                                              //       matches with the input value then... 

            item.style.display = 'block';   // item.style.display = ''; <----- we can write in this way also                                       
        }
        else {
            item.style.display = 'none';
        }
    });

}

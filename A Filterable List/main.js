let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {

    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Grabbing the ul
    let ul = document.getElementById('names');

    // Grabbing all the list
    let li = ul.querySelectorAll('li.collection-item');  
    

    Array.from(li).forEach(function(item) {  

        // gettting the value of each list
        var liValue = item.textContent; 

        if(liValue.toUpperCase().indexOf(filterValue) != -1) { 

            item.style.display = 'block';                                        
        }
        else {
            item.style.display = 'none';
        }
    });

}

document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    const header_container = document.createElement("div");
    header_container.className = "header-container";

    const h1 = document.createElement("h1");
    const h1_node = document.createTextNode("This is an h1");
    h1.className = "h1";
    h1.appendChild(h1_node);
    header_container.appendChild(h1);

    const h2 = document.createElement("h2");
    const h2_node = document.createTextNode("This is an h2");
    h2.className = "h2";
    h2.appendChild(h2_node);
    header_container.appendChild(h2);

    const h3 = document.createElement("h3");
    const h3_node = document.createTextNode("This is an h3");
    h3.className = "h3";
    h3.appendChild(h3_node);
    header_container.appendChild(h3);

    const h4 = document.createElement("h4");
    const h4_node = document.createTextNode("This is an h4");
    h4.className = "h4";
    h4.appendChild(h4_node);
    header_container.appendChild(h4);

    const h5 = document.createElement("h5");
    const h5_node = document.createTextNode("This is an h5");
    h5.className = "h5";
    h5.appendChild(h5_node);
    header_container.appendChild(h5);

    const h6 = document.createElement("h6");
    const h6_node = document.createTextNode("This is an h6");
    h6.className = "h6";
    h6.appendChild(h6_node);
    header_container.appendChild(h6);

    document.body.appendChild(header_container);
    // ==========================functionalize this=============================
    const colors = ["red","orange","yellow","green","blue","indigo","violet"]; // TODO: needs to be 8 elements
    const header_array = [h1,h2,h3,h4,h5,h6];

    // add an event function to every header element to change it's color when double clicked to
    // a random color within the colors array
    for(let i = 0;i < header_array.length;++i) {
        header_array[i].addEventListener("dblclick", function() {
            const random_number = Math.floor( ( Math.random() * 6) ); // TODO: needs to go through 8 elements
            header_array[i].style.color = colors[random_number];
        })
    }

    // create element button
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    const create_button = document.querySelector(".create_element");
    create_button.addEventListener("click", create_element);


    let list_items = [];
    let number_of_created_elements = 0; // counter variable for number of elements created


    function create_element() {
        const li = document.createElement("li");
        const text_node = document.createTextNode("this is list item " + (number_of_created_elements + 1));
        li.appendChild(text_node);
        list_items[number_of_created_elements] = li;
        ul.appendChild(li);
        ++number_of_created_elements;
        create_color(li);
        create_delete(li);
    }

    function create_delete( list_element ) { // TODO: find out why this seems to work but adding it directly into the create_element function seemed to cause exception throwing
        list_element.addEventListener("dblclick" , function() {
            ul.removeChild(list_element);
            --number_of_created_elements; // TODO: don't fuck up the ordering of elements
            for(let i = 0;i < list_items.length;++i) {
                if(list_items[i] === list_element) {
                    list_items = list_items.filter(function( item ) {   // with alittle help from stack overflow there. This removes the element from the array
                        return item !== list_element;
                    });
                }
            }
        })
    }

    function create_color( item ) {
       item.addEventListener("click", function() {
           const random_number = Math.floor( ( Math.random() * 6 ) );
           item.style.color = colors[random_number];
       })
    }
});



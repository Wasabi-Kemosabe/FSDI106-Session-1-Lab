// Using plain JS to change the text on a text field.
function sayHello() {
    console.log('Hello World!');
}

function parent(stuff) {
    console.log("I'm another function!");

    stuff();
}

function createNew() {
    var text = $('#txtText').val();

    // Display a todo on the list
    var list = $('#todos');
    list.append('<li class="list-group-item">' + text + '<button class="btn btn-danger btn-sm" id="removeTask">Remove</button></li>');

    // Clear the text and focus
    $('#txtText').val('').focus();
}

function removeTask() {
    $(this).closest('.list-group-item').fadeOut(1000, function () {
        $(this).closest('.component').remove();
    });
}

/* function init() {
    var txt = document.getElementById('txtText');

    console.log(txt.value);

    txt.value = "Last";

    console.log(txt.value);

    parent(sayHello);

    var btn = document.getElementById('btnAdd');

    btn.onclick = createNew;
} */

function init2() {
    // Change the text on the field
    // $('#txtText').val('Last');

    // Assign a function to a click event
    $('#btnAdd').click(createNew);
    $('.container').on('click', '#removeTask', removeTask);

    // By tag
    console.log($("input"));

    // By class name
    console.log($('.super'));

    // Event binding
    $('#txtText').keypress(function (args) {
        if (args.keyCode === 13) {
            createNew();
        }

        // Takes more processing power than above
        /* if (args.key === 'Enter') {
            createNew();
        } */
    });
}

// When all the DOM is rendered, call this function
// window.onload = init;
// document.onload = init;
$(document).ready(init2);
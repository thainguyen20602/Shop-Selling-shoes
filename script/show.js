let flag = 0;
let element = document.getElementsByClassName("product-left")
function show() {
    // element.className += " is-show"
    if (flag == 0) {
        flag = 1;
        element[0].className += " is-show";
    }
    else {
        flag = 0;
        element[0].className = element[0].className.replace(" is-show", "");
    }
}
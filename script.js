var icon = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

icon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}
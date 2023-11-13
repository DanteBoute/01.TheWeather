const searchBtn = document.getElementsByClassName("locationSearchBtn");

const searchField = document.getElementsByClassName("inputLocation");

searchField.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
})
function popup() {
    let window = document.getElementsByClassName('popup')[0];
    window.style.display ="block";
}
function closePopup() {
    let close = document.getElementsByClassName('popup')[0];
    close.style.display = "none";
}


let searchButton = document.getElementById('searcher_1');
searchButton.addEventListener('click', openSearcher);
function openSearcher () {
    console.log('Поисковик открылся');
    let searcherFirst = document.getElementById('searcherFirst');
    searcherFirst.style.display = 'block';
}

let closeSearcher = document.getElementById('closedEffect');
closeSearcher.addEventListener('click', closeSearcherEnd);

function closeSearcherEnd() {
    let searcherFirst = document.getElementById('searcherFirst');
    searcherFirst.style.display = 'none';
}


const $randomBox = document.querySelector('#box-content')
const $randomBtn = document.querySelector("#random-btn")
const $randomImg = document.querySelector(".dogs-img")


function randomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        $randomImg.src = data.message
    })
    .catch(error => console.error('Error fetching random dog:', error));
}

$randomBtn.addEventListener("click" , randomDog)
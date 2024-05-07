document.getElementById('getDogButton').addEventListener('click', fetchRandomDogImage);

function fetchRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => {
            console.error('Error fetching random dog image:', error);
        });
}

function displayDogImage(imageUrl) {
    const dogImageContainer = document.getElementById('dogImageContainer');
    const img = document.createElement('img');
    img.src = imageUrl;
    dogImageContainer.innerHTML = '';
    dogImageContainer.appendChild(img);
}

function createDogImage() {
    const dogImage = document.createElement('img');
    dogImage.src = 'https://scamperingpaws.co.uk/wp-content/uploads/2023/02/pet-walking-sitting-york.png'; // You can change the URL to any dog image you like
    dogImage.classList.add('dog-image');
    document.body.appendChild(dogImage);

    
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    dogImage.style.left = `${randomX}px`;
    dogImage.style.top = `${randomY}px`;

    
    dogImage.style.animation = 'moveUpDown 3s ease-in-out infinite'; 

    
    setTimeout(() => {
        document.body.removeChild(dogImage);
    }, 5000); 
}


setInterval(createDogImage, 2000); 
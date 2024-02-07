const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const thumbnails = document.getElementsByClassName('thumbnail');
const agentName = document.getElementById('agent-name');
const agentNumber = document.getElementById('agent-number')
const displayedRole = document.getElementById('displayed-role-text');
const roleImage = document.getElementById('displayed-role-image')
const displayedBiography = document.getElementById('displayed-biography');
const agentBiographies = document.getElementsByClassName('agent-biography');
let currentIndex = 0;

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        currentIndex = i;
        updateMainImage();
        updateBiography();
        updateInfo();
        updateRole();
        updateThumbnails();
    });
}

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage();
    updateBiography();
    updateInfo();
    updateRole();
    updateThumbnails();
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage();
    updateBiography();
    updateInfo();
    updateRole();
    updateThumbnails();
});

function updateMainImage() {
    mainImage.src = thumbnails[currentIndex].src;
    mainImage.alt = thumbnails[currentIndex].alt;
}

function updateBiography() {
    displayedBiography.textContent = agentBiographies[currentIndex].textContent;
}

function updateInfo() {
    agentName.textContent = thumbnails[currentIndex].alt;
    if(currentIndex < 9) {
        agentNumber.textContent ='0' + (currentIndex + 1);
    }else {
        agentNumber.textContent = currentIndex + 1;
    }
}

function updateRole() {
    displayedRole.textContent = thumbnails[currentIndex].getAttribute('data-role');
    roleImage.src = thumbnails[currentIndex].getAttribute('data-image');
}

function updateThumbnails() {
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('selected');
    }
    thumbnails[currentIndex].classList.add('selected');
}

updateThumbnails();
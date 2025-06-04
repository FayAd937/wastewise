// Slider
const slides = document.getElementById('slides');
const totalCards = slides.children.length;

const orgBtn = document.getElementById('org-btn');
const anorgBtn = document.getElementById('anorg-btn');

function setActiveButton(activeBtn) {
    orgBtn.classList.remove('active');
    anorgBtn.classList.remove('active');
    activeBtn.classList.add('active');
}

orgBtn.addEventListener('click', () => {
    let cardIndex = 0;
    slides.style.transform = `translateX(${-cardIndex * 800}px)`;
    setActiveButton(orgBtn);
});

anorgBtn.addEventListener('click', () => {
    let cardIndex = 1;
    slides.style.transform = `translateX(${-cardIndex * 800}px)`;
    setActiveButton(anorgBtn);
});

// Read More Button
const readMore = document.getElementById('readMore');
const fact = document.querySelector('article')
readMore.addEventListener('click', () => {
    fact.scrollIntoView({behavior: "smooth"});
});
function rateStar(star) {
    document.getElementById('ratingValue').value = star;
    for (let i = 1; i <= 5; i++) {
        const starElement = document.querySelector(`.rating span:nth-child(${i})`);
        starElement.classList.remove('clicked');
    }
    for (let i = 1; i <= star; i++) {
        const starElement = document.querySelector(`.rating span:nth-child(${i})`);
        starElement.classList.add('clicked');
    }
}
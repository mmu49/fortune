const fortuneButton = document.getElementById('fortune-button');
const changingFortuneDiv = document.getElementById('changing-fortune');
const finalFortuneDiv = document.getElementById('final-fortune');
const fortunes = [
    "A new adventure awaits you just around the corner.",
    "Someone is thinking of you right now.",
    "Happiness is a journey, not a destination.",
    "You will soon receive unexpected good news.",
    "Your creativity will open new doors.",
    "A kind gesture will come back to you tenfold.",
    "Your future is as bright as your smile.",
    "Trust your instincts — they’re leading you well.",
    "Great things are coming if you stay patient.",
    "You will meet someone who changes your life.",
    "Don't be afraid to take the next step.",
    "Luck is what happens when preparation meets opportunity.",
    "Your laughter is contagious — share it more.",
    "Something you lost will return in a new form.",
    "You are stronger than you think.",
    "Good fortune is drawn to those who shine.",
    "A dream you have will come true this year.",
    "Let go of what you can’t control.",
    "Today’s challenge is tomorrow’s strength.",
    "You will soon discover a hidden talent."
];

let intervalId;

fortuneButton.addEventListener('click', () => {
    fortuneButton.disabled = true; // Butona tekrar tıklanmasını engelle

    intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        changingFortuneDiv.textContent = fortunes[randomIndex];
    }, 50); // Dileklerin değişme hızı (milisaniye)

    // Bir süre sonra rastgele bir dileği durdur
    setTimeout(() => {
        clearInterval(intervalId);
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        finalFortuneDiv.textContent = fortunes[randomIndex];
        finalFortuneDiv.classList.remove('hidden');
        changingFortuneDiv.textContent = ''; // Değişen dilek kutusunu temizle
        fortuneButton.disabled = false; // Butonu tekrar aktif yap
    }, 2000); // Ne kadar süre sonra duracağı (milisaniye)
});

// Fare üzerine geldiğinde kutu efekti (isteğe bağlı)
fortuneButton.addEventListener('mouseover', () => {
    fortuneButton.style.backgroundColor = '#5cb85c';
    fortuneButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
});

fortuneButton.addEventListener('mouseout', () => {
    fortuneButton.style.backgroundColor = '#4CAF50';
    fortuneButton.style.boxShadow = 'none';
});
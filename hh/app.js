document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");
    const heartAnimation = document.getElementById("heartAnimation");
    const finalMessage = document.getElementById("finalMessage");

    // Audio for interaction (Background Music or Sound Effect)
    const loveSound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // You can replace with a love sound or music

    // Show response when YES is clicked
    yesButton.addEventListener("click", function () {
        loveSound.play(); // Play sound when YES is clicked

        // Change background color smoothly for a more immersive effect
        document.body.style.background = "linear-gradient(45deg, #ff9a9e, #ffccd1, #fad0c4)";

        // Display a love response
        responseMessage.textContent = "Xайтай дүү! ❤️"; // "I love you!"
        responseMessage.classList.add("show");

        // Hide buttons and show heart animation
        yesButton.style.display = "none";
        noButton.style.display = "none";
        heartAnimation.style.display = "block";
        heartAnimation.innerHTML = '💖'; // Heart emoji

        // Show a cute surprise message after a few seconds
        setTimeout(function () {
            finalMessage.textContent = "Чамд баярлалаа! 💕"; // "I love you! Thank you!"
            finalMessage.style.display = "block";
        }, 3000);
    });

    // Show sad response when NO is clicked
    noButton.addEventListener("click", function () {
        loveSound.play(); // Play sad sound or different music

        // Change background color to a sadder shade
        document.body.style.background = "linear-gradient(45deg, #a1a1a1, #e0e0e0, #b5b5b5)";

        // Display a sad response
        responseMessage.textContent = "Хагацъядаа! 💔"; // "No happiness together! 💔"
        responseMessage.classList.add("show");

        // Hide buttons and show sad heart emoji
        yesButton.style.display = "none";
        noButton.style.display = "none";
        heartAnimation.style.display = "none";

        setTimeout(function () {
            heartAnimation.innerHTML = "💔"; // Sad heart emoji
            heartAnimation.style.fontSize = "70px";
            heartAnimation.style.display = "block";
        }, 2000);
    });
});

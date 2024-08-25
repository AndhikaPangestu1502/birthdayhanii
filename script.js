document
  .getElementById("celebrateButton")
  .addEventListener("click", function () {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#a133ff"];

    // Confetti
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(confetti);
    }

    // Balloons
    for (let i = 0; i < 20; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.animationDelay = `${Math.random() * 2}s`;
      balloon.style.setProperty(
        "--balloon-color",
        colors[Math.floor(Math.random() * colors.length)]
      );
      document.body.appendChild(balloon);
    }

    // Sparkles
    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      document.body.appendChild(sparkle);
    }

    // Update text and image
    document.getElementById("happyBirthdayText").innerText =
      "🎉 Happy Birthday! 🎉";
    document.getElementById("birthdayMessage").innerText =
      "Nih Balon Buat Kak Hanii";
    document.getElementById("birthdayImage").style.animation =
      "zoomIn 3s ease-in-out reverse";

    // Jeda sebelum memutar lagu
    setTimeout(function () {
      const song = document.getElementById("birthdaySong");
      song.play();
    }, 3000); // Jeda 3 detik sebelum lagu mulai diputar
  });

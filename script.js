function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function celebrate() {
  const symbols = ["🎉", "💗", "✨", "🌸", "🎀", "⭐"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    piece.style.fontSize = (12 + Math.random() * 18) + "px";
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 4500);
  }
}

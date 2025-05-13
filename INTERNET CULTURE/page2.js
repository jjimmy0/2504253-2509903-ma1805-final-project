const words = document.querySelectorAll('.word');

words.forEach((word, index) => {
  const delay = (Math.random() * 4).toFixed(2); // 0–4 seconds
  const duration = (3 + Math.random() * 3).toFixed(2); // 3–6 seconds

  word.style.animationDelay = `${delay}s`;
  word.style.animationDuration = `${duration}s`;
});

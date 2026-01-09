/* SCROLL ANIMATIONS */
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));

/* GOOGLE REVIEWS ROTATION (PAUSE ON HOVER) */
const reviews = [
  {
    text: "Beautiful heritage home, extremely clean rooms and very peaceful atmosphere. Highly recommended!",
    author: "★★★★★ Google Guest"
  },
  {
    text: "The stay was very comfortable and the hosts were extremely polite and helpful. Loved the ambience.",
    author: "★★★★★ Google Guest"
  },
  {
    text: "One of the best boutique homestays in Jodhpur. Calm, elegant and well maintained.",
    author: "★★★★★ Google Guest"
  }
];

let current = 0;
let paused = false;

const reviewText = document.getElementById("reviewText");
const reviewAuthor = document.getElementById("reviewAuthor");
const reviewBox = document.getElementById("reviewBox");

function updateReview() {
  if (!paused) {
    reviewText.textContent = reviews[current].text;
    reviewAuthor.textContent = reviews[current].author;
    current = (current + 1) % reviews.length;
  }
}

reviewBox.addEventListener("mouseenter", () => paused = true);
reviewBox.addEventListener("mouseleave", () => paused = false);

updateReview();
setInterval(updateReview, 5000);

// Small interactive feature: scroll-to-top button

window.addEventListener("scroll", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Tab switching functionality
document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
  
      // Remove active from all buttons
      document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
  
      // Hide all panes
      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
      document.getElementById(tab).classList.add("active");
    });
  });


  // ===== IMAGE SLIDER =====
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// Create dots based on number of slides
slideItems.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots button");

function moveToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slideItems.length;
  moveToSlide(currentIndex);
}, 5000);

  
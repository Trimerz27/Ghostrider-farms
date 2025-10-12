// Simple interactivity example
document.addEventListener("DOMContentLoaded", () => {
  console.log("Ghostrider Farms site loaded!");

  // Example: Highlight current nav link based on URL
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

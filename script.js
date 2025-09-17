// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "All fields are required.";
      formMessage.style.color = "red";
      return;
    }

    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

    contactForm.reset();
  });
}

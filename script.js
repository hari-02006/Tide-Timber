document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector("#newsletterForm");
  const formMessage = document.querySelector("#formMessage");
  const joinForm = document.querySelector("#joinForm");
  const joinMessage = document.querySelector("#joinMessage");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const navMenu = document.querySelector("#mainNav");

  const showMessage = (element, message) => {
    element.textContent = message;
  };

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage(formMessage, "You are on the list. See you at the waterline.");
    newsletterForm.reset();
  });

  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage(joinMessage, "Thanks. We will send the next tide soon.");
    joinForm.reset();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = bootstrap.Collapse.getInstance(navMenu);
      if (collapse) collapse.hide();
    });
  });
});

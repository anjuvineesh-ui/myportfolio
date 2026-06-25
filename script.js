const tabButtons = document.querySelectorAll(".tab-link");
const tabSections = document.querySelectorAll(".tab-content");
const tabTargetButtons = document.querySelectorAll("[data-tab-target]");
const contactForm = document.getElementById("contactForm");
const acknowledgement = document.getElementById("acknowledgement");

function showTab(tabId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  tabSections.forEach((section) => {
    section.classList.toggle("active", section.id === tabId);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
  });
});

tabTargetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tabTarget);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  acknowledgement.hidden = false;
  contactForm.reset();
});

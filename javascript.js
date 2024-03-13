let subMenu = document.getElementById("subMenu");
let subSocial = document.getElementById("subSocial");

document.addEventListener("click", function (event) {
  var dropdown = document.querySelector(".dropdown");
  var socials = document.querySelector(".socials");
  var clickedElement = event.target;

  if (!dropdown.contains(clickedElement) && !socials.contains(clickedElement)) {
    subMenu.classList.remove("open-menu");
    subSocial.classList.remove("open-social");
  } else if (
    dropdown.contains(clickedElement) &&
    !socials.contains(clickedElement)
  ) {
    subSocial.classList.remove("open-social");
  } else if (
    !dropdown.contains(clickedElement) &&
    socials.contains(clickedElement)
  ) {
    subMenu.classList.remove("open-menu");
  }
});

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
  subSocial.classList.remove("open-social");
}

function toggleSocials() {
  subSocial.classList.toggle("open-social");
  subMenu.classList.remove("open-menu");
}

function downloadPDF() {
  const pdfPath = "static\\Sarcia_Sonny-Resume.pdf";

  const downloadLink = document.createElement("a");
  downloadLink.href = pdfPath;
  downloadLink.download = "sarciasonny_resume.pdf";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

document.addEventListener("DOMContentLoaded", function () {
  let contactInputs = document.querySelectorAll(".contact-input");

  contactInputs.forEach(function (contactInputs) {
    contactInputs.addEventListener("focus", function () {
      let inputContainer = contactInputs.closest(".input-container");

      if (inputContainer) {
        inputContainer.classList.add("animation", "animation-color");
      }
    });

    contactInputs.addEventListener("focusout", function () {
      let inputContainer = contactInputs.closest(".input-container");

      if (inputContainer && !contactInputs.value.trim()) {
        inputContainer.classList.remove("animation", "animation-color");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.querySelector(".form-contact");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("input-name");
    let emailInput = document.getElementById("input-email");
    let messageInput = document.getElementById("input-message");
    
    let isFormValid = true;
    
    if (!nameInput.value.trim()) {
      isFormValid = false;
    }
    
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
      isFormValid = false;
    }
    
    if (!messageInput.value.trim()) {
      isFormValid = false;
    }
    
    if (isFormValid) {
      let successMessageDiv = document.getElementById("success-message");
      successMessageDiv.innerText = "Your message has been sent successfully!";
      
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });
});

function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.querySelector(".search");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const query = searchInput.value.trim(); 
    if (query) {
      searchForm.submit();
    }
  });
});

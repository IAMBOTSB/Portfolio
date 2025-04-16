const sectionData = {
  from: {
    title: "Where I'm From",
    content: "I'm from <strong>Mumbai, Maharashtra, India 🇮🇳</strong>.<br>Born and raised in the city of dreams!"
  },
  skills: {
    title: "My Skills",
    content: `
      <ul>
        <li>⚡ Salesforce, Apex, LWC</li>
        <li>💻 JavaScript, React, Git</li>
        <li>📡 REST APIs, Integrations</li>
      </ul>`
  },
  achievements: {
    title: "Achievements",
    content: `
      <ul>
        <li>🏆 Star Award – Capgemini</li>
        <li>🌟 Rising Star – X Company</li>
        <li>📈 Delivered high-impact Salesforce projects</li>
      </ul>`
  },
  certifications: {
    title: "Certifications",
    content: `
      <ul>
        <li>✅ Platform Developer I & II</li>
        <li>✅ Administrator, App Builder</li>
        <li>✅ JavaScript Developer I</li>
        <li>7x Salesforce Certified 💼</li>
      </ul>`
  }
};

const popup = document.getElementById("branchPopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

document.querySelectorAll(".hotspot").forEach(el => {
  el.addEventListener("click", () => {
    const section = el.getAttribute("data-section");
    const data = sectionData[section];

    if (data) {
      popupTitle.innerHTML = data.title;
      popupText.innerHTML = data.content;

      const rect = el.getBoundingClientRect();
      const containerRect = document.querySelector('.container').getBoundingClientRect();

      popup.style.left = `${containerRect.right + 10}px`;
      popup.style.top = `${rect.top + window.scrollY}px`;

      popup.style.display = 'block';
    }
  });
});

function closePopup() {
  popup.style.display = 'none';
}

// Flip logic (auto reveal)
window.addEventListener("load", () => {
  const flipCard = document.getElementById("flipCard");

  // Flip after 2 seconds
  setTimeout(() => {
    flipCard.classList.add("flipped");
  },1000);
});

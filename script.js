function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function scrollToContact() {
  // Scroll to the contact section smoothly
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
}


function scrollToNextSection(sectionId) {
  // Scroll to the next section smoothly
  const nextSection = document.querySelector(`#${sectionId}`);
  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

let currentSection = 'about';

function showSection(sectionId) {
  const currentElement = document.getElementById(currentSection);
  const nextElement = document.getElementById(sectionId);
  const contentWrapper = document.getElementById('content-wrapper');

  if (currentSection === sectionId) return; // Do nothing if the same section is clicked

  // Determine the direction of the animation
  const sections = ['about', 'projects', 'learning', 'reading'];
  const currentIndex = sections.indexOf(currentSection);
  const nextIndex = sections.indexOf(sectionId);

  const outClass = nextIndex > currentIndex ? 'slide-out-left' : 'slide-out-right';
  const inClass = nextIndex > currentIndex ? 'slide-in-right' : 'slide-in-left';

  console.log(`Current: ${currentSection}, Next: ${sectionId}`);
  console.log(`Out Class: ${outClass}, In Class: ${inClass}`);

  // Apply animation classes
  contentWrapper.classList.add(outClass);

  contentWrapper.addEventListener('animationend', () => {
    currentElement.style.display = 'none';
    currentElement.classList.remove('active');
    nextElement.style.display = 'block';
    contentWrapper.classList.remove(outClass);
    contentWrapper.classList.add(inClass);

    contentWrapper.addEventListener('animationend', () => {
      contentWrapper.classList.remove(inClass);
    }, { once: true });

  }, { once: true });

  // Update the current section
  currentSection = sectionId;
}

function displayResume() {
  window.location.href = 'resume.html';
}


function showContactInfo() {
  document.getElementById('contact-info-modal').style.display = 'block';
}

function closeContactInfo() {
  document.getElementById('contact-info-modal').style.display = 'none';
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function displayResume() {
  var resumeBtn = document.querySelector('.btn-color-2[onclick="displayResume()"]');
  var pdfUrl = resumeBtn.getAttribute('data-pdf-url');

  if (isMobile()) {
    console.log("Mobile detected, opening PDF");
    window.open(pdfUrl, '_blank');
  } else {
    console.log("Desktop detected, redirecting to resume page");
    window.location.href = '/resume.html';
  }
}

// Add mobile indicator on page load
document.addEventListener('DOMContentLoaded', function () {
  if (isMobile()) {
    var resumeBtn = document.querySelector('.btn-color-2[onclick="displayResume()"]');
    resumeBtn.textContent += '';
  }
});
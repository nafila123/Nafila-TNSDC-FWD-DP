// Contact form submission

function sendMessage(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);

  document.querySelector("form").reset();

}

// Scroll animation for sections

window.addEventListener('scroll', () => {

  const sections = document.querySelectorAll('section');

  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {

    const secTop = sec.getBoundingClientRect().top;

    if(secTop < triggerBottom) sec.classList.add('reveal');

  });

});
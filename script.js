{
  function showRoadmap(type) {
    const contents = document.querySelectorAll('.roadmap-content');
    const buttons = document.querySelectorAll('.tab-button');
    contents.forEach(content => content.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(type).style.display = 'block';
    event.target.classList.add('active');
  }


  // FAQ toggle functionality
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const allAnswers = document.querySelectorAll('.faq-answer');

  // Close all answers
  allAnswers.forEach(ans => {
    if (ans !== answer) ans.style.display = 'none';
  });

  // Toggle the selected one
  answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}
}
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('navLinks');
  const navLinks = nav.querySelectorAll('a');

  // Toggle menu open/close
  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  // Close menu when any link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
    });
  });


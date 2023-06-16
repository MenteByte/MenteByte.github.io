const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;

toggleTheme.addEventListener('change', () => {
  if (toggleTheme.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});

function toggleEnlarge(element) {
    element.classList.toggle("enlarged");
  }
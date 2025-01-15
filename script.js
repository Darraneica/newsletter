// Get references to form elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const heading = document.getElementById('heading');
const info = document.getElementById('info');
const message = document.getElementById('message');

// Add event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Capture input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Validate inputs
  if (!name || !email) {
    alert('Please fill out both your name and email!');
    return;
  }

  // Show a success message
  const successMessage = `
    Thank you, ${name}! You've successfully subscribed with the email: ${email}.
    We'll keep you updated with the latest news and insights.
  `;
  
  // Replace form content with the success message
  form.innerHTML = `<p style="font-size: 1.2rem; color: #2eccd1;">${successMessage}</p>`;
  
  // Update the header
  heading.innerText = 'Thank You!';
  info.innerText = 'You’re now subscribed.';
});

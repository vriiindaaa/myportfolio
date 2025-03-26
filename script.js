// Toggle Projects Section
document.getElementById('toggleProjects').addEventListener('click', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (project.style.display === 'none' || project.style.display === '') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your logic to send the form data to your server or email
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission (page reload)

    const formData = new FormData(this); // Get form data

    // Send the form data to the PHP script using fetch
    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
        // Display the server response in the #responseMessage div
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = `<p style="color: green;">${data}</p>`;

        // Clear the form after successful submission
        if (data.includes('Email sent successfully!')) {
            document.getElementById('contactForm').reset(); // Reset form fields
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = '<p style="color: red;">An unexpected error occurred.</p>';
    });
});

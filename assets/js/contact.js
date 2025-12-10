document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelector(".loading").style.display = "block";
  document.querySelector(".error-message").style.display = "none";
  document.querySelector(".sent-message").style.display = "none";

  const data = {
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value,
    subject: document.getElementById("subjectInput").value,
    message: document.getElementById("messageInput").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxdaraKIoIKxXNwT-GU6DZb2ZJ2yM4MibZ5sWrNJOfJ9uXaKqWBvm3ChtAGYjMOFRKq/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      document.querySelector(".loading").style.display = "none";

      if (response.result === "success") {
        document.querySelector(".sent-message").style.display = "block";
        document.getElementById("contactForm").reset();
      } else {
        document.querySelector(".error-message").innerHTML = "Error submitting form.";
        document.querySelector(".error-message").style.display = "block";
      }
    })
    .catch(err => {
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".error-message").innerHTML = "Connection error!";
      document.querySelector(".error-message").style.display = "block";
    });
});

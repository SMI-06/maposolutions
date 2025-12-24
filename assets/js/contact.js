
//  document
//         .getElementById("contactForm")
//         .addEventListener("submit", function (e) {
//           e.preventDefault(); // stop page refresh

//           const name = document.getElementById("nameInput").value;
//           const email = document.getElementById("emailInput").value;
//           const subject = document.getElementById("subjectInput").value;
//           const message = document.getElementById("messageInput").value;

//           console.log("Name:", name);
//           console.log("Email:", email);
//           console.log("Subject:", subject);
//           console.log("Message:", message);
//         });


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelector(".loading").style.display = "block";
  document.querySelector(".error-message").style.display = "none";
  document.querySelector(".sent-message").style.display = "none";

  const data = {
    name: document.getElementById("nameInput").value.trim(),
    email: document.getElementById("emailInput").value.trim(),
    subject: document.getElementById("subjectInput").value.trim(),
    message: document.getElementById("messageInput").value.trim(),
    datetime: new Date().toLocaleString()
  };

  fetch("https://script.google.com/macros/s/AKfycbxF19gGRXhrIoSVAwqVRUtNYn9gApy7z0hZ8WZWF1ZYq6wgMfj3oBYeWXLMpsL9Ti8t/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    document.querySelector(".loading").style.display = "none";

    if (response.result === "success") {
      document.querySelector(".sent-message").style.display = "block";
      document.getElementById("contactForm").reset();
    } else {
      document.querySelector(".error-message").innerText = "Error submitting form.";
      document.querySelector(".error-message").style.display = "block";
    }
  })
  .catch(() => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".error-message").innerText = "Connection error!";
    document.querySelector(".error-message").style.display = "block";
  });
});


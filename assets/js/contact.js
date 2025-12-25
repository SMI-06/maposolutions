
//  document
//         .getElementById("contactForm")
//         .addEventListener("submit", function (e) {
//           e.preventDefault(); // stop page refresh

//            const data = {
//     name: document.getElementById("nameInput").value.trim(),
//     email: document.getElementById("emailInput").value.trim(),
//     subject: document.getElementById("subjectInput").value.trim(),
//     message: document.getElementById("messageInput").value.trim(),
//     datetime: new Date().toLocaleString()
//   };

//   console.log(data);
//         });


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelector(".loading").style.display = "block";
  document.querySelector(".error-message").style.display = "none";
  document.querySelector(".sent-message").style.display = "none";

  const formData = new FormData();
  formData.append("name", document.getElementById("nameInput").value.trim());
  formData.append("email", document.getElementById("emailInput").value.trim());
  formData.append("subject", document.getElementById("subjectInput").value.trim());
  formData.append("message", document.getElementById("messageInput").value.trim());
  formData.append("datetime", new Date().toLocaleString());

  fetch("https://script.google.com/macros/s/AKfycbwLctivx_evprDroqodgYBkNpBkEyU_oSWQ01IN49m24aUY907d5HLhYSM0bJXqOyCC/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(response => {
    document.querySelector(".loading").style.display = "none";

    if (response.result === "success") {
      document.querySelector(".sent-message").style.display = "block";
      document.getElementById("contactForm").reset();
    } else {
      document.querySelector(".error-message").innerText = "Error submitting form";
      document.querySelector(".error-message").style.display = "block";
    }
  })
  .catch(() => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".error-message").innerText = "Connection error";
    document.querySelector(".error-message").style.display = "block";
  });
});


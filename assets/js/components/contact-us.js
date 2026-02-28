document.addEventListener("DOMContentLoaded", function () {
  const contactUs = `
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="description-title">Contact</span>
          <h2>Contact</h2>
        </div>
        <!-- End Section Title -->

        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-form-panel">
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d107726.2321192249!2d74.41687191188983!3d32.46079391558576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sH%2FNo%2033%20Karim%20Street%2C%20Capital%20Road%20New%20Model%20Town%2C%20Sialkot.%20Pakistan!5e0!3m2!1sen!2s!4v1765017554069!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="form-container">
                <h3>Send Us a Message</h3>

                <form id="contactForm" class="php-email-form">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="nameInput"
                      name="name"
                      placeholder="Full Name"
                      oninput="this.value=this.value.replace(/[^a-zA-Z\s]/g,'');
                      this.value=this.value.charAt(0).toUpperCase()+this.value.slice(1)"
                      onkeypress="return /[a-zA-Z\s]/.test(event.key)"
                      required
                    />
                    <label for="nameInput">Full Name</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="emailInput"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <label for="emailInput">Email Address</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="tel"
                      class="form-control"
                      id="phoneInput"
                      name="phone"
                      placeholder="Phone"
                      maxlength="15"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      required
                    />
                    <label for="phoneInput">Phone</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="subjectInput"
                      name="subject"
                      placeholder="Subject"
                      oninput="this.value=this.value.replace(/[^a-zA-Z\s]/g,'');
                      this.value=this.value.charAt(0).toUpperCase()+this.value.slice(1)"
                      onkeypress="return /[a-zA-Z\s]/.test(event.key)"
                      required
                    />
                    <label for="subjectInput">Subject</label>
                  </div>

                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      id="messageInput"
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      style="height: 150px"
                      required
                    ></textarea>
                    <label for="messageInput">Your Message</label>
                  </div>

                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>

                  <div class="d-grid">
                    <button type="submit" class="btn-submit">
                      Send Message <i class="bi bi-send-fill ms-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>`;
  document.getElementById("contactUs").innerHTML = contactUs;
});

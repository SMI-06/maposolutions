document.addEventListener("DOMContentLoaded", function () {
  const testimonials = `  <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="description-title">Testimonials</span>
          <h2>Testimonials</h2>
        </div>
        <!-- End Section Title -->
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="testimonials-slider swiper init-swiper">
            <script type="application/json" class="swiper-config">
              {
                "loop": true,
                "speed": 800,
                "autoplay": {
                  "delay": 5000
                },
                "slidesPerView": 1,
                "spaceBetween": 30,
                "pagination": {
                  "el": ".swiper-pagination",
                  "type": "bullets",
                  "clickable": true
                },
                "breakpoints": {
                  "768": {
                    "slidesPerView": 2
                  },
                  "1200": {
                    "slidesPerView": 3
                  }
                }
              }
            </script>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-card">
                  <div class="testimonial-profile">
                    <div class="profile-info">
                      <div>
                        <h3>Robert Johnson</h3>
                        <h4>Marketing Director</h4>
                      </div>
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt="Profile Image"
                      />
                    </div>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo to maecenas aliquam
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-card">
                  <div class="testimonial-profile">
                    <div class="profile-info">
                      <div>
                        <h3>Robert Johnson</h3>
                        <h4>Marketing Director</h4>
                      </div>
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt="Profile Image"
                      />
                    </div>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo to maecenas aliquam
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-card">
                  <div class="testimonial-profile">
                    <div class="profile-info">
                      <div>
                        <h3>Robert Johnson</h3>
                        <h4>Marketing Director</h4>
                      </div>
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt="Profile Image"
                      />
                    </div>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo to maecenas aliquam
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->
              <div class="swiper-slide">
                <div class="testimonial-card">
                  <div class="testimonial-profile">
                    <div class="profile-info">
                      <div>
                        <h3>Robert Johnson</h3>
                        <h4>Marketing Director</h4>
                      </div>
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt="Profile Image"
                      />
                    </div>
                  </div>
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo to maecenas aliquam
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div> `;
  document.getElementById("testimonials").innerHTML = testimonials;
});

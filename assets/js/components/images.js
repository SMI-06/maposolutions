document.addEventListener("DOMContentLoaded", function () {
  const images = ` <video autoplay muted loop class="gallery-bg-video">
          <source src="assets/img/Videos/Jackets.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <span class="description-title">Our Gallery</span>
          <h2>Our Gallery</h2>
        </div>
        <!-- End Section Title -->
        <div
          class="container modern-gallery"
          data-aos="fade-up"
          data-aos-delay="100">
          <div class="gallery-container">
            <div class="carousel">
              <div class="carousel-track" id="carouselTrack">
                <!-- 8 Unique Cards -->
                <div class="card" style="--delay: 0s">
                  <img src="assets/img/portfolio/1.jpeg" alt="Inspection One" />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.2s">
                  <img src="assets/img/portfolio/2.jpeg" alt="Inspection Two" />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.4s">
                  <img
                    src="assets/img/portfolio/3.jpeg"
                    alt="Inspection Three"
                  />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.6s">
                  <img
                    src="assets/img/portfolio/4.jpeg"
                    alt="Inspection Four"
                  />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.6s">
                  <img
                    src="assets/img/portfolio/5.jpeg"
                    alt="Inspection Five"
                  />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.6s">
                  <img src="assets/img/portfolio/6.jpeg" alt="Inspection Six" />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.6s">
                  <img
                    src="assets/img/portfolio/7.jpeg"
                    alt="Inspection Seven"
                  />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
                <div class="card" style="--delay: 0.6s">
                  <img
                    src="assets/img/portfolio/8.jpeg"
                    alt="Inspection Eight"
                  />
                  <div class="card-overlay">
                    <h3>Inspection</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  document.getElementById("gallery").innerHTML = images;
});

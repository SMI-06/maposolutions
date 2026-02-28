document.addEventListener("DOMContentLoaded", function () {
const footer = ` <footer id="footer" class="footer light-background">
      <div class="container">
        <div class="row gy-3">
          
          <!-- Address -->
          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-geo-alt icon"></i>
            <div class="address">
              <h4>Address</h4>
              <p>H/No 33 Karim Street, Capital Road</p>
              <p>New Model Town, Sialkot. Pakistan</p>
            </div>
          </div>
          <!-- Address -->

          <!-- Contact US -->
          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-telephone icon"></i>
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Tel:</strong> <span>+92-52-7050232</span><br/>
                <strong>Email:</strong> <span>maposolutions22@gmail.com</span>
              </p>
            </div>
          </div>
          <!-- Contact US -->
          <!-- Opening Hours -->
          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat:</strong> <span>9AM - 6PM</span> <br/>
                <strong>Sunday</strong>: <span>Closed</span>
              </p>
            </div>
          </div>
          <!-- Opening Hours -->

          <!-- Follow -->
          <div class="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div class="social-links d-flex">
              <a href="#" class="twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <!-- Follow -->

        </div>
      </div>

      <!-- Copy Right -->
      <div class="container copyright text-center mt-4">
        <p> © <span>Copyright</span>
          <strong class="px-1 sitename">MAPO Solutions</strong>
          <span>All Rights Reserved</span>
        </p>
        <div class="credits">
          Designed by <a href="https://smisofts.com/">SMI SOFTS</a>
        </div>
      </div>
      <!-- Copy Right -->

    </footer>
    
    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>

    <!-- Preloader -->
    <div id="preloader"></div>

</body>`;

  document.getElementById("footer").innerHTML = footer;
});

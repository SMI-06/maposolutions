document.addEventListener("DOMContentLoaded", function () {
  const step_section = `
        <div class="container section-title" data-aos="fade-up">
          <span class="description-title">Steps</span>
          <h2>Steps</h2>
          <p>How Mapo Solutions Drives Success Through a Clear Process</p>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="steps-5">
            <div class="process-container">
              <div class="process-item" data-aos="fade-up" data-aos-delay="200">
                <div class="content">
                  <span class="step-number">01</span>
                  <div class="card-body">
                    <div class="step-icon">
                      <i class="bi bi-search"></i>
                    </div>
                    <div class="step-content">
                      <h3>Requirement Analysis</h3>
                      <p>
                        We start by understanding your product specifications,
                        quality expectations, and regulatory requirements. This
                        helps us design a customized inspection plan that meets
                        your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Process Item -->

              <div class="process-item" data-aos="fade-up" data-aos-delay="300">
                <div class="content">
                  <span class="step-number">02</span>
                  <div class="card-body">
                    <div class="step-icon">
                      <i class="bi bi-list-check"></i>
                    </div>
                    <div class="step-content">
                      <h3>Factory Audit &amp; Assessment</h3>
                      <p>
                        Our experienced inspectors evaluate the manufacturer’s
                        facilities, production processes, quality control
                        procedures, material sourcing, and staff training to
                        ensure compliance with industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Process Item -->

              <div class="process-item" data-aos="fade-up" data-aos-delay="400">
                <div class="content">
                  <span class="step-number">03</span>
                  <div class="card-body">
                    <div class="step-icon">
                      <i class="bi bi-pencil-square"></i>
                    </div>
                    <div class="step-content">
                      <h3>Product Inspection</h3>
                      <p>
                        We perform thorough inspections of your products,
                        checking materials, workmanship, hardware, labeling, and
                        packaging. Pre-shipment inspections ensure your products
                        meet the required quality standards before they leave
                        the factory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Process Item -->

              <div class="process-item" data-aos="fade-up" data-aos-delay="500">
                <div class="content">
                  <span class="step-number">04</span>
                  <div class="card-body">
                    <div class="step-icon">
                      <i class="bi bi-pen"></i>
                    </div>
                    <div class="step-content">
                      <h3>Reporting &amp; Recommendations</h3>
                      <p>
                        After inspections, we provide detailed reports
                        highlighting defects, non-conformities, and corrective
                        actions. We also deliver a final confirmation of product
                        quality and compliance, helping you reduce risks and
                        enhance customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Process Item -->
            </div>
          </div>
        </div>`;
      document.getElementById("steps").innerHTML = step_section;
    })
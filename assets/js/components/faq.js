document.addEventListener("DOMContentLoaded", function () {
  const faq = `
        <div class="container section-title" data-aos="fade-up">
          <span class="description-title">Frequently Asked Questions</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="faq-wrapper">
                    
                    <!-- FAQ Item 1 -->
                    <div class="faq-item faq-active">
                        <div class="faq-header">
                          <div class="faq-icon">
                            <i class="bi bi-question-circle"></i>
                          </div>
                          <h4>What types of products do you inspect?</h4>
                          <div class="faq-toggle">
                            <i class="bi bi-plus"></i>
                            <i class="bi bi-dash"></i>
                          </div>
                        </div>
                        <div class="faq-content">
                            <div class="content-inner">
                                <p>
                                  We specialize in leather and textile garments, gloves,
                                  boots, and related accessories. Our inspections cover
                                  materials, workmanship, packaging, and compliance with
                                  industry standards.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- FAQ Item 1 -->

                    <!-- FAQ Item 2 -->
                    <div class="faq-item">
                        <div class="faq-header">
                          <div class="faq-icon">
                            <i class="bi bi-question-circle"></i>
                          </div>
                          <h4>What is included in a pre-shipment inspection?</h4>
                          <div class="faq-toggle">
                            <i class="bi bi-plus"></i>
                            <i class="bi bi-dash"></i>
                          </div>
                        </div>
                        <div class="faq-content">
                          <div class="content-inner">
                            <p>
                              A pre-shipment inspection ensures that products meet
                              your quality expectations before they leave the factory.
                              This includes verification of product specifications,
                              checking for defects or damages, and ensuring regulatory
                              compliance.
                            </p>
                          </div>
                        </div>
                    </div>
                    <!-- FAQ Item 2 -->
                    
                    <!-- FAQ Item 3 -->
                    <div class="faq-item">
                        <div class="faq-header">
                          <div class="faq-icon">
                            <i class="bi bi-question-circle"></i>
                          </div>
                          <h4>How do you conduct factory audits?</h4>
                          <div class="faq-toggle">
                            <i class="bi bi-plus"></i>
                            <i class="bi bi-dash"></i>
                          </div>
                        </div>
                        <div class="faq-content">
                          <div class="content-inner">
                            <p>
                              Our team evaluates the manufacturer’s quality control
                              processes, production procedures, equipment, material
                              sourcing, storage practices, and employee training. We
                              also observe operations and interview staff to ensure
                              compliance with industry standards.
                            </p>
                          </div>
                        </div>
                    </div>
                    <!-- FAQ Item 3 -->
                    
                    <!-- FAQ Item 4 -->
                    <div class="faq-item">
                      <div class="faq-header">
                        <div class="faq-icon">
                          <i class="bi bi-question-circle"></i>
                        </div>
                        <h4>What inspection methods do you use?</h4>
                        <div class="faq-toggle">
                          <i class="bi bi-plus"></i>
                          <i class="bi bi-dash"></i>
                        </div>
                      </div>
                      <div class="faq-content">
                        <div class="content-inner">
                          <p>
                            We combine visual inspections, precise measurements, and
                            product testing with staff interviews and process
                            observations to provide a thorough evaluation of product
                            quality and compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- FAQ Item 4 -->
                </div>
            </div>
          </div>
        </div>

`;
  document.getElementById("faq").innerHTML = faq;
});

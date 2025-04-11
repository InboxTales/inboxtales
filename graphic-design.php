<?php
$pageTitle = "Graphic Design Services | InboxTales";
$pageDescription = "Professional graphic design services including logo design, branding, marketing materials, and digital graphics. Create a strong visual identity for your business.";
$currentPage = "graphic-design";
include 'partials/head.php';
?>

<body>
    <?php include 'partials/header.php'; ?>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Graphic Design Services</h1>
                <p>Transform your brand with stunning visual designs that capture attention and communicate your message effectively</p>
            </div>
        </section>

        <!-- Service Overview -->
        <section class="service-overview">
            <div class="container">
                <h2>Comprehensive Graphic Design Solutions</h2>
                <p>We create visually compelling designs that help your brand stand out and make a lasting impression. Our team specializes in creating unique, memorable designs that align with your brand identity.</p>
                
                <div class="features-grid">
                    <div class="feature">
                        <h3>Logo Design</h3>
                        <p>Unique and memorable logos that represent your brand's identity</p>
                    </div>
                    <div class="feature">
                        <h3>Brand Identity</h3>
                        <p>Complete brand packages including color schemes, typography, and style guides</p>
                    </div>
                    <div class="feature">
                        <h3>Marketing Materials</h3>
                        <p>Designs for business cards, brochures, flyers, and other promotional materials</p>
                    </div>
                    <div class="feature">
                        <h3>Digital Graphics</h3>
                        <p>Social media graphics, web banners, and other digital assets</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Process -->
        <section class="process">
            <div class="container">
                <h2>Our Design Process</h2>
                <div class="process-steps">
                    <div class="step">
                        <h3>1. Discovery</h3>
                        <p>Understanding your brand, target audience, and design requirements</p>
                    </div>
                    <div class="step">
                        <h3>2. Research & Inspiration</h3>
                        <p>Gathering insights and creating mood boards for design direction</p>
                    </div>
                    <div class="step">
                        <h3>3. Concept Development</h3>
                        <p>Creating initial design concepts and variations</p>
                    </div>
                    <div class="step">
                        <h3>4. Refinement</h3>
                        <p>Refining designs based on feedback and perfecting details</p>
                    </div>
                    <div class="step">
                        <h3>5. Final Delivery</h3>
                        <p>Providing final files in all required formats</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Design Services -->
        <section class="services">
            <div class="container">
                <h2>Our Design Services</h2>
                <div class="services-grid">
                    <div class="service">
                        <h3>Logo & Branding</h3>
                        <ul>
                            <li>Logo Design</li>
                            <li>Brand Guidelines</li>
                            <li>Business Cards</li>
                            <li>Letterheads</li>
                        </ul>
                    </div>
                    <div class="service">
                        <h3>Print Design</h3>
                        <ul>
                            <li>Brochures</li>
                            <li>Flyers</li>
                            <li>Posters</li>
                            <li>Packaging</li>
                        </ul>
                    </div>
                    <div class="service">
                        <h3>Digital Design</h3>
                        <ul>
                            <li>Social Media Graphics</li>
                            <li>Web Banners</li>
                            <li>Email Templates</li>
                            <li>Digital Ads</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta">
            <div class="container">
                <h2>Ready to Elevate Your Brand?</h2>
                <p>Let's create stunning designs that make your brand stand out from the competition.</p>
                <a href="contact.php" class="btn">Get Started</a>
            </div>
        </section>
    </main>

    <?php include 'partials/footer.php'; ?>
</body>
</html>
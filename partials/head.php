<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo isset($title) ? $title . ' | InboxTales' : 'InboxTales - A tech start for your developmental journey'; ?></title>
    
    <!-- Meta Description -->
    <meta name="description" content="InboxTales - Your trusted partner for digital solutions. We offer web development, digital marketing, and tech consulting services in Hyderabad." />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($title) ? $title . ' | InboxTales' : 'InboxTales - A tech start for your developmental journey'; ?>" />
    <meta property="og:description" content="InboxTales - Your trusted partner for digital solutions. We offer web development, digital marketing, and tech consulting services in Hyderabad." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://inboxtales.com" />
    <meta property="og:image" content="https://inboxtales.com/assets/img/logo.png" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo isset($title) ? $title . ' | InboxTales' : 'InboxTales - A tech start for your developmental journey'; ?>" />
    <meta name="twitter:description" content="InboxTales - Your trusted partner for digital solutions. We offer web development, digital marketing, and tech consulting services in Hyderabad." />
    <meta name="twitter:image" content="https://inboxtales.com/assets/img/logo.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://inboxtales.com<?php echo $_SERVER['REQUEST_URI']; ?>" />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DHY78GKFL9"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DHY78GKFL9');
    </script>

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />

    <!-- Site font -->
    <link rel="stylesheet" href="assets/fonts/webfonts/inter/stylesheet.css" />
    <?php echo (isset($css) ? $css   : '')?>

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="assets/css/vendors/swiper-bundle.min.css" />
    <link rel="stylesheet" href="assets/css/vendors/jos.css" />
    <link rel="stylesheet" href="assets/css/vendors/menu.css" />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/custom.css" />
    <!-- Development css -->
    <link rel="stylesheet" href="assets/css/style.css" />

    <!-- Production css -->
    <!-- <link rel="stylesheet" href="/assets/css/style.min.css" /> -->

    <!-- Schema.org markup for Google+ -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "InboxTales",
        "url": "https://inboxtales.com",
        "logo": "https://inboxtales.com/assets/img/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-96404-70432",
            "contactType": "customer service",
            "email": "contact@inboxtales.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressCountry": "IN"
        }
    }
    </script>
</head>
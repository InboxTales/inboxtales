<?php
function generateSitemap() {
    $domain = 'https://inboxtales.com';
    $pages = [
        // Homepage
        [
            'url' => '/index.php',
            'changefreq' => 'weekly',
            'priority' => '1.0'
        ],
        // Main Services
        [
            'url' => '/web-design.php',
            'changefreq' => 'weekly',
            'priority' => '0.9'
        ],
        [
            'url' => '/whatsapp-marketing.php',
            'changefreq' => 'weekly',
            'priority' => '0.9'
        ],
        // Other Services
        [
            'url' => '/graphic-design.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/app-development.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/cyber-security.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/video-editing.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/lead-generating.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/social-media-marketing.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/digital-marketing.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        // Main Pages
        [
            'url' => '/about.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/blog-1.php',
            'changefreq' => 'daily',
            'priority' => '0.7'
        ],
        [
            'url' => '/blog-2.php',
            'changefreq' => 'daily',
            'priority' => '0.7'
        ],
        [
            'url' => '/blog-3.php',
            'changefreq' => 'daily',
            'priority' => '0.7'
        ],
        [
            'url' => '/blog-4.php',
            'changefreq' => 'daily',
            'priority' => '0.7'
        ],
        [
            'url' => '/contact.php',
            'changefreq' => 'monthly',
            'priority' => '0.8'
        ],
        [
            'url' => '/faq.php',
            'changefreq' => 'monthly',
            'priority' => '0.6'
        ]
    ];

    // Create new DOMDocument
    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;

    // Create urlset element
    $urlset = $dom->createElement('urlset');
    $urlset->setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    $dom->appendChild($urlset);

    // Add each page to sitemap
    foreach ($pages as $page) {
        $url = $dom->createElement('url');
        
        // Add location
        $loc = $dom->createElement('loc', $domain . $page['url']);
        $url->appendChild($loc);
        
        // Add last modified date
        $lastmod = $dom->createElement('lastmod', date('Y-m-d'));
        $url->appendChild($lastmod);
        
        // Add change frequency
        $changefreq = $dom->createElement('changefreq', $page['changefreq']);
        $url->appendChild($changefreq);
        
        // Add priority
        $priority = $dom->createElement('priority', $page['priority']);
        $url->appendChild($priority);
        
        $urlset->appendChild($url);
    }

    // Save sitemap
    $dom->save('sitemap.xml');
    
    // Submit sitemap to search engines
    $sitemapUrl = $domain . '/sitemap.xml';
    
    // Google
    file_get_contents('https://www.google.com/ping?sitemap=' . urlencode($sitemapUrl));
    
    // Bing
    file_get_contents('https://www.bing.com/ping?sitemap=' . urlencode($sitemapUrl));
}

// Generate sitemap
generateSitemap();

echo "Sitemap generated successfully!";
?> 
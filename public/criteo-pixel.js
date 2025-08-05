// Criteo Pixel configuration for SEO tracking
// Replace CRITEO_PIXEL_ID with your actual Criteo Pixel ID

!function(e,t){if(!e.ct){e.ct=e.ct||function(){(e.ct.q=e.ct.q||[]).push(arguments)},e.ct.callQueue=[];var n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://static.criteo.net/js/ld/publishertag.js",t.head.appendChild(n)}}(window,document);

// Replace with your actual Criteo Pixel ID
ct('set', 'account', 'CRITEO_PIXEL_ID');

// Track page view for SEO
ct('send', 'pageView', {
  page_name: 'GraphQL Lint Unused Fields - Tiny GraphQL Tool',
  page_category: 'GraphQL Development Tools',
  page_type: 'product'
});

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ct('send', 'viewItem', {
            item: 'GraphQL Lint Features',
            category: 'Tiny GraphQL Tool Features',
            type: 'product_group'
          });
        }
      });
    });
    observer.observe(featuresSection);
  }

  // Track installation section views
  const installationSection = document.getElementById('installation');
  if (installationSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ct('send', 'viewItem', {
            item: 'GraphQL Lint Installation',
            category: 'Tiny GraphQL Tool Installation',
            type: 'product_group'
          });
        }
      });
    });
    observer.observe(installationSection);
  }

  // Track documentation section views
  const documentationSection = document.getElementById('documentation');
  if (documentationSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ct('send', 'viewItem', {
            item: 'GraphQL Lint Documentation',
            category: 'Tiny GraphQL Tool Documentation',
            type: 'product_group'
          });
        }
      });
    });
    observer.observe(documentationSection);
  }
}); 
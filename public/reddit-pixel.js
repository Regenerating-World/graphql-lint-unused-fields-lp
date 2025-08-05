// Reddit Pixel configuration for SEO tracking
// Replace REDDIT_PIXEL_ID with your actual Reddit Pixel ID

!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);

// Replace with your actual Reddit Pixel ID
rdt('init', 'REDDIT_PIXEL_ID');

// Track page view for SEO
rdt('track', 'PageVisit', {
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
          rdt('track', 'ViewContent', {
            content_name: 'GraphQL Lint Features',
            content_category: 'Tiny GraphQL Tool Features',
            content_type: 'product_group'
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
          rdt('track', 'ViewContent', {
            content_name: 'GraphQL Lint Installation',
            content_category: 'Tiny GraphQL Tool Installation',
            content_type: 'product_group'
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
          rdt('track', 'ViewContent', {
            content_name: 'GraphQL Lint Documentation',
            content_category: 'Tiny GraphQL Tool Documentation',
            content_type: 'product_group'
          });
        }
      });
    });
    observer.observe(documentationSection);
  }
}); 
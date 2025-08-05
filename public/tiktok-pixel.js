// TikTok Pixel configuration for SEO tracking
// Replace TIKTOK_PIXEL_ID with your actual TikTok Pixel ID

!function (w, d, t) {
  w[t] = w[t] || [];
  w[t].push({
    'ttq.load': 'TIKTOK_PIXEL_ID',
    'ttq.track': 'PageView',
    'ttq.track': 'ViewContent',
    'content_name': 'GraphQL Lint Unused Fields - Tiny GraphQL Tool',
    'content_category': 'GraphQL Development Tools',
    'content_type': 'product'
  });
  var s = d.createElement('script');
  s.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=TIKTOK_PIXEL_ID';
  s.async = true;
  var e = d.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(s, e);
}(window, document, 'ttq');

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ttq.track('ViewContent', {
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
          ttq.track('ViewContent', {
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
          ttq.track('ViewContent', {
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
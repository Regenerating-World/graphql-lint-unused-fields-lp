// Quora Pixel configuration for SEO tracking
// Replace QUORA_PIXEL_ID with your actual Quora Pixel ID

!function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.type='text/javascript',t.async=!0,t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');

// Replace with your actual Quora Pixel ID
qp('init', 'QUORA_PIXEL_ID');

// Track page view for SEO
qp('track', 'Generic', {
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
          qp('track', 'Generic', {
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
          qp('track', 'Generic', {
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
          qp('track', 'Generic', {
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
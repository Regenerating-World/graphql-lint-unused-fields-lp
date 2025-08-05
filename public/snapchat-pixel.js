// Snapchat Pixel configuration for SEO tracking
// Replace SNAPCHAT_PIXEL_ID with your actual Snapchat Pixel ID

!function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);}
(window,document,'https://sc-static.net/scevent.min.js');

// Replace with your actual Snapchat Pixel ID
snaptr('init', 'SNAPCHAT_PIXEL_ID', {
  user_email: 'graphql_lint_unused_fields@example.com'
});

// Track page view for SEO
snaptr('track', 'PAGE_VIEW', {
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
          snaptr('track', 'VIEW_CONTENT', {
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
          snaptr('track', 'VIEW_CONTENT', {
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
          snaptr('track', 'VIEW_CONTENT', {
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
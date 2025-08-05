// Google Analytics configuration for SEO tracking
// Replace GA_MEASUREMENT_ID with your actual Google Analytics ID

(function() {
  // Google Analytics 4 configuration
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  // Replace with your actual GA4 measurement ID
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: 'GraphQL Lint Unused Fields - Tiny GraphQL Tool',
    page_location: window.location.href,
    custom_map: {
      'custom_parameter_1': 'graphql_lint',
      'custom_parameter_2': 'tiny_graphql',
      'custom_parameter_3': 'unused_fields'
    }
  });

  // Track specific events for SEO
  gtag('event', 'page_view', {
    page_title: 'GraphQL Lint Unused Fields - Tiny GraphQL Tool',
    page_location: window.location.href,
    custom_parameter_1: 'graphql_lint',
    custom_parameter_2: 'tiny_graphql',
    custom_parameter_3: 'unused_fields'
  });

  // Track user interactions
  document.addEventListener('DOMContentLoaded', function() {
    // Track feature section views
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gtag('event', 'view_item', {
              item_name: 'GraphQL Lint Features',
              item_category: 'Tiny GraphQL Tool'
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
            gtag('event', 'view_item', {
              item_name: 'GraphQL Lint Installation',
              item_category: 'Tiny GraphQL Tool'
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
            gtag('event', 'view_item', {
              item_name: 'GraphQL Lint Documentation',
              item_category: 'Tiny GraphQL Tool'
            });
          }
        });
      });
      observer.observe(documentationSection);
    }
  });
})(); 
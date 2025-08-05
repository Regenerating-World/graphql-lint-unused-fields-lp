// Twitter Pixel configuration for SEO tracking
// Replace TWITTER_PIXEL_ID with your actual Twitter Pixel ID

!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

// Replace with your actual Twitter Pixel ID
twq('config','TWITTER_PIXEL_ID',{
  em: 'graphql_lint_unused_fields@example.com'
});

// Track page view for SEO
twq('track','PageView',{
  content_name: 'GraphQL Lint Unused Fields - Tiny GraphQL Tool',
  content_category: 'GraphQL Development Tools',
  content_type: 'product'
});

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          twq('track','ViewContent',{
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
          twq('track','ViewContent',{
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
          twq('track','ViewContent',{
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
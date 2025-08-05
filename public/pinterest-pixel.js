// Pinterest Pixel configuration for SEO tracking
// Replace PINTEREST_PIXEL_ID with your actual Pinterest Pixel ID

!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};
window.pintrk.queue=[];var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];
r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");

// Replace with your actual Pinterest Pixel ID
pintrk('load', 'PINTEREST_PIXEL_ID');
pintrk('page');

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pintrk('track', 'pagevisit', {
            np: 'GraphQL Lint Features',
            pd: 'Tiny GraphQL Tool Features'
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
          pintrk('track', 'pagevisit', {
            np: 'GraphQL Lint Installation',
            pd: 'Tiny GraphQL Tool Installation'
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
          pintrk('track', 'pagevisit', {
            np: 'GraphQL Lint Documentation',
            pd: 'Tiny GraphQL Tool Documentation'
          });
        }
      });
    });
    observer.observe(documentationSection);
  }
}); 
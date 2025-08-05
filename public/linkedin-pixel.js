// LinkedIn Pixel configuration for SEO tracking
// Replace LINKEDIN_PIXEL_ID with your actual LinkedIn Pixel ID

!function(){var e=window.lintrk;function t(n){e.push(n)}window.lintrk=function(){t(arguments)},window._linkedin_data_partner_id="LINKEDIN_PIXEL_ID"}();

// Track page view for SEO
lintrk('track', { conversion_id: 1234567890 });

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lintrk('track', { 
            conversion_id: 1234567890,
            value: 0.00,
            currency: 'USD'
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
          lintrk('track', { 
            conversion_id: 1234567890,
            value: 0.00,
            currency: 'USD'
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
          lintrk('track', { 
            conversion_id: 1234567890,
            value: 0.00,
            currency: 'USD'
          });
        }
      });
    });
    observer.observe(documentationSection);
  }
}); 
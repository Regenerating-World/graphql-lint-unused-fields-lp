// Taboola Pixel configuration for SEO tracking
// Replace TABOOLA_PIXEL_ID with your actual Taboola Pixel ID

window._taboola = window._taboola || [];
_taboola.push({article:'auto'});
!function (e, f, u, i) {
  if (!document.getElementById(i)){
    e.async = 1;
    e.src = u;
    e.id = i;
    document.getElementsByTagName(f)[0].appendChild(e);
  }
}(document.createElement('script'),
  'head', '//cdn.taboola.com/libtrc/TABOOLA_PIXEL_ID/loader.js', 'tb_loader_script');

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          _taboola.push({
            article: 'GraphQL Lint Features',
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
          _taboola.push({
            article: 'GraphQL Lint Installation',
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
          _taboola.push({
            article: 'GraphQL Lint Documentation',
            category: 'Tiny GraphQL Tool Documentation',
            type: 'product_group'
          });
        }
      });
    });
    observer.observe(documentationSection);
  }
}); 
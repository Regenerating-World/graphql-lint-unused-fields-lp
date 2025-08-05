// AdRoll Pixel configuration for SEO tracking
// Replace ADROLL_PIXEL_ID with your actual AdRoll Pixel ID

!function(e,t,n,c,r){if(!e[c]){for(r=e[c]=function(){r.process?r.process.apply(r,arguments):r.callMethod.push(arguments)},r.callMethod=[],r.process=function(){},e[c]=r,r.readyState="complete",r.source="https://s.adroll.com/j/roundtrip.js",n=t.createElement("script"),n.async=1,n.src=r.source,n.onload=function(){e[c]=r},t.head.appendChild(n)}}(window,document,"script","adroll");

// Replace with your actual AdRoll Pixel ID
adroll_adv_id = "ADROLL_PIXEL_ID";
adroll_pix_id = "ADROLL_PIXEL_ID";

// Track page view for SEO
adroll_conversion_value_in = 0.00;
adroll_currency = "USD";
adroll_custom_data = {
  "page_name": "GraphQL Lint Unused Fields - Tiny GraphQL Tool",
  "page_category": "GraphQL Development Tools",
  "page_type": "product"
};

// Track custom events for SEO
document.addEventListener('DOMContentLoaded', function() {
  // Track feature section views
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          adroll_custom_data = {
            "content_name": "GraphQL Lint Features",
            "content_category": "Tiny GraphQL Tool Features",
            "content_type": "product_group"
          };
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
          adroll_custom_data = {
            "content_name": "GraphQL Lint Installation",
            "content_category": "Tiny GraphQL Tool Installation",
            "content_type": "product_group"
          };
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
          adroll_custom_data = {
            "content_name": "GraphQL Lint Documentation",
            "content_category": "Tiny GraphQL Tool Documentation",
            "content_type": "product_group"
          };
        }
      });
    });
    observer.observe(documentationSection);
  }
}); 
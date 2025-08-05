export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Otimizações para SEO e performance
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifySelectors: true,
        }],
      },
    }),
  },
}

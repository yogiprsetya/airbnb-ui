/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shade: {
          1: "var(--shade-01)",
          2: "var(--shade-02)",
          "2-5": "var(--shade-02-5)",
          "2-30": "var(--shade-02-30)",
        },
        neutral: {
          1: "var(--neutral-01)",
          2: "var(--neutral-02)",
          3: "var(--neutral-03)",
          4: "var(--neutral-04)",
          5: "var(--neutral-05)",
          6: "var(--neutral-06)",
          7: "var(--neutral-07)",
          8: "var(--neutral-08)",
        },
        primary: {
          1: "var(--primary-01)",
          2: "var(--primary-02)",
        },
        error: {
          1: "var(--error-01)",
          2: "var(--error-02)",
        },
        accent: {
          1: "var(--accent-01)",
          2: "var(--accent-02)",
        },
        discount: "var(--discount)",
        link: "var(--link)",
      },
    },
  },
  plugins: [],
};

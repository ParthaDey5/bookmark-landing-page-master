// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        /* Center both axes */
        ".center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },

        /* Row direction (horizontal flow) */
        ".row-x-start": { display: "flex", "flex-direction": "row", "justify-content": "flex-start" },
        ".row-x-center": { display: "flex", "flex-direction": "row", "justify-content": "center" },
        ".row-x-end": { display: "flex", "flex-direction": "row", "justify-content": "flex-end" },
        ".row-x-between": { display: "flex", "flex-direction": "row", "justify-content": "space-between" },
        ".row-x-around": { display: "flex", "flex-direction": "row", "justify-content": "space-around" },
        ".row-x-evenly": { display: "flex", "flex-direction": "row", "justify-content": "space-evenly" },

        ".row-y-start": { display: "flex", "flex-direction": "row", "align-items": "flex-start" },
        ".row-y-center": { display: "flex", "flex-direction": "row", "align-items": "center" },
        ".row-y-end": { display: "flex", "flex-direction": "row", "align-items": "flex-end" },
        ".row-y-stretch": { display: "flex", "flex-direction": "row", "align-items": "stretch" },

        /* Column direction (vertical flow) */
        ".col-y-start": { display: "flex", "flex-direction": "column", "justify-content": "flex-start" },
        ".col-y-center": { display: "flex", "flex-direction": "column", "justify-content": "center" },
        ".col-y-end": { display: "flex", "flex-direction": "column", "justify-content": "flex-end" },
        ".col-y-between": { display: "flex", "flex-direction": "column", "justify-content": "space-between" },
        ".col-y-around": { display: "flex", "flex-direction": "column", "justify-content": "space-around" },
        ".col-y-evenly": { display: "flex", "flex-direction": "column", "justify-content": "space-evenly" },

        ".col-x-start": { display: "flex", "flex-direction": "column", "align-items": "flex-start" },
        ".col-x-center": { display: "flex", "flex-direction": "column", "align-items": "center" },
        ".col-x-end": { display: "flex", "flex-direction": "column", "align-items": "flex-end" },
        ".col-x-stretch": { display: "flex", "flex-direction": "column", "align-items": "stretch" },
      };

      // Generate responsive variants automatically
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};

import tailwindcss from "tailwindcss";
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
};

// .storybook/main.js
module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx)', // ONLY our JS/JSX stories
  ],
  addons: [],
  framework: {
    name: '@storybook/react-vite', // or '@storybook/react-webpack5' if that’s what init gave you
    options: {},
  },
};

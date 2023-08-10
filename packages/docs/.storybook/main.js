/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag",
    defaultName: "Docs"
  },
  viteFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/rs-ignite-reactjs-2023-05-design-system"; // nome do repositório github
    }
  },
};
export default config;

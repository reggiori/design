
import ReggioriRoot from 'index'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //backgrounds: {
  //  default: 'light',
  //  values: [
  //    { name: 'light', value: '#f5f5f5' },
  //    { name: 'dark', value: '#101010' },
  //  ]
  //},
}

export const decorators = [
  (Story) => (
    <ReggioriRoot>
      <Story />
    </ReggioriRoot>
  ),
];

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  content: ['content/**/**.md'],
  theme: {
    fontFamily: {
      sans: ['Oxygen', ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
      serif: [...defaultTheme.fontFamily.serif]
    }
  },
  plugins: []
};

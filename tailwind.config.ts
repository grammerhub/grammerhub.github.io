import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  content: [],
  theme: {
    fontFamily: {
      sans: ['Oxygen', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
};

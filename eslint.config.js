import { antfu } from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['src/*.js'],
  },
  [
    {
      rules: {
        'no-console': 'off',
      },
    },
  ],
)

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export default {
  entry: './js/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.client.json'
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: join(dirname(fileURLToPath(import.meta.url)), 'public')
  }
}

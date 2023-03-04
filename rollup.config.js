// import modify from 'rollup-plugin-modify';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json';
import rimraf from 'rimraf';
import nodeResolve from '@rollup/plugin-node-resolve';
// import tsconfig from './tsconfig.json' assert { type: 'json'};

try {
  rimraf.sync('./exports/**/*')
} catch (e) {
  console.log('nothing to clean');
};

export default  [{
  input: ['src/p2pt.js', 'src/node.js'],
  output: [{
    dir: './exports',
    format: 'cjs'
  }],
  external: [
    'bittorrent-tracker/lib/client/websocket-tracker',
    'simple-websocket',
    '@koush/wrtc',
    'wrtc.node'
  ],
  plugins: [
    commonjs({exclude: ['./simple-peer.js']}),
    // typescript(tsconfig)
    nodeResolve()
  ]
}]

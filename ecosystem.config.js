module.exports = {
  apps: [
    {
      name: 'wayne',
      script: 'dist/main.js',
      exec_mode: 'cluster',
      instances: 'max',
      node_args: '-r ts-node/register',
    },
  ],
};

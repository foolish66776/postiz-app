module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'pnpm',
      args: 'start',
      cwd: '/app/apps/backend',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend',
      script: 'pnpm',
      args: 'start',
      cwd: '/app/apps/frontend',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'orchestrator',
      script: 'pnpm',
      args: 'start',
      cwd: '/app/apps/orchestrator',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

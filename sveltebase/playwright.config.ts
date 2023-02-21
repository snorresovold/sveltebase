import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	reporter: process.env.CI ? 'dot' : 'list', // dot for ci and list when running locally
};

export default config;

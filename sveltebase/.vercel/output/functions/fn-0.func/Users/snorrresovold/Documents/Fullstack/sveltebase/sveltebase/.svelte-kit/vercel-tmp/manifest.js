export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-790f5ba9.js","imports":["_app/immutable/start-790f5ba9.js","_app/immutable/chunks/index-54554715.js","_app/immutable/chunks/singletons-3081cd9d.js","_app/immutable/chunks/index-7768c1be.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/messages",
				pattern: /^\/messages\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/products/[productID]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				params: [{"name":"productID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/users/[userID]",
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: [{"name":"userID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

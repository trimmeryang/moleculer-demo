// const fetch = require("node-fetch");

module.exports = {
	name: "order",
	settings: {
		// path: "/order",
	},
	dependencies: ["helper"],
	actions: {
		timeout: {
			rest: {
				method: "GET",
				path: "/timeout",
			},
			async handler(ctx) {
				const id = await ctx.call("helper.random");
				await this.sleep(4000);
				return {
					res: {
						id,
						price: "12",
					},
				};
			},
		},
		error: {
			rest: {
				method: "GET",
				path: "/error",
			},
			async handler(ctx) {
				throw new Error("test error2");
			},
		},
		list: {
			rest: {
				method: "GET",
				path: "/list",
			},
			async handler(ctx) {
				const id = await ctx.call("helper.random");
				return {
					order: {
						id,
						price: "12",
					},
				};

				// const res = await fetch(
				// 	"http://127.0.0.1:3000/api/greeter/hello"
				// );
				// return res.json();
			},
		},
	},
	methods: {
		async sleep(ms) {
			return new Promise((resolve) => setTimeout(() => resolve(), ms));
		},
	},
};

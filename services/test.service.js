module.exports = {
	name: "test",
	settings: {
		// path: "/test",
	},
	dependencies: ["helper"],
	actions: {
		ok: {
			rest: {
				method: "GET",
				path: "/ok",
			},
			async handler(ctx) {
				const id = await ctx.call("helper.random");
				return {
					order: {
						id,
					},
				};
			},
		},
	},
};

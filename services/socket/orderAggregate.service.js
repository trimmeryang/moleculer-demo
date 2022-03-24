// const fetch = require("node-fetch");

module.exports = {
	name: "orderAggregate",
	settings: {},
	dependencies: ["order"],
	actions: {
		list: {
			rest: {
				method: "GET",
				path: "/list",
			},
			async handler(ctx) {
				//1 get the order info
				const { order } = await ctx.call("order.list");
				//2 get the product info
				const products = await ctx.call("products.list");
				ctx.emit("hello.called", this.options);
				return {
					machineId: this.broker.nodeID,
					details: order,
					products,
				};
			},
		},
		error: {
			rest: {
				method: "GET",
				path: "/error",
			},
			// async fallback(ctx) {
			// 	return {
			// 		data: "备份数据",
			// 	};
			// },
			async handler(ctx) {
				const { res } = await ctx.call("order.error");
				return {
					machineId: this.broker.nodeID,
					res,
				};
			},
		},
		timeout: {
			rest: {
				method: "GET",
				path: "/timeout",
			},
			async handler(ctx) {
				const { res } = await ctx.call("order.timeout");
				return {
					machineId: this.broker.nodeID,
					res,
				};
			},
		},
	},
};

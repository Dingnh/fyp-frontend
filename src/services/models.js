import Network from "@/services/network";

export default {
	async getModels({ params = "" }) {
		return Network.get({ path: "/Models" + `${params}` });
	},
	async getModel(id) {
		let res = await Network.get({ path: "/Models" + `/${id}/` });
		let resModel = res.data;
		let model = {
			...resModel,
			media: resModel.media.map((m) => {
				return m.url;
			}),
		};
		return {
			data: model,
			response: res.response,
		};
	},
	async getModelsCount() {
		return Network.get("/Models/count");
	},
};

import Network from "@/services/network";

export default {
	async uploadImages({ images }) {
		var formdata = new FormData();
		formdata.append("image", images[0], images[0].path);
		return Network.postWithFormData({ path: "/facemask/detect/", formData:formdata });
	},
}


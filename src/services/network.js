import { domain } from "@/config/domain";
import Cookie from "js-cookie";

export default {
	async get({ path = null, url = null }) {
		url = url || domain + path;
		let response = await fetch(url);
		let data = await response.json();
		return {data, response};
	},

	async post({ path = null, url = null, body }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		let data = await response.json();
		return {data, response};
	},

	async authGet({ path = null, url = null }) {
		url = url || domain + path;
		let response = await fetch(url, {
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
			},
		});
		let data = await response.json();
		return {data, response};
	},

	async authPost({ path = null, url = null, body }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		let data = await response.json();
		return {data, response};
	},

	async postWithFormData({ path = null, url = null, formData }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "POST",
			body: formData,
		});
		let data = await response.json();
		return {data, response};
	},

	async authPatch({ path = null, url = null, body }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "PATCH",
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		let data = await response.json();
		return {data, response};
	},

	async authPatchWithFormData({ path = null, url = null, formData }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "PATCH",
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
			},
			body: formData,
		});
		let data = await response.json();
		return {data, response};
	},

	async authPut({ path = null, url = null, body }) {
		console.log(Cookie.get("token"))
		url = url || domain + path;
		let response = await fetch(url, {
			method: "PUT",
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		let data = await response.json();
		return {data, response};
	},

	async authPutWithFormData({ path = null, url = null, formData }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "PUT",
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
			},
			body: formData,
		});
		let data = await response.json();
		return {data, response};
	},

	async authDelete({ path = null, url = null }) {
		url = url || domain + path;
		let response = await fetch(url, {
			method: "DELETE",
			headers: {
				Authorization: `Token ${Cookie.get("token")}`,
			},
		});
		let data = await response.text();
		return {data, response};
	},
};

import axios from 'axios';

class Admin {
	API_BASE_URL = 'https://server.wybool.ru/wybool';

	async Auth({ username, password }) {
		const data = {
			username: username,
			password: password,
		};

		return axios.post(`${this.API_BASE_URL}/authadmin`, data);
	}

	async NewService({ title, description, url, image }) {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const data = {
			title: title,
			description: description,
			url: url,
			image: image,
		};

		return axios.put(`${this.API_BASE_URL}/newservice`, data, config);
	}

	async NewServiceAdd({ title, url, image }) {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const data = {
			title: title,
			url: url,
			image: image,
		};

		return axios.post(`${this.API_BASE_URL}/services`, data, config);
	}

	async NewNewsAdd({ title, description, tags, date, image }) {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const data = {
			title: title,
			description: description,
			tags: tags,
			date: date,
			image: image,
		};

		return axios.post(`${this.API_BASE_URL}/news`, data, config);
	}
}

export default new Admin();

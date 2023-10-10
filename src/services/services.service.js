import axios from 'axios';

class Services {
	API_BASE_URL = 'http://localhost:3326/wybool';

	async getNewService() {
		return axios.get(`${this.API_BASE_URL}/newservice`);
	}

	async getServices() {
		return axios.get(`${this.API_BASE_URL}/services`);
	}

	async deleteServices(id) {
		return axios.delete(`${this.API_BASE_URL}/services/${id}`);
	}

	async deleteNews(id) {
		return axios.delete(`${this.API_BASE_URL}/news/${id}`);
	}

	async getcountServices() {
		return axios.get(`${this.API_BASE_URL}/countservices`);
	}

	async getLastNews() {
		return axios.get(`${this.API_BASE_URL}/lastnews`);
	}

	async getAllNews() {
		return axios.get(`${this.API_BASE_URL}/news`);
	}

	async getNews(id) {
		return axios.get(`${this.API_BASE_URL}/news/${id}`);
	}
}

export default new Services();

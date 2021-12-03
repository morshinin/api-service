/**
 * @typedef {object} ApiServiceOptions
 * @property {string} baseUrl
 */
export default class ApiService {
    /**
     * @param {ApiServiceOptions} options
     */
    constructor({ baseUrl = 'https://reqres.in/api' } = {}) {
        this.options = { baseUrl };
    }
    /**
     * @param {number} page
     * @returns {Promise.<UserList, Error>}
     */
    getUsers(page) {
        // @TODO implement
        // endpoint:
        // https://reqres.in/api/users
        try {
            return fetch(`${this.options.baseUrl}/users?page=${page}`).then((res) => res.json());
        } catch (error) {
            return error;
        }
    }
    /**
     * @param {number} userId
     * @returns {Promise.<Resource, Error>}
     */
    getUserResource(userId) {
        // @TODO implement
        // endpoint:
        // https://reqres.in/api/unknown/2
        try {
            return fetch(`${this.options.baseUrl}/unknown/${userId}`).then((res) => res.json());
        } catch (error) {
            return error;
        }
    }
}
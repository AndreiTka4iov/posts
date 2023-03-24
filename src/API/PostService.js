import axios from "axios"

export default class PostService{
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getPost(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        return response
    } 

    static async getAllPostByUser(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        return response
    } 

    static async getAllUsers() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response
    } 

    static async getUser(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        return response
    }


    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }

    static async userPost(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        return response
    }
}
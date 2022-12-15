import http from './http'
import urls from './url'

const login = async (params) => {
    try {
        const response = await http.get(urls.login, params);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}

const register = async (params) => {
    try {
        const response = await http.get(urls.register, params);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}

const getList = async () => {
    try {
        const response = await http.get(urls.list);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}
const getDetail = async (id) => {
    try {
        const response = await http.get(`${urls.list}/${id}`);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}
const updateDetail = async (id, params) => {
    try {
        const response = await http.put(`${urls.list}/${id}`, params);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}
const deleteDetail = async (id) => {
    try {
        const response = await http.delete(`${urls.list}/${id}`);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}
const add = async (params) => {
    try {
        const response = await http.post(`${urls.list}`, params);
        return response;
    } catch (error) {
        throw new Error('出错啦')
    }
}

const api = {
    login,
    register,
    getList,
    getDetail,
    updateDetail,
    deleteDetail,
    add
};

export default api;
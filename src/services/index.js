import axios from 'axios'

import apis from './apis'

const ajax = axios.create({
    baseURL:apis.baseUrl
})
// q全局的拦截器处理
export const getTodos = () => {
    return ajax.get(apis.todos)
}
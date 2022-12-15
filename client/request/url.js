import baseUrl from './env.config'

const urls = {
    login: '/login',
    list: '/list',
    register: '/register',
    detail: '/detail'
}

Object.keys(urls).forEach(key => {
    urls[key] = `${baseUrl}${urls[key]}`
})
export default urls;
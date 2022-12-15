const BaseUrlMap = {
    development: 'http://localhost:8000',
    prod: 'http://localhost:3001/'
}

function getBaseUrl () {
    const env = process.env.NODE_ENV;
    return BaseUrlMap[env];
}

const baseURL = getBaseUrl();

export default baseURL;
const requester = async (method, token, url, data) => {
    const options = {};

    if(method !== 'GET'){
        options.method = method;

        if(data){
            options.headers = {'content-type': 'application/json',};
            options.body = JSON.stringify(data);
        };
    };

    if(token) {
        options.headers = {...options.headers, 'x-authorization': token,};
    };

    const response = await fetch(url, options);
    const result = await response.json();
    
    if(response.ok){
        return result;
    }else{
        throw new Error(result.message);
    }
};


export const requestFactory = (token) => {

    return {
        get: requester.bind(null, 'GET', token),
        post: requester.bind(null, 'POST', token),
        put: requester.bind(null, 'PUT', token),
        patch: requester.bind(null, 'PATCH', token),
        delete: requester.bind(null, 'DELETE', token),
    };
};
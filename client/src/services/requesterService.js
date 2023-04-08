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

    console.log(response);
    
    if(response.ok || response.status === '204'){
        const result = await response.json();
        return result;
    }else{
        const result = await response.json();
        throw new Error(result.message);
    }

    // if(response.ok){
    //     const result = await response.json();
    //     return result;
    // }else if(response.status === '204'){
    //     return;
    // }else{
    //     const result = await response.json();
    //     throw new Error(result.message);
    // }
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
const defaultHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer 917fcc29eac884e0ade68c85bae0c3e3",
};

function Http() {}

Http.checkStatus = function (res) {
    return new Promise((resolve, reject) => {
        res.json()
            .then(function(data) {
                if (Reflect.has(data, "error")) {
                    reject(data.error);
                } else {
                    resolve(data);
                }
            });
    });
};

Http.get = function (url, params) {
    if (Object.keys(params).length > 0) {
        Object.keys(params).forEach(key => {
            if (url.indexOf("?") === -1) {
                url += "?" + key + "=" + params[key];
            } else {
                url += "&" + key + "=" + params[key];
            }
        });
    }

    return fetch(url, {
        method: "GET",
        headers: defaultHeaders,
    })
        .then(this.checkStatus);
};

Http.post = function (url, params, mHeaders) {
    const headers = mHeaders ? mHeaders : defaultHeaders;
    return fetch(url, {
        method: "POST",
        headers: headers,
        body: headers["Content-Type"] === "application/json" ? JSON.stringify(params) : params,
    })
        .then(this.checkStatus);
};

Http.put = function (url, params, mHeaders) {
    const headers = mHeaders ? mHeaders : defaultHeaders;
    return fetch(url, {
        method: "PUT",
        headers: headers,
        body: headers["Content-Type"] === "application/json" ? JSON.stringify(params) : params,
    })
        .then(this.checkStatus);
};

module.exports = Http;

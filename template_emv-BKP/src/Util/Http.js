function Http() {}

Http.checkStatus = function (res) {
    if (res.ok) {
        return res;
    } else {
        const responseError = JSON.parse(res._bodyText);
        let error = new Error(responseError.message);
        error.response = res;
        throw error;
    }
}

Http.get = function (url, params) {
    if (Object.keys(params).length > 0) {
        Object.keys(params).forEach(key => {
            if (url.indexOf('?') == -1) {
                url += '?' + key + '=' + params[key];
            } else {
                url += '&' + key + '=' + params[key];
            }
        });
    }

    return fetch(url, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : "Bearer 01b32559fb75949a630c0dbe1d5c5a14"
        }
    }).
    then(this.checkStatus).
    then(res => res.json());
}

Http.post = function (url, params, headers) {
    var headerDefault = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : "Bearer 01b32559fb75949a630c0dbe1d5c5a14"
    }

    var headersParam = "";
    if (headers) {
        headersParam = headers;
    } else {
        headersParam = headerDefault;
    }

    return fetch(url, {
        "method": "POST",
        "headers": headersParam,
        "body": headersParam["Content-Type"] === "application/json" ? JSON.stringify(params) : params,
    }).
    then(this.checkStatus).
    then(res => res.json());
}

Http.put = function (url, params) {
    return fetch(url, {
        "method": "PUT",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : "Bearer 01b32559fb75949a630c0dbe1d5c5a14"
        },
        "body": JSON.stringify(params),
    }).
    then(this.checkStatus).
    then(res => res.json());
}

module.exports = Http;

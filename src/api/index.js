import Promise from "core-js-pure/features/promise";
const protocol = "http://";
const host = "13.250.108.245:3000/api";

// Get method
var get = function (endpoint) {
    return new Promise(function (resolve, reject) {
        var options = {
            method: "GET",
            redirect: "follow",
            credentials: "include"
        }
        fetch(protocol + host + endpoint, options).then(response => {
            if (response.status != 200) reject(response);
            else return response.json();
        }).then(result => resolve(result)).catch(err => {
            reject(err);
        });
    });
}

// Post Method
var post = function (endpoint, body) {
    return new Promise(function (resolve, reject) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
            redirect: "follow",
            credentials: "include"
        }
        fetch(protocol + host + endpoint, options).then(response => {
            if (response.status != 200) reject(response);
            else return response.json();
        }).then(result => resolve(result)).catch(err => {
            reject(err);
        });
    });
}

// Delete Method
var del = function (endpoint) {
    return new Promise(function (resolve, reject) {
        var options = {
            method: "DELETE",
            redirect: "follow",
            credentials: "include"
        }
        fetch(protocol + host + endpoint, options).then(response => {
            if (response.status != 200) reject(response);
            else return response.json();
        }).then(result => resolve(result)).catch(err => {
            reject(err);
        });
    })
}

// Put Method
var put = function (endpoint, body) {
    return new Promise(function (resolve, reject) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body),
            redirect: "follow",
            credentials: "include"
        }
        fetch(protocol + host + endpoint, options).then(response => {
            if (response.status != 200) reject(response);
            else return response.json();
        }).then(result => resolve(result)).catch(err => {
            reject(err);
        })
    })
}

// Patch Method
var patch = function (endpoint, body) {
    return new Promise(function (resolve, reject) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(body),
            redirect: "follow",
            credentials: "include"
        }
        fetch(protocol + host + endpoint, options).then(response => {
            if (response.status != 200) reject(response);
            else return response.json();
        }).then(result => resolve(result)).catch(err => {
            reject(err);
        });
    })
}

export { get, post, put, patch, del }
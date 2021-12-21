import { get, post, put, del } from "../../api";
import Promise from "core-js-pure/features/promise";

function Calculator() {

    // Get al calculators
    this.getAllCalculator = function () {
        return new Promise(function (resolve, reject) {
            get("/calculator").then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Get one calculator
    this.getOneCalculator = function (calculatorId) {
        return new Promise(function (resolve, reject) {
            get("/calculator/" + calculatorId).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Create calculator
    this.createCalculator = function (body) {
        return new Promise(function (resolve, reject) {
            post("/calculator", body).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Update calculator
    this.updateCalculator = function (calculatorId, body) {
        return new Promise(function (resolve, reject) {
            put("/calculator/" + calculatorId, body).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Delete calculator
    this.deleteCalculator = function (calculatorId) {
        return new Promise(function (resolve, reject) {
            del("/calculator/" + calculatorId).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

}

export default Calculator;
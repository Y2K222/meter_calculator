import { get, post, put, del } from "@/api";
import Promise from "core-js-pure/features/promise";

function MeterUnits() {

    // Get all datas from meterunits
    this.getAllMeterUnits = function () {
        return new Promise(function (resolve, reject) {
            get("/meter_units").then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        });
    }

    // Get oen meter unit
    this.getOneMeterUnit = function (meterId) {
        return new Promise(function (resolve, reject) {
            get("/meter_units/" + meterId).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Create meter unit
    this.createMeterUnit = function (body) {
        return new Promise(function (resolve, reject) {
            post("/meter_units", body).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Update meter unit
    this.updateMeterUnit = function (meterId, body) {
        return new Promise(function (resolve, reject) {
            put("/meter_units/" + meterId, body).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Delete meter unit
    this.deleteMeterUnit = function (meterId) {
        return new Promise(function (resolve, reject) {
            del("/meter_units/" + meterId).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Get totao number of meters
    this.getTotalMeterCount = function () {
        return new Promise(function (resolve, reject) {
            get("/meter_units/get/total").then(function (data) {
                resolve(data[0]);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    // Get meter data with start and end
    this.getMeterWithLimit = function (skip, limit) {
        return new Promise(function (resolve, reject) {
            var body = { skip, limit }
            post("/meter_units/limit", body).then(function (data) {
                resolve(data[0]);
            }).catch(function (err) {
                reject(err);
            })
        })
    }
}

export default MeterUnits;
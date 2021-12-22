import { get, post, put, del } from "@/api";
import Promise from "core-js-pure/features/promise";

export default {
  // Get all datas from meterunits
  getAllMeterUnits() {
    return new Promise(function (resolve, reject) {
      get("/meter_units")
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Get oen meter unit
  getOneMeterUnit(meterId) {
    return new Promise(function (resolve, reject) {
      get("/meter_units/" + meterId)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Create meter unit
  createMeterUnit(body) {
    return new Promise(function (resolve, reject) {
      post("/meter_units", body)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Update meter unit
  updateMeterUnit(meterId, body) {
    return new Promise(function (resolve, reject) {
      put("/meter_units/" + meterId, body)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Delete meter unit
  deleteMeterUnit(meterId) {
    return new Promise(function (resolve, reject) {
      del("/meter_units/" + meterId)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Get totao number of meters
  getTotalMeterCount() {
    return new Promise(function (resolve, reject) {
      get("/meter_units/get/total")
        .then(function (data) {
          resolve(data[0]);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Get meter data with start and end
  getMeterWithLimit(skip, limit) {
    return new Promise(function (resolve, reject) {
      var body = { skip, limit };
      post("/meter_units/limit", body)
        .then(function (data) {
          resolve(data[0]);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },

  // Get meter units with range
  getMeterWithRange(start, end) {
    return new Promise(function (resolve, reject) {
      var body = { start, end };
      post("/meter_units/range", body)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  },
};

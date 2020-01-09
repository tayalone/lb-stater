"use strict";

module.exports = function(User) {
  User.testAuth = async (req, res) => {
    try {
      return res.send({ message: "OK" });
    } catch (e) {
      console.log(`cath from Business.getInfoByIdentify`, e);
      return res.status(400).send({
        message: "error from testAuth",
        key: "testAuth".toUpperCase()
      });
    }
  };
  User.remoteMethod("testAuth", {
    http: { path: "/testAuth", verb: "get" },
    accepts: [
      { arg: "req", type: "object", http: { source: "req" } },
      { arg: "res", type: "object", http: { source: "res" } }
    ]
  });
  User.testAuthAdmin = async (req, res) => {
    try {
      return res.send({ message: "OK" });
    } catch (e) {
      console.log(`cath from Business.getInfoByIdentify`, e);
      return res.status(400).send({
        message: "error from testAuth",
        key: "testAuth".toUpperCase()
      });
    }
  };
  User.remoteMethod("testAuthAdmin", {
    http: { path: "/testAuthAdmin", verb: "get" },
    accepts: [
      { arg: "req", type: "object", http: { source: "req" } },
      { arg: "res", type: "object", http: { source: "res" } }
    ]
  });
  User.testAuthAdvertiser = async (req, res) => {
    try {
      return res.send({ message: "OK" });
    } catch (e) {
      console.log(`cath from Business.getInfoByIdentify`, e);
      return res.status(400).send({
        message: "error from testAuth",
        key: "testAuth".toUpperCase()
      });
    }
  };
  User.remoteMethod("testAuthAdvertiser", {
    http: { path: "/testAuthAdvertiser", verb: "get" },
    accepts: [
      { arg: "req", type: "object", http: { source: "req" } },
      { arg: "res", type: "object", http: { source: "res" } }
    ]
  });
};

const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
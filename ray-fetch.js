#!/usr/bin/env node

const fetch = require('node-fetch');
const fs = Object.assign({}, require('ray-fs'));
const flags = require('ray-flags');
const {sucide} = require('sucide');

let fileName = 'file1.mp4';
let towerIPAndPort = 'localhost:3030';
let protocol = 'http:';

if (flags.file !== undefined) fileName = flags.file;
if (flags.ip !== undefined) towerIPAndPort = flags.ip;
if (flags.protocol !== undefined) protocol = flags.protocol;

const requestObject = {
  breadCrumbs: [protocol, towerIPAndPort, fileName],
  requestedResource: fileName,
}

const responseObject = {
  file: fileName,
}

if (flags.req) {
  let requestURLBase = "http://localhost:3001/request/";
  if (flags.url !== undefined) requestURLBase = flags.url; 
  let requestURL = requestURLBase;
  if (flags.tower) requestURL += JSON.stringify(requestObject);
  console.log(requestURLBase);
  fetch(requestURL)
    .then(res => res.json())
    .then(json => {
      console.log(json);
    })
    .catch(err => {
      console.log(err);
    });
}
else if (flags.res) {
  let responseURLBase =  "http://localhost:3001/fetch/";
  if (flags.url !== undefined) responseURLBase = flags.url; 
  let responseURL = responseURLBase;
  if (flags.tower) responseURL += JSON.stringify(responseObject);
  fetch(responseURL)
    .then((res) => {
      if (res.status != 404) return res.body;
      if (res.status == 404) sucide("Requested Resource not found!");
    })
    .then(body => {
      fs.stream(body, fileName);
    })
    .catch(err => {
      console.log(err);
    });
}



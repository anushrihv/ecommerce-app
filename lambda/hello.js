'use strict';

const {getHelloResponse} = require('../service/hello-service');

const sayHello = async (event) => {
    return getHelloResponse(event);
};

module.exports = {sayHello};
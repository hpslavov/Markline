const express = require('express');

const init = (data) => {
    const app = express();
   
    return Promise.resolve(app);
}

module.exports = {
    init
}
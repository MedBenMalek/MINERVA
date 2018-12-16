const express = require("express");
const router = express.Router();

var apiai = require('apiai');

var api = apiai("f1607df391794b27b2e30bffc5a663cb");

var request = api.textRequest('events?', {
  sessionId: '<unique session id>'
});

request.on('response', function(response) {

});

request.on('error', function(error) {
  console.log(error);
});

request.end();

router.get('', (req,res,next) => {
  req.json({
    msg: 'ok',
  })
});

module.exports = router;

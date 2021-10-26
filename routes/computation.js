var express = require('express');

var router = express.Router();

var rno;

var hypot;

var ceil;

var clz32;


/* GET users listing. */

router.get('/', function(req, res, next) {

    rno = Math.round(Math.random()*(100-1)+1);

    hypot = Math.hypot(rno);

    ceil = Math.ceil(rno);

    clz32 = Math.clz32(rno);

    res.send(`hypot applied to ${rno} is ${hypot} <br>

              ceil applied to ${rno} is ${ceil} <br>

              clz32 applied to ${rno} is ${clz32}` );

});



module.exports = router;
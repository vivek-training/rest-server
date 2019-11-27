var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  console.log('Client Post', req.body);
  res.send({ message: 'Received' });
});

router.put('/', (req, res) => {
  console.log('Client Put', req.body);
  res.send({ message: 'Received' });
});

router.get('/validate/:key', function(req, res, next) {
  if (req.params.key === 'ABCD') {
    res.send({ valid: true });
  } else {
    res.send({ valid: false });
  }
});

module.exports = router;

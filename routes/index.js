var express = require('express');
var router = express.Router();
var data = {
  status: '100',
  msg: '操作成功',
  data: {
    userId: '123456',
    userName: 'hgdqstudio',
    blog: 'http://hgdqstudio.online'
  }
};

router.get('/asd', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(200, {data: 'sdf '});
  
});
    

/* GET home page. */
router.post('/index', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(200, {data: data});
});


/* GET home page. */
router.get('/con', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(200, {data: 'kaiwen'});
});

module.exports = router;

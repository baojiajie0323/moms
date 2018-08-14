var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  console.log('users :' + JSON.stringify(req.body));
  if (req.body.command == "login") {
    console.log('login');
    userDao.login(req, res, next);
  } else if (req.body.command == "logout") {
    console.log('logout');
    userDao.logout(req, res, next);
  } else if (req.body.command == "getuser") {
    console.log('getuser');
    userDao.getUser(req, res, next);
  } else if (req.body.command == "adduser") {
    console.log('adduser');
    userDao.addUser(req, res, next);
  } else if (req.body.command == "moduser") {
    console.log('moduser');
    userDao.modUser(req, res, next);
  } else if (req.body.command == "deluser") {
    console.log('deluser');
    userDao.delUser(req, res, next);
  } else if (req.body.command == "getdepart") {
    console.log('getdepart');
    userDao.getDepart(req, res, next);
  } else if (req.body.command == "adddepart") {
    console.log('adddepart');
    userDao.addDepart(req, res, next);
  } else if (req.body.command == "moddepart") {
    console.log('moddepart');
    userDao.modDepart(req, res, next);
  } else if (req.body.command == "deldepart") {
    console.log('deldepart');
    userDao.delDepart(req, res, next);
  } else if (req.body.command == "getpermissontype") {
    console.log('getpermissontype');
    userDao.getPermissontype(req, res, next);
  } else if (req.body.command == "getrole") {
    console.log('getrole');
    userDao.getRole(req, res, next);
  } else if (req.body.command == "addrole") {
    console.log('addrole');
    userDao.addRole(req, res, next);
  } else if (req.body.command == "modrole") {
    console.log('modrole');
    userDao.modRole(req, res, next);
  } else if (req.body.command == "delrole") {
    console.log('delrole');
    userDao.delRole(req, res, next);
  } else if (req.body.command == "getsubsidy") {
    console.log('getsubsidy');
    userDao.getSubsidy(req, res, next);
  } else if (req.body.command == "updatesubsidy") {
    console.log('updatesubsidy');
    userDao.updateSubsidy(req, res, next);
  }
});

module.exports = router;

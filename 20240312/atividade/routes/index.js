var express = require('express');
var router = express.Router();

let { create, active } = require('../services/jsondb');
let { sendEmail } = require('../services/email');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form', function (req, res, next) {
  const token = create(req.body);

  sendEmail({
    to: req.body.email,
    subject: "Ativação de usuário",
    text: "http://localhost:3000/active/" + token
  });

  res.render('registered', { title: 'Express', email: req.body.email, name: req.body.firstName });
});

router.get('/active/:token', function (req, res, next) {
  const { token } = req.params;

  const result = active({ token });
  console.log(result);

  if (result) {
    sendEmail({
      to: result,
      subject: "Ativação de usuário",
      text: "Usuário ativado com sucesso!"
    });
    res.render('message', { title: 'Express', message: 'Ativação de usuário', description: 'Usuário ativado com sucesso!' });
  }else{
    res.render('message', { title: 'Express', message: 'Erro na ativação do usuário', description: 'Tente novamente mais tarde!'  });
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Exame = require('../controllers/emd')

router.get('/api/emd', function(req, res, next) {
  
  const resultado = req.query.res === 'OK'; // res=OK
  const modalidade = req.query.modalidade; // modalidade=X

  if(resultado){
    Exame.listOK()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de alunos"})
    })
  }
  else if (modalidade !== undefined){
    Exame.listModalidade(modalidade)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de alunos"})
    })
  }
  else{
    Exame.list()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de alunos"})
    })
  }
});

router.get('/api/atletas', function(req, res, next) {

  const gender = req.query.gen; // gen=F
  const club = req.query.clube; // clube=X

  if (gender !== undefined){
    Exame.listGender(gender)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de alunos"})
    })
  }
  else if (club !== undefined){
    Exame.listClub(club)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de alunos"})
    })
  }
});

router.get('/api/emd/:id', function(req, res, next) {
  Exame.getExame(req.params.id)
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(521).json({erro: erro, mensagem: "Não consegui obter o aluno"})
  })
});

router.get('/api/modalidades', function(req, res, next) {
  Exame.getModalidades()
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(521).json({erro: erro, mensagem: "Não consegui obter o aluno"})
  })
});

/* 
router.post('/emds', function(req, res, next) {
  Exame.addExame(req.body)
  .then(dados => {
    res.status(201).json(dados) // não esquecer de colocar 201
  })
  .catch(erro => {
    res.status(522).json({erro: erro, mensagem: "Não consegui inserir o aluno"})
  })
});

router.put('/emds', function(req, res, next) {
  Exame.updateExame(req.body)
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(523).json({erro: erro, mensagem: "Não consegui atualizar o aluno"})
  })
});

router.delete('/emds/:id', function(req, res, next) {
  Exame.deleteExame(req.params.id)
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(524).json({erro: erro, mensagem: "Não consegui remover o aluno"})
  })
});
 */
module.exports = router;

var Exame = require('../models/emd')

// Exame list
module.exports.list = () => {
    return  Exame
            .find({}, {_id:1, nome:{primeiro:1, último:1}, dataEMD:1, resultado:1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listOK = () => {
    return  Exame
            .find({resultado:true})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listModalidade = modalidade => {
    return  Exame
            .find({modalidade:modalidade})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listGender = gender => {
    return  Exame
            .find({género:gender}, {_id:0, "nome.primeiro":1, "nome.último":1})
            .sort({"nome.primeiro":1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listClub = club => {
    return  Exame
            .find({clube:club}, {_id:0, "nome.primeiro":1, "nome.último":1})
            .sort({"nome.primeiro":1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getExame = id => {
    return Exame.findOne({_id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

//lista de modalidades, sem repetições
module.exports.getModalidades = () => {
    return  Exame
            .distinct("modalidade")
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}



/* 
module.exports.addExame = e => {
    return Exame.create(e)
            .then(dados => {
                return dados
            })
            .catch(erro => {
                return erro
            })
}

module.exports.updateExame = e => {
    return Exame.updateOne({_id: e._id}, e)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deleteExame = id => {
    return Exame.deleteOne({_id: id})
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
 */
function verifyLoginForm(nome, cpf){
    if(!nome && !cpf){
        return ""
    }
    if(!nome || !cpf){
        return "Preencha todos os campos"
    }
    if(nome.length < 3){
        return "Nome deve ter no mínimo 3 letras"
    }
    if(cpf.length < 11){
        return "CPF deve ter no mínimo 11 números"
    }
    return true
}

module.exports = {
    verifyLoginForm
}
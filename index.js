var express = require("express")
// instanciando o framework
const app = express()

app.get('/',function(req,res){
    res.send('testando rotas')
})


// iniciando servidor e indicando a porta
// nada que compoem a aplicação pode ficar abaixo do app.listem()
app.listen(8081,function(){
    console.log('servidor rodando')
})

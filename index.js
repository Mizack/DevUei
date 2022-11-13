var express = require("express")
// instanciando o framework
const app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname+"/templates/index.html")
})
app.get('/sobre',function(req,res){
    res.send('testando rotas')
    // res.sendFile("C:/Users/mizac/Documents/projeto_node/aula_4/index.html")
})
// rotas dinamicas com parametros
// sends são enviados uma unica vez
app.get('/ola/:cargo/:nome',function(req,res){
    res.send(req.params.nome+req.params.cargo)
})

// iniciando servidor e indicando a porta
// nada que compoem a aplicação pode ficar abaixo do app.listem()
app.listen(8081,function(){
    console.log('servidor rodando')
})

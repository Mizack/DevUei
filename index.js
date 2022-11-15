const express = require('express')
const app = express()

// forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),
)
  
app.use(express.json())


// rota inicial / breakpoint
app.get('/',function(req,res){
    // vai retornar um json
    res.json({message:"opa"})
})

app.listen(3000)
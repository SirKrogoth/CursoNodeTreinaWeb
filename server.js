var app = require('./config/express')();
const PORT = 3000;

app.listen(PORT, function(){
    console.log('Servidor iniciado com sucesso' + PORT);
});
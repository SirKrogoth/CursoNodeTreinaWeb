var app = require('./config/express')();
const PORT = 3000;
require('./config/database')('mongodb://localhost:27017/treinaweb');

app.listen(PORT, function(){
    console.log('Servidor iniciado com sucesso' + PORT);
});
/*var cursos = [
    {nome: "Unity3D", categoria: "Jogos"},
    {nome: "Express", categoria: "Back End"},
    {nome: "React", categoria: "Front End"}
];*/


module.exports = function(app){
    var Curso = app.models.curso;

    var controller = {
        index: function(req, res){
            Curso.find({}, [], {sort: {nome: 1}}).exec().then((cursos)=>{
                res.render('index', {cursos})
            });            
        },
        newItem: function(req, res){
            var curso = new Curso(req.body);

            curso.save(function(err, curso){
                if(err){
                    res.status(500).end();
                    console.err(err);
                }else{
                    res.json(curso);
                }
            })
        }
    }

    return controller;
}
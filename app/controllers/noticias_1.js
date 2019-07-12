module.exports.noticia = function (app,req,res) {


        var connection = app.config.dbconnection();
        var noticiasmodel = new app.app.models.NoticiasDAO(connection);

        noticiasmodel.getNoticia(function(error, result){
            res.render("noticias/noticia",{noticia : result});
        });
    
}
module.exports.noticias=function (app,req,res) {

        var connection = app.config.dbconnection();
        var noticiasmodel = new app.app.models.NoticiasDAO(connection);

        noticiasmodel.getNoticias(function(error, result){
            res.render("noticias/noticias",{noticias : result});
        });

    
}
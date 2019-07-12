module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbconnection();
        var noticiasmodel = new app.app.models.NoticiasDAO(connection);

        noticiasmodel.getNoticias(function(error, result){
            res.render("noticias/noticias",{noticias : result});
        });

    })

}
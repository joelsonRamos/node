module.exports.formulario_inclusao_noticia = function(app,req,res) {
    res.render('admin/form_add_noticia',{validacao: {}, noticias1: {}});

}

module.exports.noticias_salvar = function(app, req, res) {
    var noticias1 = req.body;
    //console.log(noticias1);

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    //req.assert('data_noticia','Data é obrigatório').notEmpty();req.assert('data_noticia','data é obrigatório').notEmpty().isData({format:'YYYY-MM-DD'});
    req.assert('noticia','Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia', {validacao: erros, noticias: noticias});
        return;

    }


    var connection = app.config.dbconnection();
    var noticiasmodel = new app.app.models.NoticiasDAO(connection);

    noticiasmodel.salvarNoticia(noticias1, function(error, result){
        res.redirect('/noticias');
        //res.render("noticias/noticias",{noticias1 : result});
    });

}

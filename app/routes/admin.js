module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });
    app.post('/noticias/salvar', function(req,res){
        var noticias1 = req.body;
        console.log(noticias1);

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','autor é obrigatório').notEmpty();
        //req.assert('data_noticia','data é obrigatório').notEmpty().isData({format:'YYYY-MM-DD'});
        req.assert('noticia','Noticia é obrigatório').notEmpty();

        var erros = req.validationErrors();
        if(erros){
            res.render('admin/form_add_noticia');
            return;

        }


        var connection = app.config.dbconnection();
        var noticiasmodel = new app.app.models.NoticiasDAO(connection);

        noticiasmodel.salvarNoticia(noticias1, function(error, result){
            res.redirect('/noticia');
            //res.render("noticias/noticias",{noticias1 : result});
        });
    });


}

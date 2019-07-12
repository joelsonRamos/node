function NoticiasDAO(connection){
    this._connection = connection;

}
NoticiasDAO.prototype.getNoticias=function(callback){
    this._connection.query("SELECT * FROM noticias", callback);
}
NoticiasDAO.prototype.getNoticia=function( callback){
    this._connection.query("SELECT * FROM noticias where id_noticia = 7", callback);
}
NoticiasDAO.prototype.salvarNoticia=function(noticias1, callback){
    this._connection.query('insert into noticias set ?', noticias1, callback);
}

module.exports = function () {

    return NoticiasDAO;

}
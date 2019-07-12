var mysql = require('mysql');

var connMysql = function() {
        //console.log('conexao com db foi estabelecida');
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'helper',
            database: 'portal_noticias'
        });
    }
    module.exports=function () {
        //console.log('O autoload carregou o módulo de conexão com db');
        return connMysql;

    }


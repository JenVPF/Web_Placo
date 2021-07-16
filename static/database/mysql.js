const mysql = require('mysql')

const connection = mysql.createPool({
    host:'us-cdbr-east-04.cleardb.com',
    user:'b6234591d20298',
    password:'b7b86aa0',
    database:'heroku_8a3f56e4dcd4acf'
})

function insertPersona(name, cedula, email, telefono, direc){
    const ins = 'INSERT INTO usuario_persona (cedula, nombre, telefono_contacto, correo_contacto, direccion) VALUES(?,?,?,?,?)';
    connection.query(ins,[cedula,name,telefono,email,direc]);
}

function insertEmpresa(name, nit, email, telefono, direc){
    const ins = 'INSERT INTO usuario_empresa (nit, nombre, telefono_contacto, correo_contacto, direccion) VALUES(?,?,?,?,?)';
    connection.query(ins,[nit,name,telefono,email,direc]);
}

function Productos(){
    connection.query('SELECT id, name, stock, tostado, sabor, descripcion, price, img FROM producto;',(err,rows) =>{
        if(err) throw err
        console.log('los datos son estos:\n')
        console.log(rows)
        return rows;
    })
}

module.exports = {insertPersona, insertEmpresa, Productos};
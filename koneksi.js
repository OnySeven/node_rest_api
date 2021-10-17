var mysql = required('mysql');
//buat koneksi database 

const conn = mysql.createConnection({
    host : '10.211.55.3',
    user: 'root',
    password : 'myinnova',
    database:'nodejs'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('MySql terkoneksi');
})

module.exports = conn;
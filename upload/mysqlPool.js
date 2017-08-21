// npm install mysql
// npm install -g node-mysql
var OptPool = require('./models/OptPool');
var optPool = new OptPool();
var pool = optPool.getPool();
pool.getConnection((err, connection) => {
	var userAddSql = 'insert into user (uname,pwd) values (?,?)';
	var param = ['aaa','aaa'];
	connection.query(userAddSql,param,(err, rs) => {
		if (err) {
			console.log('insert err',err.message);
			return;
		}
		console.log('insert success');
		connection.release();//放回连接池
	})




})
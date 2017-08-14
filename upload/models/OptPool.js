var mysql = require('mysql');
function OptPool() {
	this.flag = true;//是否连接过
	this.pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'test',
		port: '3306'
	});
	this.getPool = function () {
		if (this.flag) {
			//监听connection事件
			this.pool.on('connection',function (connection) {
				connection.query('SET SESSION auto_increment_increme')
				this.flag = false;
			})
		}
		return this.pool;
	}
}
module.exports = OptPool;
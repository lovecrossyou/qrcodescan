const sqlite = {
	// 打开数据库
	openDB: () => {
		plus.sqlite.openDatabase({
			name: 'scandata',
			path: '_doc/scandata.db',
			success: function(e) {
				console.log('openDatabase success!');
			},
			fail: function(e) {
				console.log('openDatabase failed: ' + JSON.stringify(e));
			}
		});
	},
	closeDB: () => {
		plus.sqlite.closeDatabase({
			name: 'first',
			success: function(e) {
				console.log('closeDatabase success!');
			},
			fail: function(e) {
				console.log('closeDatabase failed: ' + JSON.stringify(e));
			}
		});
	},

	transactionDB: () => {
		plus.sqlite.transaction({
			name: 'first',
			operation: 'begin',
			success: function(e) {
				console.log('transaction success!');
			},
			fail: function(e) {
				console.log('transaction failed: ' + JSON.stringify(e));
			}
		});
	},

	executeSQL: () => {
		plus.sqlite.executeSql({
			name: 'first',
			sql: 'create table if not exists database("where" CHAR(110),"location" CHAR(100),"age" INT(11))',
			success: function(e) {
				console.log('executeSql success!');
				plus.sqlite.executeSql({
					name: 'first',
					sql: "insert into database values('北京','安乐林','11')",
					success: function(e) {
						console.log('executeSql success!');
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				});
			},
			fail: function(e) {
				console.log('executeSql failed: ' + JSON.stringify(e));
			}
		});
	},

	selectSQL: () => {
		plus.sqlite.selectSql({
			name: 'first',
			sql: 'select * from database',
			success: function(data) {
				console.log('selectSql success: ');
				for (var i in data) {
					console.log(data[i]);
				}
			},
			fail: function(e) {
				console.log('selectSql failed: ' + JSON.stringify(e));
			}
		});
	},

	// 初始化扫描历史表
	initTableScanHistory: () => {
		plus.sqlite.executeSql({
			name: 'first',
			sql: 'create table if not exists database("where" CHAR(110),"location" CHAR(100),"age" INT(11))',
			success: function(e) {}
		})
	},
	// 初始化生成历史表
	initTableGenQrcode: () => {

	}
}

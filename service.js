// 管理账号信息
const TOKEN_KEY = 'TOKEN_KEY';
const INFO_KEY = 'INFO_KEY';

const SCAN_HISTORY = 'SCAN_HISTORY';
const GEN_HISTORY = 'GEN_HISTORY';

const getToken = function() {
	let ret = '';
	ret = uni.getStorageSync(TOKEN_KEY);
	if (!ret) {
		ret = null;
	}
	return ret;
}

const addToken = function(token) {
	uni.setStorageSync(TOKEN_KEY, token);
}


const getInfo = function() {
	let ret = '';
	ret = uni.getStorageSync(INFO_KEY);
	if (!ret) return null;
	return JSON.parse(ret);
}

const addInfo = function(info) {
	if (!info) return;
	uni.setStorageSync(INFO_KEY, JSON.stringify(info));
	addToken(info.accessToken);
}


// 添加扫描历史数据
const addScanHistory = (data, type) => {
	let list = [];
	const ret = uni.getStorageSync(SCAN_HISTORY);
	if (ret) {
		list = JSON.parse(ret);
	}
	const myDate=new Date()
	const id = Date.now().toString(12);
	const time = myDate.toLocaleDateString() + myDate.toLocaleTimeString();
	const storeData = Object.assign({},{
		name:data,
		id,
		type,
		time
	});
	
	list.push(storeData);
	uni.setStorageSync(SCAN_HISTORY, JSON.stringify(list));
}

// 获取扫描历史数据
const loadScanHistory = (data, type) => {
	let list = [];
	const ret = uni.getStorageSync(SCAN_HISTORY);
	if (ret) {
		list = JSON.parse(ret);
	}
	return list;
}

const delScanHistory = id => {
	let list = [];
	const ret = uni.getStorageSync(SCAN_HISTORY);
	if (ret) {
		list = JSON.parse(ret);
	}
	let targetIndex = 0;
	list.forEach((data, index) => {
		if (data.id === id) {
			targetIndex = index;
		}
	});
	list.splice(targetIndex, 1);
	uni.setStorageSync(SCAN_HISTORY, JSON.stringify(list));
}

// 生成历史数据
const genScanHistory = (data,type) => {
	let list = [];
	const ret = uni.getStorageSync(GEN_HISTORY);
	if (ret) {
		list = JSON.parse(ret);
	}
	const myDate=new Date()
	const id = Date.now().toString(12);
	const time = myDate.toLocaleDateString() + myDate.toLocaleTimeString();
	const storeData = Object.assign({}, {
		name:data,
		id,
		type,
		time
	});
	list.push(storeData);
	uni.setStorageSync(GEN_HISTORY, JSON.stringify(list));
}

// 获取扫描历史数据
const loadGenHistory = (data) => {
	let list = [];
	const ret = uni.getStorageSync(GEN_HISTORY);
	if (ret) {
		list = JSON.parse(ret);
	}
	return list;
}

const delGenHistory = id => {
	let list = [];
	const ret = uni.getStorageSync(GEN_HISTORY);
	if (ret) {
		list = JSON.parse(ret);
	}
	let targetIndex = 0;
	list.forEach((data, index) => {
		if (data.id === id) {
			targetIndex = index;
		}
	});
	list.splice(targetIndex, 1);
	uni.setStorageSync(GEN_HISTORY, JSON.stringify(list));
}

const clearAll = ()=>{
	uni.clearStorageSync();
}

export default {
	getToken,
	getInfo,
	addToken,
	addInfo,
	addScanHistory,
	loadScanHistory,
	delScanHistory,
	genScanHistory,
	loadGenHistory,
	delGenHistory,
	clearAll
}

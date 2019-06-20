import Vue from 'vue'
import Vuex from 'vuex'
import service from '../service.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		qrcode:'二维码',
		genList: [],
		scanList: []
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		saveQRData(state,data){
			state.qrcode = data;
		},
		saveGenList(state,data){
			state.genList = data;
		},
		saveScanList(state,data){
			state.scanList = data;
		},
    },
	actions:{
		clearGenList({state}){
			state.genList = [];
			service.clearAll(service.GEN_HISTORY);
		},
		clearScanList({state}){
			state.scanList = [];
			service.clearAll(service.SCAN_HISTORY);
		},
		loadGenList({commit}){
			const rawGenHistory = service.loadGenHistory();
			const list = rawGenHistory.map(item => {
				let name = item.name.slice(0, 3);
				if (item.type === 'vcard') {
					name = "名片"
				}
				return {
					id: item.id,
					qrCodeImg: 'http://img0.imgtn.bdimg.com/it/u=1500889739,877761595&fm=11&gp=0.jpg',
					codeName: name,
					codeTime: item.time,
				}
			});
			commit('saveGenList',list);
		},
		loadScanList({commit}){
			const rawGenHistory = service.loadScanHistory();
			const list = rawGenHistory.map(item => {
				let name = item.name.slice(0, 3);
				if (item.type === 'vcard') {
					name = "名片"
				}
				return {
					id: item.id,
					qrCodeImg: 'http://img0.imgtn.bdimg.com/it/u=1500889739,877761595&fm=11&gp=0.jpg',
					codeName: name,
					codeTime: item.time,
				}
			});
			commit('saveScanList',list);
		}
	}
})

export default store

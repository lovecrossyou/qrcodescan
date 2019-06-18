import request from './request'
import Fly from 'flyio/dist/npm/wx'
import {baseURL} from './request.js'
const uploadBaseUrl = "http://47.94.169.143:8004"
const searchBaseUrl = "http://47.94.169.143:8004"
const api = {
	requestCartClient: (params) => request.post("client/shop/cartClient", params),
	//上传
	uploader: (file, cb) => {
		uni.uploadFile({
			url: baseURL + '/v1/addimg/shop',
			filePath: file,
			name: 'file',
			success: (result) => {
				const data = JSON.parse(result.data);
				cb(data);
			}
		});
	}

}
export default api

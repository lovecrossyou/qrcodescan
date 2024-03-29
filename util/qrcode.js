const qrcode = {
	wifi: wifi=>{
		return 'WIFI:S:'+wifi.name+';T:'+wifi.type+';P:'+wifi.password+';'
	},
	url: url => {
		if(url.indexOf('http')===-1){
			return 'http://'+url;
		}
		return url;
	},
	phone: phone => {
		return 'TEL:' + phone + '';
	},
	message: (phone, content) => {
		return 'SMSTO:' + phone + ':' + content;
	},
	emal: email => {
		return 'MAILTO:' + email;
	},
	vcard: vcard => {
		var a,
			b = vcard.name,
			c = '',
			d = vcard.work,
			e = vcard.addr,
			g = vcard.phone,
			h = vcard.telephone,
			i = vcard.url,
			j = vcard.email;
		a = "BEGIN:VCARD", a += "\r\nN:" + b + ";" + c + ";;;", a += "\r\nFN: " + c + "  " + b, d && (a += "\r\nTITLE:" + d),
			e && (a += "\r\nADR;WORK:;;" + e + ";;;;"), g && (a += "\r\nTEL;CELL,VOICE:" + g), h && (a +=
				"\r\nTEL;WORK,VOICE:" + h), i && (a += "\r\nURL;WORK:" + i), j && (a += "\r\nEMAIL;INTERNET,HOME:" + j), a +=
			"\r\nEND:VCARD";
			return a;
	}
}

export default qrcode;

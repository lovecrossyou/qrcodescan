<template>
	<view class="main">
		<view class="uni-phone">
			<textarea @blur="bindTextAreaName" auto-height maxlength:200 placeholder="无线账号" />
			</view>
		
		<view class="uni-phone">
			<textarea @blur="bindTextAreaPwd" auto-height maxlength:200 placeholder="无线Wi-Fi密码" type='number' />
		</view>
		
		<view class="type">
			加密类型：
		</view>
		
		
		<view class="encrypt">
			<view class="encrypt-item" :class="activeIndex===0? 'encrypt-item-active':''" @click="changeType(0,'WPA/WPA2')">
				WPA/WPA2
			</view>
			<view class="encrypt-item" :class="activeIndex===1? 'encrypt-item-active':''" @click="changeType(1,'WEP')">
				WEP
			</view>
			<view class="encrypt-item" :class="activeIndex===2? 'encrypt-item-active':''" @click="changeType(2,'')">
				无加密
			</view>
		</view>
		
		<view class="footer-btn" @click="fnModify">
			生成二维码
		</view>
        </view>
		
	</view>
</template>

<script>
	import {
        mapMutations
    } from 'vuex'
		import qrcode from "@/util/qrcode.js"

	export default {
		data() {
			return {
				modifyMobile: true,
				activeIndex:0,
				wifi:{
					name:'',
					password:'',
					type:'WPA/WPA2'
				}
			}
		},
		methods: {
			changeType(index,type){
				this.activeIndex=index;
				this.wifi.type = type;
			},
			...mapMutations(['saveQRData']),
			fnModify() {
				const qrStr = qrcode.wifi(this.wifi);
				
				this.saveQRData(qrStr);
				uni.navigateTo({
					url:'/pages/buss-card/setting-qrcode'
				});
			},
			bindTextAreaName: function (e) {
				this.wifi.name = e.detail.value;
			},
			bindTextAreaPwd: function (e) {
				this.wifi.password = e.detail.value;
			}
		}
	}
</script>

<style>
.main{
	background-color: #F2F2F2;
	width: 100%;
}

.encrypt{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20upx;
	box-sizing: border-box;
}

.footer-btn {
		background: #0AC160;
		border: 2upx solid rgba(5, 5, 5, 0.08);
		border-radius: 16upx;
		text-align: center;
		line-height: 100upx;
		height: 100upx;

		font-family: PingFangSC-Regular;
		font-size: 36upx;
		color: #FFFFFF;
		margin-top: 56upx;
		width: 702upx;
		margin:56upx auto 0 auto;
	}

.encrypt-item-active{
	width: 160upx;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	font-size: 24upx;
	color: #0AC160;
	background: #FFFFFF;
	border-radius: 10upx;
	border:solid 2upx #0AC160;
}
.encrypt-item{
	width: 160upx;
	height: 80upx;
	background: #FFFFFF;
	line-height: 80upx;
	text-align: center;
	font-size: 24upx;
	border-radius: 10upx;
}


.type{
	padding-left: 20upx;
	padding-top: 20upx;
	font-size: 28upx;
	color: #333333;
}
.uni-phone{
	height: 90upx;
	background: #FFFFFF;
	margin: 20upx;
	padding: 20upx;
	box-sizing: border-box;
	
	display: flex;
	flex-direction: row;
	align-items: center;
}

.uni-textarea{
	height: 300upx;
	background: #FFFFFF;
	margin: 20upx;
	padding: 20upx;
	box-sizing: border-box;
}

.btn-modify {
		margin-top: 100upx;
		border-radius: 50upx;
		font-size: 16px;
		color: #fff;
		background: linear-gradient(to right, #88a1f9, #9ac6ff);
	}

	.btn-modify-active {
		background: linear-gradient(to right, #365fff, #36bbff);
	}

	.btn-modify-hover {
		background: linear-gradient(to right, #365fdd, #36bbfa);
	}

	button[disabled] {
		color: #fff;
	}
</style>

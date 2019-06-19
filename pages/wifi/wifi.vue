<template>
	<view class="main">
		<view class="uni-phone">
			<textarea @blur="bindTextAreaBlur" auto-height maxlength:200 placeholder="无线账号" />
			</view>
		
		<view class="uni-phone">
			<textarea @blur="bindTextAreaBlur" auto-height maxlength:200 placeholder="无线Wi-Fi密码" type='number' />
		</view>
		
		<view class="type">
			加密类型：
		</view>
		
		
		<view class="encrypt">
			<view class="encrypt-item" :class="activeIndex===0? 'encrypt-item-active':''" @click="changeType(0)">
				WPA/WPA2
			</view>
			<view class="encrypt-item" :class="activeIndex===1? 'encrypt-item-active':''" @click="changeType(1)">
				WEP
			</view>
			<view class="encrypt-item" :class="activeIndex===2? 'encrypt-item-active':''" @click="changeType(2)">
				无加密
			</view>
		</view>
		
		<button class="btn-modify" :class="modifyMobile ? 'btn-modify-active':''" :disabled="!modifyMobile" hover-class="btn-modify-hover"
					 @tap="fnModify">生成二维码</button>
        </view>
		
	</view>
</template>

<script>
	import {
        mapMutations
    } from 'vuex'
	export default {
		data() {
			return {
				modifyMobile: true,
				activeIndex:0
			}
		},
		methods: {
			changeType(index){
				this.activeIndex=index;
			},
			...mapMutations(['saveQRData']),
			fnModify() {
				this.saveQRData(this.data);
				uni.navigateTo({
					url:'/pages/buss-card/setting-qrcode'
				});
			},
			bindTextAreaBlur: function (e) {
				this.data = e.detail.value;
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

.encrypt-item-active{
	width: 160upx;
	height: 80upx;
	background: linear-gradient(to right, #88a1f9, #9ac6ff)!important;
	line-height: 80upx;
	text-align: center;
	font-size: 24upx;
	color: #FFFFFF;
	
	border-radius: 10upx;
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

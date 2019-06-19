<template>
	<view class="main">
		<view class="uni-phone">
			<textarea @blur="bindTextAreaPhone" auto-height maxlength:200 placeholder="请输入手机号码" />
		</view>
		
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaContent" auto-height maxlength:200 placeholder="短信内容" type='number' />
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
		import qrcode from "@/util/qrcode.js"

	export default {
		data() {
			return {
				modifyMobile: true,
				phone:'',
				content:''
			}
		},
		methods: {
			...mapMutations(['saveQRData']),
			fnModify() {
				const qrStr = qrcode.message(this.phone,this.content);
				this.saveQRData(qrStr);				
				uni.navigateTo({
					url:'/pages/buss-card/setting-qrcode'
				});
			},
			bindTextAreaPhone: function (e) {
				this.phone = e.detail.value;
			},
			bindTextAreaContent: function (e) {
				this.content = e.detail.value;
			},
		}
	}
</script>

<style>
.main{
	background-color: #F2F2F2;
	width: 100%;
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

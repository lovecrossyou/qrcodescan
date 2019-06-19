<template>
	<view class="main">
		<view class="uni-phone">
			<textarea @blur="bindTextAreaBlur" auto-height maxlength:200 placeholder="请输入手机号码" />
		</view>
		
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height maxlength:200 placeholder="短信内容" type='number' />
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
				data:''
			}
		},
		methods: {
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

<template>
	<view class="main">
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" @maxlength='200' placeholder="请输入电话号码或手机号码" />
			</view>
			<button class="btn-modify" :class="modifyMobile ? 'btn-modify-active':''" :disabled="!modifyMobile" hover-class="btn-modify-hover"
					 @tap="fnModify">生成二维码</button>
        </view>
		
	</view>
</template>

<script>
		import qrcode from "@/util/qrcode.js"

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
				const qrStr = qrcode.phone(this.data);
				
				this.saveQRData(qrStr);
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

.uni-textarea{
	height: 300upx;
	background: #FFFFFF;
	margin: 20upx;
	padding: 20upx;
	box-sizing: border-box;
}
textarea{
	height: 300upx;
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

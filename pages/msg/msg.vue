<template>
	<view class="main">
		<view class="input-item">
			<input v-model="phone" class="uni-input" type="number" placeholder="请输入手机号码" />
		</view>

		<view class="input-item-h">
			<textarea v-model="content" class="uni-input" type="text" placeholder="短信内容" />
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
				phone: '',
				content: ''
			}
		},
		methods: {
			...mapMutations(['saveQRData']),
			fnModify() {
				if(this.phone.length ===0){
					uni.showToast({
						title: '请输入手机号码',
						icon:"none"
					});
					return;
				}
				if(this.content.length ===0){
					uni.showToast({
						title: '请输入文本内容',
						icon:"none"
					});
					return;
				}
				const qrStr = qrcode.message(this.phone, this.content);
				this.saveQRData(qrStr);
				uni.navigateTo({
					url: '/pages/buss-card/setting-qrcode?type=message'
				});
			},
			bindTextAreaPhone: function(e) {
				this.phone = e.detail.value;
			},
			bindTextAreaContent: function(e) {
				this.content = e.detail.value;
			},
		}
	}
</script>

<style>
	.main {
		background-color: #F2F2F2;
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;
	}

	.input-item {
		width: 100%;
		height: 100upx;
		border-radius: 16upx;
		background: #FFFFFF;
		padding-left: 32upx;
		box-sizing: border-box;
		line-height: 100upx;

		color: #333;
		font-size: 32upx;
		margin-bottom: 24upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.input-item-h {
		width: 100%;
		height: 702upx;
		border-radius: 16upx;
		background: #FFFFFF;
		padding-left: 32upx;
		box-sizing: border-box;
		/* line-height: 100upx; */
		padding-top: 24upx;
		color: #333;
		font-size: 32upx;
		margin-bottom: 24upx;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
	}

	.placeholder {
		font-size: 34upx;
		color: #999999;
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
		margin: 56upx auto 0 auto;
	}

	.uni-phone {
		height: 100upx;
		background: #FFFFFF;
		margin: 20upx;
		padding: 20upx;
		box-sizing: border-box;
		border-radius: 16upx;
		line-height: 100upx;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.uni-textarea {
		height: 702upx;
		background: #FFFFFF;
		margin: 20upx;
		padding: 20upx;
		box-sizing: border-box;

		border-radius: 16upx;
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

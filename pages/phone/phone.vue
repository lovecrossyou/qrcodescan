<template>
	<view class="main">
		<view class="input-item">
			<input v-model="content" class="uni-input" type="number" placeholder="请输入电话号码或手机号码" />
		</view>
		<view class="footer-btn" @click="fnModify">
			生成二维码
		</view>
	</view>

	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions
	} from 'vuex'
	import qrcode from "@/util/qrcode.js"
	import service from '../../service.js'
	
	export default {
		data() {
			return {
				modifyMobile: true,
				content: ''
			}
		},
		methods: {
			...mapMutations(['saveQRData']),
			...mapActions(['loadGenList']),
			fnModify() {
				if (this.content.length === 0) {
					uni.showToast({
						title: '请输入电话',
						icon: "none"
					});
					return;
				}
				const qrStr = qrcode.phone(this.content);
				this.saveQRData(qrStr);
					//本地存储
				service.genScanHistory(qrStr, 'phone');
				//刷新历史列表
				this.loadGenList();
				uni.navigateTo({
					url: '/pages/buss-card/setting-qrcode?type=phone'
				});
			}
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

	.placeholder {
		font-size: 24upx;
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
		margin-top: 24upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.uni-textarea {
		height: 100upx;
		background: #FFFFFF;
		margin: 20upx;
		padding: 20upx;
		box-sizing: border-box;
		border-radius: 16upx;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	textarea {
		height: 100upx;
		line-height: 100upx;
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

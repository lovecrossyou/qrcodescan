<template>
	<view class="main">
		<text class="qrimg">
			{{qrcode}}
		</text>

		<view class="item" @click="copy">
			复制
		</view>
	</view>
</template>

<script>
	import {
        mapState
    } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState(['qrcode'])
		},
		methods: {
			copy() {
				uni.setClipboardData({
					data: this.qrcode,
					success: function() {
						uni.showToast({
							title:"复制成功"
						})
					}
				});
			}
		}
	}
</script>

<style>
	.main {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F2F2F2;
	}

	.qrimg {
		width: 100%;
		height: 702upx;
		background: #FFFFFF;
		border-radius: 16upx;
		overflow: visible;
		padding: 24upx;
		box-sizing: border-box;
	}

	.item {
		height: 80upx;
		line-height: 80upx;
		text-align: center;

		color: #FFFFFF;
		font-size: 28upx;
		margin-top: 20upx;
		width: 100%;


		background: #0AC160;
		border: 2upx solid rgba(5, 5, 5, 0.08);
		border-radius: 16upx;
	}

	.item_40 {
		height: 80upx;
		line-height: 80upx;
		text-align: center;

		color: #333333;
		font-size: 28upx;
		margin-top: 20upx;
		background: #FFFFFF;
		width: 100%;
		margin-top: 60upx;
	}
</style>

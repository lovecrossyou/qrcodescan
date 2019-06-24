<template>
	<view class="main">
		<canvas canvas-id="canvas" />
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex';
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
	import service from '../../service.js'
	export default {
		data() {
			return {
				type: '',
				ifShow: true,
				size: 644, // 二维码大小
				unit: 'upx', // 单位
				background: '#FFFFFF', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#333333', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '', // 二维码生成后的图片地址或base64,
				imageSize: {
					width: 340,
					height: 340
				}
			}
		},
		computed: {
			...mapState(['qrcode'])
		},
		methods: {

		},
		components: {
			tkiQrcode
		},
		onLoad(opt) {
			this.scanType = opt.type;
			const sysInfo = uni.getSystemInfoSync();
			console.log('sysInfo', sysInfo);
			const pixelRatio = sysInfo.pixelRatio;
			const ctx = uni.createCanvasContext('canvas');
			ctx.drawImage(this.qrcode,0,0, this.imageSize.width, this.imageSize
				.height)
			ctx.draw();
		},
		onNavigationBarButtonTap() {
			uni.canvasToTempFilePath({
				canvasId: 'canvas',
				success: function(res) {
					console.log(res.tempFilePath);
					uni.saveFile({
						tempFilePath: res.tempFilePaths,
						success: function(res) {
							uni.showToast({
								title: '保存成功',
								icon: "none"
							});
						}
					});

				}
			})

		}
	}
</script>

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.qrimg {
		display: flex;
		justify-content: center;
		margin-top: 24upx;
	}
</style>

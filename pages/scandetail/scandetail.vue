<template>
	<view class="main">
		<canvas canvas-id="canvas" />
		<view class="qrimg">
			<image :src="qrcode" mode="widthFix"></image>
			<!-- <tki-qrcode ref="qrcode" :val="qrcode" :size="size" :unit="unit" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval"
			 :loadMake="loadMake" :usingComponents="true"  /> -->
		</view>
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
				src: '', // 二维码生成后的图片地址或base64
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
			const ctx = uni.createCanvasContext('canvas');
			ctx.drawImage(this.qrcode, 0, 0, 150, 100)
			ctx.draw();
			console.log('ctx ', ctx);
		},
		onNavigationBarButtonTap() {
			// service.addScanHistory(this.qrcode, this.scanType);
			uni.saveFile({
				tempFilePath: tempFilePaths[0],
				success: function(res) {
					var savedFilePath = res.savedFilePath;
				}
			});

			uni.showToast({
				title: '保存成功',
				icon: "none"
			});
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

<template>
	<view class="container">
		<view class="qr-container">
			<view class="qrimg" v-bind:style="{backgroundColor:backgroundColor}">
				<tki-qrcode ref="qrcode" :val="qrcode" :size="size" :unit="unit" :background="backgroundColor" :foreground="foregroundColor"
				 :pdground="foregroundColor" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake"
				 :usingComponents="true" @result="qrR" />
			</view>
		</view>
		<view class="setting-text">
			<view class="uni-title">设置二维码大小</view>
		</view>
		<view class="slider-wrapper">
			<slider step="20" :value="size" @change="sliderchange" min="100" max="600" show-value />
		</view>
		<view class="btns">
			<view class="primary" @tap="toggleForegroundPopup('bottom')">前景色</view>
			<view class="primary" @tap="selectIcon">选择二维码图标</view>
			<view class="primary" @tap="toggleBgPopup('bottom')">背景色</view>
			<view class="primary_bule" @tap="saveQrcode">保存到手机</view>
			<view class="primary" @tap="shareQrcode">分享给好友</view>
		</view>
		<uni-popup :show="type === 'bottom'" position="bottom" @hidePopup="togglePopup('')">
			<view class="bottom-title">{{bottom_title}}</view>
			<view class="bottom-content">
				<view v-for="(item, index) in bottomData" :key="index" class="bottom-content-box" @click="changeColor(index)">
					<view :class="item.name" class="bottom-content-image" v-bind:style="{background:item,borderRadius:'8px'}">
						<text class="icon">{{ item.icon }}</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	import {
		mapState,
		mapActions
	} from 'vuex';
	import service from '../../service.js'
	export default {
		data() {
			return {
				type: '',
				ifShow: true,
				size: 350, // 二维码大小
				unit: 'upx', // 单位
				// background: '#b4e9e2', // 背景色
				// foreground: '#309286', // 前景色
				pdground: '#333333', // 角标色
				icon: '', // 二维码图标
				// iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '', // 二维码生成后的图片地址或base64
				bottomData: [
					'#000000', '#FFFFFF', '#F600FF', '#2000FF', '#55FFFF',
					'#F5999D', '#81CA9D', '#FBDF26', '#6CCFF7', '#3CAEEF',
					'#EE105A', '#31A650', '#8FC63D', '#F40103', '#F7941E'
				],
				changeType: 1,
				backgroundIndex: 1,
				foregroundIndex: 0,
				scanType: '',
			}
		},
		computed: {
			...mapState(['qrcode']),
			bottom_title() {
				return this.changeType === 2 ? '背景色' : '前景色';
			},
			backgroundColor() {
				return this.bottomData[this.backgroundIndex];
			},
			foregroundColor() {
				return this.bottomData[this.foregroundIndex];
			},
			iconsize() {
				return this.size * 0.1;
			}
		},
		onLoad(option) {
			this.scanType = option.type;
		},
		onUnload() {
			//本地存储二维码图片
			service.genScanHistory(this.src, this.scanType);
			//刷新历史列表
			this.loadGenList();
		},
		methods: {
			...mapActions(['loadGenList']),
			changeColor(index) {
				if (this.changeType === 2) {
					this.backgroundIndex = index;
				} else {
					this.foregroundIndex = index;
				}
				setTimeout(() => {
					this.creatQrcode()
				}, 100);
			},
			toggleForegroundPopup() {
				this.type = "bottom";
				this.changeType = 1;
			},
			toggleBgPopup() {
				this.type = "bottom";
				this.changeType = 2;
			},
			togglePopup(type, isBg) {
				this.type = type;
			},
			sliderchange(e) {
				this.size = e.detail.value
			},
			creatQrcode() {
				this.$refs.qrcode._makeCode()
			},
			saveQrcode() {
				this.$refs.qrcode._saveCode();

			},
			qrR(res) {
				this.src = res;
			},
			clearQrcode() {
				this.$refs.qrcode._clearCode()
				this.val = ''
			},
			ifQrcode() {
				this.ifShow = !this.ifShow
			},
			shareQrcode() {

			},
			selectIcon() {
				let that = this;
				uni.showActionSheet({
					itemList: ['不使用图标', '从相册选择'],
					success: function(res) {
						if (res.tapIndex === 1) {
							uni.chooseImage({
								count: 1, //默认9
								sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								sourceType: ['album'], //从相册选择
								success: function(res) {
									that.icon = res.tempFilePaths[0]
									setTimeout(() => {
										that.creatQrcode()
									}, 100);
									// console.log(res.tempFilePaths);
								}
							});
						} else if (res.tapIndex === 0) {
							that.icon = '';
							setTimeout(() => {
								that.creatQrcode()
							}, 100);
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}
		},
		components: {
			tkiQrcode,
			uniPopup
		}
	}
</script>

<style>
	/* @import "../../../common/icon.css"; */
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		padding-bottom: 240upx;
		box-sizing: border-box;
	}

	.setting-text {
		margin-top: 20upx;
	}

	.qr-container {
		margin-top: 20upx;
		width: 600upx;
		height: 600upx;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.qrimg {
		display: flex;
		justify-content: center;
		padding: 10upx 10upx 0 10upx;
		box-sizing: border-box;
	}

	.primary {
		background: #FFFFFF;
		border: 2upx solid rgba(5, 5, 5, 0.10);
		border-radius: 16upx;
		width: 702upx;
		line-height: 100upx;
		height: 100upx;
		text-align: center;
		margin: 24upx;
		color: #333333;
		font-size: 36upx;
	}

	.primary_bule {
		background: #0AC160;
		border: 2upx solid rgba(5, 5, 5, 0.10);
		border-radius: 16upx;
		width: 702upx;
		line-height: 100upx;
		height: 100upx;
		text-align: center;
		margin: 24upx;
		color: #FFFFFF;
		font-size: 36upx;
	}

	slider {
		width: 100%;
	}

	input {
		width: 100%;
		margin-bottom: 20upx;
	}

	.bottom-title {
		color: #333333;
		font-size: 28upx;
	}

	.bottom-content-image {
		width: 80upx;
		height: 80upx;
		margin-right: 28upx;
		background-color: #007AFF;
		border: 2px solid rgba(0, 0, 0, 0.10);
	}

	.uni-title {
		padding: 0 24upx;
		font-size: 28upx;
		box-sizing: border-box;
	}

	.slider-wrapper {
		padding: 0 24upx;
		box-sizing: border-box;
		width: 702upx;
	}

	.btns {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	button {
		width: 100%;
		margin-top: 10upx;

		background: #FFFFFF !important;
		border: 2px solid rgba(5, 5, 5, 0.10);
		border-radius: 16px;
	}

	.bottom-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 0 60upx;
		height: 476upx;
		box-sizing: border-box;
	}
</style>

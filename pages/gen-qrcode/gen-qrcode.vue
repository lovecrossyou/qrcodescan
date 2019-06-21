<template>
	<view class="main">
		<uni-nav-bar right-icon="scan" title="二维码生成器" @clickRight="clickScan"></uni-nav-bar>
		<view class="manage_wrapper">
			<operationItem page="/pages/buss-card/buss-card" describeIcon="/static/gen-qrcode/home_icon_business_card@2x.png"
			 describeText='名片'></operationItem>
			<operationItem page="/pages/text-input/text-input" describeIcon="/static/gen-qrcode/home_icon_text@2x.png"
			 describeText='文本'></operationItem>
			<operationItem page="/pages/weburl/weburl" describeIcon="/static/gen-qrcode/home_icon_website@2x.png" describeText='网址'></operationItem>
			<operationItem page="/pages/phone/phone" describeIcon="/static/gen-qrcode/home_icon_phone@2x.png" describeText='电话'></operationItem>
			<operationItem page="/pages/msg/msg" describeIcon="/static/gen-qrcode/home_icon_message@2x.png" describeText='信息'></operationItem>
			<operationItem page="/pages/wifi/wifi" describeIcon="/static/gen-qrcode/home_icon_wifi@2x.png" describeText='Wi-Fi'></operationItem>
		</view>

		<view class="footer">
			<view class="footer_item" @click="goHistory">
				<image src="/static/tab/tabar_icon_history@2x.png" class="footer_item_icon">
				</image>
				<view class="footer_item_title">
					历史
				</view>
			</view>
			<view class="footer_item" @click="goMore">
				<image src="/static/tab/tabar_icon_more@2x.png" class="footer_item_icon">
				</image>
				<view class="footer_item_title">
					更多
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import operationItem from "./components/operationItem.vue";
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import {
		mapMutations,
		mapActions
	} from 'vuex'

	export default {
		data() {
			return {};
		},
		components: {
			operationItem,
			uniNavBar
		},
		methods: {
			...mapMutations(['saveQRData']),
			...mapActions(['loadScanList']),
			goHistory() {
				uni.navigateTo({
					url: "/pages/scanlist/scanlist"
				})
			},
			goMore() {
				uni.navigateTo({
					url: "/pages/driver/me/me"
				})
			},
			clickScan() {
				let that = this;
				uni.scanCode({
					success: function(res) {
						that.scanType = res.scanType;
						that.result = res.result;
						that.saveQRData(res.result)
						uni.navigateTo({
							url: "/pages/qrresult/qrresult?type=" + this.scanType
						});
						//刷新历史列表
						// this.loadScanList();
					}
				});
			}
		}
	};
</script>

<style scoped>
	.footer {
		height: 98upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footer_item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.footer_item_icon {
		width: 44upx;
		height: 44upx;
		margin-bottom: 6upx;
	}

	.footer_item_title {
		font-family: PingFangSC-Regular;
		font-size: 18upx;
		color: #333333;
		letter-spacing: 0;
	}

	.main {
		width: 100%;
		background-color: #F2F2F2;
	}

	.manage_wrapper {
		width: 100%;
		background-color: #F2F2F2;
		padding: 30upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>

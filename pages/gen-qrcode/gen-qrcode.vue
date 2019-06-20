<template>
	<view class="manage_wrapper">
		<operationItem page="/pages/buss-card/buss-card" describeIcon="/static/gen-qrcode/home_icon_business_card@2x.png"
		 describeText='名片'></operationItem>
		<operationItem page="/pages/text-input/text-input" describeIcon="/static/gen-qrcode/home_icon_text@2x.png"
		 describeText='文本'></operationItem>
		<operationItem page="/pages/weburl/weburl" describeIcon="/static/gen-qrcode/home_icon_website@2x.png"
		 describeText='网址'></operationItem>
		<operationItem page="/pages/phone/phone" describeIcon="/static/gen-qrcode/home_icon_phone@2x.png"
		 describeText='电话'></operationItem>
		<operationItem page="/pages/msg/msg" describeIcon="/static/gen-qrcode/home_icon_message@2x.png" describeText='信息'></operationItem>
		<operationItem page="/pages/wifi/wifi" describeIcon="/static/gen-qrcode/home_icon_wifi@2x.png" describeText='Wi-Fi'></operationItem>
	</view>
</template>

<script>
	import operationItem from "./components/operationItem.vue";
	import {
        mapMutations,
		mapActions
    } from 'vuex'
	
	export default {
		data() {
			return {};
		},
		components: {
			operationItem
		},
		methods: {
			...mapMutations(['saveQRData']),
			...mapActions(['loadScanList'])
		},
		onNavigationBarButtonTap() {
			let that = this;
			uni.scanCode({
				success: function(res) {
					that.scanType = res.scanType;
					that.result = res.result;
					that.saveQRData(res.result)
					uni.navigateTo({
						url:"/pages/qrresult/qrresult"
					});
					service.addScanHistory(res.result,this.scanType);
					//刷新历史列表
					this.loadScanList();
				}
			});
		}
	};
</script>

<style scoped>
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

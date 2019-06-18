<template>
	<view class="manage_wrapper">
		<manageList page="/pages/buss-card/buss-card"  imgSrc="../../static/manage/label_icon@2x.png" titleText="名片" imgWidth="64px" imgHeight="64px"></manageList>
		<manageList page="/pages/text-input/text-input"  imgSrc="../../static/manage/shangpingouwudai@2x.png" titleText="文本" imgWidth="64px" imgHeight="62px"></manageList>
		<manageList page="/pages/weburl/weburl" imgSrc="../../static/manage/yunyingshang@2x.png" titleText="网址" imgWidth="66px" imgHeight="52px"></manageList>
		<manageList page="/pages/phone/phone"  imgSrc="../../static/manage/yuangongguanli@2x.png" titleText="电话" imgWidth="54px" imgHeight="66px"></manageList>
		<manageList page="/pages/msg/msg" imgSrc="../../static/manage/dingdan@2x.png" titleText="信息" imgWidth="62px" imgHeight="70px"></manageList>
		<manageList page="/pages/wifi/wifi" imgSrc="../../static/manage/dianpu@2x.png" titleText="WIFI" imgWidth="62px" imgHeight="62px"></manageList>
		<view style="width: 23%;height: 160upx;margin: 0 15px 40px 15px"></view>
	</view>
</template>

<script>
import manageList from '@/components/manage/manageList.vue';
export default {
	data() {
		return {};
	},
	components: {
		manageList
	},
	methods:{
		
	}
};
</script>

<style scoped>
.manage_wrapper {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 40upx 25upx;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-content:flex-start
}
</style>

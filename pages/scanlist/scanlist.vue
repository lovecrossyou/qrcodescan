<template>
	<view class="wrapper">
		<view class="left_area">
			<view class="placeholder"></view>
			<view class="segmented_control_area">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4A4A4A"></uni-segmented-control>
			</view>
			<view class="clear_area">清空</view>
		</view>
		<view class="content">
			<view v-show="current === 0">选项卡1的内容选项卡1的内容选项卡1的内容选项卡1的内容选项卡1的内容选项卡1的内容选项卡1的内容选项卡1的内容</view>
			<view v-show="current === 1">选项卡2的内容</view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from './components/uni-segmented-control.vue';
export default {
	data() {
		return {
			items: ['生成记录', '扫描记录'],
			current: 0
		};
	},
	methods: {
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		}
	},
	components: {
		uniSegmentedControl
	}
};
</script>

<style scoped>
.wrapper {
	width: 100%;
}
.content {
	width: 100%;
	padding: 0;
}
.left_area {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.segmented_control_area {
	flex: 1;
}
.clear_area{
	width: 60upx;
	height: 42upx;
	color: #000;
	font-size: 30upx;
	margin: 15upx 30upx 0 0;
}
.placeholder{
	margin-left: 95upx;
}
</style>

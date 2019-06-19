<template>
	<view class="wrapper">
		<view class="left_area">
			<!-- 分隔器 -->
			<view class="segmented_control_area">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4A4A4A"></uni-segmented-control>
				<view class="content">
					<view v-show="current === 0">选项卡1的内容</view>
					<view v-show="current === 1">选项卡2的内容</view>
				</view>
			</view>
			<view class="clear_area">清空</view>
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
}
.left_area {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.segmented_control_area {
	width: 80%;
}
.clear_area{
	color: #000;
	font-size: 30upx;
}
</style>

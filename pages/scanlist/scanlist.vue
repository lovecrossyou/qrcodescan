<template>
	<view class="wrapper">
		<view class="left_area">
			<view class="placeholder"></view>
			<view class="segmented_control_area">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4A4A4A"></uni-segmented-control>
			</view>
			<view @click="clearAll" class="clear_area">清空</view>
		</view>
		<view class="content">
			<block v-for="(item,index) in genList" :key="item.id">
				<view v-show="current === 0" class="content_main_content">
					<image :src="item.qrCodeImg" class="qr_code_img"></image>
					<view class="center_content">
						<view class="code_name">{{item.codeName}}</view>
						<view class="code_time">{{item.codeTime}}</view>
					</view>
					<image @click="delitem(item.id,index,0)" src="../../static/scanlist/history_list_delete_icon@2x.png" class="clear_icon"></image>
				</view>
			</block>
			<block v-for="(item,index) in scanList" :key="item.id">
				<view v-show="current === 1" class="content_main_content">
					<image :src="item.qrCodeImg" class="qr_code_img"></image>
					<view class="center_content">
						<view class="code_name">{{item.codeName}}</view>
						<view class="code_time">{{item.codeTime}}</view>
					</view>
					<image @click="delitem(item.id,index,1)" src="../../static/scanlist/history_list_delete_icon@2x.png" class="clear_icon"></image>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from './components/uni-segmented-control.vue';
	import service from '../../service.js'
	import {mapMutations,mapState,mapActions} from "vuex"

	export default {
		data() {
			return {
				items: ['生成记录', '扫描记录'],
				current: 0
			};
		},
		computed:{
			...mapState(['genList','scanList'])
		},
		onLoad() {
			this.loadGenList();
			this.loadScanList();
		},
		methods: {
			...mapActions(['loadGenList','loadScanList']),
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			clearAll() {
				// service.clearAll();
				// this.genList = [];
			},
			delitem(id, index, type) {
				if (type === 0) {
					//生成历史删除
					this.genList.splice(index, 1);
					service.delGenHistory(id);
				} else {
					// 扫描删除
					this.scanList.splice(index, 1);
					service.delScanHistory(id);
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
		background: #F2F2F2;
	}

	.content {
		width: 100%;
		background-color: #fff;
		padding: 0;
	}

	.qr_code_img {
		width: 108upx;
		height: 108upx;
	}

	.center_content {
		flex: 1;
		margin-left: 22upx;
	}

	.code_name {
		color: #333;
		font-size: 34upx;
		margin-top: 8upx;
	}

	.code_time {
		color: #999;
		font-size: 28upx;
		margin-top: 15upx;
	}

	.clear_icon {
		width: 44upx;
		height: 44upx;
	}

	.left_area {
		width: 100%;
		height: 140upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;
		align-items: center;
		background-color: #fff;
	}

	.segmented_control_area {
		flex: 1;
	}

	.clear_area {
		width: 60upx;
		height: 42upx;
		color: #000;
		font-size: 30upx;
		margin: 10upx 30upx 0 0;
	}

	.placeholder {
		margin-left: 95upx;
	}

	.content_main_content {
		width: 100%;
		height: 150upx;
		background-color: #fff;
		padding: 21upx 30upx;
		box-sizing: border-box;
		border-top: 1upx solid #D8D8D8;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>

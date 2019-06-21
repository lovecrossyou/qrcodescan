<template>
	<view class="wrapper">
		<!-- <uni-nav-bar right-icon="scan" title="二维码生成器" @click-right="clickScan"></uni-nav-bar> -->
			<uni-nav-bar right-text="清空" @click-right="clearAll">
				<view class="segmented_control_area">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button"
					 active-color="#4A4A4A"></uni-segmented-control>
				</view>
			</uni-nav-bar>
		<view v-if="genList.length==0&current==0" class="empty-wrapper">
			<image class="empty-img" src="/static/history_icon_empty_state@2x.png" mode=""></image>
			<view class="empty-text">
				暂无记录
			</view>
		</view>

		<view v-if="scanList.length==0&current==1" class="empty-wrapper">
			<image class="empty-img" src="/static/history_icon_empty_state@2x.png" mode=""></image>
			<view class="empty-text">
				暂无记录
			</view>
		</view>
		<view class="content">
			<block v-for="(item,index) in genList" :key="item.id">
				<view v-show="current === 0" class="content_main_content">
					<image :src="item.qrCodeImg" class="qr_code_img" @click="goDetail(item)"></image>
					<view class="center_content" @click="goDetail(item)">
						<view class="code_name">{{item.codeName}}</view>
						<view class="code_time">{{item.codeTime}}</view>
					</view>
					<image @click="delitem(item.id,index,0)" src="../../static/scanlist/history_list_delete_icon@2x.png" class="clear_icon"></image>
				</view>
			</block>
			<block v-for="(item,index) in scanList" :key="item.id">
				<view v-show="current === 1" class="content_main_content" @click="goScanResult(item)">
					<image :src="item.qrCodeImg" class="qr_code_img" @click="goDetail(item)"></image>
					<view class="center_content" @click="goDetail(item)">
						<view class="code_name">{{item.codeName}}</view>
						<view class="code_time">{{item.codeTime}}</view>
					</view>
					<image @click.stop="delitem(item.id,index,1)" src="../../static/scanlist/history_list_delete_icon@2x.png" class="clear_icon"></image>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from './components/uni-segmented-control.vue';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import service from '../../service.js'
	import {
		mapMutations,
		mapState,
		mapActions
	} from "vuex"

	export default {
		data() {
			return {
				items: ['生成记录', '扫描记录'],
				current: 0
			};
		},
		computed: {
			...mapState(['genList', 'scanList'])
		},
		onLoad() {
			this.loadGenList();
			this.loadScanList();
		},
		methods: {
			...mapMutations(['saveQRData']),
			...mapActions(['loadGenList', 'loadScanList', 'clearGenList', 'clearScanList']),
			onClickItem(index) {
				this.current = index;
			},
			goBack() {
				uni.navigateBack();
			},
			clearAll() {
				let that = this;
				uni.showModal({
					content: that.current === 0 ? '确认清空所有生成记录' : '确认清空所有扫描记录',
					success: function(res) {
						if (res.confirm) {
							if (that.current === 0) {
								that.clearGenList();
							} else {
								that.clearScanList();
							}
						}
					}
				});
			},
			goDetail(item) {
				console.log('item ', item);
				this.saveQRData(item.data)
				uni.navigateTo({
					url: "/pages/scandetail/scandetail?type=" + item.type
				})
			},
			goScanResult(item) {
				console.log('item ', item);
				this.saveQRData(item.data)
				uni.navigateTo({
					url: "/pages/qrresult/qrresult"
				})
			},
			delitem(id, index, type) {
				uni.showModal({
					content: '确定删除本条记录',
					success: function(res) {
						if (res.confirm) {
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
					}
				});
			}
		},
		components: {
			uniSegmentedControl,
			uniNavBar
		}
	};
</script>

<style scoped>
	.empty-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 200upx;
		bottom: 0;
		width: 100%;

	}

	uni-segmented-control {
		height: 48upx;
	}

	.empty-text {
		margin-top: 20upx;
		color: #C1C1C1;
		font-size: 32upx;
	}

	.empty-img {
		width: 200upx;
		height: 170upx;
	}

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
		margin-top: 10upx;
		/* padding-top: 10upx;
		box-sizing: border-box; */
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

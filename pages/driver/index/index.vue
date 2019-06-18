<template>
	<view class="main">
		<view class="title">
			待办任务:3
		</view>

		<view class="item-group">
			<view class="item">
				委托单号: CB2018052110001
			</view>
			<view class="item">
				提单编号: CB2018052110001
			</view>
			<view class="item">
				产品名称: 43%豆籽70kg
			</view>
			<view class="item">
				排队号:
			</view>
			<view class="item">
				排队倒计时: 14小时42分
			</view>
			<view class="item">
				提货日期: 2018-05-21 委托数量: 1.000顿
			</view>
			<view class="item">
				装车地点: 三河汇福粮油集团饲料蛋白有限公司
			</view>
			<view class="item">
				运输线路: 河北省廊坊市-无
			</view>
			<view class="item">
				请保持北斗开启,进入排队圈自动获取排队号
			</view>
			<view class="item">
				备注:
			</view>

			<view class="btn-group">
				<button type="warn">待排队</button>
				<view class="btn-row">
					<button type="primary">排队</button>
					<button type="primary" @click="goannouncement">入厂公告</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goannouncement(){
				uni.navigateTo({
					url:'/pages/announcement/announcement'
				})
			}
		}
	}
</script>

<style>
	.main {
		padding-left: 40upx;
		box-sizing: border-box;
		width: 100%;
	}

	.title {
		padding: 20upx 0;
	}

	.item-group {
		width: 100%;
	}
	
	.btn-group>button{
		margin-left: 0;
	}

	.item {
		font-size: 28upx;
		color: #8F8F94;
		height: 56upx;
	}

	.btn-group {
		height: 80upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* background: #007AFF; */
	}
	
	.btn-row{
		height: 60upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 0;
		justify-content: space-between;
		width: 350upx;
	}
</style>

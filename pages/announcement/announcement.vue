<template>
	<view>
		<view class="item-list">

			<block v-for="(d,index) in list" :key="index">
				<view class="item" @click="godetail">
					<view class="title">
						三河汇福粮油集团有限公司豆籽管理规定
					</view>
					<view class="time">
						20117-07-14 10:36:47
					</view>
				</view>
			</block>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 2]
			}
		},
		methods: {
			godetail(){
				uni.navigateTo({
					url:"/pages/announcement/detail"
				})
			}
		}
	}
</script>

<style>
	.item-list {
		padding: 10upx 20upx;
	}

	.item {
		margin-bottom: 20upx;

	}

	.title {
		font-size: 28upx;
		font-weight: bold;
	}

	.time {
		font-size: 24upx;
		color: #C8C7CC;
	}
</style>

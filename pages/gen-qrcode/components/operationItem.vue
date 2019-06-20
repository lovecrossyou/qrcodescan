<template>
	<view class="wrapper" @click="goPage">
		<image :src="describeIcon" class="describe_icon"></image>
		<view class="describe_text">{{describeText}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			describeIcon:String,
			describeText:String,
			page:String
		},
		methods:{
			goPage(){
				uni.navigateTo({
					url:this.page
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		width: 330upx;
		height: 330upx;
		background-color: #fff;
		border-radius: 20upx;
		padding: 48upx 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30upx;
	}
	.describe_icon{
		width: 140upx;
		height: 140upx;
	}
	.describe_text{
		color: #333333;
		font-size: 34upx;
		font-weight: 400;
	}
</style>

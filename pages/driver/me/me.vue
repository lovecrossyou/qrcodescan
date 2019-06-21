<template>
	<view class="main">
		<view class="person-list">
			<cmd-cell-item title="推荐给朋友" slot-left arrow>
				<image class="item-icon" src="/static/more/more_icon_recommend@2x.png" mode=""></image>
			</cmd-cell-item>
			<cmd-cell-item title="评价APP" slot-left arrow @click="goabout">
				<image class="item-icon" src="/static/more/more_icon_like@2x.png" mode=""></image>
			</cmd-cell-item>
			<cmd-cell-item title="清除缓存" addon="0.00M" slot-left arrow>
				<image class="item-icon" src="/static/more/more_icon_clear_cache@2x.png" mode=""></image>
			</cmd-cell-item>
		</view>
	</view>
</template>

<script>
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
	import cmdCellItem from "@/components/cmd-cell-item/cmd-cell-item.vue"

	export default {
		components: {
			cmdAvatar,
			cmdCellItem,
			cmdIcon
		},
		data() {
			return {};
		},
		methods: {
			/**
			 * 打开用户信息页
			 */
			fnInfoWin() {
				uni.navigateTo({
					url: '/pages/user/info/info'
				})
			},
			goabout() {
				uni.navigateTo({
					url: '/pages/about/about'
				})
			},
			changephone() {
				uni.navigateTo({
					url: '/pages/modifyphone/modifyphone'
				})
			}
		}
	}
</script>

<style>
	.main {
		width: 100%;
		
	}

	.person-head {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 150px;
		padding-left: 20px;
		background: linear-gradient(to right, #365fff, #36bbff);
	}

	.person-head-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-left: 10px;
	}
	
	.item-icon{
		width: 34upx;
		height: 34upx;
	}

	.person-head-nickname {
		font-size: 18px;
		font-weight: 500;
		color: #fff;
	}

	.person-head-username {
		font-size: 14px;
		font-weight: 500;
		color: #fff;
	}

	.person-list {
		line-height: 0;
	}
</style>

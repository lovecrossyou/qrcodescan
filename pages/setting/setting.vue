<template>
	<view class="main">
		<uni-list>
			<uni-list-item title="语音设置"></uni-list-item>
			<uni-list-item title="修改密码"></uni-list-item>

			<uni-list-item title="常见问题"></uni-list-item>

			<uni-list-item title="关于我们"></uni-list-item>

			<uni-list-item title="检测版本" note="v1.1.2"></uni-list-item>


		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.main {
		width: 100%;
	}
</style>

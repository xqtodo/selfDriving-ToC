<script setup>
import HomePanel from './HomePanel.vue'
import { getSpotAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

// 获取数据
const newList = ref([])

const getNewList = async () => {
    const res = await getSpotAPI()
    newList.value = res.data
}

onMounted(() => getNewList())

</script>

<template>
    <HomePanel title="热门景点" sub-title="一路向前，风景这边独好">
        <ul class="goods-list">
            <li v-for="(item, index) in newList" v-show="index < 4" :key="item.id">
                <RouterLink :to="`/detail/${item.id}`">
                    <img :src="item.photoUrl" alt="" />
                    <p class="name">{{ item.name }}</p>
                    <p class="desc" style="font-size: 18px;">{{ item.description }}</p>
                    <!-- <p class="price">&yen;{{ item.price }}</p> -->
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .price {
            color: $priceColor;
        }
    }
}
</style>
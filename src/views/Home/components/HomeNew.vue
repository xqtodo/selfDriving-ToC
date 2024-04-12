<script setup>
import HomePanel from './HomePanel.vue'
import { getRouteAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

// 获取数据
const newList1 = ref([])

console.log('123456');
const getNewList1 = async () => {
  const res = await getRouteAPI()
  console.log('123456789');
  newList1.value = res.data
}

onMounted(() => getNewList1(), console.log('1234567'))

</script>

<template>
  <HomePanel title="精品路线" sub-title="行走在路上，生活在风景中">
    <ul class="goods-list">
      <li v-for="(item, index) in newList1" v-show="index < 4" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.photoUrl" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="desc" style="font-size: 18px;">{{ item.location }}</p>
          <!-- <p class="price">&yen;{{ item.price }}</p> -->
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
  <!-- 下面是插槽主体内容模版
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  -->
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
<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeCar from './components/HomeCar.vue'
import HomeSpot from './components/HomeSpot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomeRoutesProduct from './components/HomeRoutesProduct.vue'
import HomeSpotProduct from './components/HomeSpotProduct.vue'
import HomeCarProduct from './components/HomeCarProduct.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <!-- 新鲜好物，人气推荐不展示 -->
  <HomeSpot/>
  <HomeNew />
  <HomeCar/>
  <!-- <HomeHot /> -->
  <HomeSpotProduct/>
  <HomeRoutesProduct/>
  <HomeCarProduct/>
  <!-- <HomeProduct /> -->
</template>
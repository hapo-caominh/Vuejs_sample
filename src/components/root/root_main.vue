<template>
  <div class="root-main">
    <router-link
      :to="{name: 'root'}"
      class="main-collapse"
    >Collapse</router-link>
    <img
      src="http://cdn.nhanh.vn/cdn/store/7491/artCT/30804/sony_a7iii_sample_image_4.jpg"
      class="main-img">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "Welcome to CCM's Vue.js Sample"
    }
  }
}
</script>

<style scope>
.root-main{
  margin-top: 80px;
  margin-left: 20px;
}
.main-collapse {
  padding: 10px;
  display: block;
}
.float-left {
  float: left;
}
.main-img {
  margin-top: 5 0px;
}
</style>

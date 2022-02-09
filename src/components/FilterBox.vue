<template>
  <div @click="fire" :class="filter+` filter-item`"  :style="`background-image: url(${uploadImg})`">
    <!-- <slot> -->
      {{filter}}  
    <!-- </slot>   -->
  </div> 
</template>

<script>
export default {
  name : 'filterbox',
  methods : {
    fire(){
      this.emitter.emit('throwFilter',this.filter);
    }
  },
  props : {
    uploadImg:Array,
    filter:Array
  }
}
</script>

<style>
  .filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
  }
</style>
<template>
  <div class="detail">
    {{detailData.price}}
  </div>
</template>

<script>
export default {
  computed: {
    detailData(){
      return this.$store.state.detailData;
    }
  },
  created() {
    this.$store.dispatch({type:'getDetailDate'});
  }

}
</script>

<style lang="scss" scoped>

</style>
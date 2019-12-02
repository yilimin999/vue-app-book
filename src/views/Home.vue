<template>
  <div class="home">
    <Nav :navList='navList'></Nav>
    <List :currendList='currendList'></List>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import List from '../components/List'
export default {
  name: 'home',
  components:{
    Nav,List
  },
  computed: {
    navList(){
      return this.$store.state.navList
    },
    currendList(){
      return this.$store.state.currendList
    }
  },
  created() {
    this.$store.dispatch({type:'getNav'});
    this.$store.dispatch({type:'getList'})
  },
  
}
</script>

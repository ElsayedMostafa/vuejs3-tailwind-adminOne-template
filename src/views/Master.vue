<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <div class="pt-14 xl:pl-60">
      <router-view/>
  </div>
  
  <footer-bar/>
</template>
<script>
import NavBar from "@/components/NavBar";
import AsideMenu from '@/components/AsideMenu';
import menu from '@/router/menu.js'
import FooterBar from '@/components/FooterBar'

export default {
  name: "Master",
  components: {
    FooterBar,
    NavBar,
    AsideMenu,
  },
setup () {
    return {
      menu
    }
}


};
</script>




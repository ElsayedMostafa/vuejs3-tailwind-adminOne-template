<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <router-view/>
  <footer-bar/>
</template>
<script>
import NavBar from "@/components/NavBar";
import AsideMenu from '@/components/AsideMenu';
import { useStore } from 'vuex'
import menu from '@/router/menu.js'
import FooterBar from '@/components/FooterBar'

export default {
  name: "App",
  components: {
    FooterBar,
    NavBar,
    AsideMenu,
  },
setup () {
    const store = useStore()

    store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })

    return {
      menu
    }
}


};
</script>




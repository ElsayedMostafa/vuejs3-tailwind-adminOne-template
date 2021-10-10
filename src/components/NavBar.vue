<template>
  <nav
    class="
      top-0
      left-0
      right-0
      fixed
      flex
      bg-white
      h-14
      border-b border-gray-200
      z-30
      w-screen
      transition-all
      xl:pl-60
      lg:w-auto
      lg:items-stretch
    "
    :class="{ 'ml-60': isAsideMobileExpanded }"
  >
    <div class="flex-1 items-stretch flex h-14">
      <nav-bar-item type="flex lg:hidden" @click.prevent="menuToggleMobile">
        <icon :path="menuToggleMobileIcon" size="24" />
      </nav-bar-item>
      <nav-bar-item type="hidden lg:flex xl:hidden" @click.prevent="menuOpenLg">
        <icon :path="mdiMenu" size="24" />
      </nav-bar-item>
    </div>
    <div class="flex-none items-stretch flex h-14 lg:hidden">
      <nav-bar-item class="items-center flex" @click.prevent="menuNavBarToggle">
        <icon :path="menuNavBarToggleIcon" size="24" />
      </nav-bar-item>
    </div>

    <div
      class="
        absolute
        w-screen
        top-14
        left-0
        bg-white
        border-b border-gray-100
        shadow
        lg:w-auto
        lg:items-stretch
        lg:flex lg:flex-grow
        lg:static
        lg:border-b-0
        lg:overflow-visible
        lg:shadow-none
      "
      :class="{ hidden: !isMenuNavBarActive, block: isMenuNavBarActive }"
    >
      <div
        class="
          max-h-screen-menu
          overflow-y-auto
          lg:overflow-visible
          lg:flex
          lg:items-stretch
          lg:justify-end
          lg:ml-auto
        "
      >
      <nav-bar-item is-desktop-icon-only>
          <nav-bar-item-label :icon="mdiLogout" label="Log out" is-desktop-icon-only />
        </nav-bar-item>
      
      </div>
    </div>
  </nav>
</template>
<script>
import { useStore } from "vuex";
import NavBarItem from "@/components/NavBarItem";
import NavBarItemLabel from '@/components/NavBarItemLabel'

import Icon from "@/components/Icon";
import { computed, ref } from "vue";
import {
  mdiMenu,
  mdiForwardburger,
  mdiBackburger,
  mdiClose,
  mdiDotsVertical,
  mdiLogout,
} from "@mdi/js";

export default {
  name: "NavBar",
  components: {
    NavBarItem,
    Icon,
    NavBarItemLabel
  },
  setup() {
    const store = useStore();
    const isAsideMobileExpanded = computed(
      () => store.state.ui.isAsideMobileExpanded
    );
    const menuToggleMobileIcon = computed(() =>
      isAsideMobileExpanded.value ? mdiBackburger : mdiForwardburger
    );
    const isMenuNavBarActive = ref(false);

    const menuToggleMobile = () => store.dispatch("ui/asideMobileToggle");

    const menuNavBarToggleIcon = computed(() =>
      isMenuNavBarActive.value ? mdiClose : mdiDotsVertical
    );

    const menuNavBarToggle = () => {
      isMenuNavBarActive.value = !isMenuNavBarActive.value;
    };

    const menuOpenLg = () => {
      store.dispatch("ui/asideLgToggle", true);
    };

    return {
      isAsideMobileExpanded,
      menuToggleMobileIcon,
      menuNavBarToggleIcon,
      menuToggleMobile,
      menuNavBarToggle,
      mdiMenu,
      menuOpenLg,
      isMenuNavBarActive,
      mdiLogout
    };
  },
};
</script>
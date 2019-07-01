<template>
  <aside class="p-5 bg-purple-200">
    <Logo />
    <nav>
      <div v-for="link in links" :key="`link-${link.name}`">
        <nuxt-link :to="{ path: `${link.path}` }">
          <i :class="`lni-${link.icon} mr-2`"></i>
          <span>
            {{ link.name }}
          </span>
        </nuxt-link>
        <component :is="link.component" v-if="link.component" />
      </div>
    </nav>
    <div
      class="collapser"
      :style="computedCollapserStyle"
      @click="$store.commit('collapseSidebar')"
    ></div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo'
import SidebarProfile from '@/components/nav/SidebarProfile'
import SidebarNotifs from '@/components/nav/SidebarNotifs'

export default {
  components: {
    Logo
  },
  data: () => ({
    links: [
      {
        name: 'Dota 2',
        path: 'dota2',
        icon: 'game'
      },
      {
        name: 'Rocket league',
        path: 'rocket-league',
        icon: 'game'
      },
      {
        name: 'PUB',
        path: 'pubg',
        icon: 'game'
      },
      {
        name: 'Profile',
        path: 'profile',
        icon: 'user',
        component: SidebarProfile
      },
      {
        name: 'Notifications',
        path: 'notifications',
        icon: 'alarm',
        component: SidebarNotifs
      }
    ]
  }),
  computed: {
    ...mapState({
      storeSidebarCollapsed: 'sidebarCollapsed'
    }),
    computedCollapserStyle() {
      return {
        transform: this.storeSidebarCollapsed ? 'rotateZ(180deg)' : 'none'
      }
    }
  }
}
</script>

<style lang="postcss"></style>

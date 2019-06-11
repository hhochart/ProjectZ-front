<template>
  <aside class="column is-2 section">
    <p class="menu-label is-hidden-touch">Your profile</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" />
          <span v-if="!storeSidebarCollapsed">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>

    <p class="menu-label is-hidden-touch">Games</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" />
          <span v-if="!storeSidebarCollapsed">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>

    <p class="menu-label is-hidden-touch">Social</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key" :style="computedSidebarStyle">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" />
          <span v-if="!storeSidebarCollapsed">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>

    <p class="menu-label is-hidden-touch">Settings</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" />
          <span v-if="!storeSidebarCollapsed">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>

    <div
      class="collapser"
      :style="computedCollapserStyle"
      @click="$store.commit('collapseSidebar')"
    >
      <b-icon icon="chevron-left" />
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    items: [
      {
        title: 'Home',
        icon: 'home',
        to: { name: 'index' }
      },
      {
        title: 'Inspire',
        icon: 'lightbulb',
        to: { name: 'inspire' }
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

<style lang="postcss">
aside {
  position: relative;
}

.collapser {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
}
ul > li {
  transition: 0.5s width ease-in-out;
}
</style>

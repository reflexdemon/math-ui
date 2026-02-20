<script lang="ts" setup>
import { useLayout } from '@/composables/useLayout.ts'
import AppConfig from './AppConfig.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Menubar, Toast } from 'primevue'
import IconApp from '@/components/icons/IconApp.vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Work Sheets',
    icon: 'pi pi-file',
    items: [
      {
        label: 'All Worksheets',
        icon: 'pi pi-list',
        route: '/worksheets',
      },
      {
        label: 'Simple Math Problems',
        icon: 'pi pi-calculator',
        route: '/worksheets/simple-math',
      },
    ],
  },
  {
    label: 'Multiplication Tables',
    icon: 'pi pi-th-large',
    route: '/multiplication-tables',
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    route: '/about',
  },
])

const { isDarkMode, toggleDarkMode } = useLayout()
</script>

<template>
  <Toast />
  <div class="topbar" style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <div class="topbar-container">
      <div class="topbar-brand">
        <IconApp />
        <span class="topbar-brand-text">
          <span class="topbar-title">Math UI</span>
          <span class="topbar-subtitle">Simple page to generate Math problems</span>
        </span>
      </div>
    </div>
    <div class="wrapper">
      <AppConfig />
    </div>
    <div class="card">
      <Menubar :model="items" aria-label="Main navigation">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route && !item.items"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="navigate"
              :aria-label="String(item.label)"
            >
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
            :aria-label="String(item.label)"
          >
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
          </a>
        </template>
        <template #end>
          <Button class="topbar-theme-button" rounded text type="button" @click="toggleDarkMode">
            <i :class="['pi ', 'pi ', { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode }]" />
          </Button>
        </template>
      </Menubar>
    </div>
  </div>
</template>

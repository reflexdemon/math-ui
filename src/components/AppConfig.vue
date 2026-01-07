<script lang="ts" setup>
import { useLayout } from '../composables/useLayout'

const { primaryColors, surfaces, primary, surface, isDarkMode, updateColors } = useLayout()
</script>

<template>
  <div class="config-panel hidden">
    <div class="config-section">
      <div>
        <span class="config-label">Primary</span>
        <div class="config-colors">
          <button
            v-for="pc of primaryColors"
            :key="pc.name"
            :class="['color-button', { selected: primary === pc.name }]"
            :style="{ backgroundColor: pc.palette['500'] }"
            :title="pc.name"
            type="button"
            @click="updateColors('primary', pc.name)"
          />
        </div>
      </div>
      <div>
        <span class="config-label">Surface</span>
        <div class="config-colors">
          <button
            v-for="s of surfaces"
            :key="s.name"
            :class="[
              'color-button',
              {
                selected: surface
                  ? surface === s.name
                  : isDarkMode
                    ? s.name === 'zinc'
                    : s.name === 'slate',
              },
            ]"
            :style="{ backgroundColor: s.palette['500'] }"
            :title="s.name"
            type="button"
            @click="updateColors('surface', s.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

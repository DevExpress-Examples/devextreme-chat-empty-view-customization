<script setup lang="ts">
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import { DxChat } from 'devextreme-vue/chat';
import { DxTileView } from 'devextreme-vue/tile-view';

const tiles = [{
  emoji: '🗓️',
  text: 'View Available Vacation Days',
}, {
  emoji: '🎉',
  text: 'List Upcoming Holidays',
}, {
  emoji: '📄',
  text: 'Submit a Vacation Request',
}];
</script>
<template>
  <DxChat
    id="chat"
    :width="780"
    :height="520"
    empty-view-template="emptyView"
  >
    <template #emptyView="{ data }">
      <div class="empty-view-container">
        <div class="empty-view-titlebox">
          <div class="empty-view-title">How can HR Assistant help you today?</div>
          <div class="empty-view-subtitle">{{ data.texts.message }}</div>
        </div>
        <DxTileView
          id="tile-view-container"
          :data-source="tiles"
          :width="728"
          :height="124"
          :base-item-width="226"
          :base-item-height="96"
          :item-margin="12"
          :active-state-enabled="false"
          item-template="itemTemplate"
        >
          <template #itemTemplate="{ data }">
            <div class="tile-container">
              <div class="tile-emoji">{{ data.emoji }}</div>
              <div class="tile-text">{{ data.text }}</div>
            </div>
          </template>
        </DxTileView>
      </div>
    </template>
  </DxChat>
</template>

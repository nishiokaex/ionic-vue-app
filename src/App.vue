<template>
  <div id="app">
    <ion-app>
      <ion-header>
        <ion-toolbar class="app-toolbar">
          <ion-buttons slot="start">
            <ion-button>
              <ion-icon slot="icon-only" size="large" name="cube"/>
            </ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon slot="icon-only" name="more"/>
            </ion-button>
          </ion-buttons>
          <ion-title class="app-title">aaa</ion-title>
        </ion-toolbar>
      </ion-header>
      <router-view/>
      <ion-popover-controller/>
    </ion-app>
  </div>
</template>

<style>
#app {
}
</style>

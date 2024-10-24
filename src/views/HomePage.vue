<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
          <ion-searchbar placeholder="Search"></ion-searchbar>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <img alt="Silhouette of mountains" src="https://preview.redd.it/hg-calibarn-v0-9vo9fchmp7db1.jpg?width=1080&crop=smart&auto=webp&s=70fe670ebfb716e40c5c109afa41fb36d15dcbe2" />
        <ion-card-header>
          <ion-card-subtitle>Thursday, 24 October 2024</ion-card-subtitle>
          <ion-card-title>Kit review: HG TWFM 1/144 Gundam Calibarn</ion-card-title>
        </ion-card-header>

        <ion-card-content
          >The Calibarn is the final battle upgrade for the protagonist, so it’s decked out with some of the coolest mechanism and gimmicks. It is no-doubt a much sought after kit for all fans and builders alike.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

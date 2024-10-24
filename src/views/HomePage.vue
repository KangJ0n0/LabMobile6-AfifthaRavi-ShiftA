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

      <ion-card>
        <img alt="Silhouette of mountains" src="https://i.redd.it/wfm-gundam-pharact-v0-7undawiq68na1.jpg?width=4032&format=pjpg&auto=webp&s=4edd4a78dbd09ae78932a683bfd265efce7830bd" />
        <ion-card-header>
          <ion-card-subtitle>Wednesday, 23 October 2024</ion-card-subtitle>
          <ion-card-title>Kit Review: HG TWFM 1/144 Gundam Pharact </ion-card-title>
        </ion-card-header>

        <ion-card-content
          >With a dominant black tone, the Pharact has a mysterious appearance. Its design looks like the model of a “hunter” with a long rifle. Many of its parts are similar to Zowort (Pell Technologies’ main craft). It is also the reason
          why in its first debut, it was mistaken for the black Zowort.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { IonSearchbar } from "@ionic/vue";
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

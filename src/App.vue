<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view />
      <v-footer app class="body-2 dark--text">
        @{{ new Date().getFullYear() }} — <strong>Techmation Myanmar Meter Calculator</strong>
      </v-footer>
    </v-main>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: { NavBar },
};
</script>

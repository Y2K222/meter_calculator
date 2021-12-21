<template>
  <div class="app-bar">
    <v-app-bar app class="primary" flat>
        <NavBar/>
    </v-app-bar>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  name: "AppBar",
  components: { NavBar },
};
</script>
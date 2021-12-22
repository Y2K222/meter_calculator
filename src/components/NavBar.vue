<template>
  <div class="nav-bar">
    <!-- Side Navigation -->
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list>
        <v-list-item
          class="my-3"
          link
          v-for="menu in menus"
          :to="menu.path"
          :key="menu.icon"
        >
          <v-list-item-title>
            <v-icon class="mx-2">{{ menu.icon }}</v-icon>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- End Side Navigation -->
    <!-- AppBar -->
    <v-app-bar class="primary" app>
      <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="body-2 snow--text font-weight-bold"
        > Baby ancestor မီတာ </v-app-bar-title
      >
    </v-app-bar>
    <!-- / Calculator AppBar -->
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      drawer: false,
      menus: [
        {
          title: "နောက်ဆုံးဒေတာ",
          icon: "update",
          path: "/latest",
        },
        {
          title: "ဒေတာများ",
          icon: "folder",
          path: "/datas"
        },
        {
          title: "ရီပို့တ်များ",
          icon: "show_chart",
          path: "/reports",
        },
        {
          title: "စာရင်းအသစ် ထည့်မည်",
          icon: "note_add",
          path: "/add-meter",
        },
      ],
    };
  },
};
</script>

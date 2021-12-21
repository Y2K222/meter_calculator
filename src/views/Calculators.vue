<template>
  <div class="calculators d-flex align-center justify-center">
    <v-card flat width="400">
      <v-card-text>
        <v-row>
          <v-col cols="12" align="center" class="mt-10">
            <h3 class="dark--text mb-10">တွက်နည်းများ</h3>
          </v-col>
        </v-row>
        <v-radio-group v-model="currentCalculator">
          <v-card
            class="grey lighten-3 my-2"
            style="border: 1px solid #ddd"
            rounded
            outlined
          >
            <v-card-text>
              <v-row>
                <v-col cols="8">
                  <v-radio value="one" label="One title" />
                </v-col>
                <v-col cols="4" align="center">
                  <v-btn icon color="grey"><v-icon>delete</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- Add Calculator -->
          <v-card
            style="border: 3px dashed #ddd"
            rounded
            outlined
            class="my-2"
            @click="$router.push('/add-calculator')"
          >
            <v-card-text>
              <v-row>
                <v-col cols="12" align="center">
                    <p class="body-1 dark--text">
                        <v-icon>add</v-icon> တွက်နည်းအသစ်ထည့်ရန်
                    </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Calculators",
};
</script>

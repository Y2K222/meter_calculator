<template>
  <div
    class="add-meter d-flex align-center justify-center"
    style="height: 100%"
  >
    <v-card flat>
      <v-card-text>
        <v-row>
          <v-col cols="12" align="center">
            <h3 class="dark--text mb-10">ဒေတာအသစ်ထည့်ရန်</h3>
          </v-col>
          <!-- Meter Unit Start -->
          <v-col cols="12" md="4">
            <p class="dark--text font-weight-bold">မီတာယူနစ်</p>
            <v-text-field
              flat
              rounded
              filled
              background-color="grey lighten-2"
              placeholder="မီတာယူနစ်ထည့်ရန်"
              solo
              color="primary"
              type="number"
              v-model="unit"
            />
          </v-col>
          <!-- Meter Unit End -->
          <!-- Date -->
          <v-col cols="12" md="4">
            <p class="dark--text font-weight-bold">ရက်</p>
            <v-date-picker v-model="date"> </v-date-picker>
          </v-col>
          <!-- Time -->
          <v-col cols="12" md="4">
            <p class="dark--text font-weight-bold">အချိန်</p>
            <v-time-picker
              format="ampm"
              full-width
              v-model="time"
            ></v-time-picker>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn rounded large class="primary snow--text mt-10">
               <v-icon>add</v-icon> ဒေတာအသစ်ထည့်မည်
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AddMeter",
  data: function () {
    return {
      unit: null,
      date: null,
      time: null,
    };
  },
};
</script>

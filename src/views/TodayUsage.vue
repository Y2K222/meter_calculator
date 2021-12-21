<template>
  <div
    class="today-usage d-flex align-center justify-center"
    style="height: 100%"
  >
    <div class="main-view flex-column align-center">
      <h3 class="dark--text mb-10">နောက်ဆုံးဖတ်ထားသည့် ဒေတာ</h3>
      <h2 class="primary--text text-center my-3">မီတာယူနစ်</h2>
      <h1 class="green--text text-center mb-10">118928</h1>
      <h2 class="primary--text text-center my-3">ကျသင့်ငွေ</h2>
      <h1 class="green--text text-center mb-10">20000 ကျပ်</h1>
      <v-btn
        rounded
        large
        link
        :to="'/add-meter'"
        block
        class="primary font-weight-bold"
        dark
      >
        <v-icon>note_add</v-icon> ဒေတာအသစ်ထည့်ရန်
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodayUsage",
  data: function () {
    return {
      meterUnit: 405,
      calculator: [
        {
          fromUnit: 1,
          toUnit: 30,
          price: 35,
        },
        {
          fromUnit: 31,
          toUnit: 50,
          price: 50,
        },
        {
          fromUnit: 51,
          toUnit: 75,
          price: 70,
        },
        {
          fromUnit: 76,
          toUnit: 100,
          price: 90,
        },
        {
          fromUnit: 101,
          toUnit: 150,
          price: 110,
        },
        {
          fromUnit: 151,
          toUnit: 200,
          price: 120,
        },
        {
          fromUnit: 201,
          toUnit: 0,
          price: 125,
        },
      ],
    };
  },
  methods: {
    calculateMeter: function () {
      var subtotals = [];
      var meterUnit = this.meterUnit;
      var c = this.calculator;
      for (var i in c) {
        if (c[i].toUnit !== 0) {
          if (meterUnit > 0) {
            var range = c[i].toUnit - (c[i].fromUnit - 1);
            if (meterUnit > range) {
              subtotals.push(range * c[i].price);
              meterUnit -= range;
            } else {
              subtotals.push(meterUnit * c[i].price);
              meterUnit = 0;
            }
          }
        } else {
          console.log(meterUnit);
          subtotals.push(meterUnit * c[i].price);
        }
      }
      console.log(subtotals);
    },
  },
  created: function () {
    this.calculateMeter();
  },
};
</script>

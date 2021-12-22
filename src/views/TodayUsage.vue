<template>
  <div
    class="today-usage d-flex align-center justify-center"
    style="height: 100%"
  >
    <div class="main-view flex-column align-center">
      <h3 class="dark--text mb-10">နောက်ဆုံးဖတ်ထားသည့် ဒေတာ</h3>
      <h3 class="primary--text text-center my-3">မီတာယူနစ်</h3>
      <h2 class="green--text text-center mb-10">{{ meterUnit }}</h2>
      <h3 class="primary--text text-center my-3">အသားတင်ယူနစ်</h3>
      <h2 class="green--text text-center mb-10">{{ netUnit }}</h2>
      <h3 class="primary--text text-center my-3">ကျသင့်ငွေ</h3>
      <h2 class="green--text text-center mb-10">{{ calculateMeter() }} ကျပ်</h2>
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
import MeterUnits from "@/helper/meterUnits";
import Calculator from "@/helper/calculator";
export default {
  name: "TodayUsage",
  data: function () {
    return {
      meterUnit: 0,
      netUnit: 0
    };
  },
  methods: {
    calculateMeter: function () {
      var total = 0;
      var subtotals = [];
      var meterUnit = this.netUnit;
      var c = Calculator.home;
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
          subtotals.push(meterUnit * c[i].price);
        }
      }
      for (i in subtotals) {
        total += subtotals[i];
      }
      return total;
    },
    getLatestMeter: async function () {
      try {
        // Get to toalnumber of meter datas
        var result = await MeterUnits.getTotalMeterCount();
        var totalCount = result.count;

        // Generate skip and limit for last two datas
        var skip = totalCount - 1;
        var limit = 1;
        if (skip < 0) skip = 0;

        // Get last two datas
        var result2 = await MeterUnits.getMeterWithLimit(skip, limit);
        var latestData = result2.totalData[0];
        this.meterUnit = latestData.unit;
        this.netUnit = latestData.netUnit;
      } catch (err) {
        console.log("Error : ", err);
      }
    },
  },
  created: function () {
    this.getLatestMeter();
  },
};
</script>

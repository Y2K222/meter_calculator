<template>
  <div class="datas">
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12" class="dark--text font-weight-bold"> ဒေတာများ </v-col>
        <v-col cols="12" align="center" class="px-0">
          <v-data-table
            :page="page"
            :pageCount="numberOfPages"
            :loading="loading"
            :headers="headers"
            :items="datas"
            :server-items-length="totalCount"
            :options.sync="options"
            :items-per-page="5"
            class="dark--text font-weight-bold"
          >
            <template v-slot:item.price="{ item }">
              {{ calculateMeter(item.netUnit) }}
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MeterUnits from "@/helper/meterUnits";
import Calculator from "@/helper/calculator";
export default {
  data() {
    return {
      page: 1,
      totalCount: 0,
      numberOfPages: 0,
      itemsPerPage: 5,
      datas: [],
      loading: false,
      options: {},
      headers: [
        { text: "ရက်", value: "readDate" },
        { text: "အချိန်", value: "readTime" },
        { text: "မီတာယူနစ်", value: "unit" },
        { text: "အသားတင်ယူနစ်", value: "netUnit" },
        { text: "ကျသင့်ငွေ", value: "price" },
      ],
    };
  },
  methods: {
    calculateMeter: function (unit) {
      var total = 0;
      var subtotals = [];
      var meterUnit = unit;
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
    readDataFromApi: async function (page, itemsPerPage) {
      this.loading = true;
      if (itemsPerPage !== -1) {
        try {
          var result = await MeterUnits.getTotalMeterCount();
          this.totalCount = result.count;

          var skip = this.totalCount - itemsPerPage * page;
          // Check skip and limit values
          skip = skip > 0 ? skip : 0;
          var limit = skip > 0 ? itemsPerPage : itemsPerPage + skip;

          // Get with limit
          var result2 = await MeterUnits.getMeterWithLimit(skip, limit);
          this.datas = result2.totalData;
          this.loading = false;
        } catch (err) {
          this.loading = false;
          console.log("Error : ", err);
        }
      } else {
        this.loading = true;
        this.datas = [];
      }
    },
  },
  watch: {
    options: function (options) {
      this.readDataFromApi(options.page, options.itemsPerPage);
    },
  },
};
</script>

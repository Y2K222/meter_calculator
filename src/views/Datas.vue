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
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MeterUnits from "@/helper/meterUnits";
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
        {
          text: "မီတာယူနစ်",
          value: "unit",
        },
        { text: "ရက်", value: "readDate" },
        { text: "အချိန်", value: "readTime" },
        { text: "ကျသင့်ငွေ", value: "unit" },
      ],
    };
  },
  methods: {
    readDataFromApi: function (page, itemsPerPage) {
      var self = this;
      this.loading = true;
      var meterUnits = new MeterUnits();
      var result = await meterUnits.getTotalMeterCount();
      this.totalCount = result.count;

      let skip = total_vouchers - itemsPerPage * page;
    },
  },
  watch: {
    options: function (options) {
      this.readDataFromApi(options.page, options.itemsPerPage);
    },
  },
};
</script>

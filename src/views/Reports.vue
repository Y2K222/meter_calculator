<template>
  <div class="reports">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <h3 class="dark--text mt-10">ယခုအပတ် အသုံးပြုနှုန်း</h3>
        </v-col>
        <v-col cols="12" md="4">
          <v-card dark class="orange darken-3">
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  အမြင့်ဆုံးအသုံးပြုမှု
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getHighestRange(weekDatas).readDate }} နေ့
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getHighestRange(weekDatas).netUnit }} ယူနစ်
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card dark class="green darken-2">
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  အနိမ့်ဆုံးအသုံးပြုမှု
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getLowestRange(weekDatas).readDate }} နေ့
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getLowestRange(weekDatas).netUnit }} ယူနစ်
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card dark class="primary darken-2">
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  ပျမ်းမျှအသုံးပြုမှု
                </v-col>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getAvarageRange(weekDatas) }} ယူနစ်
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" align="center"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <WeeklyChart :weeklyDatas="weekNetDatas" />
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <h3 class="dark--text mt-3">ယခုလ အသုံးပြုနှုန်း</h3>
        </v-col>
        <v-col cols="12" md="4">
          <v-card dark class="orange darken-3">
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  အမြင့်ဆုံးအသုံးပြုမှု
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getHighestRange(monthDatas).readDate }} နေ့
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getHighestRange(monthDatas).netUnit }} ယူနစ်
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card dark class="green darken-2">
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  အနိမ့်ဆုံးအသုံးပြုမှု
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getLowestRange(monthDatas).readDate }} နေ့
                </v-col>
                <v-col
                  cols="6"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getLowestRange(monthDatas).netUnit }} ယူနစ်
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card dark class="primary darken-2">
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  ပျမ်းမျှအသုံးပြုမှု
                </v-col>
                <v-col
                  cols="12"
                  align="center"
                  class="white--text font-weight-bold"
                >
                  {{ getAvarageRange(monthDatas) }} ယူနစ်
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <MonthlyChart :monthlyDatas="monthNetDatas" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MeterUnits from "@/helper/meterUnits";
import MonthlyChart from "@/components/MonthlyChart";
import WeeklyChart from "@/components/WeeklyChart";
export default {
  name: "Reports",
  components: { MonthlyChart, WeeklyChart },
  data: function () {
    return {
      weekDatas: [],
      monthDatas: [],
      weekNetDatas: [],
      monthNetDatas: [],
      menu: false,
      startDate: null,
      date1: null,
      menu2: false,
      endDate: null,
      date2: null,
    };
  },
  created: async function () {
    this.getCurrentWeekDatas();
    this.getThisMonthDatas();
  },
  methods: {
    getCurrentWeekDatas: async function () {
      var curr = new Date(); // get current date
      var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last = first + 6; // last day is the first day + 6

      var firstday = new Date(curr.setDate(first)).toLocaleDateString();
      var lastday = new Date(curr.setDate(last)).toLocaleDateString();
      try {
        this.weekDatas = await MeterUnits.getMeterWithRange(firstday, lastday);
        for (var i in this.weekDatas) {
          this.weekNetDatas.push(this.weekDatas[i].netUnit);
        }
      } catch (err) {
        console.log("Error : ", err);
      }
    },
    getThisMonthDatas: async function () {
      var date = new Date();
      var firstDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      ).toLocaleDateString("en-029");
      var lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).toLocaleDateString("en-029");
      try {
        this.monthDatas = await MeterUnits.getMeterWithRange(firstDay, lastDay);
        for (var i = 0; i < this.monthDatas.length; i++) {
          this.monthNetDatas.push(this.monthDatas[i].netUnit);
        }
      } catch (err) {
        console.log("Error : ", err);
      }
    },
    getHighestRange: function (data) {
      if (data.length > 0) {
        var max = data.reduce(function (prev, current) {
          return prev.netUnit > current.netUnit ? prev : current;
        }); //returns object
        return max;
      } else {
        return 0;
      }
    },
    getLowestRange: function (data) {
      if (data.length > 0) {
        var min = data.reduce(function (prev, current) {
          return prev.netUnit > current.netUnit ? current : prev;
        }); //returns object
        return min;
      } else {
        return 0;
      }
    },
    getAvarageRange: function (data) {
      var unitArray = [];
      var total = 0;
      if (data.length > 0) {
        for (var i in data) {
          unitArray.push(data[i].netUnit);
        }
        unitArray.map((unit) => {
          total += parseInt(unit);
        });
        return (total / unitArray.length).toFixed(0);
      } else {
        return 0;
      }
    },
  },
};
</script>

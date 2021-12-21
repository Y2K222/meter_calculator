<template>
  <div class="add-calculator d-flex justify-center" style="height: 100%">
    <v-card flat width="400" class="mb-10">
      <v-card-text>
        <v-row>
          <v-col cols="12" align="center" class="mt-10">
            <h3 class="dark--text mb-10">တွက်နည်း အသစ်ထည့်ရန်</h3>
          </v-col>
        </v-row>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">မှ</th>
                <th class="text-center">ထိ</th>
                <th class="text-center">ကျသင့်ငွေ</th>
                <th class=""></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(interval, index) in intervals" :key="index">
                <td class="dark--text text-center">{{ interval.fromUnit }}</td>
                <td class="dark--text text-center">{{ interval.toUnit }}</td>
                <td class="dark--text text-center">{{ interval.price }}</td>
                <td class="text-center">
                  <v-btn @click="intervals.splice(index, 1)" icon color="grey"
                    ><v-icon>delete</v-icon></v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-row class="mt-10">
          <v-col cols="6">
            <p class="dark--text font-weight-bold">ယူနစ်မှ</p>
            <v-text-field
              flat
              rounded
              filled
              background-color="grey lighten-2"
              solo
              color="primary"
              placeholder="ယူနစ်ထည့်ရန်"
              type="number"
              v-model="fromUnit"
            />
          </v-col>
          <v-col cols="6">
            <p class="dark--text font-weight-bold">ယူနစ်ထိ</p>
            <v-text-field
              flat
              rounded
              filled
              background-color="grey lighten-2"
              solo
              color="primary"
              placeholder="ယူနစ်ထည့်ရန်"
              type="number"
              v-model="toUnit"
            />
          </v-col>
          <v-col cols="12">
            <p class="dark--text font-weight-bold">ကျသင့်ငွေ (ကျပ်)</p>
            <v-text-field
              flat
              rounded
              filled
              background-color="grey lighten-2"
              solo
              color="primary"
              placeholder="ကျသင့်ငွေထည့်ရန်"
              type="number"
              v-model="price"
            />
          </v-col>
          <v-col align="center">
            <v-btn @click="handleAdd" rounded large class="primary snow--text">
              <v-icon>add</v-icon> ထည့်မည်
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AddCalcualtor",
  data: function () {
    return {
      intervals: [],
      fromUnit: null,
      toUnit: null,
      price: null,
    };
  },
  methods: {
    handleAdd: function () {
      this.intervals.push({
        fromUnit: this.fromUnit,
        toUnit: this.toUnit,
        price: this.price,
      });
      this.fromUnit = null;
      this.toUnit = null;
      this.price = null;
    },
    getFromUnit: function () {
      if (this.intervals.length > 0) {
        return this.intervals[this.intervals.length - 1].toUnit + 1;
      } else {
        return 0;
      }
    },
  },
};
</script>

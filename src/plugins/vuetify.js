import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#6898c1",
                green: "#22c98c",
                snow: "#ededed",
                dark: "#838383"
            }
        }
    }
});

import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#0E7917',
                secondary: '#3A3A3A',
                accent: '#3D693A',
                error: '#850707',
                warning: '#FF5722',
                info: '#1C5BAF',
                success: '#116E13'
            }
        },
    },
    icons: {
        iconfont: 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
})

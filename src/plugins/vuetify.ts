import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#0E7917FF',
                secondary: '#3A3A3AFF',
                accent: '#3D693AFF',
                error: '#850707FF',
                warning: '#FF5722',
                info: '#1C5BAFFF',
                success: '#116E13FF'
            }
        },
    },
    icons: {
        iconfont: 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
})

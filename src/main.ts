import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import VModal from "vue-js-modal";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import {defaultLocale, messages} from "@/i18n";
import {HttpLink} from "apollo-link-http";
import {persistCache} from "apollo-cache-persist";
import {InMemoryCache, NormalizedCacheObject} from "apollo-cache-inmemory";
import {PersistedData, PersistentStorage} from "apollo-cache-persist/types";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

document.title = 'Med - Demo';
Vue.config.productionTip = false;

const headers = {'authorization': '', 'content-type': '', 'x-hasura-admin-secret': ''};

const token = window.localStorage.getItem('apollo-token');
if (token) headers.authorization = `Bearer ${token}`;
headers['content-type'] = 'application/json';
headers['x-hasura-admin-secret'] = ':bf>dv<Hid3`s$TP{iUhE]J"Se_sZN';

const apolloLink = new HttpLink({uri: 'https://magister-app-client.herokuapp.com/v1/graphql', fetch, headers: headers})
const apolloCache = new InMemoryCache({addTypename: false});
const apolloStorage = window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>;

export const apolloClient = new ApolloClient({
    link: apolloLink,
    cache: apolloCache,
    resolvers: {}
});

const apolloProvider = new VueApollo({defaultClient: apolloClient});

persistCache({cache: apolloCache, storage: apolloStorage}).then();

Vue.use(VueI18n);
Vue.use(VModal);
Vue.use(VueApollo);
Vue.use(VueCookies);

export const i18n = new VueI18n({locale: defaultLocale, messages, fallbackLocale: defaultLocale});

Vue.mixin({
    methods: {
        i18n(key: string): string {
            return this.$t(key).toString();
        }
    }
})

new Vue({router, apolloProvider, i18n, vuetify, render: h => h(App)}).$mount('#app');

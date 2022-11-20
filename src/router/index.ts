import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "@/views/start/StartPage.vue";
import LocationsPage from "@/views/locations/LocationsPage.vue";
import DoctorsPage from "@/views/doctors/DoctorsPage.vue";
import AppointmentsPage from "@/views/appointments/AppointmentsPage.vue";
import ReservationPage from "@/views/reservation/ReservationPage.vue";
import TermsPage from "@/views/terms/TermsPage.vue";
import ConfirmationPage from "@/views/confirmation/ConfirmationPage.vue";

Vue.use(VueRouter)

const routes = [
    {name: 'Start', path: '/start', component: StartPage},
    {name: 'Locations', path: '/locations', component: LocationsPage},
    {name: 'Doctors', path: '/doctors', component: DoctorsPage},
    {name: 'Appointments', path: '/appointments?location=:location?&doctor=:doctor?', component: AppointmentsPage},
    {
        name: 'Reservation',
        path: '/reservation?location=:location&doctor=:doctor&hour=:hour&date=:date&reservationId=:reservationId',
        component: ReservationPage
    },
    {name: 'Terms', path: '/terms', component: TermsPage},
    {
        name: 'Confirmation',
        path: '/confirmation?location=:location&doctor=:doctor&hour=:hour&date=:date&reservationId=:reservationId',
        component: ConfirmationPage
    },
    {path: '*', redirect: '/start'}
];

const router = new VueRouter({base: '/', routes});

export default router;

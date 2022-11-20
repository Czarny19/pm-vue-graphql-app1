import gql from "graphql-tag";

export const GET_PAGES = gql`query getPages {
    Med_Pages(order_by: {order: desc}) {
        id
        name
        bg_color
        description
        img_link
        text_color
    }
}`

export const GET_LOCATIONS = gql`query getLocations {
    Med_Location (order_by: {id: asc}) {
        id
        address_line_1
        address_line_2
        description
        name
        phone_number
    }
}`

export const GET_DOCTORS = gql`query getDoctors {
    Med_Doctor {
        id
        name
        specialization
        monday_hours
        monday_location
        tuesday_hours
        tuesday_location
        wednesday_hours
        wednesday_location
        thursday_hours
        thursday_location
        friday_hours
        friday_location
    }
}`

export const GET_DOCTORS_PICKLIST = gql`query getDoctorsPicklist {
    Med_Doctor {
        id
        name
    }
}`

export const GET_LOCATIONS_PICKLIST = gql`query getLocationsPicklist {
    Med_Location {
        id
        name
    }
}`

export const GET_APPOINTMENTS = gql`query getAppointments {
    Med_Appointments (order_by: {date: asc}) {
        id
        date
        doctor_id
        location_id
        doctor {
            id
            name
        }
        location {
            id
            name
        }
        reservations {
            id
            hour
            is_reserved
        }
    }
}`

export const RESERVE_APPOINTMENT = gql`mutation rezerwacja
(
    $id: bigint,
    $isReserved: Boolean,
    $name: String,
    $surname: String,
    $email: String,
    $phone: String,
    $cause: String
) {
    update_Med_Reservation (_set: {
        is_reserved: $isReserved
        name: $name
        surname: $surname
        patient_phone_num: $phone
        patient_email: $email
        couse: $cause
    }, where: {_and: [{id: {_eq: $id}}, {is_reserved: {_neq: $isReserved}}]}) {
        affected_rows
    }
}`

export type Page = {
    id: number;
    name: string;
    bg_color: string;
    description: string;
    img_link: string;
    text_color: string;
}

export type Location = {
    id: number;
    address_line_1: string;
    address_line_2: string;
    description: string;
    name: string;
    phone_number: string;
}

export type Doctor = {
    id: number;
    name: string;
    specialization: string;
    monday_hours: string;
    monday_location: string;
    tuesday_hours: string;
    tuesday_location: string;
    wednesday_hours: string;
    wednesday_location: string;
    thursday_hours: string;
    thursday_location: string;
    friday_hours: string;
    friday_location: string;
}

export type Appointment = {
    id: number;
    doctor_id: number;
    location_id: number;
    date: string;
    location: {
        id: number;
        name: string;
    },
    doctor: {
        id: number;
        name : string;
    }
    reservations: Reservation[];
}

export type Reservation = {
    id: number;
    hour: string;
    is_reserved: boolean;
    name: string;
    surname: string;
    email: string;
    phone: string;
    cause: string;
}

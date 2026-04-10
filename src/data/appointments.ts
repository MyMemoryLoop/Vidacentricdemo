import type { Appointment } from '../types';

export const APPOINTMENTS: Appointment[] = [
    {
        id: 'apt-1',
        userId: 'user-emp-1',
        type: 'video',
        date: '2026-04-15',
        time: '14:00',
        doctorName: 'Dr. Sarah Ahmed',
        speciality: 'General Practitioner',
        status: 'upcoming'
    }
];

export const getAppointmentsForUser = (userId: string) => APPOINTMENTS.filter(a => a.userId === userId);

import type { Plan } from '../types';

export const PLANS: Plan[] = [
    {
        id: 'plan-starter',
        name: 'Starter',
        priceDesc: '£5/employee/month',
        maxEmployees: 100,
        features: ['Digital Health Scan']
    },
    {
        id: 'plan-enterprise',
        name: 'Enterprise',
        priceDesc: '£12/employee/month',
        maxEmployees: 500,
        features: ['Digital Health Scan', 'Telehealth']
    },
    {
        id: 'plan-enterprise-plus',
        name: 'Enterprise Plus',
        priceDesc: '£18/employee/month',
        maxEmployees: null,
        features: ['Digital Health Scan', 'Telehealth', 'Wellness Library', 'Custom Reports']
    }
];

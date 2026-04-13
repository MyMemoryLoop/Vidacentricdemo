export interface OrgEmployee {
    id: string;
    name: string;
    email: string;
    department: string;
    status: 'Active' | 'Inactive' | 'Invited';
    lastScanDate: string | null;
    vidaScore: number | null;
}

export interface OrgInvoice {
    id: string;
    date: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Overdue';
    billingCycle: string;
}

export const MOCK_ORG_EMPLOYEES: OrgEmployee[] = [
    { id: 'emp-1', name: 'Jane Doe', email: 'jane@demo.com', department: 'Engineering', status: 'Active', lastScanDate: '2026-04-12', vidaScore: 84 },
    { id: 'emp-2', name: 'Alfie Solomons', email: 'alfie@demo.com', department: 'Sales', status: 'Active', lastScanDate: '2026-04-10', vidaScore: 72 },
    { id: 'emp-3', name: 'Arthur Shelby', email: 'arthur@demo.com', department: 'Sales', status: 'Inactive', lastScanDate: '2025-11-20', vidaScore: 61 },
    { id: 'emp-4', name: 'Tommy Shelby', email: 'tommy@demo.com', department: 'Executive', status: 'Active', lastScanDate: '2026-04-13', vidaScore: 91 },
    { id: 'emp-5', name: 'Polly Gray', email: 'polly@demo.com', department: 'Finance', status: 'Active', lastScanDate: '2026-04-01', vidaScore: 88 },
    { id: 'emp-6', name: 'Finn Shelby', email: 'finn@demo.com', department: 'Engineering', status: 'Invited', lastScanDate: null, vidaScore: null },
    { id: 'emp-7', name: 'Michael Gray', email: 'michael@demo.com', department: 'Finance', status: 'Active', lastScanDate: '2026-03-28', vidaScore: 79 },
    { id: 'emp-8', name: 'Grace Burgess', email: 'grace@demo.com', department: 'Marketing', status: 'Active', lastScanDate: '2026-04-11', vidaScore: 94 },
    { id: 'emp-9', name: 'John Shelby', email: 'john@demo.com', department: 'Operations', status: 'Inactive', lastScanDate: null, vidaScore: null },
    { id: 'emp-10', name: 'Lizzie Stark', email: 'lizzie@demo.com', department: 'Operations', status: 'Active', lastScanDate: '2026-04-09', vidaScore: 82 },
];

export const MOCK_ORG_INVOICES: OrgInvoice[] = [
    { id: 'INV-2026-04', date: '2026-04-01', amount: 12500.00, status: 'Pending', billingCycle: 'April 2026' },
    { id: 'INV-2026-03', date: '2026-03-01', amount: 12500.00, status: 'Paid', billingCycle: 'March 2026' },
    { id: 'INV-2026-02', date: '2026-02-01', amount: 12500.00, status: 'Paid', billingCycle: 'February 2026' },
    { id: 'INV-2026-01', date: '2026-01-01', amount: 12500.00, status: 'Paid', billingCycle: 'January 2026' },
];

export const MOCK_ORG_ANALYTICS = [
    { month: 'Jan', activeUsers: 45, scansCompleted: 120, avgScore: 78 },
    { month: 'Feb', activeUsers: 52, scansCompleted: 145, avgScore: 80 },
    { month: 'Mar', activeUsers: 68, scansCompleted: 210, avgScore: 82 },
    { month: 'Apr', activeUsers: 84, scansCompleted: 280, avgScore: 85 },
];

export const MOCK_ORG_DEPARTMENTS = [
    { name: 'Engineering', participation: 92 },
    { name: 'Sales', participation: 68 },
    { name: 'Marketing', participation: 85 },
    { name: 'Finance', participation: 100 },
    { name: 'Operations', participation: 74 },
];

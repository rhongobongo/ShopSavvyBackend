// backend/src/models/User.ts
export interface User {
    id: number;
    name: string;
    email: string;
}

export const users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];
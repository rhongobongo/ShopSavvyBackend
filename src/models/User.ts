// backend/src/models/User.ts
export interface User {
    id: number;
    name: string;
    email: string;
    password: string
}

export const users: User[] = [
    { id: 1, name: "John Deer", email: "john@example.com", password: "69420" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" ,password: "69420"}
];
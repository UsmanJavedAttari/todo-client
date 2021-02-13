export class User {
    Id?: string | null = null;
    Name: string | null = null;
    Email: string | null = null;
    Password: string | null = null;

    constructor(data?: Partial<User>) {
        Object.assign(this, data);
    }
}

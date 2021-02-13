import { User } from '../user';

export class SessionModel {
    User = new User();

    constructor(data?: Partial<SessionModel>) {
        Object.assign(this, data);
    }
}

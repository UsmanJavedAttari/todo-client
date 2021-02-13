import { SessionModel } from '../models';
import { CookieBrowser, Cookies } from './cookie-browser';
import { ServiceClass } from '@/decorators';
import { BehaviorSubject } from 'rxjs';

@ServiceClass()
export class ApiAuth {
    public Session = new BehaviorSubject<SessionModel | null>(null);
    private Cookie: Cookies = new CookieBrowser();

    get SessionValue() {
        return this.Session.value;
    }

    constructor() {
        this.fetchCookies();
    }

    public fetchCookies() {
        this.Session.next(
            new SessionModel({
                User: JSON.parse(this.load('User'))
            })
        );
    }
    public save() {
        if (this.SessionValue) {
            for (const item of Object.entries(this.SessionValue)) {
                this.persist(item[0], item[1]);
            }
            return true;
        }
        return false;
    }
    private load(Key: string): any {
        return this.Cookie.get(Key);
    }
    public clear(): void {
        if (this.Session.value) {
            Object.keys(this.Session.value).forEach((key: string) =>
                this.Cookie.remove(key)
            );
        }
        this.Session.next(null);
    }
    private persist(key: string, value: any, expires?: Date) {
        this.Cookie.set(
            key,
            typeof value === 'object' ? JSON.stringify(value) : value,
            { expires }
        );
    }
}

import { subDays } from 'date-fns';
import { ServiceClass } from '@/decorators';

export interface CookiesOption {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
}
export interface Cookies {
    get: (key: string) => string | null;
    set: (key: string, value: any, option?: CookiesOption) => void;
    remove: (key: string) => void;
}

@ServiceClass()
export class CookieBrowser implements Cookies {
    private Prefix = '$TODO$';

    public get(key: string): string | null {
        const value = `; ${document.cookie}`;
        const parts = value.split(
            `; ${encodeURIComponent(this.Prefix + key)}=`
        );
        if (parts.length >= 2) {
            return decodeURIComponent(
                parts
                    .pop()!
                    .split(';')
                    .shift()!
            );
        } else {
            return null;
        }
    }
    public set(key: string, value: any, option?: CookiesOption | undefined) {
        key = encodeURIComponent(this.Prefix + key);
        value = encodeURIComponent(value);
        document.cookie = `${key}=${value};expires=${(
            option?.expires ?? new Date(2100029104299)
        ).toUTCString()};path=/`;
    }
    public remove(key: string): void {
        document.cookie = `${encodeURIComponent(
            this.Prefix + key
        )}=;expires=${subDays(Date.now(), 1).toUTCString()};path=/`;
    }
}

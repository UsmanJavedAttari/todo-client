import { Login, User } from '@/sdk/models';
import { BaseApi } from '../base.api';

export class AccountApi extends BaseApi {
    login(loginData: Login) {
        return this.POST_Request<User>(
            `${this.ApiUrl}/account/login`,
            loginData
        );
    }
}

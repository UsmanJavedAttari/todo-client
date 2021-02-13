import { AlertService, LoaderService, Login, SessionModel } from '@/sdk';
import { AccountApi } from '@/sdk/apis/authentication';
import { ApiAuth } from '@/sdk/core';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginComponent extends Vue {
    LoginData = new Login();

    login() {
        new LoaderService().showFullScreenLoader('Logging in...');
        new AccountApi()
            .login(this.LoginData)
            .subscribe(
                ({ Data }) => {
                    new ApiAuth().Session.next({ User: Data! });
                    new ApiAuth().save();

                    new AlertService().show('success', 'Login');
                    this.$router.push({ name: 'Dashboard' });
                },
                ({ message }) => {
                    new AlertService().show('error', message);
                }
            )
            .add(() => {
                new LoaderService().hideFullScreenLoader();
            });
    }
}

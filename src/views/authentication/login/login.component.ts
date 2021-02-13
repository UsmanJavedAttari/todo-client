import { Login } from '@/sdk';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginComponent extends Vue {
    LoginData = new Login();

    login() {
        alert('Login');
    }
}

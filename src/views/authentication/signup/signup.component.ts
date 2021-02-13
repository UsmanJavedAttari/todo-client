import { Signup } from '@/sdk';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignupComponent extends Vue {
    SignupData = new Signup();

    signup() {
        alert('...');
    }
}

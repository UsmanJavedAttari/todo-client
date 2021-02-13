import { Component, Vue } from 'vue-property-decorator';
import { LoaderService } from './sdk';

@Component
export default class AppComponent extends Vue {
    private LoaderSrv = new LoaderService();
}

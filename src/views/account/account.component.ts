import AppBarComponent from '@/components/core/Appbar/app-bar.component';
import DrawerComponent from '@/components/core/Drawer/drawer.component';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        AppBarComponent,
        DrawerComponent
    }
})
export default class AccountComponent extends Vue {}

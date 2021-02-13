import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver } from 'vee-validate';

@Component({
    components: {
        ValidationObserver
    }
})
export default class BaseFormComponent extends Vue {
    // Refs
    public $refs!: {
        baseForm: any;
    };

    // Methods
    public reset() {
        this.$refs.baseForm.reset();
    }
}

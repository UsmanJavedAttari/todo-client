import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseInput extends Vue {
    // Props
    @Prop({ default: '', type: String })
    protected readonly rules!: string;

    @Prop({ type: String })
    protected readonly vid!: string;

    @Prop({ default: null })
    protected readonly value!: string | null;

    @Prop({ default: false, type: Boolean })
    protected readonly outlined!: boolean;

    @Prop({ default: false, type: Boolean })
    protected readonly dense!: boolean;

    // Methods
    protected pageModified() {
        //
    }
}

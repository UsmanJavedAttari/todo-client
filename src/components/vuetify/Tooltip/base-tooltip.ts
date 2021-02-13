import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseTooltip extends Vue {
    @Prop({
        default: 'top',
        type: String
    })
    private readonly direction!: string;

    @Prop({
        required: true,
        type: String
    })
    private readonly msg!: string;

    @Prop({
        default: 'primary',
        type: String
    })
    private readonly color!: string;
}

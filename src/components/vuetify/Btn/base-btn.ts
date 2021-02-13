import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseBtn extends Vue {
    @Prop({ type: String, default: 'primary' })
    public readonly color!: string;
}

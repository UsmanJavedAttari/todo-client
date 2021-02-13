import { Component } from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';
import BaseInput from '../Input/base-input';

@Component({
    components: {
        ValidationProvider
    }
})
export default class BaseTextField extends BaseInput {
    public IsCapsLockOn = false;
    public checkCapsLock(event: KeyboardEvent) {
        this.IsCapsLockOn =
            event.getModifierState && event.getModifierState('CapsLock');
    }

    public handleBlur() {
        this.IsCapsLockOn = false;
        if (this.$attrs.type === 'number') {
            this.$emit('update:value', '' + +(this.value ?? 0));
        } else {
            this.$emit(
                'update:value',
                !!this.value && this.$attrs.type !== 'password'
                    ? this.value.trim()
                    : this.value
            );
        }
    }
}

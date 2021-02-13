import Vue from 'vue';
import BaseBtn from './vuetify/Btn/base-btn';
import BaseMenu from './vuetify/Menu/base-menu';
import BaseSwitch from './vuetify/Switch/base-switch';
import BaseSelect from './vuetify/Select/base-select';
import BaseTooltip from './vuetify/Tooltip/base-tooltip';
import BaseFormComponent from './vuetify/Form/base-form';
import BaseTextarea from './vuetify/Textarea/base-textarea';
import BaseCheckbox from './vuetify/Checkbox/base-checkbox';
import BaseCombobox from './vuetify/Combobox/base-combobox';
import BaseTextField from './vuetify/TextField/base-text-field';
import BaseAutocomplete from './vuetify/Autocomplete/base-autocomplete';

// Vuetify Components
Vue.component('base-text-field', BaseTextField);
Vue.component('base-textarea', BaseTextarea);
Vue.component('base-menu', BaseMenu);
Vue.component('base-btn', BaseBtn);
Vue.component('base-switch', BaseSwitch);
Vue.component('base-checkbox', BaseCheckbox);
Vue.component('base-select', BaseSelect);
Vue.component('base-autocomplete', BaseAutocomplete);
Vue.component('base-combobox', BaseCombobox);
Vue.component('base-form', BaseFormComponent);
Vue.component('base-tooltip', BaseTooltip);

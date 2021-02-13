import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import {
    required,
    email,
    max,
    min,
    confirmed,
    size,
    between
} from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);

extend('required', {
    ...required,
    message: 'This field is required.'
});

extend('email', {
    ...email,
    message: 'Email must be valid.'
});

extend('phone', {
    validate: value =>
        new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(
            value
        ),
    message: 'Phone must be in ###-###-#### format.'
});

extend('max', {
    ...max,
    message: 'This field must not be greater than {length} characters.'
});

extend('min', {
    ...min,
    message: 'This field must be at least {length} characters.'
});

extend('between', {
    ...between,
    message: 'This field must be between {min} and {max}.'
});

extend('confirmed', {
    ...confirmed,
    message: "{target} confirmation doesn't match!"
});

extend('size', {
    ...size,
    message: 'File must not be greater than {size}KB.'
});

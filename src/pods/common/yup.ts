import * as yup from 'yup';

yup.setLocale({
    mixed: {
        required: 'validations.required',
    },
    string: {
        email: 'validations.email',
        url: 'validations.url',
        matches: 'validations.matches',
    },
    number: {
        min: 'validations.min',
        max: 'validations.max',
    }
});

export default yup;

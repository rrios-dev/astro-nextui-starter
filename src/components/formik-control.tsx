import { useField, useFormikContext } from 'formik';
import { type ComponentProps, type ComponentType } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormikControlProps<T extends ComponentType<any>> = ComponentProps<T> & {
    name: string;
    Input: T;
};

// TODO: Enhance typings
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormikControl = <T extends ComponentType<any>>({
    Input,
    name,
    type,
    ...rest
}: FormikControlProps<T>) => {
    const { submitCount } = useFormikContext();
    const [field, { error }] = useField(name as string);
    const displayError = submitCount > 0 && Boolean(error);
    const { t } = useTranslation();

    return (
        <Input
            {...rest}
            {...field}
            type={type}
            name={name as string}
            {...(displayError && type !== 'checkbox' && { errorMessage: t(error as string) })}
            isInvalid={displayError}
        />
    );
};

export default FormikControl;

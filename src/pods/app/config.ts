import yup from '../common/yup';

const validationSchema = yup.object().shape({
    strapi: yup.object().shape({
        filesUrl: yup.string().required(),
        graphqlUrl: yup.string().required(),
    }),
});

const config = validationSchema.validateSync({
    strapi: {
        filesUrl: import.meta.env.PUBLIC_CMS_FILES,
        graphqlUrl: import.meta.env.PUBLIC_CMS_GRAPHQL_URL,
    },
});

export default config;

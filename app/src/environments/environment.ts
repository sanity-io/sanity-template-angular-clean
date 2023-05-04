export const environment = {
  production: false,
  sanity: {
    projectId: process.env['SANITY_PROJECT_ID'] || 'anokeucs',
    dataset: process.env['SANITY_DATASET'] || 'production',
    apiVersion: '2022-05-01',
    useCdn: true, // set to false for fresh data
  },
};

const PROJECT_ID = "";
const DATASET = "";

if (!PROJECT_ID || !DATASET) {
  throw new Error(
    "Sanity project ID and dataset name are required. Go into `app/src/environments/environment.ts` and set them."
  );
}

export const environment = {
  production: false,
  sanity: {
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: "2022-05-01",
    useCdn: true, // set to false for fresh data
  },
};

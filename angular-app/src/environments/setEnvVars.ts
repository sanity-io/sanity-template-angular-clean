// This file generates the Angular environment.ts file with the required environment variables from the .env file.

const setEnv = () => {
  const fs = require("fs");
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = "./src/environments/environment.ts";
  // Load node modules
  require("dotenv").config({
    path: "./.env",
  });

  if (!process.env["SANITY_PROJECT_ID"] || !process.env["SANITY_DATASET"]) {
    console.error(
      "Sanity project ID and dataset name are required. Go into 'app/src/environments/environment.ts' and set them."
    );
  }
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  production: false,
  sanity: {
    projectId: '${process.env["SANITY_PROJECT_ID"]}',
    dataset: '${process.env["SANITY_DATASET"]}',
    apiVersion: "2024-12-12",
    useCdn: true, // set to false for fresh data
  },
};

console.log("environment:", environment);
`;
  //   const envConfigFile = `export const environment = {
  //   SANITY_PROJECT_ID: '${process.env["SANITY_PROJECT_ID"]}',
  //   SANITY_DATASET: '${process.env["SANITY_DATASET"]}',
  //   production: true,
  // };
  // `;
  // console.log(
  //   "The file `environment.ts` will be written with the following content: \n"
  // );
  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();

# Clean Angular + Sanity app

This template includes a [Angular](https://angular.dev/) app with a [Sanity Studio](https://www.sanity.io/) – an open-source React application that connects to your Sanity project’s hosted dataset. The Studio is configured locally and can then be deployed for content collaboration.

## Features

- Fetch content seamlessly with [Sanity Content Lake](https://www.sanity.io/docs/datastore).
- Render beautiful block content using [Portable Text](https://www.sanity.io/docs/presenting-block-text).
- Manage and create content with the intuitive [Sanity Studio](https://www.sanity.io/docs/sanity-studio).
- Advanced image cropping and rendering via [Sanity Image URLs](https://www.sanity.io/docs/image-url).

## Demo

https://sanity-template-angular-clean.sanity.build

## Getting Started

### Install the template

#### 1. Initialize template with Sanity CLI

Run the command in your Terminal to initialize this template on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/help/cli-errors).

```shell
npm create sanity@latest -- --template sanity-template-angular-clean
```

#### 2. Configure your angular environment variables

Copy your project ID and dataset name to the variables into `/angular-app/src/environments/environments.ts`. You can find these in `/studio/.env`.

#### 3. Run the application and Sanity Studio

Navigate back to the template's root directory and start the development servers by running the following command

```shell
npm run dev
```

#### 4. Open the app and sign in to the Studio

Open the Angular app running locally in your browser on [http://localhost:4200](http://localhost:4200).

Open the Studio running locally in your browser on [http://localhost:3333](http://localhost:3333). You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

### Adding content with Sanity

#### 1. Publish your first document

The template comes pre-defined with a schema containing a `Post` document type.

From the Studio, click "+ Create" and select the `Post` document type. Go ahead and create and publish the document.

Your content should now appear in your Angular app ([http://localhost:4200](http://localhost:4200)) as well as in the Studio on the "Presentation" Tab

#### 2. Extending the Sanity schema

The schema for the `Post` document type is defined in the `studio/src/schemaTypes/post.ts` file. You can [add more document types](https://www.sanity.io/docs/schema-types) to the schema to suit your needs.

### Deploying your application and inviting editors

#### 1. Deploy Sanity Studio

Your Angular frontend (`/angular-app`) and Sanity Studio (`/studio`) are still only running on your local computer. It's time to deploy and get it into the hands of other content editors.

Back in your Studio directory (`/studio`), run the following command to deploy your Sanity Studio.

```shell
npx sanity deploy
```

#### 2. Deploy Angular app to Vercel

You have the freedom to deploy your Angular app to your hosting provider of choice. With Vercel and GitHub being a popular choice, we'll cover the basics of that approach.

1. Create a GitHub repository from this project. [Learn more](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
2. Create a new Vercel project and connect it to your Github repository.
3. Set the `Root Directory` to your Angular app.
4. Configure your Environment Variables.

#### 3. Invite a collaborator

Now that you’ve deployed your Angular application and Sanity Studio, you can optionally invite a collaborator to your Studio. Open up [Manage](https://www.sanity.io/manage), select your project and click "Invite project members"

They will be able to access the deployed Studio, where you can collaborate together on creating content.

## Resources

- [Sanity documentation](https://www.sanity.io/docs)
- [Angular documentation](https://angular.dev/overview)
- [Join the Sanity Community](https://slack.sanity.io)
- [Learn Sanity](https://www.sanity.io/learn)

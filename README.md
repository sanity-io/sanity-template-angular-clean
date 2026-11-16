# Clean Angular + Sanity app

This template includes a [Angular](https://angular.dev/) app with a [Sanity Studio](https://www.sanity.io/) – an open-source React application that connects to your Sanity project’s hosted dataset. The Studio is configured locally and can then be deployed for content collaboration.

## Features

- Fetch content seamlessly with [Sanity Content Lake](https://www.sanity.io/docs/datastore).
- Render beautiful block content using [Portable Text](https://www.sanity.io/docs/presenting-block-text).
- Manage and create content with the intuitive [Sanity Studio](https://www.sanity.io/docs/sanity-studio).
- Advanced image cropping and rendering via [Sanity Image URLs](https://www.sanity.io/docs/image-url).
- Click-to-edit overlays and live preview in the [Presentation tool](https://www.sanity.io/docs/presentation) via [`@sanity/visual-editing-standalone`](https://github.com/sanity-io/visual-editing/tree/main/packages/visual-editing-standalone).

## Demo

https://sanity-template-angular-clean.sanity.build

## Getting Started

### Installing the template

#### 1. Initialize template with Sanity CLI

Run the command in your Terminal to initialize this template on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/help/cli-errors).

```shell
npm create sanity@latest -- --template sanity-io/sanity-template-angular-clean
```

#### 2. Copy the project id and dataset to the Angular project

Copy the project id and dataset from the generated `.env` file in the `/studio` directory to the Angular project's environment file.

Specifically:

1. Open the `/studio/.env` file and note the values for `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`
2. Create or edit the `/angular-app/.env` file based on the `.env.example` template
3. Add the following lines with your values:

```
SANITY_PROJECT_ID="your-project-id"
SANITY_DATASET="your-dataset-name"
```

#### 3. Run the application and Sanity Studio

Navigate back to the template's root directory and start the development servers by running the following command

```shell
npm run dev
```

#### 3. Open the app and sign in to the Studio

Open the Angular app running locally in your browser on [http://localhost:4200](http://localhost:4200).

Open the Studio running locally in your browser on [http://localhost:3333](http://localhost:3333). You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

### Adding content with Sanity

#### 1. Publish your first document

The template comes pre-defined with a schema containing a `Post` document type.

From the Studio, click "+ Create" and select the `Post` document type. Go ahead and create and publish the document.

Your content should now appear in your Angular app ([http://localhost:4200](http://localhost:4200)).

#### 2. Extending the Sanity schema

The schema for the `Post` document type is defined in the `studio/src/schemaTypes/post.ts` file. You can [add more document types](https://www.sanity.io/docs/schema-types) to the schema to suit your needs.

### Visual Editing

The Studio includes the Presentation tool, which shows the Angular app next to the document editor. When the app is loaded by Presentation and a viewer token is configured, it switches to preview mode:

- Content is fetched from the API (not the CDN) with the perspective selected in Presentation, which defaults to drafts. Strings are [stega-encoded](https://www.sanity.io/docs/stega) so overlays know which document and field they came from. Images get a `data-sanity` attribute instead.
- `src/app/visual-editing.ts` enables the overlays with `@sanity/visual-editing-standalone`, keeps the Presentation URL bar in sync with the Angular router, and reloads content when you edit a document or press refresh in Presentation.

Anyone who opens the app outside Presentation, or uses a build without a token, gets the normal site: published content from the CDN, no overlays and no stega. The overlay code is only downloaded in preview mode.

#### Try it locally

1. Create a token with the Viewer role in [Manage](https://www.sanity.io/manage) under API > Tokens, and add it to `/angular-app/.env`:

   ```
   SANITY_API_READ_TOKEN="your-viewer-token"
   ```

2. Allow the Angular app to send authenticated requests by adding its origin as a CORS origin with credentials. From the `/studio` directory:

   ```shell
   npx sanity cors add http://localhost:4200 --credentials
   ```

3. Restart `npm run dev`, open the Studio at [http://localhost:3333](http://localhost:3333) and select **Presentation**. Hover over a title, excerpt, body text or image and click it to open that field. Your edits show up in the preview as you type.

#### Environment variables

| Variable                    | Where               | Description                                                                                   |
| --------------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| `SANITY_API_READ_TOKEN`     | `/angular-app/.env` | Viewer token used to fetch drafts in preview mode. Leave it empty to turn Visual Editing off. |
| `SANITY_STUDIO_URL`         | `/angular-app/.env` | Studio URL that overlays open. Defaults to `http://localhost:3333`.                           |
| `SANITY_STUDIO_PREVIEW_URL` | `/studio/.env`      | URL of the Angular app shown in Presentation. Defaults to `http://localhost:4200`.            |

#### Deploying with Visual Editing

The Angular app has no server, so the token is bundled into the browser JavaScript. Never set `SANITY_API_READ_TOKEN` on your public deployment. Instead, deploy a second copy of the app with the token, keep it private (for example behind your host's deployment protection), and add its origin to CORS with credentials. Then set `SANITY_STUDIO_PREVIEW_URL` in the Studio to that deployment, and `SANITY_STUDIO_URL` in the preview deployment to your deployed Studio.

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

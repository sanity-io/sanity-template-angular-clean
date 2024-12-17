# A minimal Angular SPA with Sanity Studio

This starter uses [Angular](https://angular.io/) for the front end and [Sanity](https://www.sanity.io/) to handle its content.

## Featuring

- How to fetch content as data from [the Sanity Content Lake](https://www.sanity.io/docs/datastore)
- How to render block content with [Portable Text](https://www.sanity.io/docs/presenting-block-text)
- A [Sanity Studio](https://www.sanity.io/docs/sanity-studio) to create and edit content
- How to crop and render images with [Sanity Image URLs](https://www.sanity.io/docs/image-url)

> **Note**
>
> This starter features an `/app` and a `/studio` folder. The `/app` folder contains the frontend code, and the `/studio` folder contains the Sanity Studio code.
>
> This is **not** a monorepo setup. We put them both in one repository for the sake of simplicity. You might want to have separate repositories for each of the folders, to make it easier to deploy the app and the studio separately.
>
> This example runs primarly as a Single Page Application and is not suitable for a performant production website. You can look into [server- and pre-rendering Angular Universal apps](https://angular.io/guide/universal) if you plan to make it so.

## Prerequisities

- [Node.js](https://nodejs.org/en/) (v16.12 or later)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (optional)

## Getting started

The following instructions will take you in **both** the `/app` and `/studio` folders.

1. `npm install` to install dependencies in both folders
2. In the `/studio` folder, run `npm create sanity@latest init --env` (or use `sanity init --env` if you have the CLI installed). This will:

   - ask you to select or create a Sanity project and dataset
   - output a `.env` file with appropriate variables

3. Copy your project ID and dataset name to the variables into `/app/src/environments/environments.ts`
4. From the `/studio` folder, run `npx sanity cors add http://localhost:4200 --no-credentials`, to allow your app to request data from the browser (Go here to learn more about [CORS](https://www.sanity.io/docs/cors))
5. `npm run dev` to start the development servers in both folders

Your Angular app should now be running on [http://localhost:4200/](http://localhost:4200/) and Studio on [http://localhost:3333/](http://localhost:3333/).

_Feel free to move each folder to its separate location and check them into version control._

### Add content

1. Visit the Studio and create and publish a new `Post` document
2. Visit the App and refresh the page to see your content rendered on the page

The schema for the `Post` document is defined in the `/studio/schemas` folder. You can add more documents and schemas to the Studio to suit your needs.

## Deployments

The `/app` and `/studio` folders are meant to be deployed separately.

Feel free to deploy the App to whichever hosting provider you prefer, like [Vercel](https://vercel.com/), [Netlify](https://netlify.com), or [Cloudflare Pages](https://pages.cloudflare.com).

You can deploy the Sanity Studio by running `sanity deploy` in the `/studio` repository, provided you have the `sanity` package installed globally (`npm install --global sanity`). You can also run it with `npx sanity deploy` if you don't wish to install the CLI.

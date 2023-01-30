# wcl-blog-test

## start strapi service locally

`cms` is the strapi app, created by [strapi-tool-dockerize](https://github.com/strapi-community/strapi-tool-dockerize).

1. make sure you have `docker` and `docker-compose` installed.
2. enter `cms` folder.
3. copy `.env.example`, use it as your local `.env` file.
4. run `docker-compose up -d` in your cli.
5. visit `localhost:1337`, you should see the strapi admin panel (first launch will take a while).

## start blog app locally

`blog-website` is the blog app, copied from [next.js blog-starter example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter).

1. enter `blog-website` folder.
2. copy `.env.local.example`, use it as your local `.env` file.
3. run `yarn && yarn dev`.
4. visit `localhost:3000`, you should see the blog page.
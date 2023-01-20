# wcl-blog-test

## start strapi service locally

`app` is the strapi app.

1. make sure you have `docker` and `docker-compose` installed.
2. enter `app` folder.
3. run `docker-compose up -d` in your cli.
4. visit `localhost:1337`, you should see the strapi admin panel (first launch will take a while).

## start blog app locally

`blog-starter` is the blog app.

1. enter `blog-starter` folder.
2. run `yarn && yarn dev`.
3. visit `localhost:3000`, you should see the blog page.
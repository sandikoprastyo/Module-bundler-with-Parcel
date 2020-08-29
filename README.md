# [PARCEL](https://github.com/parcel-bundler/parcel) Documentation

![Image](./src/assets/img/img.png)

## yarn start or npm start to run

## yarn build or npm build to build

### package.json code

    "scripts": {
    "start": "parcel <your directory example ./index.html>"},

## Building for Production

        "scripts": {
        "start": "parcel <your directory example ./index.html>",
        "build": "parcel build <your directory example ./index.html> "
       },

## `Dist` is the default directory for bundles, if you want to change it use this

        "scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html --out-dir directory-name"
       },

## For disable minification and cache

        "scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html --no-minify"
        },

```
	  "scripts": {
	  "start": "parcel index.html",
	  "build": "parcel build index.html --no-cache"
	  },
```

###### [source](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-parcel#step-3-%E2%80%94-building-for-production)

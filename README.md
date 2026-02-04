# Setup Website for Agenzia Immobiliare Valcalepio

First, make sure you install the required global dependencies.

`npm i -g gulp gulp-rename gulp-download gulp-clean-css gulp-uglify gulp-concat gulp-replace gulp-google-webfonts npm-run-all`

Then, open your preferred terminal application.

```
mkdir /your/preferred/project/location/
cd /your/preferred/project/location/
```

Copy the code out of the GitHub repository.

`git clone https://github.com/raffaellarinaldi/agimmobiliarevalcalepio.git --recursive`

Open project directory, check for submodule updates and install local dependencies.

```
cd agimmobiliarevalcalepio
git submodule update --remote
npm i
npm run link
gulp
```

## [https://agenziavalcalepio.bg.it/](https://agenziavalcalepio.bg.it/)

Start Eleventy.

`npm run serve`

Open your browser to visit the local copy of the site.

[http://localhost:8080/](http://localhost:8080/)

## Build HTML Source Files

To generate the HTML source files in the `dist/` directory.

`npm run build`

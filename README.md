# Setup Website for Agenzia Immobiliare VALCALEPIO

First, make sure you installed all required global dependencies.
Then, open your preferred terminal application.

```
mkdir /your/preferred/project/location/
cd /your/preferred/project/location/
```

Copy the code out of the GitHub repository.

`git clone https://github.com/raffaellarinaldi/agenziavalcalepio.git .
checkout`

## [https://agenziavalcalepio.bg.it/](https://agenziavalcalepio.bg.it/)

Start Eleventy.

`npm run serve`

Open your browser and visit the local copy of the site.

[http://localhost:8080/](http://localhost:8080/)

## Build HTML Source Files

To generate the HTML source files in the `dist/` directory.
Remember to run this command to save static assets for Netlify before committing.

`npm run build`

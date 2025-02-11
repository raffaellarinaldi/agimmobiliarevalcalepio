const cheerio = require('cheerio'), EleventyFetch = require('@11ty/eleventy-fetch');

const fetchHtml = async (url) => {
  try {
    return await EleventyFetch(url, {
      duration: '0s',
      type: 'text',
      directory: '/tmp/.cache/',
      dryRun: false
    });
  } catch (error) {
    console.error(`Errore nel recupero della pagina: ${error.message}`);
    return null;
  }
};

const extractAd = ($, selector) => {
  try {
    const titleParts = ($(selector).find('.disp-tit > a').html() || '').split('<br>');

    return {
      title: titleParts[0]?.trim() || '',
      city: titleParts[1]?.trim() || '',
      url: $(selector).find('.disp-tit > a').attr('href') || '',
      image: $(selector).find('.homere').attr('src') || '',
      price: ($(selector).find('.disp-foot').text().trim().match(/([\d\.\,]+)\s*€/) || [])[0]?.replace(',', '.') || '',
      bed: $(selector).find('.disp-dat b:nth-of-type(1)').text().trim() || '',
      bath: $(selector).find('.disp-dat b:nth-of-type(2)').text().trim() || '',
      sqm: $(selector).find('.disp-dat b:nth-of-type(3)').text().trim() || ''
    };
  } catch (error) {
    console.error(`Errore nell'estrazione dell'annuncio: ${error.message}`);
    return null;
  }
};

const scrapAvc = async () => {
  const avcUrl = 'https://www.agenziavalcalepio.it/';
  const html = await fetchHtml(avcUrl);
  
  if (!html) {
    console.error("Errore: impossibile recuperare gli annunci.");
    return [];
  }

  const $ = cheerio.load(html);
  const searchResults = $('.dispgrp > .dispbox');

  const ads = searchResults
    .map((idx, el) => extractAd($, el))
    .get()
    .filter(ad => ad !== null);

  if (ads.length === 0) {
    console.warn("Nessun annuncio trovato.");
  }

  console.log(ads);
  return ads;
};

module.exports = scrapAvc;

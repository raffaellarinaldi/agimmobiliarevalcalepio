const
cheerio = require('cheerio'),
EleventyFetch = require('@11ty/eleventy-fetch'),
{ AssetCache } = require('@11ty/eleventy-cache-assets')

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
  let asset = new AssetCache('avc-ads');
  if (asset.isCacheValid('4h')) {
    return asset.getCachedValue();
  }

  const avcUrl = 'https://www.agenziavalcalepio.it/';
  const html = await EleventyFetch(avcUrl, {
    duration: '4h',
    type: 'text',
    directory: '.cache/',
  });

  if (!html) {
    console.error("Errore: impossibile recuperare gli annunci.");
    return [];
  }

  const $ = cheerio.load(html);
  const searchResults = $('.dispgrp > .dispbox');

  const ads = searchResults
    .map((idx, el) => extractAd($, el))
    .get()
    .filter(ad => ad && ad.title && ad.city && ad.url && ad.image && ad.price && ad.bed && ad.bath && ad.sqm);

  if (ads.length === 0) {
    console.warn("Nessun annuncio trovato.");
  }

  await asset.save(ads, 'json');
  return ads;
};

module.exports = scrapAvc;

const
cheerio = require('cheerio'),
EleventyFetch = require('@11ty/eleventy-fetch'),
{ AssetCache } = require('@11ty/eleventy-cache-assets')

const extractAd = ($, selector) => {
  try {
    const titleParts = ($(selector).find('.disp-tit > a').html() || '').split('<br>');
    const bedCount = parseInt($(selector).find('.disp-dat b:nth-of-type(1)').text().trim()) || 0;
    const bathCount = parseInt($(selector).find('.disp-dat b:nth-of-type(2)').text().trim()) || 0;
    const rawSqm = $(selector).find('.disp-dat b:nth-of-type(3)').text().trim() || '0';

    return {
      title: titleParts[0]?.trim() || '',
      city: titleParts[1]?.trim() || '',
      url: ($(selector).find('.disp-tit > a').attr('href') || '').replace('https://www.', 'https://'),
      image: ($(selector).find('.homere').attr('src') || '').replace('https://', 'https://images.weserv.nl/?url=') + '&w=600&h=600&fit=cover&a=attention',
      price: ($(selector).find('.disp-foot').text().trim().match(/([\d\.\,]+)\s*€/) || [])[0] || 'n/d',
      bed: `${bedCount} ${bedCount === 1 ? 'camera' : 'camere'}`,
      bath: `${bathCount} ${bathCount === 1 ? 'bagno' : 'bagni'}`,
      sqm: rawSqm !== '0' ? `(${rawSqm} m<sup>2</sup>)` : ''
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
    console.error('Errore: impossibile recuperare gli annunci.');
    return [];
  }

  const $ = cheerio.load(html);
  const searchResults = $('.dispgrp > .dispbox');

  const ads = searchResults
    .map((idx, el) => extractAd($, el))
    .get()
    .filter(ad => ad && ad.title && ad.url);

  if (ads.length === 0) {
    console.warn("Nessun annuncio trovato.");
  }

  await asset.save(ads, 'json');
  return ads;
};

module.exports = scrapAvc;

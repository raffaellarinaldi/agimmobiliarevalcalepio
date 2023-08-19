const cheerio = require('cheerio'), EleventyFetch = require("@11ty/eleventy-fetch");

const fetchHtml = async (url) => {
  return EleventyFetch(url, {
    duration: '0s', // Always fetch new requests
    type: 'text', // Cache response as text
    directory: "/tmp/.cache/",
    dryRun: false
  });
};

const extractAd = ($, selector) => {
  const title = $(selector).find('.disp-tit > a').html().split('<br>')[0].trim();
  const url = $(selector).find('.disp-tit > a').attr('href');
  const image = $(selector).find('.homere').attr('src');
  const city = $(selector).find('.disp-tit > a').html().split('<br>')[1].trim();
  const price = $(selector).find('.disp-foot').text().trim();
  const bed = $(selector).find('.disp-dat b:nth-of-type(1)').text().trim();
  const bath = $(selector).find('.disp-dat b:nth-of-type(2)').text().trim();
  const sqm = $(selector).find('.disp-dat b:nth-of-type(3)').text().trim();

  return {
    title,
    url,
    image,
    city,
    price,
    sqm,
    bed,
    bath,
  };
};

const scrapAvc = async () => {
  const avcUrl = 'https://www.agenziavalcalepio.it/';

  const html = await fetchHtml(avcUrl);
  const $ = cheerio.load(html);

  const searchResults = $('.dispgrp > .dispbox');

  const ads = searchResults
    .map((idx, el) => extractAd($, el))
    .get();

  console.log(ads);

  return ads;
};

module.exports = scrapAvc;

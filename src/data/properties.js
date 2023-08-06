const
cheerio = require('cheerio'),
EleventyFetch = require('@11ty/eleventy-fetch'),

fetchHtml = async (url) => {
  return EleventyFetch(url, {
    duration: '0s', // Always fetch new requests
    type: 'text', // Cache response as text
    directory: '/tmp/.cache/',
    dryRun: true
  })
},

extractAd = ($, selector) => {
  const
  title = $(selector).find('.disp-tit > a').html().split('<br>')[0].trim(),
  url = $(selector).find('.disp-tit > a').attr('href'),
  image = $(selector).find('.homere').attr('src'),
  city = $(selector).find('.disp-tit > a').html().split('<br>')[1].trim(),
  price = $(selector).find('.disp-foot').text().trim(),
  bed = $(selector).find('.disp-dat b:nth-of-type(1)').text().trim(),
  bath = $(selector).find('.disp-dat b:nth-of-type(2)').text().trim(),
  sqm = $(selector).find('.disp-dat b:nth-of-type(3)').text().trim()

  return {
    title,
    url,
    image,
    city,
    price,
    sqm,
    bed,
    bath,
  }
},

scrapAvc = async () => {
  const
  avcUrl = 'https://www.agenziavalcalepio.it/',
  html = await fetchHtml(avcUrl),
  $ = cheerio.load(html),
  searchResults = $('.dispgrp > .dispbox'),
  
  ads = searchResults
    .map((idx, el) => extractAd($, el))
    .get();

  console.log(ads)

  return ads
}

module.exports = scrapAvc

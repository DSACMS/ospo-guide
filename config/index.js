const path = require('path');
const Image = require('@11ty/eleventy-img');

async function imageData(src) {
  const ext = path.extname(src);
  const fileType = ext.replace('.', '');

  const metadata = await Image(src, {
    formats: [fileType],
    outputDir: './_site/img/',
  });

  const data = metadata[fileType] ? metadata[fileType][0] : metadata.jpeg[0];
  return data;
}

function getPathPrefix() {
  let pathPrefix = '';

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }
  return pathPrefix;
}

async function imageUrl(src) {
  const pathPrefix = getPathPrefix();
  const data = await imageData(src);
  return `${pathPrefix}${data.url}`;
}

async function imageWithClassShortcode(
  src,
  cls,
  alt,
  evergreen = 'true',
  lastChecked = ''
) {
  const url = await imageUrl(src);
  const evergreenAttr = evergreen === 'false' ? 'data-evergreen="false"' : '';
  const lastCheckedAttr = lastChecked ? `data-last-checked=${lastChecked}` : '';
  return `<img src="${url}" class="${cls}" alt="${alt}" ${evergreenAttr} ${lastCheckedAttr} loading="lazy" decoding="async">`;
}

async function imageShortcode(src, alt, evergreen, lastChecked) {
  return await imageWithClassShortcode(src, '', alt, evergreen, lastChecked);
}

module.exports = {
  imageWithClassShortcode,
  imageShortcode,
  imageUrl,
};

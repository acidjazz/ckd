require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'ckd-'
  },
  environments: {
    production: 'EZ9SUO76Y8TX1',
    staging: 'E2Y9WMQODAMDG6',
  }
}).deploy(process.argv[2])

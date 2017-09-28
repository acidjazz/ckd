require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'ckd-'
  },
  environments: {
    production: 'E2IPBARADINIRP',
    staging: 'E2Y9WMQODAMDG6',
  }
}).deploy(process.argv[2])

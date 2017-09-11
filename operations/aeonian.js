require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'ckd-'
  },
  environments: {
    production: 'E2IPBARADINIRP',
  }
}).deploy(process.argv[2])

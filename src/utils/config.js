export const configurationFile = {
    production: {
      DOMAIN_NAME: "https://snaphunt.com",
      API_DOMAIN_NAME: "https://api.snaphunt.com",
      bucketNameForCv: "snaphunt-media-prod",
      bucketNameForImage: "snaphunt-media-prod",
      bucketNameForVideo: "snaphunt-media-prod",
      amazonServer_URL: "//s3.ap-southeast-1.amazonaws.com/",
      awsS3ForCV: {
        accessKeyId: "AKIAJJJ3NY4XCSAOFAGQ",
        secretAccessKey: "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",
        region: "ap-southeast-1"
      },
      awsS3ForMedia: {
        accessKeyId: "AKIAJJJ3NY4XCSAOFAGQ",
        secretAccessKey: "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",
        region: "ap-southeast-1"
      }
    },
    staging: {
      DOMAIN_NAME: "https://beta.snaphunt.com",
      API_DOMAIN_NAME: "https://alpha.snaphunt.com",
      bucketNameForCv: "snaphunt-media-dev",
      bucketNameForImage: "snaphunt-media-dev",
      bucketNameForVideo: "snaphunt-media-dev",
      amazonServer_URL: "//s3.ap-southeast-1.amazonaws.com/",
      awsS3ForCV: {
        accessKeyId: "AKIAJJJ3NY4XCSAOFAGQ",
        secretAccessKey: "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",
        region: "ap-southeast-1"
      },
      awsS3ForMedia: {
        accessKeyId: "AKIAJJJ3NY4XCSAOFAGQ",
        secretAccessKey: "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",
        region: "ap-southeast-1"
      }
    },
    development: {
      DOMAIN_NAME: "http://localhost:3001",
      API_DOMAIN_NAME: "http://localhost:3000",
      bucketNameForCv: "snaphunt-media-dev",
      bucketNameForImage: "snaphunt-media-dev",
      bucketNameForVideo: "snaphunt-media-dev",
      amazonServer_URL: "//s3.ap-southeast-1.amazonaws.com/",
      awsS3ForCV: {
        accessKeyId: "AKIAJJJ3NY4XCSAOFAGQ",
        secretAccessKey: "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",
        region: "ap-southeast-1"
      },
      awsS3ForMedia: {
        accessKeyId: "AKIAJJJ3NY4XCSAOFAGQ",
        secretAccessKey: "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",
        region: "ap-southeast-1"
      }
    },
    test: {
      DOMAIN_NAME: "http://localhost:3001",
      API_DOMAIN_NAME: "http://localhost:3000",
      bucketNameForCv: "snaphunt-media-dev",
      bucketNameForImage: "snaphunt-media-dev",
      bucketNameForVideo: "snaphunt-media-dev",
      amazonServer_URL: "//s3.ap-southeast-1.amazonaws.com/"
    }
  };
  
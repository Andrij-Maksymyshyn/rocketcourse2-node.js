const AWS_S3 = require("aws-sdk/clients/s3");
const { S3_REGION, S3_BUCKET, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } =
  process.env;

const S3 = new AWS_S3({
  region: S3_REGION,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  accessKeyId: AWS_ACCESS_KEY,
  apiVersion: "2006-03-01",
  signatureVersion: "v4",
});

function uploadFileToS3(file) {
  return S3.upload({
    Bucket: S3_BUCKET,
    Body: file.data,
    Key: "image.jpg",
    ACL: "public read",
  }).promise(); // IMPORTANT
}

module.exports = uploadFileToS3;

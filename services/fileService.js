const path = require("node:path");
const AWS_S3 = require("aws-sdk/clients/s3");
const { S3_REGION, S3_BUCKET, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } =
  process.env;

const S3 = new AWS_S3({
  region: S3_REGION,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  accessKeyId: AWS_ACCESS_KEY,
  apiVersion: "2006-03-01",
  signatureVersion: Date.now(),
});

function uploadFileToS3(file, itemId, itemType) {
  const Key = fileNameBuilder(file, itemId, itemType);

  return S3.upload({
    Bucket: S3_BUCKET,
    Body: file.data,
    Key,
    ACL: "public-read",
    ContentType: file.mimetype,
  }).promise(); // IMPORTANT
}

function fileNameBuilder(file, itemId, itemType) {
  // const extension = file.name.trim('.').pop() // jpg
  const extension = path.extname(file.name); // .jpg
  const fileName = Date.now();

  return `${itemType}/${itemId}/${fileName}${extension}`;
}

module.exports = uploadFileToS3;

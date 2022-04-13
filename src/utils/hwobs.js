import ObsClient from "./esdk-obs-browserjs.js";

function getObsClient(ak, sk, server) {
  return new ObsClient({
    access_key_id: ak,
    secret_access_key: sk,
    server: server,
    // + "?t=" + new Date().getTime()
    timeout: 60 * 5,
    CacheControl: "no-cache",
  });
}

async function uploadUsingFile(bucketName, objectKey, file, ak, sk, server) {
  var obs = getObsClient(ak, sk, server);
  // let r = await obs.setBucketAcl();
  console.log(obs);
  obs
    .putObject({
      Bucket: bucketName,
      Key: objectKey,
      SourceFile: file,
    })
    .then(function (result) {
      console.info(result);
      if (result.CommonMsg.Status < 300) {
        console.log("Create object:" + objectKey + " successfully!\n");
      }
    });
}

export default uploadUsingFile;

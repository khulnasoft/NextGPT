import { sign, hash as getHash, hex } from "./hmac";

// SHA-256 এবং secret ব্যবহার করে HMAC এনক্রিপশন
function sha256(message: any, secret: any, encoding?: string) {
  const result = sign(secret, message);
  return encoding == "hex" ? hex(result).toString() : result;
}

function getDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + date.getUTCDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

export async function getHeader(
  payload: any,
  SECRET_ID: string,
  SECRET_KEY: string,
) {
  // https://cloud.tencent.com/document/api/1729/105701

  const endpoint = "hunyuan.tencentcloudapi.com";
  const service = "hunyuan";
  const region = ""; // optional
  const action = "ChatCompletions";
  const version = "2023-09-01";
  const timestamp = Math.floor(Date.now() / 1000);
  // সময় প্রক্রিয়াকরণ, বিশ্ব সময় তারিখ প্রাপ্তি
  const date = getDate(timestamp);

  // ************* ধাপ ১: সংযুক্ত করা নিয়মিত অনুরোধ স্ট্রিং *************

  const hashedRequestPayload = getHash(payload);
  const httpRequestMethod = "POST";
  const contentType = "application/json";
  const canonicalUri = "/";
  const canonicalQueryString = "";
  const canonicalHeaders =
    `content-type:${contentType}\n` +
    "host:" +
    endpoint +
    "\n" +
    "x-tc-action:" +
    action.toLowerCase() +
    "\n";
  const signedHeaders = "content-type;host;x-tc-action";

  const canonicalRequest = [
    httpRequestMethod,
    canonicalUri,
    canonicalQueryString,
    canonicalHeaders,
    signedHeaders,
    hashedRequestPayload,
  ].join("\n");

  // ************* ধাপ ২: স্বাক্ষর করার জন্য স্ট্রিং সংযুক্ত করা *************
  const algorithm = "TC3-HMAC-SHA256";
  const hashedCanonicalRequest = getHash(canonicalRequest);
  const credentialScope = date + "/" + service + "/" + "tc3_request";
  const stringToSign =
    algorithm +
    "\n" +
    timestamp +
    "\n" +
    credentialScope +
    "\n" +
    hashedCanonicalRequest;

  // ************* ধাপ ৩: স্বাক্ষর গণনা করা *************
  const kDate = sha256(date, "TC3" + SECRET_KEY);
  const kService = sha256(service, kDate);
  const kSigning = sha256("tc3_request", kService);
  const signature = sha256(stringToSign, kSigning, "hex");

  // ************* ধাপ ৪: অনুমোদন সংযুক্ত করা *************
  const authorization =
    algorithm +
    " " +
    "Credential=" +
    SECRET_ID +
    "/" +
    credentialScope +
    ", " +
    "SignedHeaders=" +
    signedHeaders +
    ", " +
    "Signature=" +
    signature;

  return {
    Authorization: authorization,
    "Content-Type": contentType,
    Host: endpoint,
    "X-TC-Action": action,
    "X-TC-Timestamp": timestamp.toString(),
    "X-TC-Version": version,
    "X-TC-Region": region,
  };
}

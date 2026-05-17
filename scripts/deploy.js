// Usage: npm run deploy
// Reads credentials from .env (copy .env.example → .env and fill in values).

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const SftpClient = require("ssh2-sftp-client");

const {
  SFTP_HOST,
  SFTP_PORT = "22",
  SFTP_USER,
  SFTP_PASS,
  SFTP_REMOTE_DIR,
} = process.env;

const required = { SFTP_HOST, SFTP_USER, SFTP_PASS, SFTP_REMOTE_DIR };
const missing = Object.entries(required)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length) {
  console.error(`Missing or empty in .env: ${missing.join(", ")}`);
  console.error(`  (.env path: ${path.join(__dirname, "../.env")})`);
  process.exit(1);
}

const LOCAL_DIR = path.join(__dirname, "../_site");

async function deploy() {
  const sftp = new SftpClient();

  console.log(`Connecting to ${SFTP_HOST}:${SFTP_PORT} as ${SFTP_USER}…`);

  await sftp.connect({
    host: SFTP_HOST,
    port: parseInt(SFTP_PORT, 10),
    username: SFTP_USER,
    password: SFTP_PASS,
  });

  console.log(`Uploading _site/ → ${SFTP_REMOTE_DIR}`);

  await sftp.uploadDir(LOCAL_DIR, SFTP_REMOTE_DIR);

  await sftp.end();

  console.log("Deploy complete.");
}

deploy().catch((err) => {
  console.error("Deploy failed:", err.message);
  process.exit(1);
});

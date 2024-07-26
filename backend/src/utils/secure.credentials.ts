import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { createDecipheriv } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);

//Store this somewhereelse
// Define a fixed key (make sure to keep it secret and secure in production)
//TODO: Store this in env
const SECRET_KEY_ROUTER_PASSES_ENCRYPT = 'gK8d64NVxc3mePvyYDSW7bGqLskfpu';

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.
const genKey = async () => {
  return (await promisify(scrypt)(
    SECRET_KEY_ROUTER_PASSES_ENCRYPT,
    'salt',
    32,
  )) as Buffer;
};

//encrypt password
export const encryptPassword = async (password: string) => {
  const key = await genKey();
  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const encryptedText = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);
  return encryptedText.toString('hex');
};

//decrypt password
export const decryptPassword = async (encryptedPass: string) => {
  const key = await genKey();
  const decipher = createDecipheriv('aes-256-ctr', key, iv);
  const decryptedPass = Buffer.concat([
    decipher.update(Buffer.from(encryptedPass, 'hex')),
    decipher.final(),
  ]);
  return decryptedPass.toString('utf-8');
};

//test
// (async function runFunction() {
//   const mypassword = await encryptPassword("OrlandoIsKawaiiOutWestMikrotik-1975")
//   console.log("encrypted password: ", mypassword)
//   const decryptedPassword = await decryptPassword(mypassword)
//   console.log("decrypted password: ", decryptedPassword)
// })();

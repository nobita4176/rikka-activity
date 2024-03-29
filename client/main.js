import { DiscordSDK } from '@discord/embedded-app-sdk';

import './style.css';

try {
  const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT);
  await discordSdk.ready();
  document.querySelector('#app').textContent = 'DiscordSDK is ready!';
} catch (ex) {
  console.error(ex);
  if (ex instanceof Error) {
    document.querySelector('#app').textContent = ex.message;
  } else {
    document.querySelector('#app').textContent = JSON.stringify(ex);
  }
}

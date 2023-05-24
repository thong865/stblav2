import { defineEventHandler } from 'h3';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const city = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const rs = $fetch(`${config.public.apiBase}/city/provincWithRef`);
  return rs;
});

export { city as default };
//# sourceMappingURL=city.mjs.map

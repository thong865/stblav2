import { defineEventHandler, getQuery } from 'h3';
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

const blogDetail_get = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const { id } = getQuery(event);
  const rs = $fetch(`${config.public.apiBase}/blogs/${id}`);
  return rs;
});

export { blogDetail_get as default };
//# sourceMappingURL=blogDetail.get.mjs.map

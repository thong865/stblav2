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

const mksearch_get = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const { keyword, province, district, priceMin, priceMax, cat } = getQuery(event);
  console.log(config);
  const rs = $fetch(`${config.public.apiBase}/markets/mksearch?keyword=${keyword}${province ? "&province=" + province : ""}
    ${district ? "&district=" + district : ""}${cat ? "&cat=" + cat : ""}`, { method: "POST" });
  return rs;
});

export { mksearch_get as default };
//# sourceMappingURL=mksearch.get.mjs.map

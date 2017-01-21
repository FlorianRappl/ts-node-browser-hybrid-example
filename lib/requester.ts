import http = require('http');
import uri = require('url');

export function get(url: string, cb: (err: Error, res: string) => void) {
  const parts = uri.parse(url);
  http.request({
    method: 'GET',
    protocol: parts.protocol,
    host: parts.host,
    path: parts.path
  }, res => {
    const chunks: Array<string> = [];
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      chunks.push(chunk.toString());
    });
    res.on('end', () => {
      cb(null, chunks.join(''));
    });
  }).on('error', err => {
    cb(err, null);
  }).end();
};

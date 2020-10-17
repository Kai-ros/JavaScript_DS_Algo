import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.74.0/http/file_server.ts";
const server = serve({ port: 8000 });

// this opens the page in a browser for you
const cmd = Deno.run({
  cmd: ["cmd", "/c", "start", "http://localhost:8000/"], stdout: "piped"
})
cmd.status().then(_ => cmd.close()).catch(e => console.log(e));

// this is the routing?
for await (const req of server) {
  let path = req.url;

  if (req.url === '/') {
    path = '/index.html';
  }

  try {
    req.respond(await serveFile(req, 'public' + path));
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      req.respond({ status: 404 });
    } else {
      req.respond({ status: 500 });
    }
  }
}

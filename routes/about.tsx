/** @jsx h */
import { h } from "preact";
// import { Handlers, Handler } from "$fresh/server.ts";

// export const handler: Handlers = {
//   // For Page component
//   async GET(req, ctx) {
//     const resp = await ctx.render();
//     resp.headers.set("X-Custom-Header", "Hello");
//     return resp;
//   },
//
//   // For API route
//   // GET(req, ctx) {
//   //   const uuid = crypto.randomUUID();
//   //   return new Response(JSON.stringify(uuid), {
//   //     headers: { "Content-Type": "application/json" },
//   //   });
//   // },
//
// };

// For API route (catch all methods)
// export const handler: Handler = (req, ctx) => {
//   const uuid = crypto.randomUUID();
//   return new Response(JSON.stringify(uuid), {
//     headers: { "Content-Type": "application/json" },
//   });
// };

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}

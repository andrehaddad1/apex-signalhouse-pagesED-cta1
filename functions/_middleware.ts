export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  // somente na home
  if (url.pathname === "/") {
    // evita loop
    if (!url.searchParams.has("utm_source")) {
      url.searchParams.set("utm_source", "SmsEd1");
      return Response.redirect(url.toString(), 302);
    }
  }

  return context.next();
};

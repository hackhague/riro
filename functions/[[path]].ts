type CloudflareContext = {
  request: Request;
  next: () => Promise<Response>;
};

const redirects = new Map<string, string>([
  ["/computerhulp-denhaag", "/computerhulp-den-haag"],
]);

const normalizePath = (path: string) => {
  if (path.endsWith("/") && path !== "/") {
    return path.slice(0, -1);
  }
  return path;
};

export const onRequest = async (context: CloudflareContext): Promise<Response> => {
  const url = new URL(context.request.url);
  const destination = redirects.get(normalizePath(url.pathname));

  if (destination) {
    const target = destination.startsWith("http")
      ? destination
      : new URL(destination, url.origin).toString();

    return Response.redirect(target, 301);
  }

  return context.next();
};

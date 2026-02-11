export default function middleware(request) {
  const url = new URL(request.url);
  if (url.hostname === 'webbersaurus.com') {
    url.hostname = 'www.webbersaurus.com';
    return Response.redirect(url.toString(), 301);
  }
}

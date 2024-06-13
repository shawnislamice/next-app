// export const dynamic = "force-dynamic"; //Build forcefu;lly for caching

export async function GET() {
  return Response.json({
    currentTime: new Date().toLocaleTimeString(),
  });
}

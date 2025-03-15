export async function POST(req) {
    return new Response(JSON.stringify({ message: "File uploaded successfully!" }), {
      status: 200,
    });
  }
  
import dbConnect, { collectionNameObj } from "@/server/connect";

export async function GET() {
  try {
    const newsCollection = await dbConnect(collectionNameObj.newsCollection);
    const news = await newsCollection.find().toArray();
    return Response.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      status: 500,
    });
  }
}

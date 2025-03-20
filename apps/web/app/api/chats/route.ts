import { NextResponse } from "next/server";
import { fetchChatMessages } from "@/actions/streamActions";
import { getStreamLogs } from "@/actions/queries";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const liveChatId = searchParams.get("liveChatId");

    if (!liveChatId) {
      return NextResponse.json(
        { error: "Missing liveChatId parameter" },
        { status: 400 },
      );
    }

    const chatMessages = await fetchChatMessages(liveChatId);
    const streamLogs = await getStreamLogs(liveChatId);
    return NextResponse.json({ chats: chatMessages, streamLogs });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch chat messages" },
      { status: 500 },
    );
  }
}

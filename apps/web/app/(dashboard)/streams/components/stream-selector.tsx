"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, Users } from "lucide-react";
import { ChatTable } from "./chat-table";
import { Chat, StreamChat } from "@repo/database";
import { Button } from "@/components/ui/button";

interface StreamSelectorProps {
  streams: StreamChat[];
}

export function StreamSelector({ streams }: StreamSelectorProps) {
  const [selectedStreamId, setSelectedStreamId] = useState<string>(
    streams.length > 0 ? streams[0].id : "",
  );
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<Chat[]>([]);

  const handleStreamChange = (streamId: string) => {
    setLoading(true);
    setSelectedStreamId(streamId);
    // Simulate loading for better UX
    setTimeout(() => setLoading(false), 300);
  };

  // Fetch chat messages when selectedStreamId changes
  useEffect(() => {
    if (!selectedStreamId) return;

    const fetchChatMessages = async () => {
      setLoading(true);
      try {
        // Use the newly created API route
        const response = await fetch(
          `/api/chats?liveChatId=${selectedStreamId}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch chat messages");
        }
        const data = await response.json();
        // Add type assertion to ensure data is treated as an array of Chat objects
        setChatMessages(data as Chat[]);
      } catch (error) {
        console.error("Error fetching chat messages:", error);
        setChatMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChatMessages();
  }, [selectedStreamId]);

  const selectedStream = streams.find(
    (stream) => stream.id === selectedStreamId,
  );

  // Replace streamChats[selectedStreamId] with chatMessages
  const currentChats = chatMessages;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Stream Selection</CardTitle>
            <CardDescription>
              Select a stream to view its chat logs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Select
                value={selectedStreamId}
                onValueChange={handleStreamChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a stream" />
                </SelectTrigger>
                <SelectContent>
                  {streams.map((stream) => (
                    <SelectItem key={stream.id} value={stream.id}>
                      {stream.title ||
                        `Stream on ${format(new Date(stream.startTime), "MMM dd, yyyy")}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedStream && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-gap w-full gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {format(
                        new Date(selectedStream.startTime),
                        "MMMM dd, yyyy",
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {format(new Date(selectedStream.startTime), "h:mm a")} -
                      {selectedStream.endTime
                        ? format(new Date(selectedStream.endTime), " h:mm a")
                        : " Ongoing"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {currentChats.length} messages
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {selectedStream.totalViews || 0} total views
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {selectedStream && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Stream Details</CardTitle>
              <CardDescription>
                Information about the selected stream
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>Description: {selectedStream.description}</div>
                <div>
                  <Button
                    onClick={async () => {
                      console.log("selectedStream", selectedStream.userId,selectedStream.id);
                      fetch(
                        `http://localhost:3000/youtube/update-stream-description`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            channelId: selectedStream.userId,
                            liveChatId: selectedStream.id,
                            description: selectedStream.description,
                          }),
                        },
                      );
                    }}
                  >
                    Update Description
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <ChatTable chats={currentChats} loading={loading} />
    </div>
  );
}

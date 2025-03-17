"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Links() {
  const [timeoutLength, setTimeoutLength] = useState("600");
  const [silentTimeout, setSilentTimeout] = useState(false);
  const [timeoutMessage, setTimeoutMessage] = useState("Hey raghav rudhra, s");
  const [userLevel, setUserLevel] = useState("Moderator");

  return (
    <div className="container max-w-4xl py-6">
      <div className="mb-6">
        <Link
          href="/chat-moderation"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span className="font-medium">Chat Moderation</span>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2">Links</h1>
      <p className="text-gray-600 mb-6">
        This filter allows you to timeout and whitelist links.
      </p>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Whitelisted Entries</h2>
          <Textarea
            className="min-h-[100px] mb-2 bg-gray-100"
            placeholder="Enter whitelisted links, one per line"
          />
          <p className="text-sm text-gray-500 mb-2">
            Each line is a separate whitelist entry.
          </p>
          <div className="flex justify-end">
            <Button variant="outline" className="text-blue-600">
              <span className="mr-2">Import text file</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V16M12 16L8 12M12 16L16 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 20H4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Timeout length</h2>
            <p className="text-sm text-gray-500">
              The timeout that is applied after an initial 5-second timeout
              warning.
            </p>
            <div className="relative">
              <Input
                type="number"
                value={timeoutLength}
                onChange={(e) => setTimeoutLength(e.target.value)}
                className="pr-10"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col">
                <button className="text-gray-400 hover:text-gray-600">▲</button>
                <button className="text-gray-400 hover:text-gray-600">▼</button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Exempt User-Level</h2>
            <p className="text-sm text-gray-500">
              Users with this user-level or higher are exempt from this filter.
            </p>
            <Select value={userLevel} onValueChange={setUserLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select user level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Moderator">Moderator</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Owner">Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Silent Timeout</h2>
              <p className="text-sm text-gray-500">
                If enabled, the timeout will be silent and not display a
                message.
              </p>
            </div>
            <Switch
              checked={silentTimeout}
              onCheckedChange={setSilentTimeout}
            />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Timeout message</h2>
            <p className="text-sm text-gray-500">
              Enter a custom timeout message, or leave blank for a random
              message.
            </p>
            <Input
              value={timeoutMessage}
              onChange={(e) => setTimeoutMessage(e.target.value)}
              placeholder="Enter custom timeout message"
            />
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <Link href="#" className="text-blue-600 hover:underline">
          Learn more
        </Link>{" "}
        about the links filter.
      </div>
    </div>
  );
}

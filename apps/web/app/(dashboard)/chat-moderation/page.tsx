import type React from "react";
import Link from "next/link";
import { Ban, LinkIcon, Type, Smile, RotateCw, Hash } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat Moderation",
  description: "Manage chat restrictions and spam filters",
};

interface FilterCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  enabled?: boolean;
  href: string;
}

function FilterCard({
  title,
  description,
  icon,
  enabled = true,
  href,
}: FilterCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gray-100 p-3 rounded-md">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Switch checked={enabled} />
          <span className="ml-2 text-sm font-medium">
            {enabled ? "Enabled" : "Disabled"}
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href={href}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 3H10.5C11.3284 3 12 3.67157 12 4.5V10.5C12 11.3284 11.3284 12 10.5 12H4.5C3.67157 12 3 11.3284 3 10.5V4.5C3 3.67157 3.67157 3 4.5 3ZM4.5 4C4.22386 4 4 4.22386 4 4.5V10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5V4.5C11 4.22386 10.7761 4 10.5 4H4.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1887 4.92117C11.558 5.44798 11.8173 6.0575 11.9332 6.71638L13.5 7.07183V7.92897L11.9334 8.28444C11.8176 8.94342 11.5586 9.55301 11.1892 10.0798L12.0459 11.4402L11.4398 12.0462L10.0797 11.1896C9.55252 11.5591 8.94242 11.8185 8.28355 11.9344L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5571 4.92116 11.1878L3.56055 12.045L2.95445 11.4389L3.81107 10.0782C3.44166 9.55128 3.18229 8.94147 3.06635 8.28227L1.50002 7.92897V7.07183L3.06613 6.71632C3.18192 6.05743 3.44118 5.44803 3.81052 4.92142L2.95398 3.56079L3.56008 2.9547L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function ChatModerationDashboard() {
  return (
    <div className="container max-w-6xl py-6">
      <h1 className="text-3xl font-bold mb-2">Chat Moderation</h1>
      <p className="text-gray-600 mb-8">
        Manage chat restrictions and spam filters
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <FilterCard
          title="Blacklist Words/Phrases"
          description="This filter allows you to timeout custom words, phrases, and patterns."
          icon={<Ban className="h-6 w-6" />}
          href="/chat-moderation/filters"
        />

        <FilterCard
          title="Excess Caps"
          description="This filter allows you to timeout users who use excessive capital letters in messages."
          icon={<Type className="h-6 w-6" />}
          href="/chat-moderation/caps"
        />

        <FilterCard
          title="Excess Emotes"
          description="This filter allows you to timeout users abusing emotes."
          icon={<Smile className="h-6 w-6" />}
          href="/chat-moderation/emotes"
        />

        <FilterCard
          title="Links"
          description="This filter allows you to timeout and whitelist links."
          icon={<LinkIcon className="h-6 w-6" />}
          href="/chat-moderation/links"
        />

        <FilterCard
          title="Excess Symbols"
          description="This filter allows you to timeout users spamming excessive symbols."
          icon={<Hash className="h-6 w-6" />}
          href="/chat-moderation/symbols"
        />

        <FilterCard
          title="Repetitions"
          description="This filter allows you to timeout users whom repeat words or phrases."
          icon={<RotateCw className="h-6 w-6" />}
          enabled={false}
          href="/chat-moderation/repetitions"
        />
      </div>
    </div>
  );
}

import type React from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-6">
      <div className="w-full flex justify-center">
        <main
          className="space-y-6 flex-1 px-4 md:px-6 lg:px-8"
          style={{ maxWidth: "56rem" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

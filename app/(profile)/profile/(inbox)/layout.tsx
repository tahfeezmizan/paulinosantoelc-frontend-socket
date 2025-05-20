import React from "react";
import MessageList from "../_components/message-list";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-6  min-h-screen">
      <div className="col-span-2 h-screen border-r ">
        <MessageList />
      </div>

      <div className="col-span-4 h-screen">
        {children}
      </div>
    </div>
  );
}

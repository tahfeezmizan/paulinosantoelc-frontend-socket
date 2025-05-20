/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { socket } from "@/config/socket";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { Socket } from "socket.io-client";

// Mock user data - replace with your actual data
const userImage = "/placeholder.svg";
const currentUserId = "67d302f65093cbc7d6113ba1";

// Mock contacts data - replace with your actual data
const contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    role: "Friend",
    lastMessage: "Hey, how are you?",
    updatedAt: new Date(),
    unread: true,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    role: "Colleague",
    lastMessage: "Meeting at 3pm",
    updatedAt: new Date(Date.now() - 86400000),
    unread: false,
  },
];

interface Message {
  id?: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt?: Date;
  isRead?: boolean;
}

export default function ChatPage() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: any) => state?.user?.user?.user);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [showChat, setShowChat] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  // Define socketRef with the correct type
  const socketRef = useRef<typeof socket>(socket);

  // const { data: chatData, refetch } = useGetAllMessagesQuery({});

  console.log("From chaterface", user?.id);
  console.log(Socket);

  useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    const contactIdFromUrl = pathParts[pathParts.length - 1];

    if (contactIdFromUrl && !isNaN(parseInt(contactIdFromUrl))) {
      const contactId = parseInt(contactIdFromUrl);
      handleContactClick(contactId);
    }

    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      // join chat room
      const joinData = {
        userId: user?.id,
        otherUserId: activeContact?.toString(),
      };
      socket.emit("joinChat", joinData);

      // socket.io.engine.on("upgrade", (transport) => {
      //   setTransport(transport.name);
      // });

      // get message
      socket.on("loadMessageSuccess", (data) => {
        console.log("loadMessageSuccess", data);
        setNewMessage(data);
        // refetch();
      });
    }

    // function onDisconnect() {
    //   console.log("Socket Distconnected From Chat Interface Page");
    // }

    socket.on("connect", onConnect);
    // socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      // socket.off("disconnect", onDisconnect);
    };
  }, [activeContact, user?.id]);

  const handleContactClick = (contactId: number) => {
    setActiveContact(contactId);
    setShowChat(true);
    setMessages([]); // Clear previous messages
    // Update URL with contact ID
    router.push(`${pathname}/${contactId}`);

    const receiverId = contactId.toString();

    // Join the chat room
    socketRef.current.emit("joinChat", {
      userId: currentUserId,
      otherUserId: receiverId,
    });

    // Load previous messages
    socketRef.current.emit("loadMessage", {
      senderId: currentUserId,
      receiverId: receiverId,
    });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeContact) return;

    const messageData = {
      senderId: currentUserId,
      receiverId: activeContact.toString(),
      message: newMessage.trim(),
    };

    console.log("send mesage", messageData);

    // Send the message
    socketRef.current.emit("sendMessage", messageData);

    // Add the message to the local state
    const newMsg: Message = {
      senderId: currentUserId,
      receiverId: activeContact.toString(),
      content: newMessage.trim(),
      createdAt: new Date(),
      isRead: false,
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);

    // Clear input field
    setNewMessage("");
  };

  const handleBackToContacts = () => {
    setShowChat(false);
    // Reset URL to base path when going back to contacts
    router.push(pathname);
  };

  const activeContactDetails = contacts.find(
    (contact) => contact.id === activeContact
  );

  return (
    <div className="flex w-full h-screen overflow-hidden bg-gray-50">
      {/* Contacts sidebar */}
      {/* Chat area */}
      {showChat && (
        <div className="flex flex-col flex-1 bg-white border border-red-500">
          {/* Chat header */}
          <div className="flex items-center p-4 border-b">
            <button onClick={handleBackToContacts} className="md:hidden mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {activeContactDetails && (
              <div className="flex items-center">
                <Image
                  src={userImage}
                  alt={`${activeContactDetails.firstName} ${activeContactDetails.lastName}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium">
                    {activeContactDetails.firstName}{" "}
                    {activeContactDetails.lastName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activeContactDetails.role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 bg-gray-50"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.senderId === currentUserId
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {message.senderId !== currentUserId && (
                  <div className="mr-2">
                    <Image
                      src={userImage}
                      alt="Contact"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                )}

                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.senderId === currentUserId
                      ? "bg-blue-500 text-white"
                      : "bg-white border"
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.senderId === currentUserId
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.createdAt
                      ? new Date(message.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Now"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-4 border-t bg-white">
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-l-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

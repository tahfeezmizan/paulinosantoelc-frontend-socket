/* eslint-disable @typescript-eslint/no-explicit-any */

// Mock contacts data
export const contacts: any = [
  {
    id: "1",
    name: "Budi Suharsono",
    role: "HR Lead",
    lastMessage: "Hey Emil, jangan lupa ya buat meeting...",
    timestamp: "12:30 Am",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Product Manager",
    lastMessage: "Can we discuss the new feature?",
    timestamp: "11:45 Am",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Developer",
    lastMessage: "I've pushed the changes to GitHub",
    timestamp: "10:15 Am",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

// Sample messages for demonstration
export const sampleMessages: any = {
  "1": [
    {
      id: "m1",
      senderId: "1",
      content:
        "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
      timestamp: "12:30 Am",
    },
    {
      id: "m2",
      senderId: "current-user",
      content:
        "That's great to hear. Can you tell me more about your support hours?",
      timestamp: "12:30 Am",
    },
    {
      id: "m3",
      senderId: "1",
      content:
        "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
      timestamp: "12:30 Am",
    },
    {
      id: "m4",
      senderId: "1",
      content:
        "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
      timestamp: "12:30 Am",
    },
  ],
  "2": [
    {
      id: "m5",
      senderId: "2",
      content: "Hi there! Have you reviewed the product roadmap?",
      timestamp: "11:45 Am",
    },
    {
      id: "m6",
      senderId: "current-user",
      content: "Yes, I have some questions about the Q3 milestones.",
      timestamp: "11:50 Am",
    },
  ],
  "3": [
    {
      id: "m7",
      senderId: "3",
      content: "The new feature is ready for testing.",
      timestamp: "10:15 Am",
    },
    {
      id: "m8",
      senderId: "current-user",
      content: "Great! I'll check it out right away.",
      timestamp: "10:20 Am",
    },
  ],
};

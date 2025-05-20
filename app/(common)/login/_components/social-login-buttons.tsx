"use client";

import { Button } from "@/components/ui/button";
import { GoogleIcon, WeChatIcon } from "@/components/ui/social-icons";

export function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        className="flex items-center justify-center gap-2"
        onClick={() => {
          console.log("Google login");
        }}
      >
        <GoogleIcon className="h-5 w-5" />
        <span>Google</span>
      </Button>
      <Button
        variant="outline"
        className="flex items-center justify-center gap-2"
        onClick={() => {
          console.log("WeChat login");
        }}
      >
        <WeChatIcon className="h-5 w-5" />
        <span>WeChat</span>
      </Button>
    </div>
  );
}

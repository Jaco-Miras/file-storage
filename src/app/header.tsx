import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

export const Header = () => {
  return (
    <div className="border-b p-4 bg-gray-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>File Drive</div>
        <div className="flex items-center gap-6">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

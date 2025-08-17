"use client";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full px-6 py-4 bg-black text-white shadow-md flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-500 tracking-tight">
        AfterHours
      </h1>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <SignedIn>
          <UserButton />
          <SignOutButton>
            <button className="cursor-pointer px-4 py-2 bg-white/10 hover:shadow-orange-500 shadow-xs transition duration-200 rounded-full text-sm font-medium">
              Sign Out
            </button>
          </SignOutButton>
          <button className="cursor-pointer px-4 py-2 bg-white/10 hover:shadow-orange-500 shadow-xs transition duration-200 rounded-full text-sm font-medium">
            Schedule Room
          </button>
          <button
            onClick={() => router.push("/rooms")}
            className="cursor-pointer px-4 py-2 bg-white/10 hover:shadow-orange-500 shadow-xs transition duration-200 rounded-full text-sm font-medium"
          >
            All Rooms
          </button>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 cursor-pointer bg-white/10 hover:shadow-orange-500 shadow-xs transition duration-200 rounded-full text-sm font-medium">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 cursor-pointer bg-orange-500 hover:bg-orange-400 transition duration-200 rounded-full text-sm font-medium text-white">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;

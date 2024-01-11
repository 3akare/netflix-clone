"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import profile from "@/public/images/default-blue.png";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

interface AccountMenuProps {
  visible?: boolean;
}
const AccountMenu: React.FunctionComponent<AccountMenuProps> = ({
  visible,
}) => {
  const router = useRouter();

  async function signOutUser() {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    const response = await fetch("http://localhost:3000/api/signOut", {
      method: "POST",
    });

    if (response.status === 200) {
      router.replace("/auth");
    }
  }

  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            src={profile}
            alt="profile"
            className="size-8 rounded-md"
          ></Image>
          <p className="text-white text-sm group-hover/item:underline">
            {auth.currentUser?.displayName || "User"}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOutUser()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;

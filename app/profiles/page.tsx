"use client";

import Image from "next/image";
import profile from "@/public/images/default-blue.png";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white">Who is watching</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div
            className=""
            onClick={() => {
              router.push("/");
            }}
          >
            <div className="group flex-row w-44 mx-auto">
              <div className="size-44 rounded-md flex flex-col items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image src={profile} alt="profile" className="size-44"></Image>
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                David
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

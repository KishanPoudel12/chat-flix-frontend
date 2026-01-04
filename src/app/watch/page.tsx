"use client";
import VideoPlayer from "@/src/components/Video";
import Chat from "@/src/components/Chat";
import MembersList from "@/src/components/members";

const Watch = () => {
  return (
    <div className="flex w-screen h-screen p-2 gap-4 bg-yellow-900">
        <div className="w-2/3 h-full  flex flex-col justify-start  gap-4 ">
          <VideoPlayer videoUrl="https://www.youtube.com/embed/iK_I2jW5gOQ" />
          <MembersList />
        </div>
        <Chat />
    </div>
  );
};

export default Watch;
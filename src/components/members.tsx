"use client";

import {RoomMember} from "@/src/types/room";

const MembersList = ({members}:{members:RoomMember[]}) => {


  return (
    <div className="p-4 border-t border-yellow-600">
      <h3 className="text-sm font-semibold text-yellow-600 mb-3">
        Members ({members.length})
      </h3>
      <div className=" w-full overflow-y-hidden">
        <div className="flex gap-4 overflow-x-auto scroll-smooth"
        style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}>
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-yellow-100 rounded-md shadow-md flex flex-col items-center p-2 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="mb-1">
                <span className="text-xs font-bold text-yellow-600">
                  {member.username}
                </span>
              </div>
              <div className="bg-yellow-500 text-black text-xxs px-2 py-1 rounded-full font-medium">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {members.length === 0 && (
        <p className="text-xs text-yellow-400 ">No members yet</p>
      )}
    </div>
  );
};

export default MembersList;
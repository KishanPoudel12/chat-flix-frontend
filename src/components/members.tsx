"use client";

import {RoomMember} from "@/src/types/room";

const MembersList = ({members}:{members:RoomMember[]}) => {
  // const members = [
  //   { id: 1, username: "Kishan", role: "admin" },
  //   { id: 2, username: "Milla", role: "member" },
  //   { id: 3, username: "Alex", role: "member" },
  //   { id: 4, username: "Liam", role: "member" },
  //   { id: 5, username: "Sophia", role: "member" },
  //   { id: 6, username: "Emma", role: "admin" },
  // ];

  return (
    <div className="p-4 border-t border-yellow-600">
      <h3 className="text-sm font-semibold text-yellow-600 mb-3">
        Members ({members.length})
      </h3>
      <div className=" w-full overflow-y-hidden">
        <div className="flex gap-4 overflow-x-auto scroll-smooth">
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
export interface RoomMember {
  id: number;
  user_id: number;
  role: string;
  username: string;
  joined_at: string; // ISO datetime string
}

export interface Room {
  id: number;
  room_name: string;
  host_id: number;
  room_description: string | null;
  video_url: string;
  video_provider: string | null;
  is_live: boolean;
  is_private: boolean;
  current_members: number;
  max_members: number;
  scheduled_start: string; // ISO datetime string
  members: RoomMember[];
}

export type RoomsResponse = Room[];





export interface CreateRoomPayload {
  room_name: string;
  room_description: string;
  video_url: string;
  video_provider: string ; // adjust if needed
  is_private: boolean;
  max_members: number;
}

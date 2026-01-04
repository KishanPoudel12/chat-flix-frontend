interface Room {
  room_name: string;        // Name of the room
  host_id: number;          // Host user ID
  host_name: string;        // Host username
  room_description: string; // Short description
  video_url: string;        // Video link (YouTube/Vimeo/etc.)
  video_provider: string;   // "youtube", "vimeo", etc.
  is_live: boolean;         // True if live, false if scheduled
  is_private: boolean;      // True if private room
  max_members: number;      // Max members allowed
  active_members: number;   // Current active members count
  scheduled_start: string;  // ISO date/time of scheduled start
}
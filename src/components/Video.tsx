"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoPlayer = ({
  videoUrl,
  isHost,
  socket,
}: {
  videoUrl: string | null;
  isHost: boolean;
  socket: WebSocket | null;
}) => {
  const playerRef = useRef<any>(null);
  const videoIdRef = useRef<string | null>(null);
  const isAdmin =isHost; //host =>true , nonhost=>false

  function extractYouTubeId(url: string | null) {
    if (!url) return null;
    const cleanUrl = url.split("?")[0];
    const match = cleanUrl.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  useEffect(() => {
    if (window.YT) return;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.append(tag);

    window.onYouTubeIframeAPIReady = () => {
      console.log("YT API Ready");
    };
  }, []);



useEffect(() => {
  if (!videoUrl) return;

  const videoId = extractYouTubeId(videoUrl);
  if (!videoId) return;
  videoIdRef.current = videoId;

  const initializePlayer = () => {
    if (playerRef.current) return; // already initialized

    playerRef.current = new window.YT.Player("player", {
      videoId,
      playerVars: { controls: 1, autoplay: 1, origin: window.location.origin },
      events: {
        onReady: (event: any) => {
          console.log("Player Ready");
          if (isAdmin) event.target.playVideo();
        },
       onStateChange: (e: any) => {
        if (!isAdmin || !socket) return;

        const time = playerRef.current.getCurrentTime();
        let action: "play" | "pause" | null = null;

        if (e.data === window.YT.PlayerState.PLAYING) action = "play";
        else if (e.data === window.YT.PlayerState.PAUSED) action = "pause";

        if (action) {
          const chat_msg = `Host ${action=="play" ? "played" : action=="pause" ? "paused" : ""} the video at ${time.toFixed(2)}s`;

          socket.send(JSON.stringify({
            type: "video_action",
            video_id: videoIdRef.current,
            action,
            time
          }));

          socket.send(JSON.stringify({
            type: "chat",
            message: chat_msg,
            sender: "<HOST>"
          }));
        }
      },
      },
    });
  };

  if (window.YT && window.YT.Player) {
    initializePlayer();
  } else {
    window.onYouTubeIframeAPIReady = initializePlayer;
  }

  return () => playerRef.current?.destroy();
}, [videoUrl, socket, isAdmin]);



  useEffect(() => {
    if (!socket || isAdmin) return;

    const handleMessage = (e: MessageEvent) => {
      const data = JSON.parse(e.data);
      if (data.type !== "video_action" || !playerRef.current) return;

      const time = data.time ?? 0;
      switch (data.action) {
        case "play":
          playerRef.current.seekTo(time, true);
          playerRef.current.playVideo();
          break;
        case "pause":
          playerRef.current.seekTo(time, true);
          playerRef.current.pauseVideo();
          break;
        case "seek":
          playerRef.current.seekTo(time, true);
          break;
      }
    };

    socket.addEventListener("message", handleMessage);
    return () => socket.removeEventListener("message", handleMessage);
  }, [socket, isAdmin]);

  return (
    <div className=" bg-black rounded-2xl">
      <div id="player" className="w-full h-full rounded-2xl" style={{ minHeight: "80vh" }} />
    </div>
  );
};

export default VideoPlayer;

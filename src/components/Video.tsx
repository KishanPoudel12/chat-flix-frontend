const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className=" h-2/3  bg-black rounded-2xl ">
      <iframe
        className="w-full h-full rounded-2xl"
        style={{ minHeight: '80vh' }}
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;

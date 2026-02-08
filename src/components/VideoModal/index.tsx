import { useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import { X } from "lucide-react";

type VideoModalProps = {
  src: string;
  onClose: () => void;
};

export function VideoModal({ src, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">(
    "horizontal",
  );
  const [loaded, setLoaded] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent || 0);
    };

    video.volume = volume;

    const handleLoaded = () => {
      if (video.videoHeight > video.videoWidth) {
        setOrientation("vertical");
      }
      setTimeout(() => {
        setLoaded(true);
        togglePlay();
      }, 200);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", () => setIsPlaying(false));
    video.addEventListener("loadedmetadata", handleLoaded);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-70 bg-black/80 backdrop-blur-md flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0"></div>
      <div
        className={`relative transition-all duration-500 ease-in-out -top-200 ${orientation === "vertical" ? "aspect-9/16 h-full max-h-[75vh]" : "w-full max-w-[95vw] md:max-w-5xl aspect-video"} ${loaded && "top-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-secondary text-2xl cursor-pointer"
        >
          <X />
        </button>

        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain rounded-xl inset-0 bg-black"
          playsInline
          onClick={togglePlay}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
        />

        <Controls
          videoRef={videoRef}
          isPlaying={isPlaying}
          progress={progress}
          setProgress={setProgress}
          volume={volume}
          setVolume={setVolume}
          togglePlay={togglePlay}
        />
      </div>
    </div>
  );
}

import { Pause, Play } from "lucide-react";

type ControlsProps = {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  progress: number;
  setProgress: (v: number) => void;
  volume: number;
  setVolume: (v: number) => void;
  togglePlay: () => void;
};

export default function Controls({
  videoRef,
  isPlaying,
  progress,
  setProgress,
  volume,
  setVolume,
  togglePlay,
}: ControlsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <button onClick={togglePlay} className="text-white cursor-pointer">
          {isPlaying ? (
            <Pause size={22} strokeWidth={1.45} className="opacity-90" />
          ) : (
            <Play size={22} strokeWidth={1.45} className="opacity-90" />
          )}
        </button>

        <input
          type="range"
          step={0.01}
          min={0}
          max={100}
          value={progress}
          style={{ "--progress": `${progress}%` } as React.CSSProperties}
          onChange={(e) => {
            if (!videoRef.current) return;
            const value = Number(e.target.value);
            videoRef.current.currentTime =
              (value / 100) * videoRef.current.duration;
            setProgress(value);
          }}
          className="flex-1 slider"
        />

        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          style={{ "--progress": `${volume * 100}%` } as React.CSSProperties}
          onChange={(e) => {
            if (!videoRef.current) return;
            const value = Number(e.target.value);
            videoRef.current.volume = value;
            setVolume(value);
          }}
          className="w-24 slider"
        />
      </div>
    </div>
  );
}

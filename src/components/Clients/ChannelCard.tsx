export default function ChannelCard({
  url,
  img,
  name,
  subs,
}: {
  url: string;
  img: string;
  name: string;
  subs: string;
}) {
  return (
    <a
      className="text-center"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="rounded-full aspect-square w-30 h-30 cursor-pointer neon-glow-purple hover:scale-105 border-4 border-black outline-1 outline-black hover:outline-primary/40 transition-transform duration-200"
        src={img}
      />
      <p className="font-semibold text-sm mt-2 -mb-2">{name}</p>
      <span className="text-xs font-semibold">{subs}</span>
    </a>
  );
}

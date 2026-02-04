import ChannelCard from "./ChannelCard";

export default function Clients() {
  return (
    <section className="py-12 text-secondary mt-40 border-y border-white/5 overflow-hidden">
      <div className="max-w-300 mx-auto px-6 mb-8 text-center md:text-left">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">
          Com quem já trabalhei
        </span>
      </div>
      <div className="overflow-hidden w-full">
        <div className="marquee-track min-w-full">
          <div className="flex gap-10 justify-around whitespace-nowrap min-w-full py-4">
            <ChannelCard
              url="https://www.youtube.com/@bahcraftre"
              img="https://yt3.ggpht.com/Ahpsv7K08yiBlkjdasyq8PjIMhCy4aIttSJUF_V984iTuRUajPvDc4H9ZPaXr-H9XVNa8y0M=s176-c-k-c0x00ffffff-no-rj-mo"
              name="Bahcraft"
              subs="+30k"
            />
            <ChannelCard
              url="https://www.youtube.com/@spexa"
              img="https://yt3.ggpht.com/WZBaZF3jUdV5p6Lfqtese9rjCumoWuep64zp4Jh4ZDPjTf9c2CiCuV4971HSGpheiFcaFSeo=s176-c-k-c0x00ffffff-no-rj-mo"
              name="spexa"
              subs="+500"
            />
            <ChannelCard
              url="https://www.youtube.com/@Cogue12"
              img="https://yt3.googleusercontent.com/zJe7k709pjq1C4RWDRPCYzQRDY4fX9rB5c8LUFqSLWfyypFRnOahZvbRo6TPTKG8COAYs8FJtA=s160-c-k-c0x00ffffff-no-rj"
              name="Cogue12"
              subs="+180k"
            />
            <ChannelCard
              url="https://www.youtube.com/@Lion_TF"
              img="https://yt3.googleusercontent.com/urjs7SF-eczAWiuWchE2qpArOd-vOWb7DA2HqXRJx6dQXtqZjZXyKc3CDeg794KozjETpvej_A=s160-c-k-c0x00ffffff-no-rj"
              name="Lion_TF"
              subs="+500"
            />
            <ChannelCard
              url="https://www.youtube.com/@JhonJhonGG"
              img="https://yt3.googleusercontent.com/pUFenTqNTPEHhAOVtF0J-XgN78Whw2hA9MZKOP42LnI42YxU882M80yIujdVPVDLNwkhMh_tEA=s160-c-k-c0x00ffffff-no-rj"
              name="JhonJhon"
              subs="+55k"
            />
          </div>

          <div className="flex gap-10 justify-around whitespace-nowrap min-w-full py-4">
            <ChannelCard
              url="https://www.youtube.com/@bahcraftre"
              img="https://yt3.ggpht.com/Ahpsv7K08yiBlkjdasyq8PjIMhCy4aIttSJUF_V984iTuRUajPvDc4H9ZPaXr-H9XVNa8y0M=s176-c-k-c0x00ffffff-no-rj-mo"
              name="Bahcraft"
              subs="+30k"
            />
            <ChannelCard
              url="https://www.youtube.com/@spexa"
              img="https://yt3.ggpht.com/WZBaZF3jUdV5p6Lfqtese9rjCumoWuep64zp4Jh4ZDPjTf9c2CiCuV4971HSGpheiFcaFSeo=s176-c-k-c0x00ffffff-no-rj-mo"
              name="spexa"
              subs="+500"
            />
            <ChannelCard
              url="https://www.youtube.com/@Cogue12"
              img="https://yt3.googleusercontent.com/zJe7k709pjq1C4RWDRPCYzQRDY4fX9rB5c8LUFqSLWfyypFRnOahZvbRo6TPTKG8COAYs8FJtA=s160-c-k-c0x00ffffff-no-rj"
              name="Cogue12"
              subs="+180k"
            />
            <ChannelCard
              url="https://www.youtube.com/@Lion_TF"
              img="https://yt3.googleusercontent.com/urjs7SF-eczAWiuWchE2qpArOd-vOWb7DA2HqXRJx6dQXtqZjZXyKc3CDeg794KozjETpvej_A=s160-c-k-c0x00ffffff-no-rj"
              name="Lion_TF"
              subs="+500"
            />
            <ChannelCard
              url="https://www.youtube.com/@JhonJhonGG"
              img="https://yt3.googleusercontent.com/pUFenTqNTPEHhAOVtF0J-XgN78Whw2hA9MZKOP42LnI42YxU882M80yIujdVPVDLNwkhMh_tEA=s160-c-k-c0x00ffffff-no-rj"
              name="JhonJhon"
              subs="+55k"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

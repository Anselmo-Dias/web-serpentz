import a1 from "@/assets/1.jpeg";
import a2 from "@/assets/2.jpeg";
import a3 from "@/assets/3.jpeg";
import a4 from "@/assets/4.jpeg";

export function CarouselImages() {
  return (
    <div className="relative flex items-center  justify-center overflow-hidden">
        <div className="carousel-inner w-full animate-slide flex max-h-[640px] items-center justify-center gap-5 max-sm:flex-wrap">
          <div className="flex flex-col gap-5 w-full">
            <img className="h-[350px] w-full rounded-sm" src={a1} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a2} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a3} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a4} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a1} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a2} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a3} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a4} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a1} alt="" />
          </div>
          <div className="flex translate-y-[100px] w-full flex-col gap-5">
            <img className="h-[350px] w-full rounded-sm" src={a4} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a3} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a2} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a1} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a4} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a3} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a2} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a1} alt="" />
            <img className="h-[350px] w-full rounded-sm" src={a1} alt="" />
          </div>
        </div>
      </div>
  )
}

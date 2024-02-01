import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 md:order-2">
            <h1 className="h1-bold">
              Create and Celebrate Your Events, Our Platform!!!
            </h1>
            <p className="p-regular-20 md:p-regular-24 sm:text-justify">
              Create, Book, and Celebrate your Events. Trusted by world-class
              companies with our global community.
            </p>
            <Button
              size="lg"
              asChild
              className="button bg-slate-900 hover:bg-slate-700 w-full sm:w-fit"
            >
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div className="md:order-1 ">
            <Image
              src="/assets/images/hero.png"
              alt="hero image"
              width={1000}
              height={1000}
              className="max-h-[80vh] object-contain object-center 2xl:max-h-[60vh]"
            />
          </div>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Millions of Events
        </h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          Search Category Filter
        </div>
      </section>
    </main>
  );
}

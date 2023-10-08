import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <div className="w-52 h-52 mx-auto rounded-full overflow-hidden">
        <Image
          className="h-full w-full"
          alt="profile"
          src={profileImage}
          priority
          objectFit="cover"
        />
      </div>
      <h2 className="text-2xl font-bold mt-2">Cotton Han</h2>
      <h3 className="text-lg font-semibold">Software engineer</h3>
      {/* <p className="">{""}</p> */}
      <Link href="/contact">
        <button className="bg-slate-900 text-white px-4 py-2 mt-2 rounded-md hover:bg-slate-700 transition-all">
          Contact me
        </button>
      </Link>
    </section>
  );
}

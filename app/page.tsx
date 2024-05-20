import NextBgImage from "next-bg-image";
import Image from "next/image";
import GreenBackgroundImage from '@/public/GreenBackgroundImage.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <NextBgImage src={GreenBackgroundImage}>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-white">Welcome to my website</h1>
            <p className="text-white">This is a simple example of how to use next-bg-image</p>
          </div>
        </NextBgImage>

    </main>
  );
}

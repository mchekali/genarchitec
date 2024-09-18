"use client";

import Image from "next/image";
import Link from "next/link";
import ImageComparisonSlider from "@/components/ImageComparisonSlider";

const Home = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH; // Get the base path from env

  // Define an array of image pairs using the dynamic base path
  const imagePairs = [
    {
      before: `${basePath}/assets/images/render/imgX-1.jpeg`,
      after: `${basePath}/assets/images/render/imgX-8.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgX-1.jpeg`,
      after: `${basePath}/assets/images/render/imgX-5.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgX-1.jpeg`,
      after: `${basePath}/assets/images/render/imgX-6.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgX-1.jpeg`,
      after: `${basePath}/assets/images/render/imgX-3.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgJ-1.jpg`,
      after: `${basePath}/assets/images/render/imgJ-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgU-1.png`,
      after: `${basePath}/assets/images/render/imgU-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgD-1.jpg`,
      after: `${basePath}/assets/images/render/imgD-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgE-1.jpg`,
      after: `${basePath}/assets/images/render/imgE-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgK-1.webp`,
      after: `${basePath}/assets/images/render/imgK-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgO-1.jpg`,
      after: `${basePath}/assets/images/render/imgO-3.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgQ-1.jpg`,
      after: `${basePath}/assets/images/render/imgQ-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgR-1.jpg`,
      after: `${basePath}/assets/images/render/imgR-2.png`,
    },

    {
      before: `${basePath}/assets/images/render/imgB-1.jpg`,
      after: `${basePath}/assets/images/render/imgB-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgC-1.jpg`,
      after: `${basePath}/assets/images/render/imgC-2.png`,
    },
    {
      before: `${basePath}/assets/images/render/imgT-1.jpg`,
      after: `${basePath}/assets/images/render/imgT-2.png`,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 text-gray-100">
      {/* Hero Section */}
      <section className="h-full text-center space-y-8 sm:space-y-10 py-12 sm:py-16 bg-[#132313] shadow-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-fredoka text-transparent bg-clip-text bg-white animate-gradient-x">
          AI Architecture and Design Generator
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl text-gray-300 max-w-3xl mx-auto px-4 font-light leading-relaxed">
          Unlock the future of design with our AI Architecture and Design
          Generator.
        </p>
        <Link
          href="/create-prompt"
          className="inline-block bg-[linear-gradient(240deg,#06B6D4,#97fc00)] text-white px-12 sm:px-16 py-5 sm:py-6 rounded-full hover:bg-[linear-gradient(240deg,#06B6D4,#97fc00)] transition duration-300 text-2xl sm:text-3xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse"
        >
          Start Generating Now
        </Link>
        <div>
          {/* <h1>Compare Multiple Images</h1> */}
          {imagePairs.map((pair, index) => (
            <div key={index} style={{ marginBottom: "40px" }}>
              <ImageComparisonSlider
                beforeImage={pair.before}
                afterImage={pair.after}
              />
            </div>
          ))}
        </div>

        {/* <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-96 justify-center">
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgE-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgE-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgE-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgE-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgD-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgD-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgD-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgD-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgT-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgT-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgT-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgT-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgJ-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgJ-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgJ-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgJ-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgU-1.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgU-1.png`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgU-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgU-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgK-1.webp`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgK-1.webp`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgK-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgK-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgO-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgO-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgO-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgO-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgQ-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgQ-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgQ-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgQ-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgR-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgR-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgR-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgR-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgA-1.webp`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgA-1.webp`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgA-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgA-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded">
              BEFORE
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgB-1.jpg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgB-1.jpg`}
                  alt="Render Image 1"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
              AFTER
            </div>
            <div className="bg-white w-full h-full flex items-center justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgB-2.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/render/imgB-2.png`}
                  alt="Render Image 2"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center h-full"
                />
              </a>
            </div>
          </div>
        </section> */}
      </section>
    </div>
  );
};

export default Home;

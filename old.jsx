import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="space-y-24 sm:space-y-32 text-gray-100">
      {/* Hero Section */}
      <section className="h-full text-center space-y-8 sm:space-y-10 py-12 sm:py-16 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 shadow-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 animate-gradient-x">
          AI Architecture and Design Generator
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl text-gray-300 max-w-3xl mx-auto px-4 font-light leading-relaxed">
          Unlock the future of design with our AI Architecture and Design
          Generator.
        </p>
        <Link
          href="/create-prompt"
          className="inline-block bg-gradient-to-r from-cyan-700 to-cyan-800 text-white px-12 sm:px-16 py-5 sm:py-6 rounded-full hover:from-cyan-800 hover:to-cyan-900 transition duration-300 text-2xl sm:text-3xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse"
        >
          Start Generating Now
        </Link>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-96 justify-center">
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
        </section>
      </section>

      {/* Special Offers Section */}
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-4 sm:px-8">
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 text-white p-10  shadow-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-4xl font-fredoka mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Magical Mondays
          </h3>
          <p className="text-2xl mb-6 text-gray-300">Unleash 20% More Magic</p>
          <Link
            href="/create-prompt"
            className="bg-pink-600 text-white px-8 py-3 rounded-full inline-block hover:bg-pink-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Create Now
          </Link>
        </div>
        <div className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-10  shadow-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-4xl font-fredoka mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Weekend Wonders
          </h3>
          <p className="text-2xl mb-6 text-gray-300">
            Enjoy 15% Extra Creativity
          </p>
          <Link
            href="/create-prompt"
            className="bg-blue-600 text-white px-8 py-3 rounded-full inline-block hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Create Now
          </Link>
        </div>
      </section> */}

      {/* Our Magic Menu */}
      {/* <section className="text-center space-y-12 bg-gray-900 py-20  shadow-inner">
        <h2 className="text-5xl sm:text-6xl font-bold font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
          Our Magic Menu
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {["All", "Animals", "Landscapes", "Superheroes", "Fantasy"].map(
            (category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {category}
              </button>
            ),
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-4 sm:px-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/image${item}.png`}
                alt={`Art Sample ${item}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
              />
              <h3 className="text-3xl font-fredoka mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Magical Creation {item}
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Transform your simple sketch into a breathtaking masterpiece!
              </p>
              <Link
                href="/create-prompt"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full inline-block hover:from-purple-700 hover:to-pink-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
              >
                Create Now
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/gallery"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-12"
        >
          Explore Our Gallery
        </Link>
      </section> */}

      {/* About Us Section */}
      {/* <section className="bg-gradient-to-br from-purple-900 to-indigo-900 py-20 px-4 sm:px-8  shadow-2xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            We Are AI Art Magic
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed">
            We bring children's imagination to life through the power of AI. Our
            magical platform transforms simple sketches into stunning, realistic
            artworks, encouraging creativity and wonder in young minds.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover Our Story
          </Link>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-24 sm:py-32  px-4 sm:px-8 shadow-2xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-gradient-x">
          Ready to Create Magic?
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl mb-12 sm:mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Join our community of young artists and watch your imagination come to
          life!
        </p>
        <Link
          href="/create-prompt"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 sm:px-16 py-5 sm:py-6 rounded-full hover:from-yellow-500 hover:to-orange-600 transition duration-300 text-2xl sm:text-3xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-bounce"
        >
          Start Your Magical Journey
        </Link>
      </section> */}
    </div>
  );
};

export default Home;

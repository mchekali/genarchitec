"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "react-tabs/style/react-tabs.css"; // Import the CSS for react-tabs
import { getBase64 } from "../../utils/getBase64";
import Lottie from "react-lottie";
import animationData from "../../public/assets/animation/loading.json";

const CreatePrompt = () => {
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [controller, setController] = useState(null); // For handling cancellation

  const [selectedImage, setSelectedImage] = useState(null);
  const [sketchImageUrl, setSketchImageUrl] = useState(null);

  const [prompt, setPrompt] = useState("");
  const [useUpscaling, setUseUpscaling] = useState(false); // Add this line

  const [dragActive, setDragActive] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [upscaledImage, setUpscaledImage] = useState(null); // Add this line

  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB

  const [generationType, setGenerationType] = useState("sketch"); // Add this line

  // Handle generation type change
  const handleGenerationTypeChange = (event) => {
    setGenerationType(event.target.value);
    console.log("generationType = ", event.target.value);
  };

  // Handle prompt change
  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  // Handle image upload
  const handleImageUpload = async (event, setImage, setImageUrl) => {
    const file = event.target.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the 20 MB limit. Please upload a smaller file.");
      return;
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);

      const base64 = await getBase64(file);
      setImageUrl(base64);
    }
  };

  // Handle drop event
  const handleDrop = useCallback((e, setImage, setImageUrl) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file && file.size > MAX_FILE_SIZE) {
        alert(
          "File size exceeds the 2 MB limit. Please upload a smaller file.",
        );
        return;
      }

      const url = URL.createObjectURL(file);
      setImage(url);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImageUrl(base64data);
      };
    }
  }, []);

  // Handle drag event
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sketchImageUrl) {
      console.log("image is required");
      return;
    }
    setLoading(true);
    setGeneratedImage(null);

    const abortController = new AbortController();
    setController(abortController);

    try {
      setGenerating(true);

      let apiEndpoint = "";
      let requestBody = {};

      if (generationType === "design") {
        apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_PATH}/api/interior`;
        requestBody = { imageUrl64: sketchImageUrl, prompt };
      } else if (generationType === "sketch") {
        apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_PATH}/api/generate`;
        requestBody = { imageUrl64: sketchImageUrl, prompt };
      } else if (generationType === "upscale") {
        apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_PATH}/api/upscale`;
        requestBody = { image: sketchImageUrl };
      }

      const generatedResponse = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        signal: abortController.signal,
      });

      if (!generatedResponse.ok) {
        const errorText = await generatedResponse.text();
        throw new Error(`Error generating image: ${errorText}`);
      }

      const generatedData = await generatedResponse.json();
      setGeneratedImage(generatedData.output);
      console.log("Image generated successfully:", generatedData.output);

      // Call API to upscale image if required
      if (useUpscaling && generationType !== "upscale") {
        const upscaledResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_PATH}/api/upscale`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: generatedData.output.toString() }),
          },
        );

        console.log("generatedData.output = ", generatedData.output.toString());
        const upscaledData = await upscaledResponse.json();
        setUpscaledImage(upscaledData.output);
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Generation canceled");
      } else {
        console.error("Error:", error);
      }
    } finally {
      setController(null);
      setLoading(false);
      setGenerating(false);
    }
  };

  // Cancel function
  const handleCancel = () => {
    if (controller) {
      controller.abort();
    }
  };

  // Download generated image
  const downloadImage = () => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "generated_image.png";
    link.target = "_self"; // Ensure it does not open a new window
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="w-full flex flex-col bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 min-h-screen h-full text-gray-100">
      {/* Main content */}
      <div className="w-full h-full py-8 px-4 sm:px-8 ">
        <div className="bg-cyan-950 p-6 rounded-2xl shadow-lg mb-6">
          <div className="flex flex-col space-y-4">
            <label className="flex items-center">
              <span className="ml-2 text-gray-300">
                Choose your AI Generation tool
              </span>
            </label>
            <select
              name="generationType"
              className="form-select"
              value={generationType}
              onChange={handleGenerationTypeChange}
            >
              <option value="sketch">Sketch to Image</option>
              <option value="design">Interior Design</option>
              <option value="upscale">Image Upscale</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
          {/* First column */}
          <div className="lg:col-span-3 bg-cyan-950 p-6 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-semibold mb-4">Parameters</h2>

              {/* Sketch Image */}
              <div>
                <label className="flex items-center mb-2">
                  <span className="font-satoshi text-sm text-gray-300 mr-2">
                    Your sketch or image <span className="text-red-500">*</span>
                  </span>
                </label>

                <div
                  className={`contourvert w-full cursor-pointer text-gray-300 ${
                    dragActive ? "border-dashed border-blue-600" : ""
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={(e) =>
                    handleDrop(e, setSelectedImage, setSketchImageUrl)
                  }
                >
                  <label
                    htmlFor="dropzone-sketch-file"
                    className="w-full h-full flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center p-3 ">
                      <p className="mb-2 text-xs text-gray-300">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-[10px] text-gray-300">
                        (Format PNG, WEBP or JPG, Max size: 2 MB)
                      </p>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="dropzone-sketch-file"
                    className="hidden"
                    onChange={(e) =>
                      handleImageUpload(e, setSelectedImage, setSketchImageUrl)
                    }
                    accept="image/png, image/jpeg, image/webp"
                  />
                </div>
              </div>

              {/* Prompt */}
              <div className="mt-6">
                <label>
                  <span className="font-satoshi text-sm text-gray-300">
                    Describe your sketch or image (AI Prompt)
                  </span>
                  <textarea
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="Description of the sketch or the image. eg. 'typical Haussmannian building in a Paris neighborhood, with stone facades, wrought iron balconies, and zinc roofs, sunny day, blue sky.'"
                    style={{ fontSize: "12px" }}
                    className="contourtextarea form_textarea bg-gray-700 text-white mt-2 p-2 rounded-lg w-full"
                    rows="10"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    checked={useUpscaling}
                    onChange={(e) => setUseUpscaling(e.target.checked)}
                  />

                  <span className="ml-2 text-sm text-gray-300">
                    Use Upscaling
                  </span>
                </label>
                <span className="block text-[10px] text-[#a6ffe7] mt-1">
                  High definition image but requires more processing time (Up to
                  10-15 seconds more)
                </span>
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center w-40"
                  disabled={generating}
                >
                  {loading ? "Processing..." : "Run"}
                </button>

                <button
                  type="button"
                  className="mt-4 ml-4 bg-gray-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center w-40"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Second column */}
          <div className="lg:col-span-4 bg-cyan-950 p-6 rounded-2xl shadow-lg flex flex-col">
            {selectedImage && (
              <div className="rounded-lg relative bg-black p-2 shadow-lg flex justify-center ">
                <>
                  <Image
                    src={selectedImage}
                    alt="Sketch image"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg"
                  />
                </>
              </div>
            )}
          </div>

          {/* Third column */}
          <div className="lg:col-span-5 bg-cyan-950 p-6 rounded-2xl shadow-lg flex flex-col">
            {generating ? (
              <div className="flex items-center justify-center w-full h-[100vh] text-blue dark:text-gray-100 dark:bg-gray-950">
                <div className="relative p-4 max-w-sm mx-auto">
                  <Lottie options={defaultOptions} height={200} width={200} />
                  <span className="text-gray-300 text-sm text-center w-full block">
                    Generating your image, please wait...
                  </span>
                </div>
              </div>
            ) : (
              (generatedImage || upscaledImage) && (
                <div className="relative rounded-xl bg-black p-2 shadow-lg">
                  <img
                    src={upscaledImage || generatedImage}
                    alt="Output image"
                    className="w-full h-auto rounded-lg "
                  />
                  <button
                    className="absolute bottom-5 right-5 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center"
                    onClick={downloadImage}
                    disabled={!generatedImage}
                    title="Download Image"
                  >
                    <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePrompt;

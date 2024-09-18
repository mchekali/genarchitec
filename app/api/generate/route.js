import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request) {
    try {
        const {
            imageUrl64,
            prompt,
        } = await request.json();

        if (!prompt || !imageUrl64) {
            return NextResponse.json(
                { error: "Prompt and Image URL are required" },
                { status: 400 },
            );
        }

        // const output = await replicate.run(
        //     "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
        //     {
        //         input: {
        //             image: imageUrl64,
        //             prompt: prompt,
        //             guidance_scale: 15,
        //             negative_prompt:
        //                 "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic",
        //             prompt_strength: 0.8,
        //             num_inference_steps: 50,
        //         },
        //     },
        // );
        // console.log(output);

        const output = await replicate.run(
            "qr2ai/outline:ba60c1777f6ced951496e504124841978041baaf72e6e82e9e005bddcbdb307c",
            {
                input: {
                    seed: 0,
                    image: imageUrl64,
                    width: 1024,
                    height: 1024,
                    prompt: prompt,
                    num_outputs: 1,
                    suffix_prompt: "high detail, photorealistic, ultra high definition, award-winning, stunning visuals, intricate details, hyper-realistic",
                    guidance_scale: 15,
                    generate_square: true,
                    negative_prompt: "Dull and Lifeless Colors, Poor Lighting, Blurred and Unfocused, Overexposed Highlights, Crowded and Cluttered, Distorted Perspective, Gritty Texture, low res, draft, cgi, low quality render, thumbnail",
                    num_inference_steps: 50,
                    adapter_conditioning_scale: 0.9
                }
            }
        );
        console.log(output);

        return NextResponse.json({ output });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json(
            { error: "Failed to generate image" },
            { status: 500 },
        );
    }
}

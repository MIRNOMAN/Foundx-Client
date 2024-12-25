"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import Base64 from "base64-js";

const generateDescription = async (imageURL: string, prompt: string) => {
  const imageBase64 = await fetch(imageURL)
    .then((res) => res.arrayBuffer())
    .then((arrayBuffer) => Base64.fromByteArray(new Uint8Array(arrayBuffer)));

  console.log("Image string", imageBase64);

  const contents = [
    {
      role: "user",
      parts: [
        {
          inline_data: { mime_type: "image/jpeg", data: imageBase64 },
        },
        { text: prompt },
      ],
    },
  ];

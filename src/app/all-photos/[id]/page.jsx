import { Chip, Button } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const PhotoDetelsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-indol.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find((p) => p.id === Number(id));

  if (!photo) {
    return <h1 className="text-center mt-10 text-2xl">Photo Not Found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="relative w-full h-[500px]">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-5">
          <Chip color="primary">{photo.category}</Chip>

          <h1 className="text-4xl font-bold">
            {photo.title}
          </h1>

          <p className="text-gray-600">
            {photo.description}
          </p>

          <div className="flex gap-8 text-lg">
            <div className="flex items-center gap-2">
              <FaHeart className="text-red-500" />
              <span>{photo.likes} Likes</span>
            </div>

            <div className="flex items-center gap-2">
              <FaDownload />
              <span>{photo.downloads} Downloads</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Prompt</h3>
            <p className="bg-gray-100 p-3 rounded-lg mt-2">
              {photo.prompt}
            </p>
          </div>

          <Button color="primary">
            Download Image
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetelsPage;


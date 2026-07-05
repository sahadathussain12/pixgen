import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const PhotoCard = ({ photo }) => {
  console.log(photo,'photo');
  return (
    <div className="border p-2 rounded-lg">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          className="object-cover rounded"
        />
        <Chip className="absolute right-2 mt-2">{photo.category}</Chip>
      </div>

      <h2 className="font-semibold mt-2">{photo.title}</h2>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <FaHeart />
          {photo.likes}
        </div>

        <div className="flex items-center gap-1">
          <FaDownload />
          {photo.downloads}
        </div>
      </div>
     <Link href={`/all-photos/${photo.id}`}>
      <Button variant="ghost" className="w-full mt-2 border">view Detels</Button>
     </Link>
    </div>
  );
};

export default PhotoCard;
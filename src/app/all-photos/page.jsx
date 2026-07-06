import CategoryPage from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async ({ searchParams }) => {
  const { categoryy } = await searchParams;

  const res = await fetch(`https://pixgen-indol.vercel.app/data.json`);
  const allPhotos = await res.json();

  const photos = categoryy
    ? allPhotos.filter(photo => photo.category === categoryy)
    : allPhotos;

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h1 className="text-3xl font-bold m">All Photos</h1>
      <CategoryPage categoryy={categoryy} />
      <div className="grid grid-cols-4 mt-4">
        {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};

export default AllPhotosPage;
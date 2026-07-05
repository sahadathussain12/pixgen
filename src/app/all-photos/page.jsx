import PhotoCard from "@/components/PhotoCard";


const AllPhotosPage = async() => {
    const res = await fetch(`https://pixgen-indol.vercel.app/data.json`)
    const photos = await res.json()
    console.log(photos);
    return (
        <div className="max-w-6xl mx-auto mt-5"> 
            <h1 className="text-3xl font-bold m">All Photos</h1>

        <div className="grid grid-cols-4 mt-4">
           {photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
        </div>
        </div>
    );
};

export default AllPhotosPage;
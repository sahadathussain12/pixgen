import Link from 'next/link';
import { Button } from '@heroui/react';

const CategoryPage = async ({ categoryy }) => {
  const res = await fetch(`https://pixgen-indol.vercel.app/category.json`);
  const categories = await res.json();

  return (
    <div className='mb-4 space-x-3 mt-3'>
      <Link href="/all-photos">
        <Button variant={!categoryy ? 'solid' : 'bordered'}>All</Button>
      </Link>
      {categories.map(category => (
        <Link key={category.id} href={`/all-photos?categoryy=${category.name}`}>
          <Button variant={categoryy === category.name ? 'solid' : 'bordered'}>
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
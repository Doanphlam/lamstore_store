import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
/* THE ORIGINAL CODE ( THE UPPER CODE IS GPT TO MAKE UI MORE BEAUTIFUL ) 
import { getCollections } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';

const Collections = async () => {
  const collections = await getCollections();
  return (
    <div className='flex flex-col items-center gap-10 py-8 px-5'>
      <p className='text-heading1-bold'>COLLECTIONS</p>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {collections.map((collection: CollectionType) => ( 
         <Link href={`/collections/${collection._id}`} key={collection._id}>
           <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="rounded-lg cursor-pointer"
              />
         </Link>
        ))}
      </div>
    </div>
  )
}

export default Collections



*/ // beautiful one down here



/*import { getCollections } from '@/lib/actions/actions';
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
             <div className="w-64 h-48 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={collection.image}
                alt={collection.title}
                width={256}
                height={192}
                className="object-cover"
              />
             </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;

 */
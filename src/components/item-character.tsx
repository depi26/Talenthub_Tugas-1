import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";

interface Character{
    name: string,
    imgCharacter: string
}

function ItemCharacter({name, imgCharacter}: Character) {
    return (
        <div className="border-gray-600 border-dashed border-2 rounded-xl w-52">
            <Image
            src={imgCharacter}
            alt={name}
            width={205}
            height={200}
            className="object-cover h-40 rounded-xl"
            />
            <h1 className="text-l text-center font-mono border-2 rounded-full border-gray-50 border-double text-black">{name}</h1>
        </div>
    )
}

export default ItemCharacter
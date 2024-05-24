import ItemCat from "@/components/item-cat";
import ItemCharacter from "@/components/item-character";
import ItemFilm from "@/components/item-film";
import ItemProduck from "@/components/item-produck";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h4 className="p-1 m-1 font-mono font-semibold  text-2xl text-center bg-gray-200 text-black ">- KUCING -</h4>
      <div className="flex justify-center p-4 bg-indigo-200 ">
        <div className="grid grid-cols-5 gap-5">
          <ItemCat name="Abyssinian" imgCat="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
          <ItemCat name="Bombay" imgCat="https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg"/>
          <ItemCat name="Cheetoh" imgCat="https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg" />
          <ItemCat name="Donskoy" imgCat="https://cdn2.thecatapi.com/images/3KG57GfMW.jpg"/>
          <ItemCat name="Persia" imgCat="https://cdn2.thecatapi.com/images/-Zfz5z2jK.jpg" />
        </div>
      </div>

      <h4 className="p-1 m-1 font-mono font-semibold text-2xl text-center bg-purple-300 text-red-700 ">- FILM -</h4>
      <div className="flex justify-center p-4 bg-pink-200">
        <div className="grid grid-cols-5 gap-5">
          <ItemFilm name="Train To Busan" imgFilm="https://asianwiki.com/images/5/5a/Train_To_Busan-p1.jpg" />
          <ItemFilm name="Exhuma" imgFilm="https://asianwiki.com/images/5/57/Exhuma-CMS1.jpg"/>
          <ItemFilm name="The Plot" imgFilm="https://asianwiki.com/images/4/4f/The_Plot_KM-p1.jpeg" />
          <ItemFilm name="Gonjiam" imgFilm="https://asianwiki.com/images/5/5f/Gonjiam-_Haunted_Asylum-P1.jpg"/>
          <ItemFilm name="Peninsula" imgFilm="https://asianwiki.com/images/7/7a/Peninsula-Korean_Movie-P1.jpg" />
        </div>
      </div>

      <h4 className="p-1 m-1 font-mono font-semibold text-2xl text-center bg-gray-200 text-black ">- PRODUK -</h4>
      <div className="flex justify-center p-4 bg-indigo-200">
        <div className="grid grid-cols-5 gap-5">
          <ItemProduck name="Hoodie" imgProduck="https://i.pinimg.com/564x/f3/aa/cc/f3aacc4894215d40e0e33c67c6a2cec2.jpg" />
          <ItemProduck name="Topi Pantai" imgProduck="https://i.pinimg.com/564x/7f/c0/38/7fc0381ed4c32fa4c8202e5bbeef2f54.jpg"/>
          <ItemProduck name="Hijab" imgProduck="https://i.pinimg.com/564x/27/f0/f3/27f0f3ce83cd5e9599f7a58329d24cc7.jpg" />
          <ItemProduck name="Sepatu" imgProduck="https://i.pinimg.com/564x/76/53/65/765365f54a8b767d174c8755cc2882b1.jpg"/>
          <ItemProduck name="Baju" imgProduck="https://i.pinimg.com/564x/00/f9/51/00f951112c99df70f413a3b52b8813b5.jpg" />
        </div>
      </div>

      <h4 className="p-1 m-1 font-mono font-semibold text-2xl text-center  bg-purple-300 text-red-700 ">- KARAKTER -</h4>
      <div className="flex justify-center p-4 bg-pink-200">
        <div className="grid grid-cols-5 gap-5">
          <ItemCharacter name="Spongebob" imgCharacter="https://i.pinimg.com/564x/95/76/17/95761785f25146c75730db347b3772a5.jpg" />
          <ItemCharacter name="Patrick" imgCharacter="https://i.pinimg.com/564x/5d/07/94/5d0794b120644d2ecaea36a02a5996b9.jpg"/>
          <ItemCharacter name="Squidward" imgCharacter="https://i.pinimg.com/564x/03/3b/3f/033b3fa074b68a90098955cfdb9ef19a.jpg" />
          <ItemCharacter name="Mr. Krab" imgCharacter="https://i.pinimg.com/564x/81/e2/90/81e29054fe141f5244d1fe83febaed06.jpg"/>
          <ItemCharacter name="Gary" imgCharacter="https://i.pinimg.com/564x/87/6c/ac/876cacf9021f0fac83939e7382313e18.jpg" />
        </div>
      </div>
      </main>
  );
}

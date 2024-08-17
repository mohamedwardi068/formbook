import React from 'react';

const categories = [
  { name: 'Romance', img: 'https://ew.com/thmb/Fq5b7JKo1L3b3HYhoPzyA3pzVSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Technically-Yours-by-Denise-Williams--romance-books-121423-61cae6f7114d48768d32a7c38ba1341b.jpg' },
  { name: 'Fantasy & Paranormal', img: 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg' },
  { name: 'Vampire & Werewolf', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Mystery', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Suspense', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Horror', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Sci-Fi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Classic', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Short Story', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
  { name: 'Action', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RhuSvDUiUEsgfv4new_UqBG_1Gws6IylcA&s' },
];

function PopularCat() {
  return (
    <div className="mx-8 my-4 ml-[15%] md:ml-[5%] mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="flex overflow-x-auto mt-4 space-x-4 ml-[0.5%] justify-around">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center justify-around">
            <img src={category.img} alt={category.name} className="w-[110px] h-[110px] object-cover rounded-full" />
            <span className="text-sm font-bold mt-2 text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCat;

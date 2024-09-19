import React from 'react';
import BottomStory from '../components/bottomstory';
import TopStory from '../components/topstory';
import { useApi } from '../context/apicontext';

function Story() {
  const { newBooks } = useApi();

  return (
    <div>
      {newBooks?.length !== 0 ? (
        <>
          {newBooks.map((product) => (
            <TopStory
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              desc={product.description}
            />
          ))}
          {newBooks.map((product) => (
            <BottomStory
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              desc={product.description}
            />
          ))}
        </>
      ) : (
        <div>Error: No products available</div>
      )}
    </div>
  );
}

export default Story;

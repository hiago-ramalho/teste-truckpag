import axios from 'axios';

import { useEffect, useState } from 'react';
import { ContentContainer, QuantityBox } from './styles';

export default function Content() {

  const [jokes, setJoke] = useState([]);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://api.icndb.com/jokes/random/3?escape=javascript`);


      setJoke(data.value)
    })()
  }, []);

  async function handleSearchJokes(event) {
    event.preventDefault();

    const { data } = await axios.get(`http://api.icndb.com/jokes/random/${quantity}`);
    setJoke(data.value)

  }

  function handleChangeQuantity(event) {
    event.preventDefault();
    setQuantity(event.target.value)
  }

  return (
    <>
      <ContentContainer>
        {jokes.map((joke, i) => (
          <p key={joke.id}>
            {i + 1} - {joke.joke}
          </p>
        ))}
      </ContentContainer>

      <QuantityBox>
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" name="quantity" id="quantity" onChange={handleChangeQuantity} />
          <button onClick={handleSearchJokes}>Search</button>
        </QuantityBox>
    </>
  )
}
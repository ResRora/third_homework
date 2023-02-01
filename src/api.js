export async function fetchImages(breed) {
    const response = await fetch(
      `https://randomfox.ca/floof/`
    );
    //https://randomfox.ca/floof/
    // {"image":"https:\/\/randomfox.ca\/images\/17.jpg","link":"https:\/\/randomfox.ca\/?i=17"}
    //https://dog.ceo/api/breed/${breed}/images/random/12
    const data = await response.json();
    //return data.message;
    return data.image;
  }
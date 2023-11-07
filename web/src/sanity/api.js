import { useSanityClient, groq } from 'astro-sanity';

console.log(useSanityClient)

export async function getBlogPost() {
  const query = groq`*[_type == "post"]{
    title,
  }`;

  const data = await useSanityClient().fetch(query);
  console.log('test data', data)
  return data; 
}
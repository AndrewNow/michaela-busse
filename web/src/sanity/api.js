import { useSanityClient, groq } from 'astro-sanity';

export async function getBlogPost() {
  const query = groq`*[_type == "post"]{
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    location,
    categories,
    publishedAt,
    body,
  }`;

  const data = await useSanityClient().fetch(query);
  return data; 
}

export async function getNewsPost() {
  const query = groq`*[_type == "news"]{
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    categories,
    publishedAt,
    body,
  }`;

  const data = await useSanityClient().fetch(query);
  return data; 
}


export async function getGeneralInfo() {
  const query = groq`*[_type == "generalInfo"]{
    name,
    location,
    biography
  }`;

  const data = await useSanityClient().fetch(query);
  return data; 
}


export async function getCategories() {
  const query = groq`*[_type == "category"]{
    title,
  }`;

  const data = await useSanityClient().fetch(query);
  return data; 
}
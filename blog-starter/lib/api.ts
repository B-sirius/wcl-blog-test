import axios from 'axios'

export async function getPostSlugs() {
  const res = (await axios.get(`http://localhost:1337/api/blogs?populate=coverImage`));
  const postList = res.data.data;
  return postList;
}

export async function getPostBySlug(slug) {
  const res = (await axios.get(`http://localhost:1337/api/blogs/${slug}?populate=*`));
  const { id, attributes } = res.data.data;
  const { detail, title, coverImage, date, description } = attributes;
  return {
    slug: id,
    content: detail.data.attributes.detail,
    title,
    date,
    excerpt: description,
    coverImage: `http://localhost:1337${coverImage.data.attributes.url}`
  };
}

export async function getAllPosts() {
  const postList = ((await getPostSlugs()) || [])
    .map(item => {
      const { id, attributes } = item;
      return {
        slug: id,
        title: attributes.title,
        excerpt: attributes.description,
        date: attributes.date,
        coverImage: `http://localhost:1337${attributes.coverImage.data.attributes.url}`
      };
    });
  const posts = postList
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

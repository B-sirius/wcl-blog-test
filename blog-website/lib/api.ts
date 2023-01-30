import axios from 'axios'

export async function getPostSlugs() {
  const res = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_DOMAIN}/api/blogs?populate=coverImage`));
  const postList = res.data.data;
  return postList;
}

export async function getPostBySlug(slug) {
  const res = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_DOMAIN}/api/blogs/${slug}?populate=coverImage`));
  const { id, attributes } = res.data.data;
  const { detail, title, coverImage, date, description } = attributes;
  return {
    slug: id,
    content: detail,
    title,
    date,
    excerpt: description,
    coverImage: `${process.env.NEXT_PUBLIC_CMS_DOMAIN}${coverImage.data.attributes.url}`
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
        coverImage: `${process.env.NEXT_PUBLIC_CMS_DOMAIN}${attributes.coverImage.data.attributes.url}`
      };
    });
  const posts = postList
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

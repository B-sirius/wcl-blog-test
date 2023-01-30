import { remark } from 'remark'
import html from 'remark-html'
import imgLinks from '@pondorasti/remark-img-links';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(imgLinks, { absolutePath: process.env.NEXT_PUBLIC_CMS_DOMAIN }) // add prefix for relative path in image
    .use(html)
    .process(markdown)
  return result.toString()
}

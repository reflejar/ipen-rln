import fs from 'fs'
import matter from "gray-matter"

export default function getArticleMetadata(basePath) {
  const folder = basePath + '/'
  const files = fs.readdirSync(folder)
  const markdownArticles = files.filter(file => file.endsWith('.md'))

  //get the file data
  const article = markdownArticles.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      author: matterResult.data.author,
      description: matterResult.data.description,
      image: matterResult.data.image,
      date: matterResult.data.date,
      slug: filename.replace('.md', '')
    }
  })
  return article
}
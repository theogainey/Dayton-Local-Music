import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {gfm, gfmHtml} from 'micromark-extension-gfm'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import remarkStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts')
const peopleDirectory = path.join(process.cwd(), 'people')
const eventsDirectory = path.join(process.cwd(), 'events')

export function getSortedPostsData(limit) {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })

  allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  if (limit) {
    return allPostsData.splice(0,limit);
  }
  else {
    return allPostsData
  }
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostsAdjacent(thisid){
  const sortedPosts = getSortedPostsData();
  const post = sortedPosts.find(({id}) => id === `${thisid}`);
  const postIndex = sortedPosts.indexOf(post);
  const adjacentPosts = [
    sortedPosts[postIndex+1]? sortedPosts[postIndex+1].id : null,
    sortedPosts[postIndex-1]? sortedPosts[postIndex-1].id : null,
  ]
  return adjacentPosts
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(remarkStringify)
  .process(matterResult.content)

  const contentHtml = processedContent.toString()
  const authorHref = matterResult.data.author.toLowerCase().replace(/\s/,"-" )
  // Combine the data with the id and contentHtml
  return {
    id,
    authorHref,
    contentHtml,
    ...matterResult.data
  }
}

export function getAllPeopleIds() {
  const fileNames = fs.readdirSync(peopleDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPersonData(id) {
  const fullPath = path.join(peopleDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const name = matterResult.data.name;
  const allPostsData = getSortedPostsData().filter(post => post.author===matterResult.data.name)
  return {
    name,
    allPostsData
  }
}

export function getAllEventIds() {
  const fileNames = fs.readdirSync(eventsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}


export function getSortedEventsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(eventsDirectory)
  const allEventsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(eventsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allEventsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1
    } else {
      return -1
    }
  })
}

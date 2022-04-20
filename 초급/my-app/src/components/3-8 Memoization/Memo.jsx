import React, {
  useEffect,
  useState
} from 'react'
import Comments from './Comments'

const commentList = [{
    title: "comment1",
    content: "message1",
    likes: 1
  },
  {
    title: "comment2",
    content: "message2",
    likes: 2
  },
  {
    title: "comment3",
    content: "message3",
    likes: 3
  },
]

export default function Memo() {
  const [comments, setComments] = useState(commentList)

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((pervComments) => [
        ...pervComments,
        {
          title: `comment${pervComments.length + 1}`,
          content: `message${pervComments.length + 1}`,
          likes: 1
        }
      ])
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return ( <
    Comments commentList = {
      comments
    }
    />
  )
}
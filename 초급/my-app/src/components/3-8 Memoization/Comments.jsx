import React, {useCallback} from 'react'
import CommentItem from './CommentItem'

export default function Comments({commentList}) {
  const handleChange = useCallback(() => {
    console.log("눌림")
  },[])

  return (
    <div>
      {commentList.map((comment) => <CommentItem 
        key={comment.title}
        title={comment.title}
        content={comment.content}
        likes={comment.likes}
        onClick={handleChange}
        // 메모리제이션은 props가 동일한 상태일때만 효과가 있다. memo를 써도 이 안에있는 props중에 바뀌는 것(인라인으로 주는 함수 -> 새로 만들어지는 것)이 있으면 처음부터 다 다시 렌더링 함. 인라인을 안 쓰고 밖에다 만든 함수를 써도 comment 자체가 리렌더되기 때문에 memo가 무용지물이 된다. 이럴 때 useCallback을 사용한다.
      />)
      }
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import Button from './Button';

export default function withLoading(Component) {
  // 첫 글자가 대문자가 아니라 이 자체는 컴포넌트가 아니므로 다른 컴포넌트를 return해 준다
  const WithLoadingComponent = (props) => {
    const [loading , setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000);
  
      return () => clearTimeout(timer)
    }, [] )
    return loading ? <p>Loading...</p> : <Component {...props} />
  }

  return WithLoadingComponent
}

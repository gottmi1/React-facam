// import { useState,useEffect } from 'react'

export default function Launches({data}) {
  // const [data , setData] = useState(null);

  // useEffect(() => {
  //   const fetchLaunches = async () => {
  //     const res = await fetch("https://api.spacexdata.com/v3/launches");
  //     const data = await res.json();

  //     setData(data);
  //   };
  //   fetchLaunches();
  // },[]);

  if(data === null) {
    return null
  }

  return (
    <div>
      <div>확인</div>
      <ol>
        {data.map((launche, index) => (
        <li key={index}> {launche.mission_name}</li>
        ))}
      </ol>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();

  console.log('getStaticProps');

  return {
    props: { data }, // will be passed to the page component as props
  }
}

// export async function getServerSideProps() {
//   const res = await fetch("https://api.spacexdata.com/v3/launches");
//   const data = await res.json();

//   console.log('getServerSideProps');

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

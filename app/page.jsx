import Image from 'next/image'
import { Feed } from "./components/Feed";

// 새로운 이미지를 올리는 화면
// feeds 다른 사람들의 피드를 보는 화면
// my 내 정보 화면

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Feed content={{
        id: "xxxx",
        author: {
          id: "aaaa",
          name: "Habyeok",
        },
        location: "Daejeon",
        image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202205/25/654fc8ab-0b95-45ec-9055-b719040fd3a1.jpg",
        text: "hahahahahahaha",
        liked: []
      }}
      />
    </main>
  )
}

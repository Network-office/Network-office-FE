import dynamic from "next/dynamic"

const MyPageClient = dynamic(() => import("./_components/MyPageClient"), {
  ssr: false,
  loading: () => <div>로딩중...</div>
})

export default function MyPage() {
  return <MyPageClient />
}

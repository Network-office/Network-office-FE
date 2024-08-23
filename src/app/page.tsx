export default function Home() {
  const adf = async () => {
    const abcd = await fetch("http://localhost:8080/test", {
      cache: "no-store"
    })
    const result = await abcd.json()
    console.log(result)
  }
  adf()
  return <main></main>
}

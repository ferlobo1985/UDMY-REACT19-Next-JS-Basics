import Link from "next/link"

export default function HomePage(){
  return(
    <>
      <h1>I am home</h1>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/profile/66">Users 66</Link>
        </li>
      </ul>
    </>
  )
}
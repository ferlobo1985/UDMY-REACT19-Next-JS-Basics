import Link from "next/link"

export default function Nav(){
    return(
        <ul>
            <li>
            <Link href="/users">Users</Link>
            </li>
            <li>
            <Link href="/users/profile/66">Users 66</Link>
            </li>
        </ul>
    )
}
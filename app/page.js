import Link from "next/link";
 
export default function Home() {

let linkStyles = "underling text-cyan-600 hover:text-cyan-300"

  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href={"./week-2/"}>Link to week-2 page</Link>
 
      <ul>
        <li>
          <Link href={"./week-2/"} className={linkStyles}>Link to week-2 assignment</Link>
        </li>
        <li>
          <Link href={"./week-3/objects"} className={linkStyles}>Link to week-3 objects</Link>
        </li>
        <li>
          <Link href={"./week-3/props"} className={linkStyles}>Link to week-3 props</Link>
        </li>
        <li>
          <Link href={"./week-3"} className={linkStyles}>Link to week-3 assignment</Link>
        </li>
        <li>
          <Link href={"./week-4/functions"} className={linkStyles}>Link to week-4 functions</Link>
        </li>
        <li>
          <Link href={"./week-4/simple-counter"} className={linkStyles}>Link to week-4 simple counter</Link>
        </li>
        <li>
          <Link href={"./week-4/advanced-counter"} className={linkStyles}>Link to week-4 advanced counter</Link>
        </li>
        <li>
          <Link href={"./week-4/"} className={linkStyles}>Link to week-4 Assignment</Link>
        </li>
        <li>
          <Link href={"./week-5/in-class-stuff"} className={linkStyles}>Link to week-5 Managed List</Link>
        </li>
        <li>
          <Link href={"./week-5"} className={linkStyles}>Link to week-5 Assignment</Link>
        </li>
        <li>
          <Link href={"./week-6/in-class-stuff"} className={linkStyles}>Link to week-6 Arrays</Link>
        </li>
        
      </ul>
    </main>
  );
}
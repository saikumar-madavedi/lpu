import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/l3.png"
            alt="logo"
            width={200}
            height={120}
          />
        </Link>

        <p>Copyright © 2024 LPU Events | All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
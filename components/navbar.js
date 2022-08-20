import Image from "next/image";
export default function Navbar() {
return (
<div>
  <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="pt-2">
        <Image src="/vercel.svg" width="150" height="25"></Image>
      </div>
      <div className="hidden md:flex space-x-6">
        <div className="hover:text-darkGrayishBlue hover:cursor-pointer">
          Pricing
        </div>
        <div className="hover:text-darkGrayishBlue hover:cursor-pointer">
          Product
        </div>
        <div className="hover:text-darkGrayishBlue hover:cursor-pointer">
          About Us
        </div>
        <div className="hover:text-darkGrayishBlue hover:cursor-pointer">
          Careers
        </div>
        <div className="hover:text-darkGrayishBlue hover:cursor-pointer">
          Community
        </div>
      </div>
      <a href="#" className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-rose">
        Get Started
      </a>
    </div>
  </nav>

  <section id="hero">
    <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
    </div>

    <div className="felx felx-col mb-32 space-y-12 md:w-1/2">
      <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyonoe together to build better products
      </h1>
    </div>
  </section>
</div>
);
}
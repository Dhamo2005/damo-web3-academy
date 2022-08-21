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
      <div className="felx felx-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyonoe together to build better products
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. 
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
        </div>
      </div>
      {/* Image */}
      <img src="analytics.png"></img>
    </div>
  </section>
  {/* Feautures Section */}
  <section id="features">
    {/* Flex Container */}
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      {/* What's Diffrence */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's diffrence about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </p>
      </div>

      {/* Nubered List */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* List item 1 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden font-bold mb-4 text-lg md:block">
              Track company-wide progress
            </h3>
            <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione? Saepe in quasi veritatis cumque suscipit </p>
          </div>
        </div>
        {/* List item 2 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden font-bold mb-4 text-lg md:block">
              Track company-wide progress
            </h3>
            <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione? Saepe in quasi veritatis cumque suscipit </p>
          </div>
        </div>
        {/* List item 3 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden font-bold mb-4 text-lg md:block">
              Track company-wide progress
            </h3>
            <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione? Saepe in quasi veritatis cumque suscipit </p>
          </div>
        </div>
        {/* List item 4 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                04
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden font-bold mb-4 text-lg md:block">
              Track company-wide progress
            </h3>
            <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione? Saepe in quasi veritatis cumque suscipit </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
);
}
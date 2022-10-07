import { useState } from "react";
import {
  RiHome3Line,
  RiFirefoxLine,
  RiLayoutGridLine,
  RiTeamLine,
  RiLiveLine,
  RiDownload2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightSLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar
        className={`fixed top-0 w-80 h-full overflow-y-scroll border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all lg:left-0 z-50 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          {/* Logo */}
          <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
            Tu Logo
          </h1>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiHome3Line />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiFirefoxLine />
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiLayoutGridLine />
                Library
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiTeamLine />
                Friends
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiLiveLine />
                Live
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiDownload2Line />
                Downloads
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiSettings3Line />
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <img
                  src="https://img.freepik.com/foto-gratis/chico-alegre-feliz-mostrando-gesto-bien_74855-3502.jpg"
                  className="w-6 h-6 object-cover rounded-full"
                />
                <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[8px]" />
                Trung Tran
              </a>
            </li>
          </ul>
        </div>
        {/* Btn menu movil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </sidebar>
      {/* Header */}
      <header className="fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#141414] z-40">
        <nav className="flex items-center gap-4 order-1 lg:order-none">
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Discover
          </a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">
            Browse
          </a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">
            Wishlist
          </a>
        </nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="text-gray-500 text-lg">
              {" "}
              <RiNotification3Line />{" "}
            </a>
          </li>
          <li>
            <form className="relative">
              <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
              <input
                type="text"
                className="bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full w-full"
                placeholder="Search"
              />
            </form>
          </li>
        </ul>
      </header>
      {/* Content */}
      <main className="lg:pl-[340px] p-8 pt-36">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <div className="md:col-span-5 relative">
            <img
              src="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fsolo-showdown-limited-time-mode%2FFN_News_Large_EPIC-GAMES-WILL-PROVIDE-%24100-1920x1080-76e2c7bb0d4bc98e61d7e516c76bc3113f6ce9d7.jpg"
              className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl"
            />
            <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
              Fornite
            </h1>
            <div className="absolute left-0 bottom-0 p-8 max-w-xl">
              <p className="text-gray-200">Update</p>
              <h2 className="text-4xl text-white font-extrabold mb-4">
                The hunt is on in Fornite Chapter 2 - Season 5: Zero point
              </h2>
              <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group">
                Play for free{" "}
                <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
          {/* Games */}
          <div className="col-span-1 w-full h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
            <ul className="p-4 flex flex-col gap-6 h-full overflow-y-scroll">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white text-lg"
                >
                  <img
                    src="https://static-cdn.jtvnw.net/ttv-boxart/33214-272x380.jpg"
                    className="w-20 h-full object-cover"
                  />{" "}
                  <span className="md:hidden lg:block">Fornite</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white text-lg"
                >
                  <img
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png"
                    className="w-20 h-full object-cover"
                  />{" "}
                  <sapn className="md:hidden lg:block">Rocket League</sapn>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white text-lg"
                >
                  <img
                    src="https://cdn1.epicgames.com/115577f4ef1e4055aaf0da534fdfe81e/offer/egs-theescapists2-team17andmouldytoofstudios-s6-510x680-510x680-22e26fa7753b9b80df8d3ec01dee3e2f.jpg"
                    className="w-20 h-full object-cover"
                  />{" "}
                  <span className="md:hidden lg:block">The Escapists 2</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white text-lg"
                >
                  <img
                    src="https://static-cdn.jtvnw.net/ttv-boxart/33214-272x380.jpg"
                    className="w-20 h-full object-cover"
                  />{" "}
                  <sapn className="md:hidden lg:block">Fornite</sapn>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Slide videogames */}
        <div className="mt-10 mb-6 flex items-center justify-between">
          <h5 className="text-gray-300 text-2xl">Games on sale</h5>
          <div className="text-gray-400 text-3xl flex items-center gap-4">
            <RiArrowLeftCircleLine className="cursor-pointer" />
            <RiArrowRightCircleLine className="cursor-pointer text-white" />
          </div>
        </div>
        {/* Videogames */}
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="p-4">
            <img
              src="https://static-cdn.jtvnw.net/ttv-boxart/Valheim.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Valheim</h3>
            <p className="text-gray-500 mb-3">Action games</p>
            <span className="text-white">$8.15</span>
          </div>
          <div className="p-4">
            <img
              src="https://media.revistagq.com/photos/620f61675d0a601c3595cc74/2:3/w_631,h_947,c_limit/Bioshock.jpeg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Bioshock</h3>
            <p className="text-gray-500 mb-3">Action, RPG</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-300 p-1 text-green-800 rounded-lg">
                -80%
              </span>
              <span className="text-gray-500">$50</span>
              <span className="text-white">$8.15</span>
            </div>
          </div>
          <div className="p-4">
            <img
              src="https://yexreviews.files.wordpress.com/2021/10/unravel-2-cover.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Unravel Two</h3>
            <p className="text-gray-500 mb-3">Adventur games</p>
            <span className="text-white">$20.38</span>
          </div>
          <div className="p-4">
            <img
              src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/t/tick-tock-a-tale-for-two-switch/hero"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Tick Tock: A tale for two</h3>
            <p className="text-gray-500 mb-3">Indie games</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-300 p-1 text-green-800 rounded-lg">
                -60%
              </span>
              <span className="text-gray-500">$3.47</span>
              <span className="text-white">$1.39</span>
            </div>
          </div>
          <div className="p-4">
            <img
              src="https://store-images.s-microsoft.com/image/apps.44541.14005179770819827.bed9fd26-ac3f-4f19-b4b2-e129d83820ae.06ee7177-0dc8-4539-b07a-8f913d87e0bf"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Hitman 3</h3>
            <p className="text-gray-500 mb-3">Action games</p>
            <span className="text-white">$23.99</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

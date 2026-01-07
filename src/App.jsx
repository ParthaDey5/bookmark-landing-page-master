import { useState } from "react";
import "./App.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import ExtensionChrome from "./components/ExtensionChrome";
import ExtensionFirefox from "./components/ExtensionFirefox";
import ExtensionOpera from "./components/ExtensionOpera";
import Underline3 from "./components/Underline3";
import Underline2 from "./components/Underline2";
import Underline1 from "./components/Underline1";

function App() {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  return (
    <div className="rubik flex flex-col items-center justify-start w-screen lg:aspect-1440/3616 aspect-375/4732">
      
      <header className="w-full lg:h-38 h-110 row-x-between row-y-center px-35 lg:px-47 relative">
      <div id="mobile-nav" className="fixed inset-0 col-x-center z-500 bg-[hsl(229,31%,21%)]">
        <div className="w-full h-112 px-35 row-x-between row-y-center">
        <svg className="lg:w-40.5 w-155 h-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 25" width="148" height="25"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#fff" fill-rule="nonzero"/><g><circle fill="hsl(0, 0%, 75%)" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"/></g></g></svg>
        <img
          src="./images/icon-close.svg"
          alt="icon-close"
          srcset=""
          className="icon-close lg:hidden w-15 h-fit"
          onClick={()=>document.getElementById('mobile-nav').classList.toggle('hidden')}
        />  
        </div>

        
          <ul className="mt-20 w-125 col-x-center gap-y-37 uppercase -translate-x-8">
            <li className="nav-link text-white! text-[5.5rem]! font-light!">
              <a href="/">Features</a>
            </li>
            <li className="nav-link text-white! text-[5.5rem]! font-light!">
              <a href="/">Pricing</a>
            </li>
            <li className="nav-link text-white! text-[5.5rem]! font-light!">
              <a href="/">Contact</a>
            </li>
            <li className="red400 mt-10 w-325 h-48 outline-3 outline-white center text-[5.5rem]! translate-x-7 rounded-2xl">
              <a href="/">Login</a>
            </li>
          </ul>
          <div className="mt-235 row-x-center gap-x-40">
            <a href=""><img src="../public/images/icon-facebook.svg" alt="icon-facebook" className="w-25 h-fit icon-facebook" /></a>
      <a href="">
      <img src="../public/images/icon-twitter.svg" alt="icon-twitter" className="icon-twitter w-25 h-fit" /></a>
          </div>
        </div>  
        <img
          src="./images/logo-bookmark.svg"
          alt="logo-bookmark"
          srcset=""
          className="lg:w-41 w-156"
        />
        <img
          src="./images/icon-hamburger.svg"
          alt="icon-hamburger"
          srcset=""
          className="icon-hamburger lg:hidden w-18"
          onClick={()=>document.getElementById('mobile-nav').classList.toggle('hidden')}
        />
        <nav className="lg:block hidden">
          <ul className="w-125 row-x-between row-y-center uppercase ">
            <li className="nav-link">
              <a href="/">Features</a>
            </li>
            <li className="nav-link">
              <a href="/">Pricing</a>
            </li>
            <li className="nav-link">
              <a href="/">Contact</a>
            </li>
            <li className="red400 w-30 h-10 center">
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="w-full flex flex-col lg:flex-row-reverse lg:justify-end py-40 lg:py-16">
        <div className="relative w-full">
          <img
            src="./images/illustration-hero.svg"
            alt="illustration-hero"
            srcset=""
            className="w-375 lg:w-182 h-fit lg:ml-8 ml-15 z-5"
          />
          <div className="absolute top-[10rem] right-0 lg:w-150 w-328 lg:h-97 h-235 rounded-l-[50rem] blue950 -z-5"></div>
        </div>

        <div className="flex flex-col items-center lg:items-start mt-60 lg:mt-22 lg:ml-45">
          <h1 className="lg:w-150">A Simple Bookmark Manager</h1>
          <p className="w-305 lg:w-145 mt-17 lg:mt-8 ">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center gap-11 lg:gap-5 mt-35 lg:mt-10">
            <button className="blue600 hover:border-[0.2rem] hover:bg-white! hover:text-black!">Get it on Chrome</button>
            <button className="grey50 hover:border-[0.2rem] hover:bg-white!">Get it on Firefox</button>
          </div>
        </div>
      </main>

      <section className="w-full col-x-center mt-115 lg:mt-0 lg:translate-y-[4rem] ">
        <div className="px-35 lg:px-121">
          <h2>Features</h2>
          <p className="mt-6 lg:mt-7 text-center!">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className="w-[84rem] lg:w-[50.2rem] mt-45 lg:mt-21">
          <ul className="features flex flex-col lg:flex-row items-center">
            <li className="relative w-full border-t border-b lg:border-t-0 lg:border-b-2 border-y-[hsl(0,0%,97%)] h-58 lg:h-13 center">
              <span
                onClick={() => {
                  setCard3(false), setCard2(false), setCard1(true);
                }}
                className={`w-fit h-full col-x-center hover:text-[hsl(0,94%,66%)] feature-link`}
              >
                Simple Bookmarking
                {card1 && <Underline1/>}
              </span>
            </li>
            <li className="relative w-full border-t border-b lg:border-t-0 lg:border-b-2 border-y-[hsl(0,0%,97%)] h-65 lg:h-13 center">
              <span
                onClick={() => {
                  setCard3(false), setCard2(true), setCard1(false);
                }}
                className="w-fit h-full col-x-center hover:text-[hsl(0,94%,66%)] feature-link"
              >
                Speedy Searching
                {<Underline2 card2={card2}/>}
              </span>
            </li>
            <li className="relative w-full border-t border-b lg:border-t-0 lg:border-b-2 border-y-[hsl(0,0%,97%)] h-60 lg:h-13 center">
              <span
                onClick={() => {
                  setCard3(true), setCard2(false), setCard1(false);
                }}
                className="w-fit h-full col-x-center hover:text-[hsl(0,94%,66%)] feature-link"
              >
                Easy Sharing
                {card3 && <Underline3/>}
              </span>
            </li>
          </ul>
        </div>

        {card1 && <Card1 />}
        {card2 && <Card2 />}
        {card3 && <Card3 />}
      </section>

      <section
        id="extension"
        className=" w-full lg:w-[63.5rem] col-x-center lg:translate-y-85 translate-y-150"
      >
        <div>
          <h2>Download the extension</h2>
          <p className="w-330 lg:w-160 translate-y-6 text-center!">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="w-full lg:row-x-between col-x-center gap-y-22 mt-60 lg:mt-15">
          <ExtensionChrome />,
          <ExtensionFirefox />,
          <ExtensionOpera />
        </div>
      </section>

      <section className="lg:mt-147 mt-300 w-full col-x-center">
        <div className="col-x-center">
          <h2 className="lg:w-full w-250 leading-32! lg:leading-relaxed!">Frequently Asked Questions</h2>
          <p className="lg:w-145 w-325 text-center! lg:translate-y-5 translate-y-16 lg:tracking-tight!">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div className="faq lg:translate-y-20 translate-y-70 lg:w-150">
          <div
            className=" py-18 faq-item lg:border-t-2 border-t-[hsl(0,0%,95%)] lg:w-full w-335 lg:py-6 col-x-center"
            onClick={() => setFaq1(!faq1)}
          >
            <div className="w-full row-x-between row-y-center group">
              <p className="faq-question group-hover:text-red-400!">
                What is Bookmark?
              </p>
              <svg
  className={`lg:w-[1.3rem] w-18 h-fit lg:mr-6 ${faq1 ? "rotate-180 text-[hsl(0,94%,66%)]" : ""}`}
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="12"
  viewBox="0 0 18 12"
  fill="none"
>
  <path
    stroke="currentColor"  // This enables color inheritance
    strokeWidth="3"
    d="M1 1l8 8 8-8"
  />
</svg>
            </div>
            {faq1 && (
              <p className="faq-answer lg:mt-10 mt-20 lg:w-155 w-335 -tracking-[0.01rem]! text-shadow-lg! lg:leading-10!">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </p>
            )}
          </div>

          <div
            className=" py-22 faq-item border-t-2 border-t-[hsl(0,0%,95%)] w-full lg:py-5 col-x-start"
            onClick={() => setFaq2(!faq2)}
          >
            <div className="w-full row-x-between row-y-center group">
              <p
                className="faq-question group-hover:text-red-400!
    "
              >
                How can I request a new browser?
              </p>
              <svg
  className={`lg:w-[1.3rem] w-18 h-fit lg:mr-6 ${faq2 ? "rotate-180 text-[hsl(0,94%,66%)]" : ""}`}
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="12"
  viewBox="0 0 18 12"
  fill="none"
>
  <path
    stroke="currentColor"  // This enables color inheritance
    strokeWidth="3"
    d="M1 1l8 8 8-8"
  />
</svg>
            </div>
            {faq2 && (
              <p className="faq-answer lg:mt-10 mt-20 lg:w-155 w-335 -tracking-[0.01rem]! text-shadow-lg! lg:leading-10!">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula.<br/> Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </p>
            )}
          </div>

          <div
            className=" py-20 faq-item border-t-2 border-t-[hsl(0,0%,95%)] w-full lg:py-5 col-x-center"
            onClick={() => setFaq3(!faq3)}
          >
            <div className="w-full row-x-between row-y-center group">
              <p className="faq-question group-hover:text-red-400!">
                {" "}
                Is there a mobile app?
              </p>
              <svg
  className={`lg:w-[1.3rem] w-18 h-fit lg:mr-6 ${faq3 ? "rotate-180 text-[hsl(0,94%,66%)]" : ""}`}
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="12"
  viewBox="0 0 18 12"
  fill="none"
>
  <path
    stroke="currentColor"  // This enables color inheritance
    strokeWidth="3"
    d="M1 1l8 8 8-8"
  />
</svg>
            </div>
            {faq3 && (
              <p className="faq-answer lg:mt-10 mt-20 lg:w-155 w-335 -tracking-[0.01rem]! text-shadow-lg! lg:leading-10!">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </p>
            )}
          </div>

          <div
            className=" py-21  faq-item border-y-2 border-y-[hsl(0,0%,95%)] w-full lg:py-5 col-x-center"
            onClick={() => setFaq4(!faq4)}
          >
            <div className="w-full row-x-between row-y-center group">
              <p className="faq-question group-hover:text-red-400!">
                {" "}
                What about other Chromium browsers?
              </p>
            <svg
  className={`lg:w-[1.3rem] w-18 h-fit lg:mr-6 ${faq4 ? "rotate-180 text-[hsl(0,94%,66%)]" : ""}`}
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="12"
  viewBox="0 0 18 12"
  fill="none"
>
  <path
    stroke="currentColor"  // This enables color inheritance
    strokeWidth="3"
    d="M1 1l8 8 8-8"
  />
</svg>
      
            </div>
            {faq4 && (
              <p className="faq-answer lg:mt-10 mt-20 lg:w-155 w-335 -tracking-[0.01rem]! text-shadow-lg! lg:leading-10!">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </p>
            )}
          </div>
        </div>

        <button className="blue600 w-125! lg:w-33! translate-y-120 lg:translate-y-35.5">More Info</button>
      </section>


<footer className=" bg-[hsl(231,69%,60%)] w-full col-x-center lg:mt-78 mt-250 lg:pt-17.5! pt-72!">
  <p className="uppercase text-white! lg:tracking-[0.348rem]! tracking-[1.2rem]! font-normal! lg:text-[0.9rem]! text-[3.3rem]!">35,000+ already joined</p>
  <h2 className="text-white! lg:w-120 w-[90rem] lg:leading-[2.5rem]! leading-30! lg:mt-10 mt-10">Stay up-to-date with what we’re doing</h2>
  <div className="w-full lg:mt-11 mt-33 lg:row-x-start lg:row-y-center col-x-center col-y-between gap-x-15 gap-y-19">
    <input type="text" className="lg:w-84 w-330 lg:h-14 h-50 bg-white lg:rounded-md rounded-3xl lg:translate-x-138 " />
    <button className="bg-[hsl(0,94%,66%)]! lg:w-35! w-335! lg:h-13! text-white! lg:translate-x-127 ">Contact Us</button>
  </div>
  <div className="lg:mt-20 mt-62 w-full lg:h-25 lg:px-45 px-0 lg:py-0 py-45 lg:row-y-center lg:row-x-between col-x-center bg-[hsl(229,31%,21%)] ">
    <div className="lg:row-x-between col-x-center lg:gap-x-19 gap-y-40">
    <svg className="lg:w-40.5 w-155 h-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 25" width="148" height="25"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#fff" fill-rule="nonzero"/><g><circle fill="hsl(0, 0%, 75%)" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"/></g></g></svg>
    
    <ul className="uppercase lg:row-x-between col-x-center lg:gap-x-14.5 gap-y-28">
      <li className="text-white! font-light!"><a href=""> Features</a></li>
      <li className="text-white! font-light!"><a href="">Pricing</a></li>
      <li className="text-white! font-light!"><a href="">Contact</a></li>
    </ul>
    </div>
    <div className="flex items-center lg:gap-x-12 gap-x-45 lg:mt-0 mt-48">
      <a href=""><img src="../public/images/icon-facebook.svg" alt="icon-facebook" className="lg:w-6.5 w-25 h-fit icon-facebook" /></a>
      <a href="">
      <img src="../public/images/icon-twitter.svg" alt="icon-twitter" className="icon-twitter lg:w-6.5 w-25 h-fit" /></a>
    </div>
  </div>
  </footer>      
     
    </div>
  );
}

export default App;

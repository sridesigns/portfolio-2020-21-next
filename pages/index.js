import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <div className="home">
        <Head>
          <title>Sriram Venugopal</title>
          <meta
            name="description"
            content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
          />
          <meta property="og:title" content="Sriram Venugopal" />
          <meta
            property="og:description"
            content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
          />
        </Head>
        <div className="navbar">
          <div className="div">
            <div className="container">
              <img src="/playground_assets/logo.svg" className="thqImage image" />
            </div>
            <div className="div1">
              <a href="#title-work" className="thqLink text">
                <span className="text01">Work</span>
              </a>
              <Link href="/playground" className="thqLink">
                <a className="link">
                  <span className="text02">Play</span>
                </a>
              </Link>
              <Link href="/about-me" className="thqLink">
                <a className="link01">About</a>
              </Link>
            </div>
          </div>
        </div>
        <div id="landing" className="container01">
          <h1 className="thqHeading1 text04">ðÂ  Hello,I&apos;m Sriram Venugopal.</h1>
          <span className="text05">
            I am a UXÂ Designer, based out of Chennai, India. I pursue opportunities where I can
            solve problems and create an impact through design.
            <br />
          </span>
          <a
            href="https://tcs.com"
            target="_blank"
            rel="noreferrer noopener"
            className="thqLink text06"
          >
            <span data-type="span" className="text07">
              Currently @
            </span>
            Â Â 
            <span data-type="span" className="text08">
              Tata Consultancy Services
            </span>
          </a>
        </div>
        <div id="contact" className="container02">
          <div className="container03">
            <a href="mailto:msgsrive@gmail.com?subject=Hello :)" className="link02">
              <div id="mail-button" className="thqLink container04">
                <svg viewBox="0 0 1024 1024" className="thqIcon icon">
                  <title>mail</title>
                  <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                </svg>
                <span className="text09">
                  <span className="text10">msgsrive@gmail.com</span>
                </span>
              </div>
            </a>
          </div>
          <div className="container05">
            <a
              href="https://twitter.com/designersriram"
              target="_blank"
              rel="noreferrer noopener"
              className="link03"
            >
              <svg
                id="twitter"
                viewBox="0 0 950.8571428571428 1024"
                className="thqIcon thqLink icon01"
              >
                <title>twitter</title>
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sriram015/"
              target="_blank"
              rel="noreferrer noopener"
              className="link04"
            >
              <svg
                id="instagram"
                viewBox="0 0 877.7142857142857 1024"
                className="thqIcon thqLink icon02"
              >
                <title>instagram</title>
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sriramvenugopal/"
              target="_blank"
              rel="noreferrer noopener"
              className="link05"
            >
              <svg
                id="linkedin"
                viewBox="0 0 877.7142857142857 1024"
                className="thqIcon thqLink icon03"
              >
                <title>linkedin</title>
                <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div id="title-work" className="container06">
          <h1 className="thqHeading1 text11">
            <span className="text12">Case Studies</span>
          </h1>
          <div className="container07"></div>
        </div>
        <div id="casestudy-1" className="container08">
          <div className="container09">
            <Link href="/learning-hub">
              <a className="link06">
                <img
                  src="/playground_assets/cs1_display_pic-1200h.png"
                  className="thqImage thqLink image1"
                />
              </a>
            </Link>
          </div>
          <div className="container10">
            <h1 className="thqHeading1 text13">
              <span className="text14">The Learning Hub</span>
            </h1>
            <span className="text15">
              Design overhaul of a legacy website into a hybrid mobile app that provides a platform
              for students to collaborate, learn and manage all college-related activities.
            </span>
            <Link href="/learning-hub">
              <a className="link07">
                <div className="thqLink container11">
                  <span className="text16">
                    <span className="text17">Read Case Study</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thqIcon icon04">
                    <title>arrow-right</title>
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div id="casestudy-2" className="container12">
          <div className="container13">
            <Link href="/service-desk-management">
              <a className="link08">
                <img
                  src="/playground_assets/cs2_display-pic-1200h.png"
                  className="thqImage thqLink image2"
                />
              </a>
            </Link>
          </div>
          <div className="container14">
            <h1 className="thqHeading1 text18">
              <span data-type="span" className="text19">
                IT Service Desk Management
              </span>
            </h1>
            <span className="text20">
              Collaborated with a startup to designÂ a web application that helps toÂ manage the
              service desk needs for small and medium enterprises.
            </span>
            <Link href="/service-desk-management">
              <a className="link09">
                <div className="thqLink container15">
                  <span className="text21">
                    <span className="text22">Read Case Study</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thqIcon icon05">
                    <title>arrow-right</title>
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div id="footer" className="container16">
          <div className="div2">
            <div className="container17">
              <span className="text23">
                Let&apos;s connect. Feel free to drop a
                <span className="text24">&quot;hello&quot;</span>
                anytime
              </span>
            </div>
            <div className="container18">
              <a href="mailto:msgsrive@gmail.com?subject=Hello :)" className="link10">
                <svg viewBox="0 0 1024 1024" className="thqIcon thqLink icon06">
                  <title>mail</title>
                  <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/designersriram"
                target="_blank"
                rel="noreferrer noopener"
                className="link11"
              >
                <svg viewBox="0 0 950.8571428571428 1024" className="thqIcon thqLink icon07">
                  <title>twitter</title>
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sriram015/"
                target="_blank"
                rel="noreferrer noopener"
                className="link12"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon08">
                  <title>instagram</title>
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sriramvenugopal/"
                target="_blank"
                rel="noreferrer noopener"
                className="link13"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon09">
                  <title>linkedin</title>
                  <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
                </svg>
              </a>
              <a
                href="https://dribbble.com/SriramVenugopal"
                target="_blank"
                rel="noreferrer noopener"
                className="link14"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon10">
                  <title>dribbble</title>
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #FCFDFF;
          }
          .navbar {
            width: 100%;
            height: 80px;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            border-color: #E4E7EB;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
            border-bottom-width: 1px;
          }
          .div {
            width: 1000px;
            margin: auto;
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image {
            width: 120px;
            object-fit: cover;
          }
          .div1 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .text {
            color: #1f2933;
            padding: 10px;
            font-size: 16px;
            align-self: center;
            text-align: center;
            margin-left: 16px;
            margin-right: 16px;
            text-decoration: none;
            transition-delay: 2s;
            transition-duration: 1s;
            transition-timing-function: linear;
          }
          .text01 {
            font-weight: 700;
          }
          .link {
            color: #1f2933;
            padding: 10px;
            font-size: 16px;
            margin-left: 16px;
            margin-right: 16px;
            text-decoration: none;
          }
          .text02 {
            font-weight: 700;
          }
          .link01 {
            color: #1f2933;
            padding: 10px;
            font-size: 16px;
            font-weight: 700;
            margin-left: 16px;
            margin-right: 16px;
            text-decoration: none;
          }
          .container01 {
            width: 720px;
            display: block;
            align-self: center;
            margin-top: 48px;
            border-radius: 8px;
          }
          .text04 {
            width: 100%;
            margin: auto;
            display: block;
            padding: auto;
            position: static;
            font-size: 40px;
            align-self: flex-start;
            text-align: center;
            font-weight: 900;
            line-height: 1.3;
          }
          .text05 {
            width: 100%;
            cursor: auto;
            display: block;
            margin-top: 8px;
            text-align: center;
            line-height: 1.9;
          }
          .text06 {
            color: #127fbf;
            width: 100%;
            display: block;
            margin-top: 8px;
            text-align: center;
            font-weight: 700;
          }
          .text07 {
            color: rgb(31, 41, 51);
            font-weight: 400;
          }
          .text08 {
            color: rgb(33, 134, 235);
          }
          .container02 {
            width: 720px;
            display: grid;
            grid-gap: 16px;
            margin-top: 24px;
            align-items: center;
            justify-items: stretch;
            justify-content: space-evenly;
            grid-template-columns: 1fr 1fr;
          }
          .container03 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .link02 {
            display: contents;
          }
          .container04 {
            width: 220px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            border-radius: 6px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0967D2;
          }
          .icon {
            fill: #ffffff;
            width: 20px;
            height: 20px;
            margin-top: 4px;
            margin-left: 20px;
          }
          .text09 {
            color: #fff;
            font-size: 14px;
            align-self: center;
            margin-top: 8px;
            text-align: center;
            margin-left: 8px;
            margin-right: 8px;
            margin-bottom: 8px;
          }
          .text10 {
            font-weight: 700;
          }
          .container05 {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .link03 {
            display: contents;
          }
          .icon01 {
            width: 32px;
            height: 32px;
            margin: 16px;
            align-self: center;
          }
          .link04 {
            display: contents;
          }
          .icon02 {
            width: 32px;
            height: 32px;
            margin: 16px;
            align-self: center;
          }
          .link05 {
            display: contents;
          }
          .icon03 {
            width: 32px;
            height: 32px;
            margin: 16px;
            align-self: center;
          }
          .container06 {
            width: 720px;
            display: flex;
            align-self: center;
            margin-top: 40px;
            align-items: center;
            justify-content: flex-start;
          }
          .text11 {
            width: 25%;
            font-size: 24px;
          }
          .text12 {
            font-weight: 800;
          }
          .container07 {
            width: 75%;
            height: 1px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #CBD2D9;
          }
          .container08 {
            width: 720px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container09 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .link06 {
            display: contents;
          }
          .image1 {
            width: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          .container10 {
            width: 60%;
            display: flex;
            align-self: center;
            margin-top: 2px;
            align-items: flex-start;
            margin-left: 24px;
            flex-direction: column;
          }
          .text13 {
            font-size: 24px;
          }
          .text14 {
            font-weight: 800;
          }
          .text15 {
            color: #52606D;
            width: 100%;
            display: inline-block;
            font-size: 16px;
            margin-top: 8px;
          }
          .link07 {
            display: contents;
          }
          .container11 {
            width: 200px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 16px;
            align-items: center;
            border-color: #CBD2D9;
            border-width: 1px;
            border-radius: 6px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #fff;
          }
          .text16 {
            font-size: 14px;
            align-self: center;
            margin-top: 8px;
            text-align: center;
            margin-left: 24px;
            margin-right: 8px;
            margin-bottom: 8px;
          }
          .text17 {
            font-weight: 700;
          }
          .icon04 {
            width: 20px;
            height: 20px;
            display: inline;
            align-self: center;
          }
          .container12 {
            width: 720px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container13 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .link08 {
            display: contents;
          }
          .image2 {
            width: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          .container14 {
            width: 60%;
            display: flex;
            align-self: center;
            margin-top: 2px;
            align-items: flex-start;
            margin-left: 24px;
            flex-direction: column;
          }
          .text18 {
            font-size: 24px;
          }
          .text19 {
            font-weight: 800;
          }
          .text20 {
            color: #52606D;
            width: 100%;
            display: inline-block;
            font-size: 16px;
            margin-top: 8px;
          }
          .link09 {
            display: contents;
          }
          .container15 {
            width: 200px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 16px;
            align-items: center;
            border-color: #CBD2D9;
            border-width: 1px;
            border-radius: 6px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #fff;
          }
          .text21 {
            font-size: 14px;
            align-self: center;
            margin-top: 8px;
            margin-left: 24px;
            margin-right: 8px;
            margin-bottom: 8px;
          }
          .text22 {
            font-weight: 700;
          }
          .icon05 {
            width: 20px;
            height: 20px;
            display: inline;
            align-self: center;
          }
          .container16 {
            width: 100%;
            height: 60px;
            display: flex;
            overflow: auto;
            margin-top: 100px;
            align-items: center;
            border-color: #E4E7EB;
            flex-direction: column;
            justify-content: center;
            border-top-width: 1px;
          }
          .div2 {
            width: 1000px;
            display: grid;
            grid-gap: px;
            align-items: stretch;
            align-content: start;
            justify-items: center;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr;
          }
          .container17 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text23 {
            color: #3E4C59;
            font-size: 14px;
            font-weight: 400;
          }
          .text24 {
            color: rgb(9, 103, 210);
            font-weight: 600;
          }
          .container18 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-self: stretch;
            align-items: stretch;
            justify-self: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .link10 {
            display: contents;
          }
          .icon06 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link11 {
            display: contents;
          }
          .icon07 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link12 {
            display: contents;
          }
          .icon08 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link13 {
            display: contents;
          }
          .icon09 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link14 {
            display: contents;
          }
          .icon10 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          @media (max-width: 991px) {
            .text11 {
              width: 30%;
            }
            .container07 {
              width: 67%;
            }
          }
          @media (max-width: 767px) {
            .div {
              width: 80%;
            }
            .container01 {
              width: 70%;
            }
            .container02 {
              width: 70%;
            }
            .container06 {
              width: 70%;
            }
            .text11 {
              width: 40%;
            }
            .container07 {
              width: 60%;
            }
            .container08 {
              width: 70%;
            }
            .container12 {
              width: 70%;
            }
            .container16 {
              height: 80px;
            }
            .div2 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .navbar {
              height: 120px;
            }
            .div {
              grid-gap: 24px;
              margin-top: 16px;
              align-items: center;
              align-content: center;
              justify-items: center;
              justify-content: center;
              grid-template-columns: 1fr;
            }
            .container {
              justify-content: center;
            }
            .div1 {
              justify-content: space-between;
            }
            .container01 {
              width: 80%;
            }
            .text04 {
              font-size: 40px;
              text-align: left;
            }
            .text05 {
              text-align: left;
            }
            .text06 {
              text-align: left;
            }
            .container02 {
              width: 80%;
              margin-top: 40px;
              grid-template-columns: 1fr;
            }
            .container04 {
              width: 100%;
              display: inline-flex;
              flex-wrap: nowrap;
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .icon {
              margin-top: 0;
              margin-left: 0;
            }
            .container05 {
              justify-content: space-around;
            }
            .icon01 {
              width: 24px;
              height: 24px;
              display: inline-block;
            }
            .icon02 {
              width: 24px;
              height: 24px;
            }
            .icon03 {
              width: 24px;
              height: 24px;
            }
            .container06 {
              width: 80%;
              display: block;
            }
            .text11 {
              width: 100%;
            }
            .container07 {
              width: 100%;
            }
            .container08 {
              width: 80%;
              flex-wrap: nowrap;
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
            .container09 {
              width: 100%;
            }
            .image1 {
              width: 100%;
            }
            .container10 {
              width: 100%;
              margin-top: 16px;
              margin-left: 0;
            }
            .text13 {
              width: 100%;
            }
            .text15 {
              align-self: flex-start;
            }
            .container11 {
              width: 100%;
              justify-content: center;
            }
            .container12 {
              width: 80%;
              flex-direction: column;
              justify-content: space-around;
            }
            .container13 {
              width: 100%;
            }
            .container14 {
              width: 100%;
              margin-top: 16px;
              margin-left: 0;
            }
            .container15 {
              width: 100%;
              justify-content: center;
            }
            .container16 {
              height: 120px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .div2 {
              width: 80%;
              align-content: start;
              grid-template-columns: 1fr;
            }
            .container17 {
              margin-top: 16px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
            .text23 {
              text-align: center;
            }
            .container18 {
              align-items: center;
              flex-direction: row;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const LearningHub = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Learning Hub - Sriram Venugopal</title>
          <meta
            name="description"
            content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
          />
          <meta property="og:title" content="Learning Hub - Sriram Venugopal" />
          <meta
            property="og:description"
            content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
          />
        </Head>
        <div className="navbar">
          <div className="div">
            <div className="container01">
              <Link href="/">
                <a className="link">
                  <img src="/playground_assets/logo.svg" className="thqImage thqLink image" />
                </a>
              </Link>
            </div>
            <div className="div1">
              <Link href="/" className="thqLink">
                <a className="link01">
                  <span className="text01">Work</span>
                </a>
              </Link>
              <Link href="/playground" className="thqLink">
                <a className="link02">
                  <span className="text02">Play</span>
                </a>
              </Link>
              <Link href="/about-me" className="thqLink">
                <a className="link03">About</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container02">
          <Link href="/">
            <a className="link04">
              <svg viewBox="0 0 1024 1024" className="thqIcon thqLink icon">
                <title>arrow-left-circle</title>
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM682.667 469.333h-238.336l97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-170.667 170.667c-4.096 4.096-7.168 8.789-9.259 13.824s-3.243 10.539-3.243 16.341c0 5.547 1.067 11.136 3.243 16.341 2.091 5.035 5.163 9.728 9.259 13.824l170.667 170.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835h238.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div id="cs1-intro" className="container03">
          <h1 className="thqHeading1 text04">
            <span className="text05">The Learning Hub</span>
          </h1>
          <span className="text06">
            A design overhaul of a legacy website into a hybrid mobile app that provides a platform
            for students to collaborate, learn and manage all college-related activities.
          </span>
        </div>
        <div id="cs1-intro-pic" className="container04">
          <img
            src="/playground_assets/preview-collage%40.25x-1200h.png"
            className="thqImage image01"
          />
        </div>
        <div id="cs1-role" className="container05">
          <div className="container06">
            <h1 className="thqHeading1 text07">
              <span className="text08">My Role</span>
            </h1>
            <span className="text09">
              UI Auditâ
              <br />
              Information Architecture
              <br />
              Journey Mapping
              <br />
              Wireframes
              <br />
              Interaction Design
              <br />
              Visual Design
            </span>
          </div>
          <div className="container07">
            <h1 className="thqHeading1 text10">
              <span data-type="span" className="text11">
                Platforms
              </span>
            </h1>
            <span className="text12">
              iOS
              <br />
              Android
            </span>
          </div>
        </div>
        <div id="cs1-problem" className="div2">
          <h1 className="thqHeading1 h1">The Problem</h1>
          <span className="text13">
            I was commissioned by a startup to redesign an existing legacy web learning portal of a
            reputed college into a modern mobile application.Â  AfterÂ signingÂ the necessary
            NDA&apos;s, the client and I, along with the developers, had a 2-hour deep-dive session
            to understand the existing system in detail.
            <br data-type="br" />
            Some of the pressing points where:
            <br />
          </span>
          <span className="text14">
            - There were 13 integrations with other applications - the developers were uncertain
            about the availability of API&apos;s for the same.
            <br />
            - All the documents, articles, posts, and images were PDF - This is not accessible and
            user-friendly.
            <br />
            - The current portal had no Taxonomy - Search was practically useless.
            <br data-type="br" />
          </span>
        </div>
        <div id="cs1-preview" className="container08">
          <div className="container09">
            <h1 className="thqHeading1 text15">
              <span className="text16">A Learning Hub-spotÂ for Students</span>
            </h1>
            <span className="text17">
              Providing the ability for students to learn and stay updated anywhere, anytime was one
              of the primary requirements for redesigning the existing platform
            </span>
          </div>
          <img src="/playground_assets/cs1_preview_pic-1200h.png" className="thqImage image02" />
        </div>
        <div id="cs1-deadline" className="container10">
          <div className="container11">
            <h1 className="thqHeading1 text18">âÂ  Timeline:</h1>
            <span className="text19">~ 8 weeks</span>
          </div>
        </div>
        <div id="cs1-process" className="container12">
          <div className="container13">
            <h1 className="thqHeading1 h101">
              <span className="text20">The Process</span>
            </h1>
            <span className="text21">
              This project was quite tricky because we couldn&apos;t get approval from the college
              to conduct user interviews. We were asked only to focus on revamping the existing
              legacy UI into a mobile app in spite of us repeatedly stating the importance of user
              research. They however agreed to let us conduct usability testing (with select few
              users) withÂ the designed prototype.
            </span>
          </div>
          <div className="container14">
            <h1 className="thqHeading1 text22">
              <span data-type="span" className="text23">
                UI AUDIT
              </span>
            </h1>
            <span className="text24">
              IÂ started by doing a thorough UI audit of the existing platform. There was too much
              disparate, unorganized information and applications..
            </span>
          </div>
        </div>
        <div id="cs1-existingia-pic" className="container15">
          <img src="/playground_assets/cs1_existing-ia-1200h.png" className="thqImage image03" />
          <span className="text25">
            App&apos;s Existing IA
            <br />
          </span>
        </div>
        <div id="cs1-ia-desc" className="container16">
          <h1 className="thqHeading1 text26">
            <span data-type="span" className="text27">
              Information Architecture
            </span>
          </h1>
          <span className="text28">
            I started by studying a few competing products to understand how they categorized
            information and content. I organized the app structure based on content importance and
            ensured information was easy to find in the application.
          </span>
        </div>
        <div id="cs1-revisedia-pic" className="container17">
          <img src="/playground_assets/cs1_revised-ia-1200h.png" className="thqImage image04" />
          <span className="text29">
            App&apos;s Revised Information Architecture
            <br data-type="br" />
          </span>
        </div>
        <div id="cs1-persona-desc" className="container18">
          <h1 className="thqHeading1 h102">
            <span className="text30">User Personas</span>
          </h1>
          <span className="text31">
            Since we were unable to conduct any user research, I reached out to few of my friends
            and colleagues who were post graduate holders, to get a better understanding on the type
            of applications they used and what they would look for in a college app.Â 
            <br />
            <br />
            My target audience were 1st year and 2nd year students and based on my limited research,
            I found the project work and placement information were the key differentiators between
            the audience.Â .
          </span>
        </div>
        <div id="cs1-personas" className="container19">
          <div id="persona-1" className="container20">
            <h1 className="thqHeading1 h103">
              ð¨âðÂ Â 
              <span className="text32">Rajesh Kumar</span>
            </h1>
            <span className="text33">
              â¢ Final year student majoring in Operations &amp;Â Logistics.
              <br />
              â¢ Graduated with honors in mechanical engineering and has 2.5 years of experience
              working in automotive manufacturing.
              <br />â¢ Feels excited, anxious, overwhelmed and optimistic
            </span>
            <h1 className="thqHeading1 text34">
              <span data-type="span" className="text35">
                NEEDS
              </span>
            </h1>
            <span className="text36">
              â¢ Placement Training
              <br />â¢ Updated and Reliable information from the college
            </span>
            <h1 className="thqHeading1 text37">
              <span data-type="span" className="text38">
                Pain Points
              </span>
            </h1>
            <span className="text39">
              â¢ Learning resources are hard to find.Â 
              <br />
              â¢ The system is useless in mobile. â¢ No Online fee payment &amp; tracking.
              <br />â¢ Project documentation &amp; sign off are a mess.
            </span>
          </div>
          <div id="persona-1" className="container21">
            <h1 className="thqHeading1 h104">
              ð©âðÂ Â 
              <span data-type="span" className="text40">
                Samyuktha Menon
              </span>
            </h1>
            <span className="text41">
              â¢ First-year student at the college.
              <br />
              â¢ Loves finance but keeping her specialisation options open for now.
              <br />
              â¢ Completed her undergraduate in economics and wanted to pursue her management
              education.
              <br />â¢ Feels positive, optimistic, uncertain, confused and a bit disappointed
            </span>
            <h1 className="thqHeading1 text42">
              <span data-type="span" className="text43">
                NEEDS
              </span>
            </h1>
            <span className="text44">
              â¢ Offline access to lectures &amp;Â resources.
              <br />
              â¢ Clear timetables and schedules so that she can prioritise and organise.
              <br />â¢ Reliable forum to connect with her teachers/peers
            </span>
            <h1 className="thqHeading1 text45">
              <span data-type="span" className="text46">
                Pain Points
              </span>
            </h1>
            <span className="text47">
              â¢ Current portal is very slow &amp;Â barely functional.
              <br />
              â¢ Not accessible via mobile / tablet.Â 
              <br />
              â¢ No way to bookmark any content.
              <br />
              â¢ Loads of time is sent just for searching the ârightâ content.
              <br />â¢ Have to dig through loads of outdated stuffs to find relevant information
            </span>
          </div>
        </div>
        <div id="cs1-userflows-desc" className="container22">
          <h1 className="thqHeading1 h105">
            <span className="text48">User Flows &amp; Wireframes</span>
          </h1>
          <span className="text49">
            The primary focus of the application is keeping oneself updated with the latest
            happenings on the institution and enabling students to learn anywhere and anytime.
            <br data-type="br" />
            IÂ organized all the information and came up with 3 different user flows for the
            personas:
            <span data-type="span" className="text50">
              <br data-type="br" />
              Discoverability, Relevancy and Trust
            </span>
            Â were the key themes I developed.
            <br data-type="br" />I designed low fidelity prototypes using Sketch to narrow down the
            layout and the content flow.
          </span>
        </div>
        <div id="cs1-wf-pic" className="container23">
          <img src="/playground_assets/wf-collage-py9m-1200h.png" className="thqImage image05" />
          <span className="text51">Snippet of Wireframes</span>
        </div>
        <div id="cs1-sol" className="container24">
          <h1 className="thqHeading1 h106">
            <span data-type="span" className="text52">
              Solution
            </span>
          </h1>
          <span className="text53">
            There are 5 key pages in the application: Home, Lecture, Exams, Placements &amp;
            Projects.
          </span>
        </div>
        <div id="cs1-gr-descid" className="container25">
          <h1 className="thqHeading1 text54">
            <span data-type="span">HOME PAGE | THE HUB</span>
          </h1>
          <span className="text56">
            I skipped the traditional bottom/top-level navigation and instead opted for a more
            direct grid on the landing page as the primary navigation. The users can choose to have
            4-8 frequently used apps or can customise based on need.
            <br data-type="br" />
            I believed the grid to be functional because:
            <br data-type="br" />
            - Faster Access and Reduced Friction to the essential content within the app.
            <br data-type="br" />
            - Completely customizable.
            <br data-type="br" />- Easier access to the announcements and news from the institution.
          </span>
        </div>
        <div id="cs1-home-pic" className="container26">
          <img src="/playground_assets/cs1_solution_1-1200h.png" className="thqImage image06" />
          <span className="text57">
            App&apos;s Landing Page
            <br data-type="br" />
          </span>
        </div>
        <div id="cs1-academics" className="container27">
          <h1 className="thqHeading1 text58">
            <span data-type="span">ACADEMICS</span>
          </h1>
          <span className="text60">
            Academics was one of the core user flows that applied to both Rajesh and Samyukta. All
            the resources related to their academic education are neatly organized and accessible
            under one roof. The four pillars of academics are:
            <br />
            - Lectures
            <br />
            - E Books
            <br />
            - Audio Books
            <br />- Projects
          </span>
        </div>
        <div id="cs1-academy-pic" className="container28">
          <div className="container29">
            <img src="/playground_assets/cs1_solution_2-1200h.png" className="thqImage image07" />
            <img src="/playground_assets/cs1_solution_3-1200h.png" className="thqImage image08" />
          </div>
          <span className="text61">Snippet of Academics</span>
        </div>
        <div id="cs1-ebooks" className="container30">
          <h1 className="thqHeading1 text62">
            <span data-type="span">E- LEARNING | E - BOOKS</span>
          </h1>
          <span className="text64">
            I felt there was an overlap with E-Books and E-learning, so I recommended to have them
            both combined as one module.But the client decided against it and insisted on having it
            separate ð
          </span>
        </div>
        <div id="cs1-ebook-pic" className="container31">
          <div id="cs1-ebooks-pic" className="container32">
            <img src="/playground_assets/cs1_solution_5-1200h.png" className="thqImage image09" />
            <img src="/playground_assets/cs1_solution_7-1200h.png" className="thqImage image10" />
          </div>
          <span className="text65">Snippet of E-Learning &amp; E-Books</span>
        </div>
        <div id="cs1-ebooks" className="container33">
          <h1 className="thqHeading1 text66">
            <span data-type="span">PROJECTS &amp; PLACEMENT</span>
          </h1>
          <span className="text68">
            Although these were not used frequently as the Academics &amp;Â News modules, Placements
            and Projects were one of the pain points for Rajesh &amp;Â Samyuktha. We decided to keep
            it more direct and transparent as possible.
          </span>
          <span className="text69">
            <span className="text70">Project</span>
            - Depending on the student&apos;s year of study, the relevant project flow will be
            enabled. It will have clear guidelines, viva booking and related information, and easy
            to submit and keep track of the project report.
            <br />
          </span>
          <span className="text71">
            <span className="text72">Placements</span>
            - Mainly applicable for Rajesh a.k.a The Final Year student. However, the company
            profile and reports will be accessible for all the students.
            <br data-type="br" />
          </span>
        </div>
        <div id="cs1-ebook-pic" className="container34">
          <div id="cs1-ebooks-pic" className="container35">
            <img src="/playground_assets/cs1_solution_4-1200h.png" className="thqImage image11" />
            <img src="/playground_assets/cs1_solution_6-1200h.png" className="thqImage image12" />
          </div>
          <span className="text73">Snippet of projects &amp; placements</span>
        </div>
        <div id="cs1-insights" className="container36">
          <h1 className="thqHeading1 h107">
            <span data-type="span">Some Insights...</span>
          </h1>
          <div id="persona-1" className="container37">
            <h1 className="thqHeading1 h108">User research is key.</h1>
            <span className="text75">
              The app is primarily student-centric, hence I wanted to understand how students use
              the existing application but, I was only granted access to an SME and not the actual
              students.
              <br />
              However, I was given access to reports, usage metrics, and the existing portal and I
              was able to generate assumptions and a &apos;decent&apos; hypothesis.ears
            </span>
          </div>
          <div id="persona-1" className="container38">
            <h1 className="thqHeading1 h109">
              We need to reduce clutter as much as we can.
              <br />
            </h1>
            <span className="text76">
              A lot of feature and information available in the app is outdated. Some of the
              features are a result of one-time activity and have not been (and possibly never will
              be) used again.
              <br />
              Removing such clutter within the app, significantly improves user experience.
            </span>
          </div>
          <div id="persona-1" className="container39">
            <h1 className="thqHeading1 h110">
              Taxonomy is essential in content-heavy apps.
              <br />
            </h1>
            <span className="text77">
              There were a lot of articles, files, posts, and general information in the app, that
              are not indexed properly and governed.
              <br data-type="br" />
              As a result, the search was pretty useless. As part of UX recommendation, I advised
              the client to set up a governance model.
              <br />I haven&apos;t received any feedback on the same yet.
            </span>
          </div>
        </div>
        <div id="cs1-movingon" className="container40">
          <h1 className="thqHeading1 h111">
            <span data-type="span">Final Thoughts</span>
          </h1>
          <span className="text79">
            - I designed the core user flows and conducted usability testing with select few users.
            Based on their inputs, I made a few iterations on the user journeys and interactions. I
            completed the visual design and presented the final prototype on the agreed-upon
            deadline.
            <br />
            - We launched a &quot;Beta&quot; version of the app in 3 months and the client informed
            me that the feedback was generally positive. I&apos;m unable to share any metrics here
            as I did not have any access to the feedback data.
            <br />
            - I would have liked to create a content management system with a governance framework,
            work on change management and adoption of the app with the students. I did give the
            client my recommendations on the above topics but I did not get the opportunity to work
            on the same in this project.
            <br />
          </span>
        </div>
        <div id="cs1-insights" className="container41">
          <h1 className="thqHeading1 h112">
            <span data-type="span">Thank you for reading! ð</span>
          </h1>
          <div id="persona-1" className="container42"></div>
        </div>
        <div id="footer" className="container43">
          <div className="container44">
            <div className="container45">
              <span className="text81">
                Let&apos;s connect. Feel free to drop a
                <span className="text82">&quot;hello&quot;</span>
                anytime
              </span>
            </div>
            <div className="container46">
              <a href="mailto:msgsrive@gmail.com?subject=Hello :)" className="link05">
                <svg viewBox="0 0 1024 1024" className="thqIcon thqLink icon1">
                  <title>mail</title>
                  <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/designersriram"
                target="_blank"
                rel="noreferrer noopener"
                className="link06"
              >
                <svg viewBox="0 0 950.8571428571428 1024" className="thqIcon thqLink icon2">
                  <title>twitter</title>
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sriram015/"
                target="_blank"
                rel="noreferrer noopener"
                className="link07"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon3">
                  <title>instagram</title>
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sriramvenugopal/"
                target="_blank"
                rel="noreferrer noopener"
                className="link08"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon4">
                  <title>linkedin</title>
                  <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
                </svg>
              </a>
              <a
                href="https://dribbble.com/SriramVenugopal"
                target="_blank"
                rel="noreferrer noopener"
                className="link09"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon5">
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
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
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
          .container01 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .link {
            display: contents;
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
          .link01 {
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
          .link02 {
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
          .link03 {
            color: #1f2933;
            padding: 10px;
            font-size: 16px;
            font-weight: 700;
            margin-left: 16px;
            margin-right: 16px;
            text-decoration: none;
          }
          .container02 {
            width: 720px;
            cursor: auto;
            display: flex;
            flex-wrap: wrap;
            margin-top: 40px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .link04 {
            display: contents;
          }
          .icon {
            width: 32px;
            height: 32px;
          }
          .container03 {
            width: 720px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text04 {
            width: 100%;
            font-size: 40px;
            margin-top: 16px;
            line-height: 1.4;
          }
          .text05 {
            font-weight: 900;
          }
          .text06 {
            color: #52606D;
            margin-top: 6px;
            line-height: 1.8;
          }
          .container04 {
            width: 800px;
            display: flex;
            margin-top: 32px;
            align-items: flex-start;
            flex-direction: column;
          }
          .image01 {
            width: 100%;
            object-fit: cover;
            border-radius: 16px;
          }
          .container05 {
            width: 720px;
            display: grid;
            grid-gap: 24px;
            margin-top: 40px;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr;
          }
          .container06 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text07 {
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text08 {
            text-transform: uppercase;
          }
          .text09 {
            margin-top: 16px;
          }
          .container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text10 {
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text11 {
            text-transform: uppercase;
          }
          .text12 {
            margin-top: 16px;
          }
          .div2 {
            width: 720px;
            display: flex;
            margin-top: 32px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h1 {
            width: 100%;
            font-size: 24px;
            font-weight: 800;
            line-height: 1.4;
          }
          .text13 {
            margin-top: 16px;
          }
          .text14 {
            margin-top: 16px;
          }
          .container08 {
            width: 720px;
            display: grid;
            grid-gap: px;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
          }
          .container09 {
            width: 80%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .text15 {
            font-size: 24px;
            line-height: 1.4;
          }
          .text16 {
            font-weight: 800;
          }
          .text17 {
            margin-top: 16px;
          }
          .image02 {
            width: 100%;
            object-fit: cover;
          }
          .container10 {
            width: 800px;
            height: 80px;
            display: flex;
            flex-wrap: nowrap;
            margin-top: 32px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #F5F7FA;
          }
          .container11 {
            width: 720px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text18 {
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            margin-right: 8px;
          }
          .text19 {
            display: inline-block;
          }
          .container12 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .h101 {
            font-size: 24px;
            line-height: 1.4;
          }
          .text20 {
            font-weight: 800;
          }
          .text21 {
            margin-top: 16px;
          }
          .container14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text22 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text23 {
            text-transform: uppercase;
          }
          .text24 {
            margin-top: 16px;
          }
          .container15 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .image03 {
            width: 90%;
            align-self: center;
            margin-top: 40px;
            object-fit: scale-down;
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .text25 {
            font-size: 16px;
            align-self: center;
            margin-bottom: 24px;
          }
          .container16 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text26 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text27 {
            text-transform: uppercase;
          }
          .text28 {
            margin-top: 16px;
          }
          .container17 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .image04 {
            width: 90%;
            align-self: center;
            margin-top: 40px;
            object-fit: scale-down;
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .text29 {
            font-size: 16px;
            align-self: center;
            margin-bottom: 24px;
          }
          .container18 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h102 {
            width: 100%;
            font-size: 14px;
            line-height: 1.4;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .text30 {
            font-weight: 800;
          }
          .text31 {
            margin-top: 16px;
          }
          .container19 {
            width: 800px;
            display: grid;
            grid-gap: 24px;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
          }
          .container20 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h103 {
            font-size: 24px;
          }
          .text32 {
            font-weight: 800;
          }
          .text33 {
            font-size: 16px;
            margin-top: 16px;
          }
          .text34 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text35 {
            text-transform: uppercase;
          }
          .text36 {
            font-size: 16px;
            margin-top: 16px;
          }
          .text37 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text38 {
            text-transform: uppercase;
          }
          .text39 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container21 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h104 {
            font-size: 24px;
          }
          .text40 {
            font-weight: 800;
          }
          .text41 {
            font-size: 16px;
            margin-top: 16px;
          }
          .text42 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text43 {
            text-transform: uppercase;
          }
          .text44 {
            font-size: 16px;
            margin-top: 16px;
          }
          .text45 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text46 {
            text-transform: uppercase;
          }
          .text47 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container22 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h105 {
            width: 100%;
            font-size: 14px;
            line-height: 1.4;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .text48 {
            font-weight: 800;
          }
          .text49 {
            margin-top: 16px;
          }
          .text50 {
            font-weight: 700;
          }
          .container23 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .image05 {
            width: 100%;
            align-self: center;
            object-fit: cover;
            border-radius: 8px;
          }
          .text51 {
            font-size: 16px;
            align-self: center;
            margin-top: 16px;
            margin-bottom: 24px;
          }
          .container24 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h106 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text52 {
            font-weight: 800;
          }
          .text53 {
            margin-top: 16px;
          }
          .container25 {
            width: 720px;
            display: flex;
            margin-top: 24px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text54 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text56 {
            margin-top: 16px;
          }
          .container26 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .image06 {
            width: 40%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .text57 {
            font-size: 16px;
            align-self: center;
            margin-top: 16px;
            margin-bottom: 24px;
          }
          .container27 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text58 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text60 {
            margin-top: 16px;
          }
          .container28 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .container29 {
            width: 100%;
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .image07 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .image08 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .text61 {
            font-size: 16px;
            align-self: center;
            margin-top: 24px;
            margin-bottom: 24px;
          }
          .container30 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text62 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text64 {
            margin-top: 16px;
          }
          .container31 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .container32 {
            width: 100%;
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .image09 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .image10 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .text65 {
            font-size: 16px;
            align-self: center;
            margin-top: 24px;
            margin-bottom: 24px;
          }
          .container33 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text66 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text68 {
            margin-top: 16px;
          }
          .text69 {
            margin-top: 16px;
          }
          .text70 {
            font-weight: 700;
          }
          .text71 {
            margin-top: 16px;
          }
          .text72 {
            font-weight: 700;
          }
          .container34 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .container35 {
            width: 100%;
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .image11 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .image12 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .text73 {
            font-size: 16px;
            align-self: center;
            margin-top: 24px;
            margin-bottom: 24px;
          }
          .container36 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h107 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .container37 {
            width: 100%;
            display: flex;
            margin-top: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .h108 {
            font-size: 20px;
          }
          .text75 {
            margin-top: 16px;
          }
          .container38 {
            width: 100%;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .h109 {
            font-size: 20px;
          }
          .text76 {
            margin-top: 16px;
          }
          .container39 {
            width: 100%;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .h110 {
            font-size: 20px;
          }
          .text77 {
            margin-top: 16px;
          }
          .container40 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h111 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text79 {
            margin-top: 16px;
          }
          .container41 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h112 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .container42 {
            width: 100%;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .container43 {
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
          .container44 {
            width: 1000px;
            display: grid;
            grid-gap: px;
            align-items: stretch;
            align-content: start;
            justify-items: center;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr;
          }
          .container45 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text81 {
            color: #3E4C59;
            font-size: 14px;
            font-weight: 400;
          }
          .text82 {
            color: rgb(9, 103, 210);
            font-weight: 600;
          }
          .container46 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-self: stretch;
            align-items: stretch;
            justify-self: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .link05 {
            display: contents;
          }
          .icon1 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link06 {
            display: contents;
          }
          .icon2 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link07 {
            display: contents;
          }
          .icon3 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link08 {
            display: contents;
          }
          .icon4 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link09 {
            display: contents;
          }
          .icon5 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          @media (max-width: 991px) {
            .container {
              flex-wrap: nowrap;
              justify-content: flex-start;
            }
            .div {
              width: 90%;
            }
            .container05 {
              height: 280px;
            }
          }
          @media (max-width: 767px) {
            .container {
              flex-wrap: nowrap;
            }
            .div {
              width: 90%;
            }
            .container02 {
              width: 80%;
            }
            .container03 {
              width: 80%;
            }
            .container04 {
              width: 80%;
            }
            .container05 {
              width: 80%;
              height: 280px;
            }
            .div2 {
              width: 80%;
            }
            .container08 {
              grid-gap: 24px;
              grid-template-rows: 1fr;
              grid-template-columns: 1fr;
            }
            .container09 {
              width: 100%;
            }
            .container10 {
              width: 90%;
            }
            .container11 {
              width: 90%;
            }
            .container12 {
              width: 80%;
            }
            .container16 {
              width: 80%;
            }
            .container18 {
              width: 80%;
            }
            .container19 {
              width: 80%;
            }
            .container22 {
              width: 80%;
            }
            .container23 {
              width: 90%;
            }
            .container24 {
              width: 80%;
            }
            .container25 {
              width: 80%;
            }
            .container26 {
              width: 90%;
            }
            .container27 {
              width: 80%;
            }
            .container28 {
              width: 90%;
            }
            .container30 {
              width: 80%;
            }
            .container31 {
              width: 90%;
            }
            .container33 {
              width: 80%;
            }
            .container34 {
              width: 90%;
            }
            .container36 {
              width: 80%;
            }
            .container40 {
              width: 80%;
            }
            .container41 {
              width: 80%;
            }
            .container43 {
              height: 80px;
            }
            .container44 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .container {
              flex-wrap: nowrap;
            }
            .navbar {
              height: 120px;
            }
            .div {
              grid-gap: 16px;
              margin-top: 16px;
              align-items: center;
              align-content: center;
              justify-items: center;
              justify-content: center;
              grid-template-columns: 1fr;
            }
            .container01 {
              justify-content: center;
            }
            .div1 {
              justify-content: space-between;
            }
            .container02 {
              width: 80%;
            }
            .container03 {
              width: 80%;
            }
            .container04 {
              width: 80%;
            }
            .container05 {
              width: 80%;
              height: 360px;
              align-items: start;
              justify-items: stretch;
              justify-content: space-between;
            }
            .container06 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .div2 {
              width: 80%;
            }
            .container08 {
              width: 80%;
              grid-gap: 24px;
              grid-template-rows: 1fr;
              grid-template-columns: 1fr;
            }
            .container09 {
              width: 100%;
            }
            .container10 {
              width: 100%;
            }
            .container11 {
              width: 80%;
            }
            .container12 {
              width: 80%;
            }
            .container15 {
              width: 100%;
            }
            .container16 {
              width: 80%;
            }
            .container17 {
              width: 100%;
            }
            .container18 {
              width: 80%;
            }
            .container19 {
              width: 80%;
              grid-template-rows: 1fr;
              grid-template-columns: 1fr;
            }
            .container22 {
              width: 80%;
            }
            .container23 {
              width: 100%;
            }
            .container24 {
              width: 80%;
            }
            .container25 {
              width: 80%;
            }
            .container26 {
              width: 100%;
            }
            .container27 {
              width: 80%;
            }
            .container28 {
              width: 100%;
            }
            .container30 {
              width: 80%;
            }
            .container31 {
              width: 100%;
            }
            .container33 {
              width: 80%;
            }
            .container34 {
              width: 100%;
            }
            .container36 {
              width: 80%;
            }
            .container40 {
              width: 80%;
            }
            .container41 {
              width: 80%;
            }
            .container43 {
              height: 120px;
              flex-direction: column;
            }
            .container44 {
              width: 80%;
              align-items: start;
              grid-template-columns: 1fr;
            }
            .container45 {
              flex-wrap: wrap;
            }
            .text81 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default LearningHub

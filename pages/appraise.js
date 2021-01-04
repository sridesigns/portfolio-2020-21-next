import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Appraise = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Appraise - Sriram Venugopal</title>
          <meta
            name="description"
            content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
          />
          <meta property="og:title" content="Appraise - Sriram Venugopal" />
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
            <div className="div01">
              <Link href="/" className="thqLink">
                <a className="link01">
                  <span className="text001">Work</span>
                </a>
              </Link>
              <Link href="/playground" className="thqLink">
                <a className="link02">
                  <span className="text002">Play</span>
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
        <div id="cs3-intro" className="container03">
          <h1 className="thqHeading1 text004">
            <span data-type="span" className="text005">
              Peak - A Performance Management Platform
            </span>
          </h1>
          <span className="text006">
            Led Design and Research for my organisation of 300k+ users to overhaul the existing
            appraisal process and application.Â Â 
          </span>
          <img
            src="https://play.teleporthq.io/static/img/default.png"
            className="thqImage image1"
          />
        </div>
        <div id="cs3-role" className="container04">
          <div className="container05">
            <h1 className="thqHeading1 text007">
              <span className="text008">My Role</span>
            </h1>
            <span className="text009">
              Stakeholder Discussion
              <br />
              UI Auditâ
              <br />
              User Research
              <br data-type="br" />
              Information Architecture
              <br data-type="br" />
              Journey Mapping
              <br data-type="br" />
              Wireframes
              <br data-type="br" />
              Interaction Design
              <br data-type="br" />
              Visual Design
              <br />
              Usability Testing
            </span>
          </div>
          <div className="container06">
            <h1 className="thqHeading1 text010">
              <span data-type="span" className="text011">
                Platforms
              </span>
            </h1>
            <span className="text012">
              Web
              <br />
              iOS
              <br data-type="br" />
              Android
            </span>
          </div>
        </div>
        <div id="cs3-problem" className="div02">
          <h1 className="thqHeading1 h1">Why Redesign?</h1>
          <span className="text013">
            We were using the evaluation application for the
            <span className="text014">past 7+ years</span>. Although the application had it&apos;s
            issues, it was functional and it got the job done.
            <span className="text015">
              <br />
              60-70%
            </span>
            of users used the application once a year, and the rest of the users use it anywhere
            from 2-4 times a year depending on their project works.
            <br />
            So why redesign?
          </span>
          <span className="text016">
            - The organization had a problem. They believed that the existing system was not
            designed to properly evaluate people on their merit.Â 
          </span>
          <span className="text017">
            - By using the application only 1-2 times a year, the associates were not being provided
            with proper feedback on their work.
          </span>
          <span className="text018">
            - They wanted to address these concerns by bringing a change in the appraisal process,
            which is transparent, efficient and will help the associates to get regular feedback
            which will help improve their skill, productivity and job satisfaction.
          </span>
        </div>
        <div id="cs3-deadline" className="container07">
          <div className="container08">
            <svg viewBox="0 0 1024 1024" className="thqIcon icon1">
              <title>alarm</title>
              <path d="M512 128c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM512 936c-198.824 0-360-161.178-360-360 0-198.824 161.176-360 360-360 198.822 0 360 161.176 360 360 0 198.822-161.178 360-360 360zM934.784 287.174c16.042-28.052 25.216-60.542 25.216-95.174 0-106.040-85.96-192-192-192-61.818 0-116.802 29.222-151.92 74.596 131.884 27.236 245.206 105.198 318.704 212.578v0zM407.92 74.596c-35.116-45.374-90.102-74.596-151.92-74.596-106.040 0-192 85.96-192 192 0 34.632 9.174 67.122 25.216 95.174 73.5-107.38 186.822-185.342 318.704-212.578z"></path>
              <path d="M512 576v-256h-64v320h256v-64z"></path>
            </svg>
            <h1 className="thqHeading1 text019">Timeline:</h1>
            <span className="text020">~ 12 months</span>
          </div>
        </div>
        <div id="cs3-existing-process" className="container09">
          <div className="container10">
            <h1 className="thqHeading1 h101">The Existing Evaluation Process</h1>
            <span className="text021">
              There are 3 different user-roles involved in the appraisal process..
            </span>
          </div>
          <div id="cs3-roles" className="div03">
            <div id="persona-1" className="container11">
              <h1 className="thqHeading1 h102">Appraisee</h1>
              <span className="text022">
                Almost everyone is an appraisee.Â 
                <br data-type="br" />
                <br data-type="br" />
                Junior Engineers, Associates, New Joiners who are part of a team but do not have
                anyone reporting to them.
                <br data-type="br" />
                <br data-type="br" />A significant percent of org. employees do not have anyone
                reporting to them
              </span>
            </div>
            <div id="persona-1" className="container12">
              <h1 className="thqHeading1 h103">Evaluator</h1>
              <span className="text023">
                Typical Experience: 5 to 15 years. â
                <br data-type="br" />
                <br data-type="br" />
                Team Leads, Senior Developers/Engineers, Architects, Supervisors, etc.
                <br data-type="br" />
                <br data-type="br" />
                They typically lead a team, assign tasks, set targets and oversee associates
              </span>
            </div>
            <div id="persona-1" className="container13">
              <h1 className="thqHeading1 h104">Reviewer</h1>
              <span className="text024">
                Typical Experience:
                <br />
                15 years and above. â
                <br data-type="br" />
                <br data-type="br" />
                Delivery Managers, Consultants, Architects, Regional Managers, Unite Heads, etc.
                <br data-type="br" />
                <br data-type="br" />
                Reviewers oversee a group of evaluators
              </span>
            </div>
          </div>
          <div className="container14">
            <span className="text025">
              We have 2 types of evaluations.
              <br />-<span className="text026"> Annual evaluation</span>
              (Conducted at the end of each year)
              <br />-<span className="text027">Project Closure</span>( Conducted if a employee
              leaves/completes a project)
            </span>
            <span className="text028">
              The Evaluator sets goals for the Appraisee. Before the evaluation deadline, the
              Appraisee responds to each of the goals and submits the goal sheet for evaluation.
            </span>
            <span className="text029">
              The goal sheet will be evaluated by the Evaluator, who will award a rank based on the
              Appraiseeâs performance across each goal based on which a Performance score will be
              generated.
            </span>
            <span className="text030">
              The goal sheet will be then shared with the reviewer to verify the evaluation. Post
              the reviewer&apos;s approval, the performance score will be then shared with the
              Appraisee.
            </span>
            <span className="text031">
              Post the goal sheet submission, the Appraisee will only be able to view the progress
              of the goal sheet at each stage but cannot perform any actions.
            </span>
          </div>
        </div>
        <div id="cs3-kickoff" className="container15">
          <h1 className="thqHeading1 text032">
            <span className="text033">Kick Off</span>
          </h1>
          <span className="text034">
            I was onboarded onto this project by January 2018. By then, the project had already
            started and a good 2-3 months months have progressed. The entire project team were
            spread out between Chennai, Mumbai and Delhi.
            <br />
            The progress that had been made till then was neatly documented and was shared with me
            by the Business Analyst to bring me up to speed. I took nearly a week to get up to speed
            and scheduled regular calls with team to clarify any and all queries that I had.Â 
          </span>
          <h1 className="thqHeading1 text035">
            <span data-type="span" className="text036">
              MY ROLE
            </span>
          </h1>
          <span className="text037">
            I led the design for this entire project. I collaborated with senior design consultants
            and visual designers for design reviews and for refining the UX and visual experience of
            the product.
          </span>
          <span className="text038">
            The Project team comprised of:
            <br />
            - 3 Business Analysts
            <br />
            - 5 Backend Developers
            <br />
            - 3 Frontend Developers
            <br />- 3 Product Managers
          </span>
          <span className="text039">
            The application was built using
            <span className="text040">ReactJS</span>
            and
            <span className="text041">Java</span>. I started working on the designs in Sketch but we
            migrated to
            <span className="text042">Figma</span>
            which made collaboration, reviews much quicker and easier.
          </span>
        </div>
        <div id="cs3-unde" className="div04">
          <h1 className="thqHeading1 text043">
            <span data-type="span" className="text044">
              Understanding the User
            </span>
          </h1>
          <span className="text045">
            I synthesized all the documentations and reports created by the previous design team and
            prepared a set of questionnaire to validate with different user groups
          </span>
          <span className="text046">
            I interviewed
            <span className="text047">12 users</span>
            and conducted
            <span className="text048">3 focus group sessions</span>
            to validate my questionnaire and the findings of the teamÂ 
            <br data-type="br" />
          </span>
          <span className="text049">
            I found most of their findings to be accurate and only minor changes were required to be
            altered. I ran a playback session for the stakeholders and the entire project team
            wherein I walked them through the user research findings. We mapped out the MVP
            features, created sprint plans and decided to release the app in phases.
            <br data-type="br" />
          </span>
        </div>
        <div id="cs3-user-flows" className="div05">
          <h1 className="thqHeading1 text050">
            <span data-type="span" className="text051">
              User Journeys
            </span>
          </h1>
          <span className="text052">
            The personas that were created already were pretty solid and based on my user research I
            made some minor tweaks. We identified
            <span className="text053">8 personas</span>
            that covered majority of the user groups in the organisation.
          </span>
          <span className="text054">
            I collaborated with the Business analysts to construct the user journeys. We dissected
            the features and functionalities, collated key requirement ask against the features and
            plotted a journey for all the defined personas.
          </span>
          <span className="text055">
            The below
            <span className="text056">3 critical user journeys</span>
            covered almost 80% of our application needs:Â 
            <br />
            - Appraisee Journey
            <br />
            - Evaluator Journey
            <br />- Reviewer Journey
          </span>
        </div>
        <div id="cs3-howitstarted" className="container16">
          <h1 className="thqHeading1 text057">
            <span data-type="span" className="text058">
              How it started
            </span>
          </h1>
          <span className="text059">
            In the beginning of 2017, a group of HR Managers and the Appraise Application team were
            tasked with revamping the current appraisal process.
            <br />
            The designers and BA from the application team conducted multiple user interviews and
            focus groups sessions for more than a month and came up with user requirements and
            personas.
            <br />
          </span>
          <span className="text060">
            Around May 2017, due to certain unforeseen circumstances the project was temporarily
            shelved and was planned to restart back in couple of months.
            <br />
          </span>
          <span className="text061">
            The project was restarted back in December 2017 and I was roped in January to lead the
            design and collaborate with the Application team in revamping the product.
            <br data-type="br" />
          </span>
        </div>
        <div id="cs3-ia" className="div06">
          <h1 className="thqHeading1 text062">
            <span data-type="span" className="text063">
              Information Architecture
            </span>
          </h1>
          <span className="text064">
            By constructing the journeys, we understood how the information flowed in the system.
            <br />
            We came up with a structured navigation for each of the defined user roles. We wanted to
            navigation to be consistent, seamless and easy to understand.
            <br />
            Since the application had a huge user base, the user age range varied from 22 to 60.Â Â 
          </span>
          <span className="text065">
            We all agreed on a simple, minimalistic and transparent structure to the app. We focused
            on the below key areas in defining the app structure.
          </span>
          <span className="text066">
            - Everyone is an Appraisee. Their personal appraisal process should be prioritised,
            easily accessible and trackable.
            <br />
            - Managers/Reviewers, should have a clear view of their reportees and their respective
            appraisal status.
            <br />
            - Managers/Reviewers should have a clear view of their pending tasks.
            <br />
            - Proper notifications for all key activities in the system.
            <br />- Personalised profile to keep track of their own appraisals and activities.
          </span>
        </div>
        <div id="cs3-appraisee-flow" className="div07">
          <h1 className="thqHeading1 text067">
            <span data-type="span" className="text068">
              Solution
            </span>
          </h1>
          <h1 className="thqHeading1 text069">
            <span className="text070">APPRAISEE FLOW</span>
          </h1>
          <span className="text071">
            Almost 80% - 85% of employees in the organisation will undergo an appraisal process,
            hence I wanted to set the foundation by cracking the Appraisee Flow.Â 
            <br data-type="br" />
            Based on user inputs and business requirements, I synthesized that any designs or flows
            must satisfy the following criteria:
            <br data-type="br" />
          </span>
          <span className="text072">
            - Everyone is an Appraisee. Their personal appraisal process should be prioritised,
            easily accessible and trackable.
            <br />
            - Managers/Reviewers, should have a clear view of their reportees and their respective
            appraisal status.
            <br />
            - Managers/Reviewers should have a clear view of their pending tasks.
            <br />
            - Proper notifications for all key activities in the system.
            <br />- Personalised profile to keep track of their own appraisals and activities.
          </span>
          <span className="text073">
            The Landing page lists all the appraisals for the current year with key details such as:
            <br />
            - Project name
            <br />
            - Appraisal Type
            <br />
            - Evaluator, Reviewer and HR details
            <br />- No. of goals and attributes set.Â 
          </span>
          <span className="text074">
            I created wireframes with 2 different layouts and navigational elements for the
            Appraisee flow. I created a functional prototype in Figma and conducted A/B testing with
            a select group of user.
            <br />
            Based on the user inputs, we finalised a set of wireframes for the Appraisee Flow.
          </span>
        </div>
        <div id="cs3-evaluator-flow" className="div08">
          <h1 className="thqHeading1 text075">
            <span data-type="span" className="text076">
              Evaluator &amp; Reviewer FLOW
            </span>
          </h1>
          <span className="text077">
            Almost 80% - 85% of employees in the organisation will undergo an appraisal process,
            hence I wanted to set the foundation by cracking the Appraisee Flow.Â 
            <br />
            Based on user inputs and business requirements, I synthesized that any designs or flows
            must satisfy the following criterias:
            <br />
          </span>
          <span className="text078">
            Apart from working on their own appraisal processes, the following were the key goals
            for a Evaluator/Reviewer:
            <br />
            - Clear view of the associates who reports to them.
            <br />
            - Detailed information of the appraisal status of their reportees.
            <br />
            - Efficient ways to set goals, share feedback and rate them.
            <br />
            - Easy way to track their pending actions with respect to appraisal process.
            <br />
          </span>
          <span className="text079">
            My Team is a navigation element that is accessible only for the Evaluators and
            Reviewers.Â  This page clearly lists all the team members along with their respective
            appraisal progress.
            <br />
            The page will also have a clear distinction between Evaluator and Reviewer functions as
            almost 90% of reviewers will also function as evaluators.
          </span>
        </div>
        <div id="cs3-evaluator-pic" className="container17">
          <div id="cs1-ebooks-pic" className="container18">
            <img src="/playground_assets/cs1_solution_4-1200h.png" className="thqImage image2" />
            <img src="/playground_assets/cs1_solution_6-1200h.png" className="thqImage image3" />
          </div>
          <span className="text080">Snippet of projects &amp; placements</span>
        </div>
        <div id="cs3-reminder" className="div09">
          <span className="text081">
            One of the most common user pain point was when their appraisal was pending with a
            particular person, there was no wayÂ to communicate with them within the system. They had
            to do it offline which does not always guarantee appraisal progress.
          </span>
          <span className="text082">
            We addressed this issue by enabling the users to send a reminder to their
            evaluator/reviewer with whom the task is pending.Â  However, in order to avoid spamming
            the receiver, reminders are spaced out and can be sent only once every 15 days.
            <br data-type="br" />
          </span>
          <span className="text083">
            By sending a reminder , the receiver gets a push notification/email informing them that
            a particular task is pending with them. Users can configure between push notification or
            email or both.
          </span>
        </div>
        <div id="cs3-mobile" className="container19">
          <h1 className="thqHeading1 h105">
            <span data-type="span">Mobile App</span>
          </h1>
          <span className="text085">
            One of the primary requirement of the appraisal revamp is to promote a culture of
            continuous feedback on user&apos;s goals.
            <br />
            Having a mobile app will enable the users to receive notifications on mobile and act
            instantly to any queries posted. It will also be enable users to track changes to the
            goals, record progress and have a conversation with their evaluators/reviewers as
            needed.
          </span>
          <span className="text086">
            We designed and developed a hybrid mobile app on the same stack as web. ReactJS and
            Java.
            <br />
            Apart from the HR features, rest all the features are retained in the mobile app.
          </span>
        </div>
        <div id="cs3-weblaunch" className="container20">
          <h1 className="thqHeading1 h106">Launching the Website</h1>
          <span className="text087">
            The entire project was designed and developed in over a period of
            <span className="text088">16 months.</span>
            We worked in Agile with 4 week sprints.
            <br />
            Once the wireframes for all the flows were finalised, I started on the visual design of
            the application. We already had a brand guideline in place, so I followed the design
            direction mentioned in the guideline.
            <br />
            I collaborated with senior visual designers for review and refining the application.
            <br />
            Once we developed the MVP, we ran a closed beta test with 100 users. We made minor
            iteratiosn based on the user inputs and submitted the app for security testing.
          </span>
          <span className="text089">
            As this is company wide initiative, I worked with HR managers, corporate communications
            to run awareness workshops and marketing campaigns with the associates in making them
            aware of the new system and process.
          </span>
          <span className="text090">
            <span className="text091">
              We successfully launched the web application on October 31, 2018.
            </span>
          </span>
          <span className="text092">
            The response was mostly positive and people loved the app performance and the new
            interface.Â We had ~<span className="text093">100k logins</span>
            in the first week but as expected the traffic gradually reduced in the weeks after
            launch.
          </span>
        </div>
        <div id="cs3-moblaunch" className="container21">
          <h1 className="thqHeading1 h107">Launching the Mobile App</h1>
          <span className="text094">
            Post the web launch, we took a month break to stabilise the site and work on any changes
            based on feedback.
          </span>
          <span className="text095">
            I started working on few user flows for the mobile app during the web design phase
            itself. I created high fidelity mockups based on brand guidelines for all the user
            journeys in the app.
          </span>
          <span className="text096">
            <span data-type="span">
              <span className="text098">
                Like web, we worked on sprints and after successfully clearing the usability and
                security testing,
                <span className="text099">we launched the mobile app on April 30, 2019.</span>
              </span>
            </span>
          </span>
          <span className="text100">
            The response was mostly positive and people loved the app performance and the new
            interface.Â We had ~<span className="text101">100k logins</span>
            in the first week but as expected the traffic gradually reduced in the weeks after
            launch.
          </span>
          <span className="text102">
            The organisation was planning to revamp few more modules associated with appraisals such
            as promotion, career hub etc. But after working on this project for more than 16 months,
            I desired a break and exited the project.
            <br />I created a transition plan on KT and handed over all the access and relevant
            files to my replacement.
          </span>
          <span className="text103">
            Presently, the application team is doing a tremendous job is maintaining the app. They
            are continuously working on improving the app with bug fixes, new features in regular
            sprints
          </span>
        </div>
        <div id="cs3-learnings" className="container22">
          <h1 className="thqHeading1 h108">Final Thoughts</h1>
          <span className="text104">
            This journey of 16 months was a fantastic learning experience filled with excitement,
            fun and at times frustration.. Some of my key takeaways from this project are:
          </span>
          <span className="text105">
            - Establish a clear form of communication with the key stakeholders as lot of conflicts
            arise from simple miscommunications.
            <br />
            - Support designs with facts. Even if it requires additional efforts as a designer, be
            ready to put in the work as you are advocating for the user.
            <br />- Take breaks from work as much as possible. Working continuously has serious
            consequences both physically and mentally.
          </span>
          <span className="text106">
            I am immensely proud to be part this project that despite all the hurdles, banded
            together in creating this amazing product, that has a positive impact on large number of
            users.
            <br />
          </span>
        </div>
        <div id="cs1-insights" className="container23">
          <h1 className="thqHeading1 h109">
            <span data-type="span">Thank you for reading! ð</span>
          </h1>
          <div id="persona-1" className="container24"></div>
        </div>
        <div id="footer" className="container25">
          <div className="container26">
            <div className="container27">
              <span className="text108">
                Let&apos;s connect. Feel free to drop a
                <span className="text109">&quot;hello&quot;</span>
                anytime
              </span>
            </div>
            <div className="container28">
              <a href="mailto:msgsrive@gmail.com?subject=Hello :)" className="link05">
                <svg viewBox="0 0 1024 1024" className="thqIcon thqLink icon2">
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
                <svg viewBox="0 0 950.8571428571428 1024" className="thqIcon thqLink icon3">
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
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon4">
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
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon5">
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
                <svg viewBox="0 0 877.7142857142857 1024" className="thqIcon thqLink icon6">
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
          .div01 {
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
          .text001 {
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
          .text002 {
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
          .text004 {
            width: 100%;
            font-size: 40px;
            margin-top: 16px;
            line-height: 1.4;
          }
          .text005 {
            font-weight: 900;
          }
          .text006 {
            color: #52606D;
            margin-top: 4px;
            line-height: 1.8;
          }
          .image1 {
            width: 100%;
            margin-top: 24px;
            object-fit: cover;
          }
          .container04 {
            width: 720px;
            display: grid;
            grid-gap: 24px;
            margin-top: 24px;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr;
          }
          .container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text007 {
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text008 {
            text-transform: uppercase;
          }
          .text009 {
            margin-top: 16px;
          }
          .container06 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text010 {
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text011 {
            text-transform: uppercase;
          }
          .text012 {
            margin-top: 16px;
          }
          .div02 {
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
          .text013 {
            margin-top: 16px;
          }
          .text014 {
            font-weight: 700;
          }
          .text015 {
            font-weight: 700;
          }
          .text016 {
            margin-top: 16px;
          }
          .text017 {
            margin-top: 16px;
          }
          .text018 {
            margin-top: 16px;
          }
          .container07 {
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
          .container08 {
            width: 720px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .icon1 {
            fill: #F86A6A;
            width: 24px;
            height: 24px;
            margin-right: 16px;
          }
          .text019 {
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            margin-right: 8px;
          }
          .text020 {
            display: inline-block;
          }
          .container09 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .h101 {
            font-size: 24px;
            line-height: 1.4;
          }
          .text021 {
            margin-top: 16px;
          }
          .div03 {
            width: 100%;
            display: grid;
            grid-gap: 24px;
            margin-top: 24px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .container11 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h102 {
            font-size: 20px;
          }
          .text022 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container12 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h103 {
            font-size: 20px;
          }
          .text023 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container13 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h104 {
            font-size: 20px;
          }
          .text024 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container14 {
            width: 100%;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text025 {
            margin-top: 24px;
          }
          .text026 {
            font-weight: 700;
          }
          .text027 {
            font-weight: 700;
          }
          .text028 {
            margin-top: 16px;
          }
          .text029 {
            margin-top: 16px;
          }
          .text030 {
            margin-top: 16px;
          }
          .text031 {
            margin-top: 16px;
          }
          .container15 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text032 {
            width: 100%;
            font-size: 24px;
            margin-top: 24px;
            line-height: 1.4;
          }
          .text033 {
            font-weight: 800;
          }
          .text034 {
            margin-top: 16px;
          }
          .text035 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text036 {
            text-transform: uppercase;
          }
          .text037 {
            margin-top: 16px;
          }
          .text038 {
            margin-top: 16px;
          }
          .text039 {
            margin-top: 16px;
          }
          .text040 {
            font-weight: 700;
          }
          .text041 {
            font-weight: 700;
          }
          .text042 {
            font-weight: 700;
          }
          .div04 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text043 {
            width: 100%;
            font-size: 24px;
            margin-top: 24px;
            line-height: 1.4;
          }
          .text044 {
            font-weight: 800;
          }
          .text045 {
            margin-top: 16px;
          }
          .text046 {
            margin-top: 16px;
          }
          .text047 {
            font-weight: 700;
          }
          .text048 {
            font-weight: 700;
          }
          .text049 {
            margin-top: 16px;
          }
          .div05 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text050 {
            width: 100%;
            font-size: 24px;
            margin-top: 24px;
            line-height: 1.4;
          }
          .text051 {
            font-weight: 800;
          }
          .text052 {
            margin-top: 16px;
          }
          .text053 {
            font-weight: 700;
          }
          .text054 {
            margin-top: 16px;
          }
          .text055 {
            margin-top: 16px;
          }
          .text056 {
            font-weight: 700;
          }
          .container16 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text057 {
            width: 100%;
            font-size: 24px;
            margin-top: 24px;
            line-height: 1.4;
          }
          .text058 {
            font-weight: 800;
          }
          .text059 {
            margin-top: 16px;
          }
          .text060 {
            margin-top: 16px;
          }
          .text061 {
            margin-top: 16px;
          }
          .div06 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text062 {
            width: 100%;
            font-size: 24px;
            margin-top: 24px;
            line-height: 1.4;
          }
          .text063 {
            font-weight: 800;
          }
          .text064 {
            margin-top: 16px;
          }
          .text065 {
            margin-top: 16px;
          }
          .text066 {
            margin-top: 16px;
          }
          .div07 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text067 {
            width: 100%;
            font-size: 24px;
            margin-top: 24px;
            line-height: 1.4;
          }
          .text068 {
            font-weight: 800;
          }
          .text069 {
            width: 100%;
            font-size: 14px;
            margin-top: 32px;
            line-height: 1.4;
            letter-spacing: 2px;
          }
          .text070 {
            text-transform: uppercase;
          }
          .text071 {
            margin-top: 16px;
          }
          .text072 {
            margin-top: 16px;
          }
          .text073 {
            margin-top: 16px;
          }
          .text074 {
            margin-top: 16px;
          }
          .div08 {
            width: 720px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text075 {
            width: 100%;
            font-size: 14px;
            margin-top: 32px;
            line-height: 1.4;
            letter-spacing: 2px;
          }
          .text076 {
            text-transform: uppercase;
          }
          .text077 {
            margin-top: 16px;
          }
          .text078 {
            margin-top: 16px;
          }
          .text079 {
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
          .container18 {
            width: 100%;
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .image2 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .image3 {
            width: 60%;
            align-self: center;
            margin-top: 16px;
            object-fit: cover;
          }
          .text080 {
            font-size: 16px;
            align-self: center;
            margin-top: 24px;
            margin-bottom: 24px;
          }
          .div09 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text081 {
            margin-top: 16px;
          }
          .text082 {
            margin-top: 16px;
          }
          .text083 {
            margin-top: 16px;
          }
          .container19 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h105 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text085 {
            margin-top: 16px;
          }
          .text086 {
            margin-top: 16px;
          }
          .container20 {
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
          .text087 {
            margin-top: 16px;
          }
          .text088 {
            font-weight: bold;
          }
          .text089 {
            margin-top: 16px;
          }
          .text090 {
            margin-top: 16px;
          }
          .text091 {
            font-weight: 700;
          }
          .text092 {
            margin-top: 16px;
          }
          .text093 {
            font-weight: bold;
          }
          .container21 {
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
          .text094 {
            margin-top: 16px;
          }
          .text095 {
            margin-top: 16px;
          }
          .text096 {
            margin-top: 16px;
            font-weight: bold;
          }
          .text098 {
            font-weight: normal;
          }
          .text099 {
            font-weight: bold;
          }
          .text100 {
            margin-top: 16px;
          }
          .text101 {
            font-weight: bold;
          }
          .text102 {
            margin-top: 16px;
          }
          .text103 {
            margin-top: 16px;
          }
          .container22 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h108 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text104 {
            margin-top: 16px;
          }
          .text105 {
            margin-top: 16px;
          }
          .text106 {
            margin-top: 16px;
            font-weight: bold;
          }
          .container23 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h109 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .container24 {
            width: 100%;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .container25 {
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
          .container26 {
            width: 1000px;
            display: grid;
            grid-gap: px;
            align-items: stretch;
            align-content: start;
            justify-items: center;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr;
          }
          .container27 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text108 {
            color: #3E4C59;
            font-size: 14px;
            font-weight: 400;
          }
          .text109 {
            color: rgb(9, 103, 210);
            font-weight: 600;
          }
          .container28 {
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
          .icon2 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link06 {
            display: contents;
          }
          .icon3 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link07 {
            display: contents;
          }
          .icon4 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link08 {
            display: contents;
          }
          .icon5 {
            fill: #3E4C59;
            width: 20px;
            height: 20px;
            margin: 16px;
          }
          .link09 {
            display: contents;
          }
          .icon6 {
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
            .container04 {
              height: 280px;
            }
            .div03 {
              grid-template-columns: 1fr;
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
              height: 360px;
            }
            .div02 {
              width: 80%;
            }
            .container07 {
              width: 90%;
            }
            .container08 {
              width: 90%;
            }
            .container09 {
              width: 80%;
              align-items: center;
            }
            .div03 {
              width: 100%;
              grid-template-columns: 1fr;
            }
            .container15 {
              width: 80%;
            }
            .div04 {
              width: 80%;
            }
            .div05 {
              width: 80%;
            }
            .container16 {
              width: 80%;
            }
            .div06 {
              width: 80%;
            }
            .div07 {
              width: 80%;
            }
            .div08 {
              width: 80%;
            }
            .div09 {
              width: 80%;
            }
            .container25 {
              height: 80px;
            }
            .container26 {
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
            .div01 {
              justify-content: space-between;
            }
            .container02 {
              width: 80%;
            }
            .container03 {
              width: 80%;
              flex-wrap: nowrap;
              align-items: center;
            }
            .container04 {
              width: 80%;
              height: 560px;
              align-items: start;
              justify-items: stretch;
              justify-content: space-between;
            }
            .container05 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .div02 {
              width: 80%;
            }
            .container07 {
              width: 90%;
            }
            .container08 {
              width: 90%;
            }
            .container09 {
              width: 80%;
            }
            .div03 {
              width: 100%;
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;
            }
            .container15 {
              width: 80%;
            }
            .div04 {
              width: 80%;
            }
            .div05 {
              width: 80%;
            }
            .container16 {
              width: 80%;
            }
            .div06 {
              width: 80%;
            }
            .div07 {
              width: 80%;
            }
            .div08 {
              width: 80%;
            }
            .container17 {
              width: 100%;
            }
            .div09 {
              width: 80%;
            }
            .container19 {
              width: 80%;
            }
            .container20 {
              width: 80%;
            }
            .container21 {
              width: 80%;
            }
            .container22 {
              width: 80%;
            }
            .container23 {
              width: 80%;
            }
            .container25 {
              height: 120px;
              flex-direction: column;
            }
            .container26 {
              width: 80%;
              align-items: start;
              grid-template-columns: 1fr;
            }
            .container27 {
              flex-wrap: wrap;
            }
            .text108 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Appraise
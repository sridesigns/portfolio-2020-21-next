import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const ServiceDeskManagement = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Service Desk Management - Sriram Venugopal</title>
          <meta
            name="description"
            content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
          />
          <meta property="og:title" content="Service Desk Management - Sriram Venugopal" />
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
        <div id="cs3-intro" className="container03">
          <h1 className="thqHeading1 text04">
            <span data-type="span" className="text05">
              IT Service Desk Management
            </span>
          </h1>
          <span className="text06">
            Collaborated with a startup to designÂ a Service Desk Management platformÂ to cater to the
            IT needs of small and medium enterprise organizations. The platform can be easily
            integrated to a customer&apos;s product, features can be customized as per requirement
            and deployed seamlessly.
          </span>
        </div>
        <div id="cs3-intro-pic" className="container04">
          <img
            src="/playground_assets/cs2-preview-collage-1200h.png"
            className="thqImage image01"
          />
        </div>
        <div id="cs3-role" className="container05">
          <div className="container06">
            <h1 className="thqHeading1 text07">
              <span className="text08">My Role</span>
            </h1>
            <span className="text09">
              Competitive Analysisâ
              <br />
              Information Architecture
              <br />
              User Flows
              <br />
              Wireframes
              <br />
              Interaction Design
              <br />
              Visual Design
              <br />
              Branding
            </span>
          </div>
          <div className="container07">
            <h1 className="thqHeading1 text10">
              <span data-type="span" className="text11">
                Platforms
              </span>
            </h1>
            <span className="text12">Web</span>
          </div>
        </div>
        <div id="cs3-problem" className="div2">
          <h1 className="thqHeading1 h1">The Problem</h1>
          <span className="text13">
            The goal was to create a Service Desk management platform forÂ small and medium
            enterprise organizations to cater to their IT needs. The client already had aÂ vision and
            a detailed requirement of the product. My job was to build an effective UI and focusÂ on
            the experience of the service desk agents and administrators who deal with the feedback
            received from their consumers.
            <br />
            <br />
            The
            <span className="text14"> core product requirements</span>
            are:
            <br />
            1. Design a system for the service desk agents to view, inspect, collaborate and resolve
            the queries and feedback of the consumer.
            <br />
            2. The system should be smart enough to assign the tickets to a &quot;right&quot; SD
            agent automatically from the pool - based on the ticket category, agent availability,
            ticket priority, etc.
            <br />
            3. The supervisor/manager should be able to view/work on tickets, manually assign
            tickets to the agents, and have a dashboard to monitor the performance of the agents.
            <br />
            4. The experience of the interface to be very simple and easy to understand for the
            agents so as to enable new joiners to hit the ground running ASAP.
          </span>
        </div>
        <div id="cs3-deadline" className="container08">
          <div className="container09">
            <h1 className="thqHeading1 text15">âÂ  Timeline:</h1>
            <span className="text16">~ 10 weeks</span>
          </div>
        </div>
        <div id="cs3-process" className="container10">
          <div className="container11">
            <h1 className="thqHeading1 h11">
              <span className="text17">The Process</span>
            </h1>
            <span className="text18">
              We kicked off the project with a detailed requirement discussion with the key
              stakeholders. We broke down the requirements, outlined the different roles in the
              application, mapped out all the design activities I would carry out, and arrived at a
              design sprint plan that was suitable for everyone.
            </span>
          </div>
          <div className="container12">
            <h1 className="thqHeading1 text19">
              <span data-type="span" className="text20">
                Competitive Analysis
              </span>
            </h1>
            <span className="text21">
              I started by going through the different established products in this field. I wanted
              to understand the application experience, interactions, design rationale, and visual
              aesthetics used and how we can enhance the experience of our product. I scanned
              through multiple sites, demos, and videos from youtube and took notes.
              <br data-type="br" />
              Patterns Emerged!
              <br data-type="br" />
            </span>
            <span className="text22">
              1. I decided to use a Kanban board type - layout for the service agents. I believe
              it&apos;ll be easy and simple for the agents to keep track of open tickets.Â 
              <br data-type="br" />
            </span>
            <span className="text23">
              2. I liked how ServiceNow showcased all the details within the ticket. The agent
              working on a ticket will have all the necessary info right there on the screen.Â 
              <br data-type="br" />
            </span>
            <span className="text24">
              3. I liked the visual aesthetics of Jira. The branding was minimal and the content
              clear, concise, and organized.
              <br data-type="br" />
            </span>
          </div>
        </div>
        <div id="cs3-comp-analysis-pic" className="container13">
          <img
            src="/playground_assets/cs2_competitiveanalysis-1200h.png"
            className="thqImage image02"
          />
          <span className="text25">Competitor App Screenshots</span>
        </div>
        <div id="cs3-roles-title" className="container14">
          <h1 className="thqHeading1 text26">
            <span className="text27">User Roles DeFined for the platform Are As Follows...</span>
          </h1>
        </div>
        <div id="cs3-roles" className="div3">
          <div id="persona-1" className="container15">
            <h1 className="thqHeading1 h12">
              ð§âð»Â Â 
              <span data-type="span" className="text28">
                Support Agent
              </span>
            </h1>
            <span className="text29">
              The first line of defense. â
              <br />
              <br />
              They communicate with the customer, work on the assigned tickets, and provide
              solutions within the defined SLA. â
              <br />
              <br />
              Typical age range: 21 to 30 years
            </span>
          </div>
          <div id="persona-1" className="container16">
            <h1 className="thqHeading1 h13">
              ð©âð¼Â Â 
              <span data-type="span" className="text30">
                Supervisors
              </span>
            </h1>
            <span className="text31">
              Manage support agents and handle customer escalations. â
              <br />
              <br />
              They are also tasked with ensuring a smooth operation within the group dynamics. â
              <br />
              <br />
              Typical age range: 30 to 40 years
            </span>
          </div>
          <div id="persona-1" className="container17">
            <h1 className="thqHeading1 h14">
              ð§âð§Â Â 
              <span data-type="span" className="text32">
                Administrators
              </span>
            </h1>
            <span className="text33">
              People who ensure the deployed application works functionally.
              <br />
              Â 
              <br />
              They are responsible for implementing SLA, creating groups, categories, people
              on-boarding, and generating reports for analysis.
              <br />
              ââ
              <br />
              Typical age range: 28 to 45 years
            </span>
          </div>
        </div>
        <div id="cs3-userflows" className="container18">
          <h1 className="thqHeading1 text34">
            <span data-type="span" className="text35">
              USER FLOWS
            </span>
          </h1>
          <span className="text36">
            I synthesized all the data from the requirements and competitor analysis, I identified
            and createdÂ the critical user flows within the application. The client and I reviewed it
            periodically and the flow underwent a couple of iterations.
            <br data-type="br" />
          </span>
        </div>
        <div id="cs3-user-flows-pic" className="container19">
          <img src="/playground_assets/cs2_flow%201-1200h.png" className="thqImage image03" />
          <div className="container20"></div>
          <img src="/playground_assets/cs2_flow%202-1200h.png" className="thqImage image04" />
        </div>
        <div id="cs3-ia-desc" className="container21">
          <h1 className="thqHeading1 h15">
            <span data-type="span" className="text37">
              Information Architecture
            </span>
          </h1>
          <span className="text38">
            AfterÂ identifyingÂ the critical user journeys, I started working on the Information
            Architecture and the wireframes for the same. I had periodical reviews with the client
            and we were able to agree on the platform&apos;s layout and the sitemap after a couple
            of iterations.
          </span>
        </div>
        <div id="cs3-ia-pic" className="container22">
          <img src="/playground_assets/cs2_ia-1200h.png" className="thqImage image05" />
          <span className="text39">App&apos;s Information Architecture</span>
          <div className="container23"></div>
        </div>
        <div id="cs3-branding" className="container24">
          <h1 className="thqHeading1 h16">
            <span data-type="span" className="text40">
              Branding
            </span>
          </h1>
          <span className="text41">
            The client did not have an extensive brand guideline. They had a logoÂ and guidelines on
            the tone of voice in the app. So I ran a &quot;20-second Brand Gut Test&quot; exercise
            with the key stakeholders to discover the visual design direction.
            <br />
          </span>
          <span className="text42">
            I curated screenshots from 15 applications that display enough diversity for the
            participants to have varying reactions.
            <br />
            Each screenshot is displayed for 20 seconds and the participants have to rate it out of
            5.
            <br data-type="br" />
          </span>
          <span className="text43">
            <span className="text44">
              &quot;Over 80% percent of the participants, preferred a light background with vibrant
              colors.&quot;
            </span>
            <br data-type="br" />
          </span>
          <a
            href="https://clearleft.com/posts/20-second-gut-tests"
            target="_blank"
            rel="noreferrer noopener"
            className="thqLink text45"
          >
            Clear left Design Agency has anÂ Â 
            <span data-type="span" className="text46">
              amazing detailed post
            </span>
            Â  on how to run a 20-second gut test. Do check it out!â
            <br data-type="br" />
          </a>
        </div>
        <div id="cs3-solution" className="container25">
          <div className="container26">
            <h1 className="thqHeading1 h17">
              <span data-type="span" className="text47">
                Solution
              </span>
            </h1>
            <div className="container27">
              <h1 className="thqHeading1 text48">
                <span data-type="span" className="text49">
                  AGENT FLOW
                </span>
              </h1>
              <span className="text50">
                As per the requirement, service desk agents make up nearly 60% of the user base.
                <br data-type="br" />
              </span>
              <span className="text51">
                For the landing page, I opted for
                <span data-type="span" className="text52">
                  3 Column (Kanban Board Inspired) layoutÂ Â 
                </span>
                that makes it easy for the agents to track the number of tickets.
                <br data-type="br" />
              </span>
            </div>
            <div className="container28">
              <h1 className="thqHeading1 text53">
                <span className="text54">Primary Navigation</span>
              </h1>
              <span className="text55">
                All the roles in the application will have core navigation of Home, Pool, Alerts
                &amp; Profile.
                <br />
                The managers will have an additional navigational element of &quot;Team&quot; where
                in they can manage their team members.
                <br />
                Administrators will have a navigation element of Admin, that enables them to have to
                manage the configurations of the application.
                <br data-type="br" />
              </span>
            </div>
          </div>
        </div>
        <div id="cs3-sol-home-pic" className="container29">
          <img src="/playground_assets/cs2_solution_1-1200h.png" className="thqImage image06" />
          <span className="text56">View of Agent&apos;s Home</span>
        </div>
        <div id="cs3-sol-pool-desc" className="container30">
          <div className="container31">
            <h1 className="thqHeading1 text57">
              <span data-type="span" className="text58">
                Unassigned Ticket Pool
              </span>
            </h1>
            <span className="text59">
              â¢ All new tickets are automatically assigned to the service agent.
              <br />
              â¢ However, the admin can configure how many tickets can be assigned to an agent to not
              overwhelm them.
              <br />
              â¢ In caseÂ the agents are busy, the ticket goes to the pool and remains on the
              waitlist. Whenever an agent becomes available, the ticket based on priority gets
              assigned respectively.
              <br />
              â¢ An agent/manager however can access the unassigned ticket pool anytime and manually
              assign the ticket to themselves or a team member respectively.
              <br data-type="br" />
            </span>
          </div>
        </div>
        <div id="cs3-sol-pool-pic" className="container32">
          <img
            src="/playground_assets/Supervisor_Pool%402x-1200h.png"
            className="thqImage image07"
          />
          <span className="text60">View of Unassigned Ticket Pool</span>
        </div>
        <div id="cs3-sol-ticket" className="container33">
          <div className="container34">
            <h1 className="thqHeading1 text61">
              <span data-type="span" className="text62">
                Ticket View
              </span>
            </h1>
            <span className="text63">
              â¢ View the ticket descriptionÂ and the related details.
              <br />
              â¢ Correspond with customers and collaborateÂ with peers as needed.
              <br />
              â¢ The interface is designed in a way that it is easy for the agent to have a
              conversation with the customer.
              <br />
              â¢ They can easily change the status of the ticket depending on the customer&apos;s
              input.
              <br />
              â¢ I opted for a floating action button for collaborating with peers. All chats will be
              stored along with the ticket. The agent can refer back to the chats as required by
              accessing the ticket.
              <br data-type="br" />
            </span>
          </div>
        </div>
        <div id="cs3-sol-ticket-pic" className="container35">
          <img
            src="/playground_assets/Supervisor_ticketview%402x-1200h.png"
            className="thqImage image08"
          />
          <span className="text64">Snippet of Ticket Detailed View</span>
        </div>
        <div id="cs3-sol-manager" className="container36">
          <h1 className="thqHeading1 text65">
            <span data-type="span">SUPERVISOR &amp; ADMINISTRATOR</span>
          </h1>
          <span className="text67">
            â¢ Supervisor will have a bird&apos;s eyes view about the happenings in their group. They
            can pin ticket&apos;s manage alerts, and customise the homepage to their requirements.
            <br />
            â¢ Supervisor can quickly manage their respective team and quickly assign tickets
            depending on priority and availability of the agents.
            <br />â¢ Admins can manage the entire platform easily from the Manage screen. They can
            manage groups, personnel, configure SLA&apos;s, business hours, etc.Â 
          </span>
        </div>
        <div id="cs3-sol-admin-pic" className="container37">
          <img src="/playground_assets/Supervisor%20Home-1200h.png" className="thqImage image09" />
          <span className="text68">Supervisor&apos;s Home</span>
          <img src="/playground_assets/Admin_Manage%402x-1200h.png" className="thqImage image10" />
          <span className="text69">Manage the platform - Accessible only by Admins</span>
        </div>
        <div id="cs3-final thoughts" className="container38">
          <div className="container39">
            <h1 className="thqHeading1 text70">
              <span data-type="span">
                <span className="text72">Final Thoughts</span>
              </span>
            </h1>
            <span className="text73">
              Â - I used Figma for creating all the required mockups and for collaboration with the
              team.
              <br />
              - All the final designs were delivered on time and I provided the required support
              during the development.
              <br />
              - The scope of design and development were the MVP features that were finalised during
              the project kickoff. The MVP underwent some technical iterations and was in
              development for 6+ months
              <br />
              - I had to leave the project during the &quot;Beta&quot; testing for personal reasons.
              <br />- I did however keep tabs on the project status, and it&apos;s currently
              undergoing closed beta releases for a couple of companies serviced by the client.
            </span>
            <h1 className="thqHeading1 text74">
              <span className="text75">Thank you for reading!Â </span>
              ð
            </h1>
          </div>
        </div>
        <div id="footer" className="container40">
          <div className="container41">
            <div className="container42">
              <span className="text76">
                Let&apos;s connect. Feel free to drop a
                <span className="text77">&quot;hello&quot;</span>
                anytime
              </span>
            </div>
            <div className="container43">
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
            cursor: pointer;
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
            margin-top: 24px;
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
            font-weight: 600;
          }
          .container08 {
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
          .container09 {
            width: 720px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text15 {
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            margin-right: 8px;
          }
          .text16 {
            display: inline-block;
          }
          .container10 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .h11 {
            font-size: 24px;
            line-height: 1.4;
          }
          .text17 {
            font-weight: 800;
          }
          .text18 {
            margin-top: 16px;
          }
          .container12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text19 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text20 {
            text-transform: uppercase;
          }
          .text21 {
            margin-top: 16px;
          }
          .text22 {
            margin-top: 16px;
          }
          .text23 {
            margin-top: 16px;
          }
          .text24 {
            margin-top: 16px;
          }
          .container13 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .image02 {
            width: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          .text25 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            margin-top: 8px;
            text-align: center;
            margin-bottom: 16px;
          }
          .container14 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text26 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text27 {
            text-transform: uppercase;
          }
          .div3 {
            width: 800px;
            display: grid;
            grid-gap: 24px;
            margin-top: 24px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .container15 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h12 {
            font-size: 20px;
          }
          .text28 {
            font-weight: 800;
          }
          .text29 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container16 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h13 {
            font-size: 20px;
          }
          .text30 {
            font-weight: 800;
          }
          .text31 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container17 {
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: #F5F7FA;
          }
          .h14 {
            font-size: 20px;
          }
          .text32 {
            font-weight: 800;
          }
          .text33 {
            font-size: 16px;
            margin-top: 16px;
          }
          .container18 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text34 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text35 {
            text-transform: uppercase;
          }
          .text36 {
            margin-top: 16px;
          }
          .container19 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
          }
          .image03 {
            width: 100%;
            align-self: center;
            object-fit: scale-down;
            margin-bottom: 24px;
          }
          .container20 {
            width: 90%;
            height: 1px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #CBD2D9;
          }
          .image04 {
            width: 100%;
            align-self: center;
            margin-top: 24px;
            object-fit: scale-down;
          }
          .container21 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h15 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text37 {
            font-weight: 800;
          }
          .text38 {
            margin-top: 16px;
          }
          .container22 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            border-radius: 8px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .image05 {
            width: 100%;
            align-self: center;
            object-fit: scale-down;
            margin-bottom: 8px;
          }
          .text39 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            text-align: center;
            margin-bottom: 16px;
          }
          .container23 {
            width: 90%;
            height: 1px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #CBD2D9;
          }
          .container24 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .h16 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text40 {
            font-weight: 800;
          }
          .text41 {
            width: 100%;
            display: inline;
            margin-top: 16px;
          }
          .text42 {
            width: 100%;
            display: inline;
            margin-top: 16px;
          }
          .text43 {
            width: 100%;
            display: inline;
            margin-top: 16px;
          }
          .text44 {
            font-weight: 700;
          }
          .text45 {
            width: 100%;
            display: inline;
            margin-top: 16px;
          }
          .text46 {
            color: rgb(33, 134, 235);
            font-weight: 700;
          }
          .container25 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container26 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .h17 {
            font-size: 24px;
            line-height: 1.4;
          }
          .text47 {
            font-weight: 800;
          }
          .container27 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text48 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text49 {
            text-transform: uppercase;
          }
          .text50 {
            margin-top: 16px;
          }
          .text51 {
            margin-top: 16px;
            font-weight: 400;
          }
          .text52 {
            font-weight: 700;
          }
          .container28 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text53 {
            width: 100%;
            font-size: 14px;
            margin-top: 24px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text54 {
            text-transform: uppercase;
          }
          .text55 {
            margin-top: 16px;
          }
          .container29 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            border-radius: 8px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f5f7fa;
          }
          .image06 {
            width: 80%;
            align-self: center;
            object-fit: scale-down;
            margin-bottom: 8px;
          }
          .text56 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            text-align: center;
            margin-bottom: 16px;
          }
          .container30 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container31 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text57 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text58 {
            text-transform: uppercase;
          }
          .text59 {
            margin-top: 16px;
          }
          .container32 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            border-radius: 8px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f5f7fa;
          }
          .image07 {
            width: 80%;
            align-self: center;
            margin-top: 24px;
            object-fit: scale-down;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .text60 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            margin-top: 16px;
            text-align: center;
            margin-bottom: 16px;
          }
          .container33 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container34 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text61 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text62 {
            text-transform: uppercase;
          }
          .text63 {
            margin-top: 16px;
          }
          .container35 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            border-radius: 8px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f5f7fa;
          }
          .image08 {
            width: 80%;
            align-self: center;
            margin-top: 24px;
            object-fit: scale-down;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .text64 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            margin-top: 16px;
            text-align: center;
            margin-bottom: 16px;
          }
          .container36 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text65 {
            width: 100%;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 2px;
          }
          .text67 {
            margin-top: 16px;
          }
          .container37 {
            width: 800px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            border-radius: 8px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f5f7fa;
          }
          .image09 {
            width: 80%;
            align-self: center;
            margin-top: 24px;
            object-fit: scale-down;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .text68 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            text-align: center;
            margin-bottom: 16px;
          }
          .image10 {
            width: 80%;
            align-self: center;
            margin-top: 24px;
            object-fit: scale-down;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .text69 {
            width: 100%;
            display: inline-block;
            font-size: 14px;
            align-self: flex-start;
            text-align: center;
            margin-bottom: 16px;
          }
          .container38 {
            width: 720px;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .container39 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text70 {
            width: 100%;
            font-size: 24px;
            line-height: 1.4;
          }
          .text72 {
            font-weight: 800;
          }
          .text73 {
            margin-top: 16px;
          }
          .text74 {
            font-size: 24px;
            margin-top: 40px;
          }
          .text75 {
            font-weight: 800;
          }
          .container40 {
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
          .container41 {
            width: 1000px;
            display: grid;
            grid-gap: px;
            align-items: stretch;
            align-content: start;
            justify-items: center;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr;
          }
          .container42 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text76 {
            color: #3E4C59;
            font-size: 14px;
            font-weight: 400;
          }
          .text77 {
            color: rgb(9, 103, 210);
            font-weight: 600;
          }
          .container43 {
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
              justify-content: flex-start;
            }
            .div {
              width: 90%;
            }
            .container05 {
              height: 280px;
            }
            .div3 {
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
            }
            .container05 {
              width: 80%;
              height: 280px;
            }
            .div2 {
              width: 80%;
            }
            .container08 {
              width: 90%;
            }
            .container09 {
              width: 90%;
            }
            .container10 {
              width: 80%;
            }
            .container13 {
              width: 90%;
              align-items: center;
            }
            .container14 {
              width: 80%;
            }
            .div3 {
              width: 80%;
              grid-template-columns: 1fr;
            }
            .container18 {
              width: 80%;
            }
            .container19 {
              width: 90%;
            }
            .container21 {
              width: 80%;
            }
            .container24 {
              width: 80%;
            }
            .container25 {
              width: 80%;
            }
            .container29 {
              width: 90%;
            }
            .container30 {
              width: 80%;
            }
            .container32 {
              width: 90%;
            }
            .container33 {
              width: 80%;
            }
            .container35 {
              width: 90%;
            }
            .container36 {
              width: 80%;
            }
            .container37 {
              width: 90%;
            }
            .container38 {
              width: 80%;
            }
            .container40 {
              height: 80px;
            }
          }
          @media (max-width: 479px) {
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
              height: 380px;
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
              width: 100%;
            }
            .container09 {
              width: 80%;
            }
            .container10 {
              width: 80%;
            }
            .container13 {
              width: 90%;
            }
            .container14 {
              width: 80%;
            }
            .div3 {
              width: 80%;
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;
            }
            .container18 {
              width: 80%;
            }
            .container19 {
              width: 90%;
            }
            .container21 {
              width: 80%;
            }
            .container22 {
              width: 90%;
            }
            .container24 {
              width: 80%;
            }
            .container25 {
              width: 80%;
            }
            .container29 {
              width: 90%;
            }
            .container30 {
              width: 80%;
            }
            .container32 {
              width: 90%;
            }
            .container33 {
              width: 80%;
            }
            .container35 {
              width: 90%;
            }
            .container36 {
              width: 80%;
            }
            .container37 {
              width: 90%;
            }
            .container38 {
              width: 80%;
            }
            .container40 {
              height: 120px;
            }
            .container41 {
              width: 80%;
              grid-template-columns: 1fr;
            }
            .text76 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default ServiceDeskManagement

import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="container1">
            <img src="/playground_assets/logo.svg" className="thqImage image" />
          </div>
          <div className="div">
            <span className="text">
              <span className="text1">Work</span>
            </span>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thqLink span"
            >
              <span className="text2">Play</span>
            </a>
            <Link href="/about-me" className="thqLink">
              <a className="link">About</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            width: 100%;
            height: 80px;
            display: flex;
            overflow: auto;
            flex-wrap: nowrap;
            align-items: center;
            border-color: #E4E7EB;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
            border-bottom-width: 1px;
          }
          .container {
            width: 80%;
            margin: auto;
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .container1 {
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
          .div {
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
          }
          .text1 {
            font-weight: 700;
          }
          .span {
            color: #1f2933;
            padding: 10px;
            font-size: 16px;
            margin-left: 16px;
            margin-right: 16px;
            text-decoration: none;
          }
          .text2 {
            font-weight: 700;
          }
          .link {
            color: #1f2933;
            padding: 10px;
            font-size: 16px;
            font-weight: 700;
            margin-left: 16px;
            margin-right: 16px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default NavBar

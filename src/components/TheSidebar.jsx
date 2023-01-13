import React from "react";

import { NavLink } from "react-router-dom";
const TheSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <NavLink to="/">
          <svg
            width="109"
            height="50"
            viewBox="0 0 109 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <rect
              y="2.0752"
              width="26.914"
              height="26.85"
              rx="6"
              fill="#A162F7"
            />
            <path
              d="M9.1273 21.7072L10.8492 19.9853C6.48698 17.345 7.21403 13.3367 8.12284 11.6626L13.5039 16.9002L18.885 11.6626C20.9513 16.1396 17.8805 19.0287 16.0868 19.9136L17.9523 21.7072C24.6248 16.6849 21.3961 9.94063 18.885 8.0752L13.5039 13.4563L7.97934 8.0752C2.09602 13.815 6.25741 20.2723 9.1273 21.7072Z"
              fill="white"
            />
            <path
              d="M40.5461 24V7.2H44.1941L49.5461 17.856L54.8261 7.2H58.4741V24H55.4021V12.408L50.7221 21.6H48.2981L43.6181 12.408V24H40.5461ZM67.3736 24.288C66.2216 24.288 65.1816 24.024 64.2536 23.496C63.3416 22.968 62.6136 22.24 62.0696 21.312C61.5416 20.368 61.2776 19.28 61.2776 18.048C61.2776 16.816 61.5496 15.736 62.0936 14.808C62.6376 13.864 63.3656 13.128 64.2776 12.6C65.2056 12.072 66.2456 11.808 67.3976 11.808C68.5336 11.808 69.5576 12.072 70.4696 12.6C71.3976 13.128 72.1256 13.864 72.6536 14.808C73.1976 15.736 73.4696 16.816 73.4696 18.048C73.4696 19.28 73.1976 20.368 72.6536 21.312C72.1256 22.24 71.3976 22.968 70.4696 23.496C69.5416 24.024 68.5096 24.288 67.3736 24.288ZM67.3736 21.624C68.1736 21.624 68.8696 21.328 69.4616 20.736C70.0536 20.128 70.3496 19.232 70.3496 18.048C70.3496 16.864 70.0536 15.976 69.4616 15.384C68.8696 14.776 68.1816 14.472 67.3976 14.472C66.5816 14.472 65.8776 14.776 65.2856 15.384C64.7096 15.976 64.4216 16.864 64.4216 18.048C64.4216 19.232 64.7096 20.128 65.2856 20.736C65.8776 21.328 66.5736 21.624 67.3736 21.624ZM81.0515 24C79.8035 24 78.8035 23.696 78.0515 23.088C77.2995 22.48 76.9235 21.4 76.9235 19.848V14.664H74.8835V12.096H76.9235L77.2835 8.904H79.9955V12.096H83.2115V14.664H79.9955V19.872C79.9955 20.448 80.1155 20.848 80.3555 21.072C80.6115 21.28 81.0435 21.384 81.6515 21.384H83.1395V24H81.0515ZM87.5051 10.248C86.9451 10.248 86.4811 10.08 86.1131 9.744C85.7611 9.408 85.5851 8.984 85.5851 8.472C85.5851 7.96 85.7611 7.544 86.1131 7.224C86.4811 6.888 86.9451 6.72 87.5051 6.72C88.0651 6.72 88.5211 6.888 88.8731 7.224C89.2411 7.544 89.4251 7.96 89.4251 8.472C89.4251 8.984 89.2411 9.408 88.8731 9.744C88.5211 10.08 88.0651 10.248 87.5051 10.248ZM85.9691 24V12.096H89.0411V24H85.9691ZM95.4635 24L91.0955 12.096H94.3115L97.3355 21.096L100.36 12.096H103.576L99.1835 24H95.4635ZM105.872 24.168C105.312 24.168 104.848 23.992 104.48 23.64C104.128 23.288 103.952 22.864 103.952 22.368C103.952 21.856 104.128 21.424 104.48 21.072C104.848 20.72 105.312 20.544 105.872 20.544C106.432 20.544 106.888 20.72 107.24 21.072C107.608 21.424 107.792 21.856 107.792 22.368C107.792 22.864 107.608 23.288 107.24 23.64C106.888 23.992 106.432 24.168 105.872 24.168Z"
              fill="#1F2128"
            />
          </svg>
        </NavLink>
        <nav className="nav">
          <ul className="nav__menu">
            <div className="nav__menu--top">
              <NavLink to="/" className="nav__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 15C17.0478 15 16.4089 15.0625 15.7438 15.1536C15.4331 15.1962 15.1962 15.4331 15.1536 15.7438C15.0625 16.4089 15 17.0478 15 17.5C15 17.9522 15.0625 18.5911 15.1536 19.2562C15.1962 19.5669 15.4331 19.8038 15.7438 19.8464C16.4089 19.9375 17.0478 20 17.5 20C17.9522 20 18.5911 19.9375 19.2562 19.8464C19.5669 19.8038 19.8038 19.5669 19.8464 19.2562C19.9375 18.5911 20 17.9522 20 17.5C20 17.0478 19.9375 16.4089 19.8464 15.7438C19.8038 15.4331 19.5669 15.1962 19.2562 15.1536C18.5911 15.0625 17.9522 15 17.5 15ZM15.4724 13.1721C14.2725 13.3364 13.3364 14.2725 13.1721 15.4724C13.0778 16.1606 13 16.9082 13 17.5C13 18.0918 13.0778 18.8394 13.1721 19.5276C13.3364 20.7275 14.2725 21.6636 15.4724 21.8279C16.1606 21.9222 16.9082 22 17.5 22C18.0918 22 18.8394 21.9222 19.5276 21.8279C20.7275 21.6636 21.6636 20.7275 21.8279 19.5276C21.9222 18.8394 22 18.0918 22 17.5C22 16.9082 21.9222 16.1606 21.8279 15.4724C21.6636 14.2725 20.7275 13.3364 19.5276 13.1721C18.8394 13.0778 18.0918 13 17.5 13C16.9082 13 16.1606 13.0778 15.4724 13.1721Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 15C6.04782 15 5.40893 15.0625 4.74381 15.1536C4.43308 15.1962 4.19615 15.4331 4.15359 15.7438C4.0625 16.4089 4 17.0478 4 17.5C4 17.9522 4.0625 18.5911 4.15359 19.2562C4.19615 19.5669 4.43308 19.8038 4.74381 19.8464C5.40893 19.9375 6.04782 20 6.5 20C6.95218 20 7.59107 19.9375 8.25619 19.8464C8.56692 19.8038 8.80385 19.5669 8.84641 19.2562C8.9375 18.5911 9 17.9522 9 17.5C9 17.0478 8.9375 16.4089 8.84641 15.7438C8.80385 15.4331 8.56692 15.1962 8.25619 15.1536C7.59107 15.0625 6.95218 15 6.5 15ZM4.47244 13.1721C3.27253 13.3364 2.33642 14.2725 2.17209 15.4724C2.07784 16.1606 2 16.9082 2 17.5C2 18.0918 2.07784 18.8394 2.17209 19.5276C2.33642 20.7275 3.27253 21.6636 4.47244 21.8279C5.16065 21.9222 5.90816 22 6.5 22C7.09184 22 7.83935 21.9222 8.52756 21.8279C9.72747 21.6636 10.6636 20.7275 10.8279 19.5276C10.9222 18.8394 11 18.0918 11 17.5C11 16.9082 10.9222 16.1606 10.8279 15.4724C10.6636 14.2725 9.72747 13.3364 8.52756 13.1721C7.83935 13.0778 7.09184 13 6.5 13C5.90816 13 5.16065 13.0778 4.47244 13.1721Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 4C17.0478 4 16.4089 4.0625 15.7438 4.15359C15.4331 4.19615 15.1962 4.43308 15.1536 4.74381C15.0625 5.40893 15 6.04782 15 6.5C15 6.95218 15.0625 7.59107 15.1536 8.25619C15.1962 8.56692 15.4331 8.80385 15.7438 8.84641C16.4089 8.9375 17.0478 9 17.5 9C17.9522 9 18.5911 8.9375 19.2562 8.84641C19.5669 8.80385 19.8038 8.56692 19.8464 8.25619C19.9375 7.59107 20 6.95218 20 6.5C20 6.04782 19.9375 5.40893 19.8464 4.74381C19.8038 4.43308 19.5669 4.19615 19.2562 4.15359C18.5911 4.0625 17.9522 4 17.5 4ZM15.4724 2.17209C14.2725 2.33642 13.3364 3.27253 13.1721 4.47244C13.0778 5.16065 13 5.90816 13 6.5C13 7.09184 13.0778 7.83935 13.1721 8.52756C13.3364 9.72747 14.2725 10.6636 15.4724 10.8279C16.1606 10.9222 16.9082 11 17.5 11C18.0918 11 18.8394 10.9222 19.5276 10.8279C20.7275 10.6636 21.6636 9.72747 21.8279 8.52756C21.9222 7.83935 22 7.09184 22 6.5C22 5.90816 21.9222 5.16065 21.8279 4.47244C21.6636 3.27253 20.7275 2.33642 19.5276 2.17209C18.8394 2.07784 18.0918 2 17.5 2C16.9082 2 16.1606 2.07784 15.4724 2.17209Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 4C6.04782 4 5.40893 4.0625 4.74381 4.15359C4.43308 4.19615 4.19615 4.43308 4.15359 4.74381C4.0625 5.40893 4 6.04782 4 6.5C4 6.95218 4.0625 7.59107 4.15359 8.25619C4.19615 8.56692 4.43308 8.80385 4.74381 8.84641C5.40893 8.9375 6.04782 9 6.5 9C6.95218 9 7.59107 8.9375 8.25619 8.84641C8.56692 8.80385 8.80385 8.56692 8.84641 8.25619C8.9375 7.59107 9 6.95218 9 6.5C9 6.04782 8.9375 5.40893 8.84641 4.74381C8.80385 4.43308 8.56692 4.19615 8.25619 4.15359C7.59107 4.0625 6.95218 4 6.5 4ZM4.47244 2.17209C3.27253 2.33642 2.33642 3.27253 2.17209 4.47244C2.07784 5.16065 2 5.90816 2 6.5C2 7.09184 2.07784 7.83935 2.17209 8.52756C2.33642 9.72747 3.27253 10.6636 4.47244 10.8279C5.16065 10.9222 5.90816 11 6.5 11C7.09184 11 7.83935 10.9222 8.52756 10.8279C9.72747 10.6636 10.6636 9.72747 10.8279 8.52756C10.9222 7.83935 11 7.09184 11 6.5C11 5.90816 10.9222 5.16065 10.8279 4.47244C10.6636 3.27253 9.72747 2.33642 8.52756 2.17209C7.83935 2.07784 7.09184 2 6.5 2C5.90816 2 5.16065 2.07784 4.47244 2.17209Z"
                    fill="#5F6165"
                  />
                </svg>
                <span className="nav__text-link">Dashboard</span>
              </NavLink>
              <NavLink to="/assets" className="nav__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM18.3198 16.9057C19.3729 15.551 20 13.8488 20 12C20 7.92038 16.9463 4.55399 13 4.06189V8.12602C14.7252 8.57006 16 10.1362 16 12C16 12.7418 15.798 13.4365 15.4461 14.0321L18.3198 16.9057ZM16.9056 18.3199L14.0319 15.4462C13.4364 15.7981 12.7418 16 12 16C11.2582 16 10.5636 15.7981 9.96813 15.4462L7.09444 18.3199C8.44911 19.3729 10.1513 20 12 20C13.8487 20 15.5509 19.3729 16.9056 18.3199ZM8 12C8 12.7418 8.20195 13.4365 8.55388 14.0321L5.68021 16.9057C4.62711 15.551 4 13.8488 4 12C4 7.92038 7.05369 4.55399 11 4.06189V8.12602C9.27477 8.57006 8 10.1362 8 12ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Assets</span>
              </NavLink>
              <NavLink to="/booking" className="nav__item nav__item--active">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.772 9.156L19.404 5.051C19.2056 4.45348 18.8238 3.9337 18.3131 3.56551C17.8024 3.19732 17.1886 2.99944 16.559 3H7.441C6.81139 2.99944 6.19761 3.19732 5.68688 3.56551C5.17615 3.9337 4.79445 4.45348 4.596 5.051L3.228 9.156C2.86461 9.30848 2.55428 9.56476 2.33584 9.89277C2.11741 10.2208 2.00059 10.6059 2 11V16C2 16.753 2.423 17.402 3.039 17.743C3.026 17.809 3 17.869 3 17.938V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H5C5.26522 21 5.51957 20.8946 5.70711 20.7071C5.89464 20.5196 6 20.2652 6 20V18H18V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V17.938C21 17.869 20.974 17.808 20.961 17.743C21.2744 17.5721 21.5362 17.3202 21.7189 17.0136C21.9017 16.707 21.9988 16.357 22 16V11C22 10.171 21.492 9.459 20.772 9.156ZM4 16V11H20L20.002 16H4ZM7.441 5H16.558C16.989 5 17.371 5.274 17.507 5.684L18.613 9H5.387L6.492 5.684C6.55835 5.4848 6.68572 5.31153 6.85605 5.18876C7.02638 5.06599 7.23104 4.99995 7.441 5V5Z"
                    fill="#5F6165"
                  />
                  <path
                    d="M6.5 15C7.32843 15 8 14.3284 8 13.5C8 12.6716 7.32843 12 6.5 12C5.67157 12 5 12.6716 5 13.5C5 14.3284 5.67157 15 6.5 15Z"
                    fill="#5F6165"
                  />
                  <path
                    d="M17.5 15C18.3284 15 19 14.3284 19 13.5C19 12.6716 18.3284 12 17.5 12C16.6716 12 16 12.6716 16 13.5C16 14.3284 16.6716 15 17.5 15Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Booking</span>
              </NavLink>
              <NavLink to="/sells-cars" className="nav__item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7851 6.66667H5.21481C4.25344 6.66667 3.49142 7.4778 3.55139 8.4373L3.96806 15.104C4.02296 15.9824 4.75137 16.6667 5.63148 16.6667H14.3685C15.2486 16.6667 15.977 15.9824 16.0319 15.104L16.4486 8.4373C16.5085 7.4778 15.7465 6.66667 14.7851 6.66667ZM5.21481 5C3.29208 5 1.76803 6.62227 1.88797 8.54126L2.30464 15.2079C2.41444 16.9647 3.87127 18.3333 5.63148 18.3333H14.3685C16.1287 18.3333 17.5855 16.9647 17.6953 15.2079L18.112 8.54126C18.2319 6.62227 16.7079 5 14.7851 5H5.21481Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.83337 5.83329C5.83337 3.53211 7.69885 1.66663 10 1.66663C12.3012 1.66663 14.1667 3.53211 14.1667 5.83329V7.49996C14.1667 7.9602 13.7936 8.33329 13.3334 8.33329C12.8731 8.33329 12.5 7.9602 12.5 7.49996V5.83329C12.5 4.45258 11.3808 3.33329 10 3.33329C8.61933 3.33329 7.50004 4.45258 7.50004 5.83329V7.49996C7.50004 7.9602 7.12694 8.33329 6.66671 8.33329C6.20647 8.33329 5.83337 7.9602 5.83337 7.49996V5.83329Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Sell Cars</span>
              </NavLink>
              <NavLink to="/buy-cars" className="nav__item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.33337 16.6667C8.33337 18.0474 7.21409 19.1667 5.83337 19.1667C4.45266 19.1667 3.33337 18.0474 3.33337 16.6667C3.33337 15.286 4.45266 14.1667 5.83337 14.1667C7.21409 14.1667 8.33337 15.286 8.33337 16.6667ZM6.66671 16.6667C6.66671 17.1269 6.29361 17.5 5.83337 17.5C5.37314 17.5 5.00004 17.1269 5.00004 16.6667C5.00004 16.2064 5.37314 15.8334 5.83337 15.8334C6.29361 15.8334 6.66671 16.2064 6.66671 16.6667Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6667 16.6667C16.6667 18.0474 15.5474 19.1667 14.1667 19.1667C12.786 19.1667 11.6667 18.0474 11.6667 16.6667C11.6667 15.286 12.786 14.1667 14.1667 14.1667C15.5474 14.1667 16.6667 15.286 16.6667 16.6667ZM15 16.6667C15 17.1269 14.6269 17.5 14.1667 17.5C13.7065 17.5 13.3334 17.1269 13.3334 16.6667C13.3334 16.2064 13.7065 15.8334 14.1667 15.8334C14.6269 15.8334 15 16.2064 15 16.6667Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.75466 2.12734C1.96049 1.71569 2.46105 1.54884 2.8727 1.75466L3.70895 2.17279C4.48334 2.55999 5.00227 3.32029 5.08065 4.18252L5.12052 4.62108C5.14003 4.83569 5.31998 5.00002 5.53548 5.00002H16.5296C17.9842 5.00002 18.991 6.45288 18.4803 7.81486L17.0192 11.7112C16.6533 12.6869 15.7205 13.3334 14.6784 13.3334H6.52204C5.22904 13.3334 4.14937 12.3474 4.03231 11.0597L3.42083 4.33341C3.3947 4.046 3.22173 3.79257 2.9636 3.6635L2.12734 3.24538C1.71569 3.03955 1.54884 2.53899 1.75466 2.12734ZM5.76275 6.66669C5.51774 6.66669 5.32561 6.87707 5.34779 7.12108L5.69213 10.9088C5.73115 11.338 6.09104 11.6667 6.52204 11.6667H14.6784C15.0257 11.6667 15.3367 11.4512 15.4586 11.126L16.9197 7.22965C17.0219 6.95726 16.8205 6.66669 16.5296 6.66669H5.76275Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Buy Cars</span>
              </NavLink>
              <NavLink to="/services" className="nav__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.29289C21.3166 1.90237 20.6834 1.90237 20.2929 2.29289L7.79289 14.7929C7.40237 15.1834 7.40237 15.8166 7.79289 16.2071C8.18342 16.5976 8.81658 16.5976 9.20711 16.2071L21.7071 3.70711Z"
                    fill="#5F6165"
                  />
                  <path
                    d="M5.20711 20.2071C5.59763 19.8166 5.59763 19.1834 5.20711 18.7929C4.81658 18.4024 4.18342 18.4024 3.79289 18.7929L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L5.20711 20.2071Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.24661 19.4182C6.52385 19.6954 6.95347 19.8016 7.25812 19.5548C7.7107 19.1881 8.00001 18.6279 8.00001 18C8.00001 16.8954 7.10458 16 6.00001 16C5.37216 16 4.81187 16.2893 4.4452 16.7419C4.19839 17.0465 4.3046 17.4762 4.58184 17.7534L6.24661 19.4182ZM7.22312 21.8095C6.46551 22.0526 5.68394 21.6839 5.12133 21.1213L2.87869 18.8787C2.31608 18.3161 1.94742 17.5345 2.19047 16.7769C2.70726 15.166 4.21747 14 6.00001 14C8.20915 14 10 15.7909 10 18C10 19.7825 8.83402 21.2928 7.22312 21.8095Z"
                    fill="#5F6165"
                  />
                  <path
                    d="M2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L16.2071 14.7929C16.5976 15.1834 16.5976 15.8166 16.2071 16.2071C15.8166 16.5976 15.1834 16.5976 14.7929 16.2071L2.29289 3.70711Z"
                    fill="#5F6165"
                  />
                  <path
                    d="M18.7929 20.2071C18.4024 19.8166 18.4024 19.1834 18.7929 18.7929C19.1834 18.4024 19.8166 18.4024 20.2071 18.7929L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L18.7929 20.2071Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7534 19.4182C17.4761 19.6954 17.0465 19.8016 16.7419 19.5548C16.2893 19.1881 16 18.6279 16 18C16 16.8954 16.8954 16 18 16C18.6278 16 19.1881 16.2893 19.5548 16.7419C19.8016 17.0465 19.6954 17.4762 19.4182 17.7534L17.7534 19.4182ZM16.7769 21.8095C17.5345 22.0526 18.3161 21.6839 18.8787 21.1213L21.1213 18.8787C21.6839 18.3161 22.0526 17.5345 21.8095 16.7769C21.2927 15.166 19.7825 14 18 14C15.7908 14 14 15.7909 14 18C14 19.7825 15.166 21.2928 16.7769 21.8095Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Services</span>
              </NavLink>
              <NavLink to="/cleander" className="nav__item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.8333 5.00004H4.16663C3.70639 5.00004 3.33329 5.37314 3.33329 5.83337V15.8334C3.33329 16.2936 3.70639 16.6667 4.16663 16.6667H15.8333C16.2935 16.6667 16.6666 16.2936 16.6666 15.8334V5.83337C16.6666 5.37314 16.2935 5.00004 15.8333 5.00004ZM4.16663 3.33337C2.78591 3.33337 1.66663 4.45266 1.66663 5.83337V15.8334C1.66663 17.2141 2.78591 18.3334 4.16663 18.3334H15.8333C17.214 18.3334 18.3333 17.2141 18.3333 15.8334V5.83337C18.3333 4.45266 17.214 3.33337 15.8333 3.33337H4.16663Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.33333 10C7.8731 10 7.5 10.3731 7.5 10.8333C7.5 11.2936 7.8731 11.6667 8.33333 11.6667H14.1667C14.6269 11.6667 15 11.2936 15 10.8333C15 10.3731 14.6269 10 14.1667 10H8.33333ZM5.83333 13.3333C5.3731 13.3333 5 13.7064 5 14.1667C5 14.6269 5.3731 15 5.83333 15H10.8333C11.2936 15 11.6667 14.6269 11.6667 14.1667C11.6667 13.7064 11.2936 13.3333 10.8333 13.3333H5.83333Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.83333 1.66663C5.3731 1.66663 5 2.03972 5 2.49996V5.83329C5 6.29353 5.3731 6.66663 5.83333 6.66663C6.29357 6.66663 6.66667 6.29353 6.66667 5.83329V2.49996C6.66667 2.03972 6.29357 1.66663 5.83333 1.66663ZM14.1667 1.66663C13.7064 1.66663 13.3333 2.03972 13.3333 2.49996V5.83329C13.3333 6.29353 13.7064 6.66663 14.1667 6.66663C14.6269 6.66663 15 6.29353 15 5.83329V2.49996C15 2.03972 14.6269 1.66663 14.1667 1.66663Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Cleander</span>
              </NavLink>
              <NavLink to="/messages" className="nav__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 15.9013V18.9951L12.0622 16.0038L12.5913 15.9951C14.6952 15.9607 16.5886 15.7488 18.0044 15.5334C18.8979 15.3975 19.5187 14.7739 19.6536 13.9909C19.8406 12.9049 20 11.5289 20 10C20 8.47108 19.8406 7.09512 19.6536 6.00907C19.5187 5.22608 18.8979 4.60252 18.0044 4.46657C16.4559 4.23096 14.3383 4 12 4C9.66167 4 7.54408 4.23096 5.99562 4.46657C5.10214 4.60252 4.4813 5.22608 4.34643 6.00907C4.15936 7.09512 4 8.47108 4 10C4 11.5289 4.15936 12.9049 4.34643 13.9909C4.46355 14.6709 4.93854 15.2158 5.63108 15.4461L7 15.9013ZM2.37546 5.66957C2.66565 3.98488 4.00472 2.74648 5.69477 2.48932C7.31411 2.24293 9.53559 2 12 2C14.4644 2 16.6859 2.24293 18.3052 2.48932C19.9953 2.74648 21.3344 3.98488 21.6245 5.66957C21.8268 6.84372 22 8.33525 22 10C22 11.6647 21.8268 13.1563 21.6245 14.3304C21.3344 16.0151 19.9953 17.2535 18.3052 17.5107C16.8238 17.7361 14.8384 17.9586 12.6241 17.9949L6.50873 21.6085C5.84211 22.0024 5 21.5219 5 20.7476V17.344C3.64656 16.8939 2.62456 15.7766 2.37546 14.3304C2.17321 13.1563 2 11.6647 2 10C2 8.33525 2.17321 6.84372 2.37546 5.66957Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H7ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11H7Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Messages</span>
              </NavLink>
            </div>
            <div className="nav__menu--bottom">
              <NavLink to="/settings" className="nav__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9495 7.09041C19.9599 6.30932 19.6671 5.52493 19.0711 4.92893C18.4751 4.33293 17.6907 4.04013 16.9096 4.05052C16.9093 4.05053 16.9099 4.05052 16.9096 4.05052C16.4779 4.05639 16.0463 4.1549 15.649 4.34601C15.5066 4.41451 15.3685 4.49489 15.2362 4.58717C15.1852 4.62271 15.1196 4.63082 15.0623 4.60703C15.0049 4.58325 14.9642 4.53113 14.9533 4.47002C14.925 4.3112 14.8842 4.1567 14.832 4.00759C14.6862 3.59151 14.4513 3.21732 14.1501 2.9079C14.1499 2.90769 14.1503 2.90811 14.1501 2.9079C13.6052 2.34823 12.8429 2 12 2C11.1571 2 10.3954 2.3476 9.85047 2.90727C9.85027 2.90748 9.85068 2.90706 9.85047 2.90727C9.54935 3.21669 9.31383 3.59151 9.16804 4.00759C9.11578 4.1567 9.07498 4.31119 9.04667 4.47001C9.03577 4.53113 8.99509 4.58325 8.93775 4.60702C8.88036 4.63082 8.81477 4.62271 8.76382 4.58717C8.6315 4.49489 8.4934 4.4145 8.35102 4.34601C7.95371 4.15489 7.52302 4.0564 7.09129 4.05053C7.091 4.05053 7.09159 4.05054 7.09129 4.05053C6.3102 4.04014 5.52493 4.33293 4.92893 4.92893C4.33293 5.52493 4.04013 6.30931 4.05052 7.09041C4.05053 7.09071 4.05052 7.09012 4.05052 7.09041C4.05639 7.52213 4.15489 7.95371 4.34601 8.35101C4.4145 8.4934 4.49489 8.63149 4.58717 8.76381C4.62271 8.81477 4.63082 8.88036 4.60702 8.93775C4.58325 8.99509 4.53113 9.03578 4.47001 9.04667C4.31119 9.07498 4.15669 9.11579 4.00757 9.16804C3.5915 9.31384 3.21732 9.54874 2.9079 9.84986C2.90769 9.85006 2.90811 9.84965 2.9079 9.84986C2.34823 10.3948 2 11.1571 2 12C2 12.8429 2.3476 13.6046 2.90727 14.1495C2.90748 14.1497 2.90706 14.1493 2.90727 14.1495C3.21669 14.4506 3.5915 14.6862 4.00757 14.832C4.15669 14.8842 4.31119 14.925 4.47001 14.9533C4.53113 14.9642 4.58325 15.0049 4.60702 15.0623C4.63082 15.1196 4.62271 15.1852 4.58717 15.2362C4.49489 15.3685 4.4145 15.5066 4.34601 15.649C4.15489 16.0463 4.0564 16.477 4.05053 16.9087C4.05053 16.909 4.05054 16.9084 4.05053 16.9087C4.04014 17.6898 4.33293 18.4751 4.92893 19.0711C5.52493 19.6671 6.30932 19.9599 7.09041 19.9495C7.09071 19.9495 7.09012 19.9495 7.09041 19.9495C7.52213 19.9436 7.9537 19.8451 8.351 19.654C8.49339 19.5855 8.63149 19.5051 8.76381 19.4128C8.81477 19.3773 8.88036 19.3692 8.93775 19.393C8.99509 19.4168 9.03578 19.4689 9.04667 19.53C9.07498 19.6888 9.11579 19.8433 9.16805 19.9924C9.31385 20.4085 9.54874 20.7827 9.84986 21.0921C9.85006 21.0923 9.84965 21.0919 9.84986 21.0921C10.3948 21.6518 11.1571 22 12 22C12.8429 22 13.6046 21.6524 14.1495 21.0927C14.1497 21.0925 14.1493 21.0929 14.1495 21.0927C14.4506 20.7833 14.6862 20.4085 14.832 19.9924C14.8842 19.8433 14.925 19.6888 14.9533 19.53C14.9642 19.4689 15.0049 19.4168 15.0623 19.393C15.1196 19.3692 15.1852 19.3773 15.2362 19.4128C15.3685 19.5051 15.5066 19.5855 15.649 19.654C16.0463 19.8451 16.477 19.9436 16.9087 19.9495C16.909 19.9495 16.9084 19.9495 16.9087 19.9495C17.6898 19.9599 18.4751 19.6671 19.0711 19.0711C19.6671 18.4751 19.9599 17.6907 19.9495 16.9096C19.9495 16.9093 19.9495 16.9099 19.9495 16.9096C19.9436 16.4779 19.8451 16.0463 19.654 15.649C19.5855 15.5066 19.5051 15.3685 19.4128 15.2362C19.3773 15.1852 19.3692 15.1196 19.393 15.0623C19.4168 15.0049 19.4689 14.9642 19.53 14.9533C19.6888 14.925 19.8433 14.8842 19.9924 14.832C20.4085 14.6862 20.7827 14.4513 21.0921 14.1501C21.0923 14.1499 21.0919 14.1503 21.0921 14.1501C21.6518 13.6052 22 12.8429 22 12C22 11.1571 21.6524 10.3954 21.0927 9.85047C21.0925 9.85027 21.0929 9.85068 21.0927 9.85047C20.7833 9.54936 20.4085 9.31384 19.9924 9.16804C19.8433 9.11579 19.6888 9.07498 19.53 9.04667C19.4689 9.03578 19.4168 8.99509 19.393 8.93775C19.3692 8.88036 19.3773 8.81477 19.4128 8.76381C19.5051 8.63149 19.5855 8.49339 19.654 8.351C19.8451 7.9537 19.9436 7.52213 19.9495 7.09041C19.9495 7.09012 19.9495 7.09071 19.9495 7.09041ZM17.6569 6.34315C17.3104 5.99673 16.7691 5.95644 16.3803 6.22762C15.7904 6.63904 15.0069 6.74922 14.2962 6.45448C13.5872 6.16051 13.1107 5.52985 12.9844 4.82099C12.9012 4.3543 12.4899 4 12 4C11.5101 4 11.0988 4.35429 11.0156 4.82099C10.8893 5.52984 10.4128 6.16051 9.70384 6.45448C8.99308 6.74922 8.20964 6.63904 7.61972 6.22761C7.2309 5.95644 6.68956 5.99673 6.34314 6.34314C5.99673 6.68956 5.95644 7.2309 6.22762 7.61972C6.63904 8.20964 6.74922 8.99308 6.45448 9.70384C6.16051 10.4128 5.52984 10.8893 4.82098 11.0156C4.35429 11.0988 4 11.5101 4 12C4 12.4899 4.35429 12.9012 4.82098 12.9844C5.52984 13.1107 6.16051 13.5872 6.45448 14.2962C6.74922 15.0069 6.63904 15.7904 6.22762 16.3803C5.95644 16.7691 5.99673 17.3104 6.34315 17.6569C6.68957 18.0033 7.2309 18.0436 7.61972 17.7724C8.20963 17.361 8.99307 17.2508 9.70384 17.5455C10.4128 17.8395 10.8893 18.4702 11.0156 19.179C11.0988 19.6457 11.5101 20 12 20C12.4899 20 12.9012 19.6457 12.9844 19.179C13.1107 18.4702 13.5872 17.8395 14.2961 17.5455C15.0069 17.2508 15.7904 17.361 16.3803 17.7724C16.7691 18.0436 17.3104 18.0033 17.6569 17.6569C18.0033 17.3104 18.0436 16.7691 17.7724 16.3803C17.361 15.7904 17.2508 15.0069 17.5455 14.2962C17.8395 13.5872 18.4702 13.1107 19.179 12.9844C19.6457 12.9012 20 12.4899 20 12C20 11.5101 19.6457 11.0988 19.179 11.0156C18.4702 10.8893 17.8395 10.4128 17.5455 9.70384C17.2508 8.99307 17.361 8.20963 17.7724 7.61972C18.0436 7.2309 18.0033 6.68957 17.6569 6.34315Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#5F6165"
                  />
                </svg>

                <span to="/settings" className="nav__text-link">
                  Settings
                </span>
              </NavLink>
              <NavLink to="/signout" className="nav__item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0292 15.0007C11.5811 14.9799 12.0454 15.4104 12.0662 15.9623C12.1132 17.2065 12.1791 18.1145 12.244 18.7656C12.3079 19.4068 12.695 19.7926 13.2345 19.8586C13.8708 19.9363 14.7683 20 16 20C17.2317 20 18.1292 19.9363 18.7655 19.8586C19.3048 19.7926 19.6921 19.4067 19.7559 18.7653C19.8763 17.5568 20 15.4688 20 12C20 8.53118 19.8763 6.44321 19.7559 5.23468C19.6921 4.59333 19.3048 4.20736 18.7655 4.14144C18.1292 4.06366 17.2317 4 16 4C14.7683 4 13.8708 4.06365 13.2345 4.14143C12.695 4.20739 12.3079 4.59318 12.244 5.23437C12.1791 5.88545 12.1132 6.79354 12.0662 8.03772C12.0454 8.58961 11.5811 9.02012 11.0292 8.99929C10.4773 8.97845 10.0468 8.51417 10.0676 7.96228C10.1158 6.68524 10.1842 5.73543 10.2538 5.03611C10.4003 3.56595 11.4253 2.3477 12.9919 2.15621C13.7211 2.06707 14.7008 2 16 2C17.2992 2 18.2789 2.06707 19.0082 2.15622C20.5748 2.34774 21.5997 3.56655 21.7461 5.03643C21.875 6.33068 22 8.48847 22 12C22 15.5115 21.875 17.6693 21.7461 18.9636C21.5997 20.4334 20.5748 21.6523 19.0082 21.8438C18.2789 21.9329 17.2992 22 16 22C14.7008 22 13.7211 21.9329 12.9919 21.8438C11.4253 21.6523 10.4003 20.4341 10.2538 18.9639C10.1842 18.2646 10.1158 17.3148 10.0676 16.0377C10.0468 15.4858 10.4773 15.0215 11.0292 15.0007Z"
                    fill="#5F6165"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z"
                    fill="#5F6165"
                  />
                </svg>

                <span className="nav__text-link">Log out</span>
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default TheSidebar;

"use client";
import Link from "next/link";
import logo from "../../assets/images/logo-removebg-preview.png";
import "./style/style.css";
import Image from "next/image";
import ProgressBar from "../Dashboard/ProgressBar";
import { usePathname, useRouter } from "next/navigation";

import { signOut, useSession } from "next-auth/react";
const linkpart = [
  {
    text: "Home",
    href: "/",
  },
];
const Header = (props) => {
  const service = "/service";
  const about = "/about";
  const download = "/download";
  const login = "/login";
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <>
      <header className="fixed-top">
        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid ">
            <Link rel="preload" className="navbar-brand" href="/">
              <Image src={logo} alt="" width={100} priority={true} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse offcanvas-lg offcanvas-start"
              id="navbarSupportedContent"
            >
              <Link
                rel="preload"
                className="navbar-brand d-inline d-lg-none"
                href="/"
              >
                <Image src={logo} alt="" width={100} priority={true} />
              </Link>
              <ul className="navbar-nav column-gap-4  mx-auto my-2">
                <li className="nav-item">
                  <Link
                    className={`nav-link fw-bold ${
                      isActive("/") ? "active" : ""
                    }`}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    rel="preload"
                    className={`nav-link fw-bold ${
                      isActive("/about") ? "active" : ""
                    }`}
                    href={about}
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    rel="preload"
                    className={`nav-link fw-bold ${
                      isActive("/service") ? "active" : ""
                    }`}
                    href={service}
                  >
                    Desktop
                  </Link>
                </li>

                <li
                  className={`nav-item dropdown ${
                    props.data ? "d-block" : "d-none"
                  } `}
                >
                  <Link
                    rel="preload"
                    className="nav-link fw-bold dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catagory
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link rel="preload" className="dropdown-item" href="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link rel="preload" className="dropdown-item" href="/">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link rel="preload" className="dropdown-item" href="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* {console.log(session.status)} */}
              {session.status === "authenticated" ? (
                <p>{session.data.user.name}</p>
              ) : (
                <form className="d-flex " role="search">
                  <div className="searchcontainer d-flex ">
                    <input
                      className="form-control"
                      type="search"
                      // style={{ borderRadius: "25px" }}
                      placeholder="Search...."
                      aria-label="Search"
                    />
                    <button className="d-flex" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              )}

              <div className="d-flex my-2">
                {session.status === "authenticated" ? (
                  <button
                    className="btn btn-dark mx-2 "
                    type=""
                    onClick={() => signOut("")}
                  >
                    <Link
                      rel="preload"
                      href={login}
                      onClick={() => signOut("")}
                    >
                      Logout
                    </Link>
                  </button>
                ) : (
                  <button className="btn btn-dark mx-2 " type="">
                    <Link rel="preload" href={login}>
                      Login
                    </Link>
                  </button>
                )}

                <button className="btn btn-danger mx-2" type="">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </nav>
        <ProgressBar />
      </header>
    </>
  );
};

export default Header;

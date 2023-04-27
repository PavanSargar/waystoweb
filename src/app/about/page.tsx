/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

type Props = {};

export const metadata = {
  title: 'Waystweb | About',
  description: 'About us',
}

const About = (props: Props) => {
  return (
    <div>
      <h2 id="about-pawan-">About Pawan!</h2>
      <p>Hello, and welcome to a small mess of tech knowledge!</p>
      <p>I&#39;m Pawan Sargar, a passionate seeker and tech enthusiast.</p>
      <p>
        I&#39;m a writer, web developer &amp; a TECH-GEEK! My passion for
        writing, learning and all of experiences have made me create this
        platform to help other fellow developers like me.
      </p>
      <p>
        I want to contribute some of my part in this strong blogging and
        programming community and want to help others to contribute as well.
      </p>
      <p>
        So, together we strong! I invite you fellow seekers to join our
        community. Also, if you have any ideas, any sort of help in the
        developer community, feel free to be our guest by sharing amazing
        content and contributing to our platform.
      </p>
      <p>Stay Updated! Join our community!</p>
      <p>
        <a href="https://www.pinterest.com/waystoweb">
          <span>
            <FaPinterest />
          </span>
        </a>
      </p>
      <p>
        <a href="https://www.facebook.com/waystoweb">
          <FaFacebook />
        </a>
      </p>
      <p>
        <a href="https://www.instagram.com/waystoweb">
          <FaInstagram />
        </a>
      </p>
      <p>
        Want to contribute to our platform? want a high-quality backlink? be our
        guest!
      </p>
      <p>
        Read our <Link href="/guest-post">guest posting</Link> guide for further
        procedure.
      </p>
      {/* <p>
        <img
          src="images/IMG20200311192052-removebg-preview-e1619759099126.png"
          alt="Pawan Sargar"
        />
      </p> */}
    </div>
  );
};

export default About;

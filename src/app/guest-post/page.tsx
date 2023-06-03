import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="py-12  lg:px-48 sm:px-24 px-12">
      <h2 className=" text-xl" id="date-2021-04-29-">
        Guest Post
      </h2>
      <br />
      <p className=" text-md ">
        Want to submit guest post on WaysToWeb? Our primary goal is to deliver
        amazing content to our readers. High-quality posts is our primary focus
        on the topics like programming, technologies, tutorials, marketing,
        online earning, blogging, hosting-domain related, etc.
      </p>
      &nbsp;
      <p>
        If you have any sort of help, tutorials, information that could be
        beneficial for our readers then you are at the right place and we
        welcome you to contribute your precious time and energy on WaysToWeb.
      </p>
      &nbsp;

      <p>
        What&#39;s in it for you for devoting your time and energy on our
        platform?
      </p>
      &nbsp;

      <h2 className=" text-xl" id="benefits-of-contributing-guest-post">
        Benefits of Contributing Guest Post
      </h2>
      &nbsp;

      <p>
        We assure you that your struggle will not go in vain. For contributing a
        high-quality article, you will get a{" "}
        <strong>high-quality do-follow backlink</strong> from WaysToWeb, which
        will help your site to rank high in Google SERPs. You will also get a
        link to one of your social media channels.
      </p>
      &nbsp;

      <p>
        Ok, so these were all benefits of contributing to the guest post, but
        before we accept your article, it should match our article guide.
      </p>
      &nbsp;

      <h2 className="text-xl" id="article-guide">Article Guide</h2>
      <ul>
        <li>
          The length of the content must be 1000+ words, or it will not be
          accepted.
        </li>
        <li>Article title should not exceed 70 characters.</li>
        <li>
          Content should be 100% unique, we use tools to check plagiarism,
          content should be 90% unique to pass our test.
        </li>
        <li>
          Only use free images, or original images, don&#39;t use copyrighted
          images. (if you are going to use images)
        </li>
      </ul>
      <h2 id="article-topics-we-accept">Article Topics we Accept</h2>
      <p>
        You can refer above mentioned topics, but we accept every topic that
        would be helpful for our readers. Make sure that it lies in our niche.
        Articles can be related to programming tutorials, blogging, seo,
        marketing, money making, etc.
      </p>
      <h2 id="how-to-send-us-articles">How to Send us Articles</h2>
      <p>
        If you are ready with the post which fits in above-mentioned criteria,
        then what are you waiting for? send us a google docs link to your
        article on{" "}
        <a href="mailto:contact@waystoweb.com">contact@waystoweb.com</a>.
      </p>
      <p>
        You can also share your link on our{" "}
        <a href="https://www.waystoweb.com/about-us">social media platforms</a>.
      </p>
      <p>share:</p>
    </div>
  );
};

export default page;

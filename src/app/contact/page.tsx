import React from "react";

type Props = {};

export const metadata = {
  title: 'Waystweb | Contact',
  description: 'Contact us',
}

const Contact = (props: Props) => {
  return (
    <div className=" flex justify-center ">
      <h1>This is a contact page</h1>
      Have any concerns? need a backlink? or want to guest post? feel free to
      contact us!
    </div>
  );
};

export default Contact;

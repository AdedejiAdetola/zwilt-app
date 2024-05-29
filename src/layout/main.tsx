import Navbar from "@/components/common/navbar";
import Testimonial from "@/pages/home/testimonial";
import React from "react";

export default function MainLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      {children}
      <Testimonial />
    </>
  );
}

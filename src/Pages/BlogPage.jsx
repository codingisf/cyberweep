import React from "react";

function BlogPage() {
  return (
    <section className="bg-black min-h-[100vh] text-white ">
      <h1 className="text-4xl text-center font-bold py-32">Cyberweeb Blogs</h1>
      <section className="lg:w-[60%] w-[90%] mx-auto h-full">
        <a className="" href="/Blog1">
          <h1 className="text-2xl text-center font-bold">
            Top 4 Cybersecurity Threats in 2024 – And How to Stop Them
          </h1>
          <p className="text-xl font-bold my-5">Introduction</p>
          <p>
            The digital world is a battlefield, and 2024’s cyber threats are
            more sophisticated than ever. As businesses embrace AI, IoT, and
            cloud technologies, attackers are exploiting these advancements to
            launch devastating campaigns. In this blog, we’ll dissect the top 5
            cybersecurity threats of the year and equip you with battle-tested
            strategies to defend your organization.
          </p>
        </a>
        <hr className="w-[100%] mx-auto my-20" />
      </section>

      <section className="lg:w-[60%] w-[90%] mx-auto h-full">
        <a className="" href="/Blog2">
          <h1 className="text-2xl text-center font-bold">
            Why Secure Coding is Non-Negotiable for Modern Apps
          </h1>
          <p className="text-xl font-bold my-5">Introduction</p>
          <p>
            Insecure code isn’t just a bug—it’s a business risk. With 60% of
            data breaches linked to software vulnerabilities (Verizon DBIR,
            2024), secure coding is no longer optional. Let’s explore why it’s
            critical and how to bake security into your development DNA. The
            High Cost of Cutting Corners
          </p>
        </a>
        <hr className="w-[100%] mx-auto my-10" />
      </section>

      <section className="lg:w-[60%] w-[90%] mx-auto h-full">
        <a className="" href="/Blog3">
          <h1 className="text-2xl text-center font-bold">
            Case Study: How We Thwarted a $2M Ransomware Attack
          </h1>
          <p className="text-xl font-bold my-5">Introduction</p>
          <p>
            Ransomware is a ticking time bomb. In this case study, we’ll walk
            you through how we neutralized a $2M attack on a logistics
            company—and how you can replicate their success.
          </p>
        </a>
        <hr className="w-[100%] mx-auto py-10 mt-10" />
      </section>

      <section className="lg:w-[60%] w-[90%] mx-auto h-full">
        <a className="" href="/Blog4">
          <h1 className="text-2xl text-center font-bold">
          UI/UX Trends That Boost User Trust and Engagement
          </h1>
          <p className="text-xl font-bold my-5">Introduction</p>
          <p>
            In 2024, UI/UX isn’t just about aesthetics—it’s about building
            trust. With 68% of users abandoning sites over security concerns
            (Baymard Institute), design choices can make or break your app.
            Let’s explore trends that marry usability with safety. Trend 1:
            Transparent Data Practices
          </p>
        </a>
        <hr className="w-[100%] mx-auto py-10 mt-10" />
      </section>
    </section>
  );
}

export default BlogPage;

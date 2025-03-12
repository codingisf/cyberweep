import React from "react";

function Blog2() {
  return (
    <section className="bg-black min-h-[100vh] py-5 text-white">
      <h1 className="text-4xl text-center font-bold py-32">Cyberweeb Blogs</h1>
      <section className="lg:w-[60%] w-[90%] mx-auto h-full">
        <h1 className="text-2xl text-center font-bold">
          Why Secure Coding is Non-Negotiable for Modern Apps
        </h1>
        <p className="text-xl font-bold my-5">Introduction</p>
        <p>
          Insecure code isn’t just a bug—it’s a business risk. With 60% of data
          breaches linked to software vulnerabilities (Verizon DBIR, 2024),
          secure coding is no longer optional. Let’s explore why it’s critical
          and how to bake security into your development DNA. The High Cost of
          Cutting Corner
        </p>

        <div className="mt-5">
          <h1 className="text-2xl text-start font-bold mb-3">Key Stats:</h1>
          <p>
            {" "}
            Fixing a vulnerability post-release costs 6x more than during
            development (IBM). <br /> <br /> 70% of apps fail OWASP Top 10
            compliance tests (WhiteHat Security).
          </p>
        </div>

        <div className="">
          <h1 className="text-2xl text-center mt-10 font-bold mb-3">
            Secure Coding Best Practices
          </h1>

          <h1 className="text-2xl text-start mt-10 font-bold pb-3">
            {" "}
            Input Validation:
          </h1>

          <p className="py-2">
            {" "}
            <b className="text-lg ml-14">Bad Code: query </b> = "SELECT * FROM
            users WHERE id = " + userInput;{" "}
          </p>
          <p className="py-2">
            {" "}
            <b className="text-lg ml-14 py-2"> Good Code:</b> Use parameterized
            queries
          </p>
          <p className="ml-14 py-2">
            cursor.execute("SELECT * FROM users WHERE id = %s", (userInput,))
          </p>

          <h1 className="text-2xl text-start mt-10 font-bold pb-3">
            {" "}
            Output Encoding:
          </h1>
          <p className="text-lg ml-14 py-2 font-semibold">
            Sanitize user inputs to prevent XSS:
          </p>
          <p className="text-lg ml-14 py-2">
            const safeText = DOMPurify.sanitize(userInput);
          </p>

          <p className="text-lg ml-14 py-2 mt-5 font-semibold">
            Secure Dependencies:
          </p>
          <p className="text-lg ml-14 py-2">
            Scan libraries with OWASP Dependency-Check or Snyk.
          </p>

          <div className="">
            <h1 className="text-2xl text-start mt-10 font-bold pb-3">
              Tools to Adopt:
            </h1>

            <p className="mt-2 ml-14">
              {" "}
              SAST: SonarQube, Checkmarx. <br /> <br /> DAST: OWASP ZAP, Burp
              Suite.
            </p>
          </div>
        </div>
        <h1 className="text-2xl text-start mt-10 font-bold pb-3">
          {" "}
          Building a Security-First Culture
        </h1>

        <p className="ml-14 ">
          <span className="text-lg font-semibold mt-2">Training: </span> Enroll
          developers in courses like Secure Coding in Python or DevSecOps
          Fundamentals. <br />
          <span className="text-lg font-semibold mt-2">Code Reviews:</span>{" "}
          Dedicate 20% of sprint time to security reviews <br />
          <span className="text-lg font-semibold mt-2">Shift Left: </span>
          Integrate security into CI/CD pipelines with GitGuardian or Aqua
          Security.
        </p>
        <h1 className="text-2xl text-start mt-10 font-bold pb-3"> Example:</h1>

        <p className="ml-14 ">
          A healthcare SaaS company reduced vulnerabilities by 75% after
          mandating secure coding workshops for all devs.
        </p>
        <h1 className="text-2xl text-start mt-10 font-bold pb-3">Conclusion</h1>

        <p className="ml-14 ">
          Secure coding isn’t a checkbox—it’s a mindset. By prioritizing
          security from line one, you protect your users, your reputation, and
          your bottom line.
        </p>
      </section>
    </section>
  );
}

export default Blog2;

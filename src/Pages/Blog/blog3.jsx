import React from "react";

function blog3() {
  return (
    <section className="bg-black min-h-[100vh] text-white py-10">
      <h1 className="text-4xl text-center font-bold py-32">Cyberweeb Blogs</h1>
      <section className="lg:w-[60%] w-[90%] mx-auto h-full">
        <p className="text-xl font-bold my-5">Introduction</p>
        <p>
          Insecure code isn’t just a bug—it’s a business risk. With 60% of data
          breaches linked to software vulnerabilities (Verizon DBIR, 2024),
          secure coding is no longer optional. Let’s explore why it’s critical
          and how to bake security into your development DNA. The High Cost of
          Cutting Corner
        </p>
        <h1 className="text-2xl text-center font-bold">The Attack Timeline</h1>
        <h1 className="text-2xl text-start font-bold my-10">Day - 1</h1>
        <p className="ml-14">
          {" "}
          09:00 AM: An employee clicks a phishing link disguised as a FedEx
          tracking update. <br /> <br />
          12:30 PM: Ransomware (LockBit 3.0) encrypts 90% of the company’s
          files. <br /> <br />
          03:00 PM: Attackers demand $2M in Monero, threatening to leak client
          contracts. <br /> <br />
        </p>

        <h1 className="text-2xl text-start font-bold my-10">Day - 2</h1>
        <p className="ml-14">
          {" "}
          Incident Response Activated: Isolated infected systems, identified the
          ransomware variant, and initiated negotiations.
          <br />
          <br />
          Backup Restoration: Recovered 100% of data from immutable AWS S3
          backups.
        </p>

        <h1 className="text-2xl text-start font-bold my-10">Day - 3</h1>
        <p className="ml-14">
          {" "}
          EDR Cleanup: Used CrowdStrike Falcon to eliminate dormant malware.
          <br />
          <br />
          Post-Incident Report: Documented lessons learned and patched
          vulnerabilities.
        </p>
        <h1 className="text-2xl text-start font-bold my-10">
          5 Lessons for Every Business
        </h1>
        <h1 className="text-2xl text-start font-bold my-10 ml-8">
          Backup Religiously:
        </h1>
        <p> Follow the 3-2-1 rule (3 copies, 2 media types, 1 offsite).</p>
        <h1 className="text-2xl text-start font-bold my-10 ml-8">
          Test Your Backups:
        </h1>
        <p>
          {" "}
          40% of backups fail during recovery (Veeam, 2024). Conduct quarterly
          drills.
        </p>
        <h1 className="text-2xl text-start font-bold my-10 ml-8">Adopt EDR:</h1>
        <p>
          {" "}
          Tools like Microsoft Defender for Endpoint detect ransomware in
          seconds.
        </p>
        <h1 className="text-2xl text-start font-bold my-10 ml-8">
          Cyber Insurance:
        </h1>
        <p>
          {" "}
          Ensure your policy covers ransomware negotiations and recovery costs.
        </p>
        <h1 className="text-2xl text-start font-bold my-10 ml-8">
          Train Employees:
        </h1>
        <p> Phishing simulations cut click rates by 50% (Proofpoint).</p>
        <h1 className="text-2xl text-start font-bold my-10">Conclusion</h1>
        <p>
          {" "}
          Ransomware is inevitable, but its impact isn’t. With preparation and
          the right partners, you can turn a potential disaster into a
          recoverable incident.
        </p>
      </section>
    </section>
  );
}

export default blog3;

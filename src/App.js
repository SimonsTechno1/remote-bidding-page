import React from 'react';
import './App.css';
import truckImage from './assets/truck-image.jpg'; // Save your truck image in the src/assets folder
// import roiStatImage from './assets/roi-stat.jpg'; // Removed import for ROI stat image

const App = () => {
  return (
    <section className="hero-section">
      <div className="hero-split">
        <img
          alt="XPO LTL Truck mountain view"
          loading="lazy"
          src={truckImage}
          className="hero-image"
        />
        <div className="hero-content">
          <div className="text-content">
            <p className="eyebrow-text">Remote Bidding</p>
            <h2 className="headline">Remote Bidding makes auctions more efficient while maintaining levels of safety</h2>
            <p className="description">Want to bid in the comfort of your home and still have access to a wide range of properties ? Vihara is here to help your remotely bid for properties and experience the future of real estate auctions. This page equips you with the knowledge to navigate the remote bidding feature.</p>
            {/* Removed the ROI stat image */}
            {/* <img
              alt="XPO featured ROI stat"
              loading="lazy"
              src={roiStatImage}
              className="roi-image"
            /> */}
          </div>
        </div>
      </div>
      <div className="columns-wrapper">
        <div className="column left-column">
          <h2>Making Auctions Simpler</h2>
          <span>
            <br />
            <span className="text-base font-bold">
              <span className="text-blue">13,000</span> DRIVERS
            </span>
            <br />
          </span>
          <span>
            <br />
            <span className="text-base font-bold">
              <span className="text-blue">30,000</span> CUSTOMERS
            </span>
            <br />
          </span>
          <span>
            <br />
            <span className="text-base font-bold">
              <span className="text-blue">35,000</span> TRACTORS &amp; TRAILERS
            </span>
            <br />
          </span>
          <hr className="hr border-b-1 w-full block border-gray-light mx-auto" />
          <p></p>
        </div>
        <div className="column right-column">
          <p className="p--xs-eyebrow text-base tracking-wide font-bold text-blue">
            <span className="text-blue mb-0 py-1 md:pt-0" style={{ fontSize: '16px', fontWeight: 'bold' }}>The Challenge</span>
          </p>
          <h3>Inconvenience and geographical limitations with in-person property auctions</h3>
          <p>Bidding in in-person property auctions can be difficult. They require bidders to travel to the auction site, which limits accessibility. The fixed timing can conflict with personal schedules, making it hard for everyone to attend. Additionally, the high-pressure environment can be intimidating and lead to rushed decisions.</p>

          <p>Given the complexities of in-person property auctions, Vihara focuses on conducting most auctions online. Remote bidding addresses many of the limitations of in-person property auctions by increasing accessibility, offering greater flexibility, reducing stress, and enabling wider participation. This leads to a more inclusive, convenient, and potentially more competitive auction process.</p>

          <p>XPO has been investing for many years in proprietary technology that’s deployed across operations to increase efficiency, safety, and to better serve customers. To drive even more efficiencies across inspections, asset utilization and maintenance, vehicle detention times, fuel consumption, hours of service (HOS) tracking, and other areas of their business, they looked to Samsara. Specifically, the team was looking for a comprehensive solution that offered an open, API-powered platform that would help them transform data into actionable insights.</p>
        </div>
      </div>
      <div className="Comment">
      {/* Quote image div */}
      </div>

      <div className="columns-wrapper">
        <div className="column px-gap whitespace-pre-wrap  md:w-10/12 w-12/12 md:ml-1/12 sm:ml-0" style={{ backgroundColor: '#fff' }}>
          <p className="p--xs-eyebrow text-base tracking-wide font-bold text-blue"><span className="text-blue font-bold text-base">THE SOLUTION</span></p>
          <h3>XPO invested in a solution that was easy to implement and committed to growing with their needs.</h3>
          <p>The majority of XPO’s technology is proprietary and built in-house. While the company already had a legacy telematics solution in place, the team turned to Samsara based on the shared commitment that both companies have towards continuous innovation. "One of the big reasons we chose Samsara is because it's a tech-forward company that invests a lot into R&amp;D," said Gardner. "Since day one, XPO has always made technology a priority, so partnering with Samsara made a lot of sense."</p>
          <p>Given the complexities of in-person property auctions, Vihara focuses on conducting most auctions online. Remote bidding addresses many of the limitations of in-person property auctions by increasing accessibility, offering greater flexibility, reducing stress, and enabling wider participation. This leads to a more inclusive, convenient, and potentially more competitive auction process.</p>
          <p>Overall, the XPO team has appreciated the Samsara team's commitment to developing solutions to their company's unique challenges. "The Samsara team has been a strong partner to us," said Greg Pawelski, Vice President of Health &amp; Safety. "They are always willing to collaborate and ideate on how to prioritize the safety and efficiency of our business."</p>
          <p className="p--xs-eyebrow text-base tracking-wide font-bold text-blue"><span className="text-blue font-bold text-base">THE RESULTS</span></p>
          <h3>XPO drives significant efficiencies across tax savings, inspections, HOS compliance, and more.</h3>
          <p>After deploying Samsara, XPO has realized meaningful efficiency gains while still maintaining the company's high bar for safety and customer service. Moreover, the company has been able to translate efficiency gains into cost savings: With Samsara location and mileage data, XPO anticipates receiving annual fuel tax refunds. "We're using Samsara to determine if our vehicles are on roads or private facilities and applying for off-highway fuel tax refunds, which is something we couldn't take advantage of before," said Lanny Gower, Senior Tax Manager.&nbsp;</p>
          <p>XPO has also implemented Samsara workflows to increase driver efficiency. "Samsara workflows and dashboards have given us more visibility, so we can track miles even more efficiently, and coach drivers even more effectively." In addition, Samsara has enabled XPO to switch from paper inspection forms to eDVIRs, <strong>saving thousands of hours per year</strong>. "Saving one minute on filling out an inspection form may not seem significant, but when you multiply that by three million trips per year, it's a huge amount," said Bean.</p>
          <p>Moreover, with the Samsara platform, XPO has been able to plug Samsara data into their network through their line haul models and other proprietary software, helping to drive additional efficiencies. One example is time savings on labor: "We estimate <strong>we're saving thousands of hours in technician labor</strong> by setting up an integration with Samsara and AssetWorks," said Bean. "It removes manual parts of tracking and streamlines maintenance for our technicians."&nbsp;</p>
          <p>Looking forward, XPO plans to continue their rollout of Samara across their operations. "We have a whole list of initiatives we're working on, and we’re excited to make them a reality," said Gardner. "We expected to see improvements and gains with Samsara, and we're pleased that that's exactly what we've gotten."</p>
        </div>
      </div>

    </section>
  );
}

export default App;

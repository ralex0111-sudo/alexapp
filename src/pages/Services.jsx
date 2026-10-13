
import { Link, Outlet } from "react-router-dom";

export function Services() {
  return (
    <section className="page">
      <p className="eyebrow">HOW I CAN HELP</p>
      <h1 className="page-title">My Services</h1>

      <div className="service-links">
        <Link to="/services/web">Web Development</Link>
        <Link to="/services/ui">UI/UX Design</Link>
        <Link to="/services/marketing">Digital Marketing</Link>
      </div>

      <div className="content-card service-content">
        <Outlet />
      </div>
    </section>
  );
}

export function WebService() {
  return (
    <>
      <h2>Web Development</h2>
      <p>
        Responsive websites and web applications using
        HTML, CSS, JavaScript and React.
      </p>
    </>
  );
}

export function UIService() {
  return (
    <>
      <h2>UI/UX Design</h2>
      <p>
        Clean layouts, user-friendly interfaces and
        responsive designs for different screen sizes.
      </p>
    </>
  );
}

export function MarketingService() {
  return (
    <>
      <h2>Digital Marketing</h2>
      <p>
        SEO, Google Ads, Meta Ads and lead generation
        campaigns to help businesses reach customers.
      </p>
    </>
  );
}

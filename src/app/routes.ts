import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "../pages/HomePage";
import WorksPage from "../pages/WorksPage";
import ServicesPage from "../pages/ServicesPage";
import IndustriesPage from "../pages/IndustriesPage";
import CaseStudiesPage from "../pages/CaseStudiesPage";
import BlogsPage from "../pages/BlogsPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsOfServicePage from "../pages/TermsOfServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "works", Component: WorksPage },
      { path: "services", Component: ServicesPage },
      { path: "industries", Component: IndustriesPage },
      { path: "case-studies", Component: CaseStudiesPage },
      { path: "blogs", Component: BlogsPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsOfServicePage },
      { path: "*", Component: HomePage },
    ],
  },
]);

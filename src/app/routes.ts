import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "../pages/HomePage";
import WorksPage from "../pages/WorksPage";
import ServicesPage from "../pages/ServicesPage";
import CaseStudiesPage from "../pages/CaseStudiesPage";
import BlogsPage from "../pages/BlogsPage";
import BlogPostPage from "../pages/BlogPostPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsOfServicePage from "../pages/TermsOfServicePage";

// Service subpages
import WebsiteServicePage from "../pages/services/WebsiteServicePage";
import LandingPagesServicePage from "../pages/services/LandingPagesServicePage";
import SEOServicePage from "../pages/services/SEOServicePage";
import SMMServicePage from "../pages/services/SMMServicePage";
import CRMAutomationServicePage from "../pages/services/CRMAutomationServicePage";
import VoiceAIServicePage from "../pages/services/VoiceAIServicePage";
import EmailNurturingServicePage from "../pages/services/EmailNurturingServicePage";
import ReputationServicePage from "../pages/services/ReputationServicePage";
import DatabaseReactivationServicePage from "../pages/services/DatabaseReactivationServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "works", Component: WorksPage },
      { path: "services", Component: ServicesPage },
      { path: "services/website", Component: WebsiteServicePage },
      { path: "services/landing-pages", Component: LandingPagesServicePage },
      { path: "services/seo", Component: SEOServicePage },
      { path: "services/smm", Component: SMMServicePage },
      { path: "services/crm-automation", Component: CRMAutomationServicePage },
      { path: "services/voice-ai", Component: VoiceAIServicePage },
      { path: "services/email-nurturing", Component: EmailNurturingServicePage },
      { path: "services/reputation-management", Component: ReputationServicePage },
      { path: "services/database-reactivation", Component: DatabaseReactivationServicePage },
      { path: "case-studies", Component: CaseStudiesPage },
      { path: "blogs", Component: BlogsPage },
      { path: "blog-posts/:slug", Component: BlogPostPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsOfServicePage },
      { path: "*", Component: HomePage },
    ],
  },
]);

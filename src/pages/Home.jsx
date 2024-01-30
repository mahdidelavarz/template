import React from "react";
import Layout from "../layout/Layout";

import MainHeader from "../ui/MainHeader";
import Services from "../ui/Services";
import Projects from "../ui/Projects";
import Articles from "../ui/News and Articles/Articles";
import CustomerSatisfaction from "../ui/CustomerSatisfaction/CustomerSatisfaction";
import CtsFooter from "../ui/CustomerSatisfaction/CtsFooter";
import Footer from "../ui/Footer/Footer";
function Home() {
  return (
    <Layout>
      <MainHeader />
      <Services />
      <Projects />
      <Articles />
      <CustomerSatisfaction />
      <CtsFooter />
      <Footer />
    </Layout>
  );
}

export default Home;

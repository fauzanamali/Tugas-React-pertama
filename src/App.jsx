import React from "react";
import Layout from "./componenst/layout/layout";
import AlertButton from "./componenst/button/AlertButton"; 
import ImputNama from "./componenst/imputNama/ImputNama";

export default function App() {
  return (
    <Layout>
      <AlertButton
        text="Klik Saya"
        message="Ini pesan dari AlertButton"
        
      />
      <ImputNama />
    </Layout>
  );
}

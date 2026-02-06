import React from "react";
import Layout from "./componenst/layout/layout";
import AlertButton from "./componenst/button/AlertButton"; 
import ImputNama from "./componenst/imputNama/ImputNama";
// import StudentManager from "./manager/StudentManager";
import StudentApp from "./componenst/Student/StudentApp.jsx";





export default function App() {
  return (
    <Layout>
      <AlertButton
        text="Klik Saya"
        message="Ini pesan dari AlertButton"
      />
      {/* <StudentManager /> */}
      
      <ImputNama />
      `     <StudentApp />`
    </Layout>
  );
}

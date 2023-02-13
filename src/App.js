import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DropDownMenu from "./Components/DropDownMenu";
import Result from "./Components/Result";
import MapChart from "./Components/MapChart";

const App = () => {
  const [cityData, setCityData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [networkData, setNetworkData] = useState([]);

  const [loading, setLoading] = useState(false);

  const getCitiesAndCompanies = () => {
    setLoading(true);
    axios
      .get("http://api.citybik.es/v2/networks?fields=company,location")
      .then((res) => {
        const citySet = new Set();
        const companySet = new Set();
        res.data.networks.map((item) => {
          citySet.add(item.location.city);
          if (item.company !== null && typeof item.company !== "string") {
            item.company.map((c) => {
              companySet.add(c);
            });
          }
        });

        setCityData([...citySet]);
        setCompanyData([...companySet]);
        setNetworkData(res.data.networks);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCitiesAndCompanies();
  }, []);

  const cityDataResult = networkData.filter((network) => {
    return network.location.city === selectedCity;
  });

  const companyDataResult = networkData.filter((network) => {
    return (
      network.company !== null &&
      (typeof network.company === "string"
        ? network.company === selectedCompany
        : network.company.includes(selectedCompany))
    );
  });

  return (
    <>
      <div>
        <DropDownMenu
          loading={loading}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cityData={cityData}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          companyData={companyData}
        />

        <Result
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cityDataResult={cityDataResult}
          selectedCompany={selectedCompany}
          companyDataResult={companyDataResult}
        />
      </div>
      <MapChart />
    </>
  );
};

export default App;

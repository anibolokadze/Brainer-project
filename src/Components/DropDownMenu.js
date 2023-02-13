export default function DropDownMenu({
  loading,
  selectedCity,
  setSelectedCity,
  cityData,
  selectedCompany,
  setSelectedCompany,
  companyData,
}) {
  return (
    <>
      <h1>Select a city or a company </h1>
      {loading && <div>Loading...</div>}

      <div className="dropdown">
        <label>Select City:</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City</option>
          {cityData.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown">
        <label>Select Company:</label>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">Select Company</option>
          {companyData.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

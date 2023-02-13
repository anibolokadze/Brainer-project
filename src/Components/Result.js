export default function Result({
  selectedCity,
  cityDataResult,
  selectedCompany,
  companyDataResult,
}) {
  return (
    <div>
      {selectedCity !== "" && (
        <div className="result">
          <h2>Companies in {selectedCity}:</h2>
          <ul>
            {cityDataResult.map((network, index) =>
              network.location.city ? (
                network.location.city
                  .toLowerCase()
                  .includes(selectedCity.toLowerCase()) ? (
                  <li key={index}>{network.company}</li>
                ) : null
              ) : null
            )}
          </ul>
        </div>
      )}

      {selectedCompany !== "" && (
        <div className="result">
          <h2>Cities with {selectedCompany}:</h2>
          <ul>
            {companyDataResult.map((network, index) =>
              network.company.includes(selectedCompany) ? (
                <li key={index}>{network.location.city}</li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

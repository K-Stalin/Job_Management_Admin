import React, { useEffect, useState, useRef, useContext } from "react";
import { assests, jobLocations, jobType } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  
  
  const { setSearchFilter } = useContext(AppContext);

  
  
  // Salary Range State
  const [minValue, setMinValue] = useState(50000);
  const [maxValue, setMaxValue] = useState(80000);
  const minGap = 5000;
  const rangeRef = useRef(null);



  // Dropdown State
  const [selectedLocation, setSelectedLocation] = useState("Preferred Location");
  const [selectedJobType, setSelectedJobType] = useState("Job Type");

  const locationDropdownRef = useRef(null);
  const jobTypeDropdownRef = useRef(null);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownJob, setDropdownJob] = useState(false);

  useEffect(() => {
    updateRangeProgress();
  }, [minValue, maxValue]);

  const updateRangeProgress = () => {
    if (rangeRef.current) {
      let minPercent = ((minValue - 10000) / (100000 - 10000)) * 100 + 5;
      let maxPercent = ((maxValue - 10000) / (100000 - 10000)) * 100+3;
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
      if (
        jobTypeDropdownRef.current &&
        !jobTypeDropdownRef.current.contains(event.target)
      ) {
        setDropdownJob(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  function handleLocationSelect(e) {
    const location = e.target.innerText;
    setSelectedLocation(location);
    setDropdownVisible(false);
    setSearchFilter((prev) => ({ ...prev, location }));
  }

  function handleJobTypeSelect(e) {
    const jobType = e.target.innerText;
    setSelectedJobType(jobType);
    setDropdownJob(false);
    setSearchFilter((prev) => ({ ...prev, jobType }));
  }

  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero">
          {/* Job Title */}
          <div className="jobtitle">
            <img src={assests.search} alt="" />
            <input
              type="text"
              placeholder="Search By Job title Role"
              onChange={(e) =>
                setSearchFilter((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>

          {/* Location Dropdown */}
          <div className="location" ref={locationDropdownRef}>
            <img src={assests.location} alt="" />
            <div className="location-right">
              <span>{selectedLocation}</span>
              <img
                src={assests.filterIcon}
                onClick={() => {
                  setDropdownVisible(!isDropdownVisible);
                }}
                alt=""
              />
              {isDropdownVisible && (
                <div
                  className="dropdown-joblocation"
                  style={{ display: isDropdownVisible ? "flex" : "none" }}
                >
                  <ul>
                    {jobLocations.map((el, i) => (
                      <li key={i} onClick={handleLocationSelect}>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="jobtype" ref={jobTypeDropdownRef}>
            <img src={assests.jobtype} alt="" />
            <div className="jobtype-right">
              <span>{selectedJobType}</span>
              <img
                src={assests.filterIcon}
                onClick={() => setDropdownJob(!isDropdownJob)}
                alt=""
              />
            {isDropdownJob && (
              <div className="dropdown-jobtype" style={{display:isDropdownJob? 'flex':'none'}}>
                <ul>
                  {jobType.map((el, i) => (
                    <li key={i} onClick={handleJobTypeSelect}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            </div>

          </div>

          <div className="range-slider">
            <div className="range-values">
              <label className="salary">Salary Per Month</label>
              <div>
                <span className="salary">₹{(minValue / 1000).toFixed(0)}k</span>
                <span> - </span>
                <span className="salary">₹{(maxValue / 1000).toFixed(0)}k</span>
              </div>
            </div>
            <div ref={rangeRef} className="range-progress"></div>

            {/* Left Handle */}
            <input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              value={minValue}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value <= maxValue - minGap) {
                  setMinValue(value);
                  setSearchFilter((prev) => ({
                    ...prev,
                    salary: `${value}-${maxValue}`,
                  }));
                }
              }}
            />

            {/* Right Handle */}
            <input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              value={maxValue}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= minValue + minGap) {
                  setMaxValue(value);
                  setSearchFilter((prev) => ({
                    ...prev,
                    salary: `${minValue}-${value}`,
                  }));
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

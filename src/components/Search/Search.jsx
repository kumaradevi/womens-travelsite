import "./Search.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-date">
          <span
            onClick={() => {
              setIsOpenModel(!isOpenModel);
            }}
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          {isOpenModel && (
            <div>
              {" "}
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />{" "}
            </div>
          )}
        </div>
        <div className="search-place">
          <input type="" placeholder="Where Search Destinations" />
        </div>
        <div className="searct-btn">
          <div className="icon">
            <FontAwesomeIcon icon="faSearch" />
          </div>
        </div>
      </div>
      <div className="profile">
        <form className="form">
          <h2>Profile</h2>
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input type="text" name="name" placeholder=" Your name" />
          </div>
          <div className="input-group">
            <label htmlFor="age">age</label>
            <input type="number" name="age" placeholder=" Your age" />
          </div>
          <div className="input-group">
            <label htmlFor="hobbies">hobbies</label>
            <textarea
              name="hobbies"
              id=""
              cols="30"
              rows="3"
              placeholder="type your hobbies here"
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="story">story</label>
            <textarea
              name="story"
              id=""
              cols="30"
              rows="8"
              placeholder="Share your story here"
            ></textarea>
          </div>
          <div className="form-btn">
            <button>edit</button>
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

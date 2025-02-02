// function Filter({ selectedTag, setSelectedTag, tags }) {
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownVisible(!isDropdownVisible);
//     };  

//     return (
//     <div className="dropdown">
//         <button className="dropbtn" onClick={toggleDropdown}>Filter By</button>
//         <div className={`dropdown-content ${isDropdownVisible ? "show" : ""}`}>
//         {tags.map((tag, index) => (
//           <button key={index} onClick={() => setSelectedTag(tag)}>
//             {tag}
//           </button>
//         ))}
//       </div>
//     </div>
//     );
// }

function Filter({ selectedTag, setSelectedTag, tags }) {
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={myFunction}>Filter By</button>
        <div className="dropdown-content" id="myDropdown">
          {tags.map((tag, index) => (
            <button key={index} onClick={() => setSelectedTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

export default Filter;

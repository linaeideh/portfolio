
import School from "../assets/School.webp";
import University from "../assets/University.webp";
import Udemy from "../assets/Udemy.webp";
import "./Education.css";
const educationData = [
  {
    category: "School",
    logo: School,

    details: {
      name: "Sweileh Girls Secondary School",
      degree: "General Secondary Education – Scientific Stream",
      grade: "85.8%",
      years: "2019-2020",
    },
  },
  {
    category: "University",
    logo: University,
    details: {
      name: "Al-Balqa Applied University",
      degree: "Bachelor of Computer information Systems",
      grade: "3.30 / 4",
      years: "2020-2024",
    },
  },
  {
    category: "Courses",
    logo: Udemy,
    details: {
      name: "Udemy - Coursera",
      degree: "Courses in React, js",
      grade: "Completed",
      years: "2024",
      description:
        "Learned foundational and advanced concepts in frontend and backend development.",
    },
  },
];

const Education = () => {


  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" , marginTop:'109px' , fontSize:'2.5rem'}}>Education</h2>

      <div
        style={{
          display: "flex",
          gap: "190px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
          marginBottom: "50px",
          zIndex: 1,
          border: "none",
        }}
      >
        {educationData.map((item) => (
          <div className='card'>
            {item.logo && (
              <img
                src={item.logo}
                alt={item.category}
                style={{ width: "300px", height: "300px", marginLeft: "10px" }}
              />
            )}
            <div className='card__content'>
              <p className='card__title'>{item.category}</p>
              <p className='card__description'>
                <strong>Degree:</strong> {item.details.degree} <br />
                <strong>Grade:</strong> {item.details.grade} <br />
                <strong>Years:</strong> {item.details.years} <br />
                {item.details.description && (
                  <>
                    <strong>Description:</strong> {item.details.description}
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

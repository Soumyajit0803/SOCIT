import "./OurFaculty.css"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// Faculty data structure - easily replaceable
const facultyData = [
  {
    id: 1,
    name: "Soumyajit Karmakar",
    designation: "Assistant Professor",
    phone: "+91 9876543210",
    emails: ["soumyajit@socit.edu", "s.karmakar@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 2,
    name: "Soumyajit Karmakar",
    designation: "Associate Professor",
    phone: "+91 9876543211",
    emails: ["soumyajit2@socit.edu", "s.karmakar2@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 3,
    name: "Soumyajit Karmakar",
    designation: "Professor",
    phone: "+91 9876543212",
    emails: ["soumyajit3@socit.edu", "s.karmakar3@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 4,
    name: "Soumyajit Karmakar",
    designation: "Assistant Professor",
    phone: "+91 9876543213",
    emails: ["soumyajit4@socit.edu", "s.karmakar4@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 5,
    name: "Soumyajit Karmakar",
    designation: "Associate Professor",
    phone: "+91 9876543214",
    emails: ["soumyajit5@socit.edu", "s.karmakar5@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 6,
    name: "Soumyajit Karmakar",
    designation: "Professor",
    phone: "+91 9876543215",
    emails: ["soumyajit6@socit.edu", "s.karmakar6@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 7,
    name: "Soumyajit Karmakar",
    designation: "Assistant Professor",
    phone: "+91 9876543216",
    emails: ["soumyajit7@socit.edu", "s.karmakar7@university.edu"],
    image: "/assets/faculty.jpg",
  },
  {
    id: 8,
    name: "Soumyajit Karmakar",
    designation: "Associate Professor",
    phone: "+91 9876543217",
    emails: ["soumyajit8@socit.edu", "s.karmakar8@university.edu"],
    image: "/assets/faculty.jpg",
  },
]

const OurFaculty = () => {
  return (
    <>
      <div className="content-wrapper-1">
        <div className="topic-1">Our Esteemed Faculty</div>
        <div className="grid-1">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="faculty-1">
              <div className="faculty-image">
                <img src={faculty.image || "/placeholder.svg"} alt={faculty.name} />
              </div>
              <div className="faculty-content">
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-designation">{faculty.designation}</p>
                <div className="faculty-contact">
                  <div className="contact-item">
                    <FaPhoneAlt className="icon" /> {faculty.phone}
                  </div>

                  {faculty.emails.map((email, index) => (
                    <div key={index} className="contact-item">
                      <FaEnvelope className="icon" /> {email}
                    </div>
                  ))}
                </div>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurFaculty

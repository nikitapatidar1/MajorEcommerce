// import React from "react";
// import "./aboutSection.css";
// import { Button, Typography, Avatar } from "@material-ui/core";

// import GitHubIcon from "@material-ui/icons/GitHub";

// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// const About = () => {
//   const visitInstagram = () => {
//     window.location = "https://instagram.com/meabhisingh";
//   };
//   return (
//     <div className="aboutSection">
//       <div></div>
//       <div className="aboutSectionGradient"></div>
//       <div className="aboutSectionContainer">
//         <Typography component="h1">About Us</Typography>

//         <div>
//           <div>
//             <Avatar
//               style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
//               src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
//               alt="Founder"
//             />
//             <Typography>Abhishek Singh</Typography>
//             <Button onClick={visitGithub} color="primary">
//               Visit Github
//             </Button>
//             <span>
//               This is a sample wesbite made by NIKITA PATIDAR.Passionate about
//               building web applications using the MERN Stack. I love coding,
//               learning new technologies.
//             </span>
//           </div>
//           <div className="aboutSectionContainer2">
//             <Typography component="h2">Our Brands</Typography>

//             <a
//               href="https://github.com/nikitapatidar1/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <GitHubIcon className="githubSvgIcon" />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/nikita-patidar-590052254/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkedInIcon className="linkedinSvgIcon" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import profilePic from "../../../images/profile.jpg";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>

      <div className="aboutSectionContainer">
        <Typography component="h1" className="aboutTitle">
          About Us
        </Typography>

        <div className="aboutContent">
          {/* Founder Info */}
          <div className="founderSection">
            <Avatar
              style={{
                width: "12vmax",
                height: "12vmax",
                margin: "2vmax 0",
                border: "2px solid #3f51b5",
              }}
              src={profilePic}
              alt="Founder"
            />

            <Typography variant="h5" className="founderName">
              Nikita Patidar
            </Typography>

            <div className="socialButtons">
              <a
                href="https://github.com/nikitapatidar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
              >
                <GitHubIcon fontSize="large" />
              </a>

              <a
                href="https://www.linkedin.com/in/nikita-patidar-590052254/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>

            <Typography className="founderBio">
              This is a sample website made by NIKITA PATIDAR. Passionate about
              building web applications using the MERN Stack. I Love coding and
              learning new technologies.
            </Typography>
          </div>

          {/* Brands Section */}
          <div className="brandsSection">
            <Typography component="h2" className="brandsTitle">
              Connect With Us
            </Typography>
            <div className="brandsIcons">
              <a
                href="https://github.com/nikitapatidar1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-patidar-590052254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

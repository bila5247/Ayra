import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Select, Button, Form, Upload } from "antd";
import emailjs from "emailjs-com";
import Crystal from "../assets/www.biotechpackages.com/crystal.png";
import Logo from "../assets/www.biotechpackages.com/logo.png";
import Footer from "../components/Footer";
import { UploadOutlined } from "@ant-design/icons";
// import "antd/dist/reset.css"; // Ant Design CSS Reset

const { Option } = Select;
const { TextArea } = Input;

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects: JSON.stringify(subjects),
      resume: resume ? resume.name : "",
      url,
      selectedOption,
      about,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume(null);
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <>
      <div className="apply_job">
        <div className="left">
          <div className="left_inner">
          <div className="logo">
            <Link to="/">
              <img
                loading="lazy"
                width="160"
                height="85"
                decoding="async"
                src={Logo}
                alt="logo"
                // style={{ width: "100%" }}
              />
            </Link>
          </div>
          <div className="heading1">
            <h5>Join Ayra Pvt. LTD</h5>
            <p>Pakistan's one of the best organizations to Work For</p>
            <p style={{ fontSize: "14px", maxWidth: "619px" }}>
              Fill in the short form below, attach your covering letter and CV,
              and our People and Culture team will be in touch as soon as
              possible.
            </p>
            <h5>Role.</h5>
            <p style={{ fontSize: "15px" }}>
              Select a role you're interested in applying for with us.
            </p>
          </div>

          <div className="forms">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              onReset={handleReset}
            >
              <Form.Item label="Role">
                <Select
                  defaultValue="Accountant"
                  disabled
                  style={{ width: "100%" }}
                >
                  <Option value="Production Staff">Production Staff</Option>
                  <Option value="Graphic Designer">Graphic Designer</Option>
                  <Option value="Accountant">Accountant</Option>
                </Select>
              </Form.Item>

              <h2 className="about" style={{ marginTop: 30, fontWeight: 700 }}>
                About You.
              </h2>
              <p>
                Let us know a little more about you and your experience so far.
              </p>

              <div className="firstinput">
                <Form.Item label="First Name" 
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    name="first_name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
                <Form.Item label="Last Name"
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    name="last_name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
              </div>

              <div className="secondinput">
                <Form.Item label="Email Address" 
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
                <Form.Item label="Contact Number" 
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    name="contact_number"
                    placeholder="Contact Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
              </div>

              <div className="thirdinput">
                <Form.Item label="Address" 
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    name="address"
                    placeholder="Address"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <p  style={{fontSize: 14, fontWeight: 700}}>Let us know a little about you </p> 
              
                <p style={{ marginTop: "20px", fontSize: "14px" }}>
                  No need to be formal, we'd just like to get to know you!
                </p>
                <TextArea
                  rows={5}
                  name="description"
                  placeholder=""
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </Form.Item>

              <div className="secondinput">
                <Form.Item label="Portfolio" 
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    type="url"
                    name="url"
                    placeholder="Portfolio"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
                <Form.Item label="Github" 
                style={{fontSize: 14, fontWeight: 700}}>
                  <Input
                    type="url"
                    name="git"
                    placeholder="Github Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
              </div>

              <h2>Your Current Role.</h2>
              <p>Give us some info on your current role.</p>

              <div className="secondinput">
                <Form.Item label="Current Employer" 
                >
                  <Input
                    name="current_employer"
                    placeholder="Current Employer"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
                <Form.Item label="Notice Period" 
                >
                  <Input
                    name="notice_period"
                    placeholder="Notice Period"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={{ width: '290px'}}
                  />
                </Form.Item>
              </div>
              <Form.Item>
              <div className="resume">
              <h2>Your Resume/CV.</h2>
              <p>Attach your covering letter here.</p>
              <p>Accepted File Types: PDF, .doc, .docx</p>

             
                
              </div>
              <Upload
                  beforeUpload={(file) => {
                    setResume(file);
                    return false;
                  }}
                  fileList={resume ? [resume] : []}
                ></Upload>
                  <Button class="file_btn btn btn-primary">CHOOSE FILE</Button>
                  "No File Chosen"
                  <span
                    style={{ fontSize: 13, paddingLeft: 10, color: "red" }}
                  />
              
              </Form.Item>
                
              <div class="buttons">
                <Button class="btn1" type="primary" htmlType="submit">
                  SUBMIT APPLICATION
                </Button>
                <Link to="/career">
                  <Button className="btn2" type="default" htmlType="reset">
                    CANCEL
                  </Button>
                </Link>
              </div>
            </Form>
          </div>

          <p style={{ marginTop: 50 }}>
            2024 Ayra Printing and Packaging Pvt Ltd. All rights reserved
          </p>
          </div>
        </div>

        <div className="image_Apply_job" style={{ maxWidth: "40%" }}>
          <img
            src={Crystal}
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
      </div>
    </>
  );
}

export default App;

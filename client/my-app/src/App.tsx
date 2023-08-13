import { ChangeEvent, useState } from "react";
import "./App.css";
import { gql, useMutation } from "@apollo/client";
import Register from "./Register";
import { UPLOAD_FILE } from "./assets/operations";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import util from "util";



function App() {
  // const [file, setFile] = useState<string | Blob>("");
  // const [name, setName] = useState("");
  // // const { userInfo } = useSelector((state) => state.userLogin);
  // const handleSubmit = async (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("name", name);

  //   const resp = await axios.post("http://localhost:3000/express/upload-single", formData, {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //       // Authorization: `Bearer ${userInfo.token}`,
  //     },

  //   });
  //   console.log(resp.status)
  // };
 


  const [file, setFile] = useState<any>();
  //console.log(file);

  const [fileUpload] = useMutation(
    UPLOAD_FILE,

    {
      //or { fileUpload }
      onCompleted: ({ fileUpload }) => {
        console.log("uploaded: ", fileUpload);
      },
      // onError({ graphQLErrors }) {
      //   setErrors(graphQLErrors as any);
      // },
    }
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
   
    const filePath = `http://localhost/${Date.now()}_${uuidv4()}${file.name}`;

    console.log(file);
    console.log(filePath)
    const myFile = new File([String(file.lastModified), file.webkitRelativePath], file.name)
    setFile(myFile);

  };

  const handleUploadClick = async () => {
    if (file) {
      await fileUpload({
        variables: {
          file: file,
        },
      });
    }
  };

  return (
    <div>
      {/* <Register /> */}

      <input type="file" onChange={handleFileChange} />
      {/* <input type="text" onChange={(e) => setName(e.target.value)} value={name} /> */}
      {/* <div>{file && `${file.name} - ${file.type}`}</div> */}
      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default App;

/** @format */

import React, { useState } from "react";
import "./css/Sidebar.css";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CloudIcon from "@mui/icons-material/Cloud";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "@mui/material";
import firebase from "firebase";
import {db, storage} from "./firebase";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange=(e)=> {
    if(e.target.files[0]) {
        setFile(e.target.files[0]);

    }
  }

  const handleUpload = (event) => {
    event.preventDefault();
    setUploading(true);
  
    const storage = firebase.storage();
    const storageRef = storage.ref(`files/${file.name}`);
    
    storageRef.put(file).then((snapshot) => {
      storageRef.getDownloadURL().then((url) => {
        db.collection("myfiles").add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          filename: file.name,
          fileURL: url,
          size: snapshot._delegate.bytesTransferred,
        }).then(() => {
          setUploading(false);
          setFile(null);
          setOpen(false);
        }).catch((error) => {
          console.error("Error uploading file to Firestore:", error);
          setUploading(false); // Stop uploading even in case of error
        });
      }).catch((error) => {
        console.error("Error getting download URL:", error);
        setUploading(false); // Stop uploading even in case of error
      });
    }).catch((error) => {
      console.error("Error uploading file to Firebase Storage:", error);
      setUploading(false); // Stop uploading even in case of error
    });
  };
  

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-pop">
          <form>
            <div className="modalHeading">
              <h3>Select file you want to upload</h3>
            </div>
            <div className="modalBody">
              {uploading ? (
                <p className="uploading">Uploading...</p>
              ) : (
                <>
                  <input type="file" onClick={handleChange} />
                  <input type="submit" className="post_submit" onClick={handleUpload} />
                </>
              )}
            </div>
          </form>
        </div>
      </Modal>
      <div className="sidebar">
        <div className="sidebar__btn">
          <button onClick={handleOpen}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAAAOVBMVEX///8AAAD39/c3NzednZ0LCwvj4+Pu7u53d3clJSXo6OhVVVWsrKxgYGA8PDyxsbEyMjIcHBzKyspIDLnNAAABJ0lEQVR4nO3cTQ6CMBBAYYoIoig/9z+sMaIHGIjPCe/bN3mLFrpopqokSTq2dmnphLDu0s/9paMzYq638nK70iEhQ3kb6JCI+r7W32s6JaB+rPWPlPWntf5k/a9Zz7GeYz3Heo71HOs51nOs51jPsZ5jPcd6jvUc6znWc6znWM+xnmM9x3qO9RzrOdZzrOdYz8ldX33fBJIR7djE9Gt9H1w/7vCGuZnmc0z5CK6fp2Zr/FBIGx8B12h8KdsO/ALXLweuz71zcp/a5F/M5H+ruL+4KUTlvqVZz7GeYz3Heo71HOs51nOs51jPsZ5jPcd6jvUc6znWc6znWM+xnmM9x3qO9RzrOdZzrOdYz7Gek3yicOppzrknaSefYp57gnyVe3q/JEn7eAJi9BWhRVECogAAAABJRU5ErkJggg=="
              alt="New Document Icon"
            />
            <span>New</span>
          </button>
        </div>
        <div className="sidebar__options">
          <div className="sidebar__option sidebar__option-Active">
            <MobileScreenShareIcon aria-label="My Drive" />
            <span>
              <b>My Drive</b>
            </span>
          </div>
          <div className="sidebar__option">
            <DevicesIcon aria-label="Computers" />
            <span>Computers</span>
          </div>
          <div className="sidebar__option">
            <PeopleAltIcon aria-label="Shared with me" />
            <span>Shared with me</span>
          </div>

          <div className="sidebar__option">
            <AccessTimeIcon aria-label="Recent" />
            <span>Recent</span>
          </div>
          <div className="sidebar__option">
            <StarOutlineIcon aria-label="Starred" />
            <span>Starred</span>
          </div>
          <div className="sidebar__option">
            <DeleteIcon aria-label="Trash" />
            <span>Trash</span>
          </div>
          <hr />
          <div className="sidebar__storage">
            <div className="sidebar__option">
              <CloudIcon aria-label="Storage" />
              <span>Storage</span>
            </div>
            <div className="progress-bar-container">
              <progress
                value="50"
                max="100"
                className="progress-bar"
              ></progress>
              <span>6.45 GB of 15 GB used</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

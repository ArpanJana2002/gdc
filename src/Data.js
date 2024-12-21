import React, {useEffect, useState} from 'react';
import './css/Data.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {db} from "./firebase";

function Data() {
    
  return (
    <div className='Data'>
        <div className='Data__header'>
            <div className='Data__headerLeft'>
                <p>My Drive</p>
                <ArrowDropDownIcon/>
            </div>

            <div className='Data__headerRight'>
                <FormatListBulletedIcon/>
                <InfoIcon/>
            </div>
        </div>
        <div className='Data__content'>
            <div className='Data__grid'>
                <div className='Data__file'>
                    <InsertDriveFileIcon/>
                    <p>Document 1</p>
                </div>
                <div className='Data__file'>
                    <InsertDriveFileIcon/>
                    <p>Document 2</p>
                </div>
                <div className='Data__file'>
                    <InsertDriveFileIcon/>
                    <p>Document 3</p>
                </div>

            </div>
            <div className='Data__list'>
                <div className='details__row'>
                    <p><b>Name <ArrowDownwardIcon/></b></p>
                    <p><b>Owner </b></p>
                    <p><b>Last modified </b></p>
                    <p><b>File size </b></p>
                </div>
                <div className='details__row'>
                    <p>Name <InsertDriveFileIcon/></p>
                    <p>Me </p>
                    <p>Yesterday </p>
                    <p>1GB </p>
                </div>
            </div>

        </div>
    </div>  
  );
}

export default Data;

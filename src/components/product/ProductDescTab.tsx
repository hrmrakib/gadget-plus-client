"use client";

import * as React from 'react';
import {useState} from "react"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IoMdStarOutline } from "react-icons/io";
import HoverRating from "./HoverRating";

export default function ProductDescTab() {
  const [value, setValue] = useState('1');
  const [openReview, setOpenReview] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue:string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', padding:{sx: "5px", md:"20px"} }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom:"20px" }}>
          <TabList 
          onChange={handleChange} 
          aria-label="lab API tabs example"
          >
            <Tab label="Description" value="1" sx={{color:"white"}}/>
            <Tab label="Shipping & Return" value="2" sx={{color:"white"}}/>
            <Tab label="Product Reviews" value="3" sx={{color:"white"}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{color:"white",border:"1px solid #8d8d8dbc", padding:"12px"}}>
          <div>
            <h2 className="text-2xl font-bold mb-3">We Made Everything Even Better</h2>
            <span className="w-[100px] h-1 contents border-b border-b-blue-500"></span>
            <p>- Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur.</p>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold mb-3">More Hours of Playback</h2>
            <span className="w-[100px] h-1 contents border-b border-b-blue-500"></span>
            <p>- Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. Lorem ipsum is so ubiquitous because it is so versatile. Select how many paragraphs you want, copy.</p>
            <p className="mt-2">- Real copy doesn't work that way. And that’s why a 15th century typesetter might have scrambled a passage of Cicero; he wanted people to focus on his fonts, to imagine their own content on the pages.</p>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold mb-3">Included in The Box</h2>
            <span className="w-[100px] h-1 contents border-b border-b-blue-500"></span>
            <p className="mt-2">- Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit.</p>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold mb-3">On-device Сontrol</h2>
            <span className="w-[100px] h-1 contents border-b border-b-blue-500"></span>
            <p className="mt-2">- Aluminium touch interface on right ear cup for controlling your music and phone calls (Play/Pause/Take call). Active Noise Cancellation (on/off). The Google Assistant is available only in specific counties.</p>
          </div>
        </TabPanel>
        <TabPanel value="2" sx={{color:"white", border:"1px solid #8d8d8dbc", padding:"12px"}}>
          <ul className="*:list-disc pl-7 flex flex-col gap-2">
          <li>We offer several shipping options to meet your needs. The available options and estimated delivery times are displayed during the checkout process.</li>
          <li>Shipping costs are calculated based on the weight of your order and the destination. You can view the shipping cost for your order during the checkout process before completing your purchase.</li>
          <li>Orders are typically processed and shipped within 1-2 business days after payment is received. During peak seasons or promotions, processing times may be slightly longer.</li>
          <li>We offer domestic shipping within [country]. Delivery times vary depending on your location but generally range from 2-7 business days.</li>
          <li>We also provide international shipping to select countries. International shipping times vary and may take between 7-21 business days, depending on the destination and customs processing.</li>
          <li>Once your order has been shipped, you will receive a confirmation email with a tracking number, allowing you to track the progress of your delivery.</li>
          <li>We want you to be completely satisfied with your purchase. If you are not satisfied for any reason, you may return the item within 30 days of receiving it for a full refund or exchange.</li>
          <li>To initiate a return, please contact our customer service team at [customer service email] with your order number and the reason for the return. We will provide you with instructions on how to return the item.</li>
          <li>If you receive a damaged or defective item, please contact us immediately with photos of the item and the packaging. We will arrange for a replacement or refund as needed.</li>
          <li>The customer is responsible for return shipping costs unless the return is due to a defect or error on our part.</li>
          <li>Please be aware that personalized or custom-made items may have different return policies. Check the product description for details.</li>
          </ul>
        </TabPanel>
        <TabPanel value="3" sx={{color:"white", border:"1px solid #8d8d8dbc", padding:"12px"}}>
          <h2 className="text-center">Customer Review</h2>

          <div className="my-10 flex  flex-wrap items-center justify-center gap-2 md:gap-20">
            <div>
              <div className="flex items-center gap-1.5">
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
              </div>
              <p>Be the first to write a review</p>
            </div>
            <div className="border-r border-gray-500 h-12 w-1"></div>

            <button onClick={()=> setOpenReview(!openReview)} className="bg-white font-semibold text-black px-3 py-2">{openReview ? "Cencel review":'Write a review'}</button>
          </div>

          {openReview && <div className="">
            <h2 className="text-center">Write a review</h2>
            <p className="text-center my-3">Rating</p>
            <HoverRating />
            <form className="md:w-[600px] mx-auto flex flex-col">
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-center" htmlFor="">Review Title</label>
                <input className="bg-transparent outline-none border p-2" type="text" placeholder="Give your review a title" />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-center" htmlFor="">Review</label>
                <textarea className="bg-transparent outline-none border p-2" cols={5} rows={5} placeholder="Write your review here" >
                  </textarea>
              </div>
              <button className="mt-5 bg-white font-semibold text-black px-3 py-2">Submit review</button>
            </form>
          </div>
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
}


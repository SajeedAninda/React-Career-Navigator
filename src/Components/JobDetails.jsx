import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidBusiness } from "react-icons/bi";

const JobDetails = () => {
    let jobData = useLoaderData();
    let { id } = useParams();
    let idInt = parseInt(id);
    let job = jobData.find(job => job.id === idInt);
    console.log(jobData);
    console.log(job);
    let { job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information, company_name } = job;

    return (
        <div>
            <h2 className='text-3xl text-[#1A1919] font-extrabold text-center my-8'>Job Details</h2>
            <div className='flex gap-6'>
                <div className='space-y-5 w-2/3'>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Job Description: </span>{job_description}</h2>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Job Responsibility: </span>{job_responsibility}</h2>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Educational Requirements: <br /></span>{educational_requirements}</h2>
                    <h2 className='text-[#757575] font-medium'><span className='text-[#1A1919] font-extrabold'>Experiences: <br /></span>{experiences}</h2>
                </div>

                <div className='w-1/3 p-4 bg-[#9de6bc6e] rounded-xl'>
                    <div className='border-b border-gray-300 py-4'>
                        <h2 className='text-[#1A1919] font-bold text-xl'>Job Details</h2>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <AiOutlineDollarCircle className='text-[#757575] font-semibold'></AiOutlineDollarCircle>
                        <p className='text-[#1A1919] font-semibold'>Salary: {salary} Annum</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <BsFillCalendarWeekFill className='text-[#757575] font-semibold'></BsFillCalendarWeekFill>
                        <p className='text-[#1A1919] font-semibold'>Job Title: {job_title}</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <BiSolidBusiness className='text-[#757575] font-semibold'></BiSolidBusiness>
                        <p className='text-[#1A1919] font-semibold'>Company: {company_name}</p>
                    </div>
                    <div className='border-b border-gray-300 py-4'>
                        <h2 className='text-[#1A1919] font-bold text-xl'>Contact Information</h2>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <BsTelephone className='text-[#757575] font-semibold'></BsTelephone>
                        <p className='text-[#1A1919] font-semibold'>Phone: {contact_information.phone}</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <AiOutlineMail className='text-[#757575] font-semibold'></AiOutlineMail>
                        <p className='text-[#1A1919] font-semibold'>Email: {contact_information.email}</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <IoLocationOutline className='text-[#757575] font-semibold'></IoLocationOutline>
                        <p className='text-[#1A1919] font-semibold'>Address: {contact_information.address}</p>
                    </div>
                    <button className='px-4 py-3 w-full mt-3 rounded-lg font-bold bg-[#78d4a0] text-white'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
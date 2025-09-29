"use client"
import SectionHeading from '@/app/components/SectionHeading'
import React, { useState } from 'react'
import { LuMessageSquareText } from "react-icons/lu";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { toast } from "sonner";
import Loader from '@/app/components/Loader';
import { TbCircleCheckFilled } from "react-icons/tb";
import { MdCancel, MdPhone } from "react-icons/md";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Content = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handlePhoneChange = (value: string | undefined) => {
    setInputData(prev => ({ ...prev, phone: value || "" }))
  }

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const apiUrl = process.env.NEXT_PUBLIC_WEB3FORMS_KEYS;

    if (!apiUrl) {
      toast.error("Token Missing !");
      return;
    }

    if (!inputData.name) {
      toast.custom(() => (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
          <MdCancel className='h-[32px] w-[32px] text-red-500' />
          <span className="text-lg font-[500] tracking-wider">Please enter your name.</span>
        </div>
      ), { position: "bottom-right" });
      return;
    }

    if (!inputData.email) {
      toast.custom(() => (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
          <MdCancel className='h-[32px] w-[32px] text-red-500' />
          <span className="text-lg font-[500] tracking-wider">Please enter your email.</span>
        </div>
      ), { position: "bottom-right" });
      return;
    }

    if (!inputData.phone) {
      toast.custom(() => (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
          <MdCancel className='h-[32px] w-[32px] text-red-500' />
          <span className="text-lg font-[500] tracking-wider">Please enter your phone number.</span>
        </div>
      ), { position: "bottom-right" });
      return;
    }

    if (!inputData.message) {
      toast.custom(() => (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
          <MdCancel className='h-[32px] w-[32px] text-red-500' />
          <span className="text-lg font-[500] tracking-wider">Please enter your message.</span>
        </div>
      ), { position: "bottom-right" });
      return;
    }

    const toastID = toast.custom(() => (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
        <Loader size={32} />
        <span className="text-lg font-[500] tracking-wider">Sending Message</span>
      </div>
    ), { position: "bottom-right" });

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", apiUrl);
    formData.append("phone", inputData.phone);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    toast.dismiss(toastID);

    if (data.success) {
      toast.custom(() => (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
          <TbCircleCheckFilled className='h-[32px] w-[32px] text-green-500' />
          <span className="text-lg font-[500] tracking-wider">Message sent.</span>
        </div>
      ), { position: "bottom-right" });
    } else {
      toast.custom(() => (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-2xl rounded-lg">
          <MdCancel className='h-[32px] w-[32px] text-red-500' />
          <span className="text-lg font-[500] tracking-wider">Something went wrong.</span>
        </div>
      ), { position: "bottom-right" });
    }
  }

  return (
    <div className="relative w-full flex flex-col items-center rounded-tl-[36px] rounded-bl-[56px] rounded-tr-[64px]">
      <div className="w-full max-w-2xl p-0 relative z-10">
        <SectionHeading heading="Send us a message" />

        <form className="mt-10 flex flex-col gap-8" onSubmit={onSubmitHandler}>

          {/* Name */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-600 absolute -top-3 left-3 bg-[#f5f5f5] px-2">
              <FaUser className="text-[#0077b6]" /> Name
            </label>
            <input
              type="text"
              value={inputData.name}
              name="name"
              onChange={onChangeHandler}
              placeholder="Enter your name"
              className="w-full h-14 font-[500] tracking-wide px-4 py-3 rounded-lg border-2 border-gray-300 text-lg transition-all
                focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/30 outline-none shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-600 absolute -top-3 left-3 bg-[#f5f5f5] px-2">
              <MdEmail className="text-[#0077b6]" /> Email
            </label>
            <input
              type="email"
              value={inputData.email}
              name="email"
              onChange={onChangeHandler}
              placeholder="Enter your email"
              className="w-full h-14 font-[500] tracking-wide px-4 py-3 rounded-lg border-2 border-gray-300 text-lg transition-all
                focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/30 outline-none shadow-sm"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-600 absolute -top-3 left-3 bg-[#f5f5f5] px-2 z-10">
              <MdPhone className="text-[#0077b6]" /> Phone
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              value={inputData.phone}
              onChange={handlePhoneChange}
              defaultCountry="IN"
              className="w-full h-14 px-4 py-3 font-[500] tracking-wide rounded-lg border-2 border-gray-300 text-lg shadow-sm
                focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/30 outline-none [&_input]:border-0 [&_input]:outline-none
                [&_input]:focus:ring-0 [&_input]:focus:border-0"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-600 absolute -top-3 left-3 bg-[#f5f5f5] px-2">
              <LuMessageSquareText className="text-[#0077b6]" /> Message
            </label>
            <textarea
              placeholder="Write your message..."
              value={inputData.message}
              onChange={onChangeHandler}
              name="message"
              rows={4}
              className="w-full px-4 py-3 font-[500] tracking-wide rounded-lg border-2 border-gray-300 text-lg transition-all
                focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/30 outline-none resize-none shadow-sm"
            />
          </div>

          {/* Submit */}
          <div className="w-full flex justify-end mt-2">
            <button
              type="submit"
              className="px-8 py-3 text-white text-lg font-semibold rounded-lg flex items-center gap-2
                bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#0096c7] hover:to-[#00b4d8] 
                shadow-md hover:shadow-lg transition-all duration-300"
            >
              <RiSendPlaneFill className="text-xl" /> Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Content
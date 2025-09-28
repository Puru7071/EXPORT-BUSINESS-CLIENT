import SectionHeading from '@/app/components/SectionHeading'
import React from 'react'
import { LuMessageSquareText } from "react-icons/lu";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Content = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Card */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md  p-4 relative z-10">
        <SectionHeading heading="Send us a message" />

        <div className="mt-8 flex flex-col gap-8">
          {/* Email Field */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 absolute -top-3 left-3 bg-white px-2">
              <MdEmail className="text-[#0077b6]" /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 px-4 py-3 rounded-lg border-2 border-gray-300 text-lg transition-all
                focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/30 outline-none shadow-sm"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 absolute -top-3 left-3 bg-white px-2">
              <LuMessageSquareText className="text-[#0077b6]" /> Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-lg transition-all
                focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/30 outline-none resize-none shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-end">
            <button
              className="px-8 py-3 text-white text-lg font-semibold rounded-lg flex items-center gap-2
                bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#0096c7] hover:to-[#00b4d8] 
                shadow-md hover:shadow-lg transition-all duration-300"
            >
              <RiSendPlaneFill className="text-xl" /> Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

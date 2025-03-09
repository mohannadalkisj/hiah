'use client';

import type React from 'react';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FullPageLoader from './fullpageloader';
import { addData } from '@/lib/firebase';

export default function AddressForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    civilId: '',
    unitNumber: '',
    floor: '',
    voucher: '',
    plot: '',
    area: '',
    mobile: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    addData(formData)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 bg-white/95 p-8 rounded-lg shadow-xl"
    >
      <div className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-right block text-lg">
            الاسم
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
          />
        </div>

        {/* Civil ID */}
        <div className="space-y-2">
          <Label htmlFor="civilId" className="text-right block text-lg">
            الرقم المدني
          </Label>
          <Input
            id="civilId"
            name="civilId"
            value={formData.civilId}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
            maxLength={12}
          />
        </div>

        {/* Unit Number / Delivery Address */}
        <div className="space-y-2">
          <Label htmlFor="unitNumber" className="text-right block text-lg">
            رقم الوحدة
          </Label>
          <Input
            id="unitNumber"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
          />
        </div>

        {/* Floor */}
        <div className="space-y-2">
          <Label htmlFor="floor" className="text-right block text-lg">
            الدور
          </Label>
          <Input
            id="floor"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
          />
        </div>

        {/* Voucher */}
        <div className="space-y-2">
          <Label htmlFor="voucher" className="text-right block text-lg">
            قسيمة
          </Label>
          <Input
            id="voucher"
            name="voucher"
            value={formData.voucher}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
          />
        </div>

        {/* Plot */}
        <div className="space-y-2">
          <Label htmlFor="plot" className="text-right block text-lg">
            قطعة
          </Label>
          <Input
            id="plot"
            name="plot"
            value={formData.plot}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
          />
        </div>

        {/* Area */}
        <div className="space-y-2">
          <Label htmlFor="area" className="text-right block text-lg">
            المنطقة
          </Label>
          <Input
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
          />
        </div>

        {/* Mobile */}
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-right block text-lg">
            رقم الهاتف النقال
          </Label>
          <Input
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="text-right"
            dir="rtl"
            type="tel"
          />
        </div>
      </div>
      {loading &&<FullPageLoader/>}
    </form>
  );
}

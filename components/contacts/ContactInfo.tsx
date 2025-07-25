"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-primary mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        {/* Location */}
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-coffee-green flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary mb-1">Our Location</h3>
            <p className="text-muted-foreground">
              123 Coffee Street
              <br />
              Nairobi, Kenya
              <br />
              P.O. Box 12345-00100
            </p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-coffee-green flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary mb-1">Phone</h3>
            <p className="text-muted-foreground">
              +254 700 123 456
              <br />
              +254 722 987 654
            </p>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-coffee-green flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary mb-1">Email</h3>
            <p className="text-muted-foreground">
              info@beamscoffee.com
              <br />
              sales@beamscoffee.com
            </p>
          </div>
        </div>
        {/* Hours */}
        <div className="flex items-start gap-4">
          <Clock className="h-6 w-6 text-coffee-green flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
            <p className="text-muted-foreground">
              Mon - Fri: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

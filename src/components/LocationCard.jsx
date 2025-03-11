import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LocationCard = ({ location }) => {
    const navigate = useNavigate();
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
      onClick={() => navigate(`/location/${location.id}`)}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={location.image}
          alt={location.name}
          className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300 z-0"
        />
         {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300" /> */}
</div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5" />
          <h3 className="text-2xl font-bold">{location.name}</h3>
        </div>
        <p className="text-sm text-gray-200">{location.description}</p>
      </div>
    </div>
  )
}

export default LocationCard
import React from 'react'
import { locations } from '../data';
import { MapPin } from 'lucide-react';
import LocationCard from '../components/LocationCard';

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MapPin className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Study Location</h1>
        </div>
        <p className="text-lg text-gray-600">Discover courses and colleges in your preferred city</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  </div>  )
}

export default LocationsPage
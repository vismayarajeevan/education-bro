import React from 'react'
import { useParams } from 'react-router-dom';
import { courses, locations } from '../data';
import { GraduationCap } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {

    const { locationId } = useParams();
  const location = locations.find(loc => loc.id === locationId);
  const locationCourses = courses.filter(course => course.locationId === locationId);

  if (!location) return null;

  return (
    <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Courses in {location.name}</h1>
        </div>
        <p className="text-lg text-gray-600">Explore available courses and programs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locationCourses.map((course) => (
          <CourseCard key={course.id} course={course} locationId={locationId} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default CoursesPage
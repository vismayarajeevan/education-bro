import React from 'react';
import { useParams } from 'react-router-dom';
import { CollegeCard } from '../components/CollegeCard';
import { colleges, courses, locations } from '../data';

const CollegesPage = () => {
  const { locationId, courseId } = useParams();
  
  const location = locations.find(loc => loc.id === locationId);
  const course = courses.find(c => c.id === courseId);
  const filteredColleges = colleges.filter(
    college => college.locationId === locationId && college.courses.includes(courseId)
  );

  if (!location || !course) return <div>Not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.name} Colleges in {location.name}
          </h1>
          <p className="text-xl text-gray-600">Choose your preferred institution</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              locationId={locationId}
              courseId={courseId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegesPage;
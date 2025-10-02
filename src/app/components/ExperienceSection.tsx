"use client"; // REQUIRED for useEffect and useRef

// src/app/components/ExperienceSection.tsx

import React, { useEffect, useRef } from 'react'; // <-- ONLY ONE import line here

// Define the structure for your experience data
interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
}

const experiences: Experience[] = [
  // IMPORTANT: Make sure this data matches your actual experience items
  { id: 1, date: 'August 2021 - Ongoing', title: 'UX Designer', company: 'Amazon Web Services' },
  { id: 2, date: 'June 2020 - June 2021', title: 'President', company: 'AIGA Cal Poly SLO' },
  // Add any other items you want to include in the timeline here...
];
const ExperienceSection: React.FC = () => {
    // 1. Ref to attach the Intersection Observer to the main container
    const sectionRef = useRef<HTMLElement>(null);

    // 2. The Animation Hook
    useEffect(() => {
        // Only run on the client side (since IntersectionObserver is a browser API)
        if (typeof window === 'undefined' || !sectionRef.current) {
            return;
        }
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // Check if the observed element (the timeline item) is intersecting
                    if (entry.isIntersecting) {
                        const item = entry.target;
                        
                        // Remove initial state classes (hidden/moved) and add final state classes (visible/default position)
                        item.classList.remove('opacity-0', 'translate-y-8');
                        item.classList.add('opacity-100', 'translate-y-0');
                        
                        // Stop observing this element once it's visible
                        observer.unobserve(item);
                    }
                });
            },
            // Options: Start the animation when 20% of the element is visible
            { threshold: 0.2 } 
        );

        // Find all elements with the 'experience-item' class within the section
        sectionRef.current.querySelectorAll('.experience-item').forEach(item => {
            observer.observe(item)
        });

        // Cleanup function: stop observing when the component unmounts
        return () => observer.disconnect();
    }, []); 
	return (
		<section ref={sectionRef} id="experience" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title Section */}
				<div className="mb-12 text-center">
					<div className="h-1 w-16 mx-auto bg-blue-500 mb-2"></div> 
					<h2 className="text-5xl font-extrabold text-gray-900">Experience</h2>
					<p className="mt-2 text-xl text-gray-600">Catch up on what I've been up to recently:</p>
				</div>
				{/* Timeline Container */}
				<div className="relative">
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 hidden sm:block"></div>
					<div className="space-y-16">
						{experiences.map((exp, index) => (
							<div
								key={exp.id}
								className={
									`relative flex justify-start sm:justify-center experience-item opacity-0 translate-y-8 transition-all duration-700`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'} flex flex-col items-start sm:items-center`}>
									<div className="bg-white rounded-xl shadow-lg p-6 w-full">
										<span className="text-sm text-blue-600 font-semibold">{exp.date}</span>
										<h3 className="text-2xl font-bold text-gray-900 mt-2">{exp.title}</h3>
										<p className="text-lg text-gray-700">{exp.company}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
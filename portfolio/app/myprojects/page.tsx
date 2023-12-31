import React from 'react';
import { ProjectCard } from './components/project-card';
import { projects } from '../data/data';

const MyProjects = () => {
    return (
    <div className='flex flex-col w-11/12 content-center m-auto mt-10'>
        <h2 className='text-2xl font-bold mb-4'>MyProjects</h2>
        <div className=' sm:flex sm:flex-col sm:items-center sm: lg:flex lg:flex-row lg:flex-wrap gap-10 mt-6'>
            {projects.map(project => {
                return <ProjectCard key="uniqueProject" data={project} />;
            })}
        </div>
    </div>
    );
};

export default MyProjects;
import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import getOrderStatus from './lib/helpers'
import projects from '../data/projects.json'
import Title from './Title'


export default function ProjectList() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white">
            <Title title="Danh sách dự án" />
            <div className='pt-20'>
                <div className="left-1/4 ml-80 bg-white px-4 pt-3 pb-4 ">
                    <div className="mt-3">
                        <table className="w-full text-gray-700 font-['Roboto']">
                            <thead className='border-b-4 border-gray-100'>
                                <tr>
                                    <th className="min-w-10 px-4 text-2xl font-['Roboto']">ID</th>
                                    <th className="min-w-32 px-4 text-2xl font-['Roboto']">Tên dự án</th>
                                    <th className="min-w-96 px-4 text-2xl font-['Roboto']">Mô tả</th>
                                    <th className="min-w-28 px-4 text-2xl font-['Roboto']" >Deadline</th>
                                    <th className="min-w-40 px-4 text-2xl font-['Roboto']">Tiến độ</th>
                                    <th className="min-w-36 px-4 text-2xl font-['Roboto']">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td className="text-left font-['Roboto']">
                                            <Link to={`/projects/detail:${project.id}`}>#{project.id}</Link>
                                        </td>
                                        <td className="text-left font-['Roboto']">
                                            <Link to={`/project/detail:/${project.id}`}>#{project.title}</Link>
                                        </td>
                                        <td className="text-left font-['Roboto']">
                                            {project.description}
                                        </td>
                                        <td className="text-left font-['Roboto']">{format(new Date(project.deadline), 'dd MMM yyyy')}</td>
                                        <td className="text-center font-['Roboto']">{project.process}</td>
                                        <td className="text-left font-['Roboto']">{getOrderStatus(project.process)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}
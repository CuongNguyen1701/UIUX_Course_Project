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
                <div className="left-1/4 ml-80 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
                    <div className="border-x border-gray-200 rounded-sm mt-3">
                        <table className="w-full text-gray-700">
                            <thead>
                                <tr>
                                    <th className='min-w-10 px-4'>ID</th>
                                    <th className='min-w-32 px-4'>Tên dự án</th>
                                    <th className='min-w-96 px-4'>Mô tả</th>
                                    <th className='min-w-28 px-4' >Deadline</th>
                                    <th className='min-w-40 px-4'>Tiến độ</th>
                                    <th className='min-w-36 px-4'>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td className='text-left'>
                                            <Link to={`/projects/detail:${project.id}`}>#{project.id}</Link>
                                        </td>
                                        <td className='text-left'>
                                            <Link to={`/project/detail:/${project.id}`}>#{project.title}</Link>
                                        </td>
                                        <td className='text-left'>
                                            {project.description}
                                        </td>
                                        <td className='text-left'>{format(new Date(project.deadline), 'dd MMM yyyy')}</td>
                                        <td className='text-center'>{project.process}</td>
                                        <td className='text-left'>{getOrderStatus(project.process)}</td>
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
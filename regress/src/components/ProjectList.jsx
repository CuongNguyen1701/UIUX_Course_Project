import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import getOrderStatus from './lib/helpers'
import projects from '../data/projects.json'
import Title from './Title'

const getProjectProcess = (process) => {
    let processColor;
    let processWidth;
    if (process <= 0) {
        processColor = "bg-white";
        processWidth = "w-0";
    } else if (process < 30) {
        processColor = "bg-red-600";
        processWidth = "w-16";
    } else if (process <= 50) {
        processColor = "bg-yellow-500";
        processWidth = "w-28";
    } else if (process < 80) {
        processColor = "bg-indigo-400";
        processWidth = "w-44";
    } else if (process < 100) {
        processColor = "bg-green-600";
        processWidth = "w-48";
    } else {
        processColor = "bg-green-600";
        processWidth = "w-56";
    }
    return (
        <div className="w-full h-2.5 relative">
            <div className="w-full h-2.5 left-0 top-0 absolute bg-white rounded-lg shadow border border-black" />
            <div
                className={`${processWidth} h-2.5 left-0 top-0 absolute ${processColor} rounded-tl-lg rounded-bl-lg border border-black`}
            />
        </div>
    )
}

export default function ProjectList() {
    return (
        <div className="relative flex flex-col h-screen w-screen bg-white">
            <Title title="Danh sách dự án" />
            <div className='pt-44'>
                <div className="ml-80 bg-white px-4 pt-3 pb-4 ">
                    <div className="mt-3">
                        <table className="w-full text-gray-700 font-['Roboto']">
                            <thead className='border-b-4 border-primary-200 rounded-l'>
                                <tr>
                                    <th className="min-w-10 px-4  text-2xl font-['Roboto']">ID</th>
                                    <th className="min-w-28 px-4 text-2xl font-['Roboto']">Tên dự án</th>
                                    <th className="min-w-80 px-4 text-2xl font-['Roboto']">Mô tả</th>
                                    <th className="min-w-28 px-4 text-2xl font-['Roboto']" >Deadline</th>
                                    <th className="min-w-56 px-4 text-2xl font-['Roboto']">Tiến độ</th>
                                    <th className="min-w-36 px-4 text-2xl font-['Roboto']">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td className="font-['Roboto'] pb-4 border-r-2 border-primary-200">
                                            <Link to={`/projects/${project.id}`}>{project.id}</Link>
                                        </td>
                                        <td className="text-left pl-8 border-r-2 border-primary-200 font-['Roboto']">
                                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                                        </td>
                                        <td className="text-left pl-8 border-r-2 border-primary-200 font-['Roboto']">
                                            {project.description}
                                        </td>
                                        <td className="text-left pl-6 border-r-2 border-primary-200 font-['Roboto']">{format(new Date(project.deadline), 'dd MMM yyyy')}</td>
                                        <td className="text-center border-r-2 border-primary-200 font-['Roboto']">{getProjectProcess(project.process)}</td>
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
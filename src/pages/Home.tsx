import React from 'react';
import Layout from '../components/Layout';
import ProjectBoards from '../components/ProjectBoards';

export default function Home(props:any) {
    return (
        <Layout>
            <div className=" justify-center ml-64">
                <div className=" flex py-12 ml-4">
                    <ProjectBoards/>
                </div>
            </div>
        </Layout>
    );
}

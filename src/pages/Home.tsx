import React from 'react';
import ProjectBoards from '../components/ProjectBoards';

export default  function Home() {
  return (
    <div className="flex justify-center">
      <div className=" flex overflow-x-scroll py-12">
      <ProjectBoards/>
      </div>
    </div>
  );
}

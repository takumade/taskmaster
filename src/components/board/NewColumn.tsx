import React from 'react';

export default function NewColumn() {
  return (
    <>
      <form className="relative bottom-2 mr-4">
                            <div className="w-44">
                                <div>

                                    <input
                                        id="newList"
                                        placeholder='New List'
                                        type="text"
                                        className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                                </div>

                            </div>


                        </form>
    </>
  );
}

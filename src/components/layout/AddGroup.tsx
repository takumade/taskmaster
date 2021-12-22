import React from 'react';
import { useRecoilState } from 'recoil';
import NewGroupState from '../../atoms/newGroupState';
import OutsideClickHandler from 'react-outside-click-handler';

export default function AddGroup() {

    const [showDropdown, setShowDropdown] = useRecoilState(NewGroupState);

    const onClick = () => {
        setShowDropdown(!showDropdown);
    }

    return (

        <div className="relative inline-block ">
            {/* <!-- Dropdown toggle button --> */}

            <button
                onClick={onClick}
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>

                <span className="mx-4 font-medium">Add Group</span>
            </button>

            {/* <!-- Dropdown menu --> */}
            {showDropdown
                ? <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
                  <div
                        className="absolute left-20 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
                        <form className="p-4 border">
                            <div className=" mt-4 ">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Group Name</label>
                                    <input
                                        id="groupName"
                                        placeholder='Group Name'
                                        type="text"
                                        className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                                </div>

                            </div>

                            <div className="flex justify-end mt-6">
                                <button
                                    className="px-6 py-1 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </div>
                        </form>
                    </div>
                </OutsideClickHandler>
                : null
}
        </div>

    );
}

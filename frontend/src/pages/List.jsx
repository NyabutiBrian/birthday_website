import React, { useState, useEffect  } from 'react';

import blob from '../assets/images/blob-scene.svg'
import { Link } from 'react-router-dom';

const List = () => {

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch articles
        fetch('https://backend-momanyi.onrender.com/birthday/api/details/')
            .then(response => response.json())
            .then(data => {
                setDetails(data);
                setLoading(false); // Set loading to false when articles are fetched
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

  return (
    <div className="min-h-[100dvh] font-Poppins bg-cover bg-center" style={{backgroundImage: `url(${blob})`,}} alt="Attractive Background Birthday Image" title="Attractive Background Birthday Image" loading='lazy'>
        {/* Container */}
        <div className="max-w-7xl mx-4 xl:mx-auto rounded-3xl py-16">
            <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
                <div>
                    <div className="flex justify-start px-8 md:px-16">
                        <h1 className="-mt-12 text-2xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">Birthday Names</h1>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {/* Names */}
                        {loading ? (
                            <div className="flex justify-center items-center py-4">
                                <span className="loading loading-dots loading-lg text-center text-secondary"></span>
                            </div>
                        ):(
                            <>
                                {details.map((detail) => (
                                    <Link to={`/to/${detail.slug}`} className="py-4 text-secondary" key={detail.slug}>
                                        <div className="py-3">
                                            <div className="px-14 py-36 sm:p-36 rounded-3xl bg-center bg-cover shadow-2xl" style={{backgroundImage: `url(${detail.image})`,}}>
                                            </div>
                                            <div className="flex flex-row justify-evenly pt-4">
                                                <div>
                                                    <h6 className="text-secondary font-semibold text-sm">{detail.first_name} {detail.last_name}</h6>
                                                </div>
                                                <div>
                                                    <h6 className="text-secondary font-semibold text-sm">{detail.birth_date}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </>
                        )}

                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default List;

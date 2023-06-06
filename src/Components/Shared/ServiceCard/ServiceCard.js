import React from 'react';

const ServiceCard = ({ card }) => {
    return (
        <div className="card w-96 glass">
            <figure className='h-64'><img src={card.image} className='hover:scale-150 ease-in duration-500' alt="service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-glass">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
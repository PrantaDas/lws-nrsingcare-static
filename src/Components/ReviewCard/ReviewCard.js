import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import './ReviewCard.css';

const ReviewCard = () => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={avatar} alt='' />
                    </div>
                </div>
                <div>
                    <p className="pt-3 font-bold italic tracking-wider">Issac Lily</p>
                    <p className="text-sm my-5 card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui ex est nam unde autem eos maiores, id earum repellat?</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
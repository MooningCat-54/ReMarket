// ProfileListingCard.tsx
import React from "react";
import "./ProfileListingCard.css";

interface ListingItem {
  id: number;
  title: string;
  content: string;
  category: string;
  start_price: number;
  start_date?: string;
}

interface ProfileListingCardProps {
  listing: ListingItem;
}

export const ProfileListingCard: React.FC<ProfileListingCardProps> = ({ listing }) => {
    const categoryClass = listing.category ? `label-${listing.category.toLowerCase()}` : 'label-default';

    return (
        <article className="profile-listing-card">
            <div className="card-top-accent"></div>
            <div className="listing-header">
                <span className={`label-badge ${categoryClass}`}>
                    {listing.category}
                </span>
                <span className="time-posted">Aktif İlan</span>
            </div>
            
            <h4>{listing.title}</h4>
            
            <p className="listing-desc">
                {listing.content}
            </p>
            
            <div className="listing-footer">
                <div className="price">
                    {listing.start_price ? listing.start_price.toLocaleString('tr-TR') : '0'} ₺
                </div>
                <button className="btn-xs btn-outline">İncele</button>
            </div>
        </article>
    );
};
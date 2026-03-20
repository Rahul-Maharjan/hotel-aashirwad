import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    Users, Maximize, BedDouble, ArrowLeft, CheckCircle2,
    X, ChevronLeft, ChevronRight, Calendar, ArrowRight,
    Wifi, Tv, Wind, Coffee, Bath, ShieldCheck, Shirt, Thermometer,
    Package, Lock, Wine
} from 'lucide-react';
import CommonHeader from '../../components/CommonHeader';
import { roomData } from '../../data/roomData';

// Map specific strings to icons
const getAmenityIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('tv')) return <Tv className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('wifi') || n.includes('wi-fi')) return <Wifi className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('hair dryer')) return <Wind className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('coffee') || n.includes('tea')) return <Coffee className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('bath')) return <Bath className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('iron')) return <Shirt className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('air conditioning')) return <Thermometer className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('fridge')) return <Package className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('safe') || n.includes('disturb')) return <Lock className="w-5 h-5 text-[#9b7b45]" />;
    if (n.includes('bar')) return <Wine className="w-5 h-5 text-[#9b7b45]" />;
    return <CheckCircle2 className="w-5 h-5 text-[#9b7b45]" />;
};

const SingleRoom = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const room = roomData.find(r => r.id === slug);
    const relatedRooms = roomData.filter(r => r.id !== slug).slice(0, 3);

    // Lightbox State
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Scroll to top when room changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!room) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-[#f7f5f1]">
                <h2 className="text-3xl font-serif uppercase tracking-wider text-[#0f1f47] mb-4">Room Not Found</h2>
                <p className="text-[#4f4f4f] mb-8 max-w-md text-center">
                    The room you are looking for does not exist or has been removed.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1f47] text-white font-semibold uppercase tracking-wider hover:bg-[#9b7b45] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </button>
            </div>
        );
    }

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
    };

    return (
        <article className="min-h-screen bg-white">
            {/* Header */}
            <CommonHeader
                title={room.name}
                description={room.shortDescription}
                image={room.image}
                imageAlt={room.name}
                heightClassName="h-[50vh]"
                minHeightClassName="min-h-[400px]"
                showAccent={true}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                {/* Navigation / Breadcrumb */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e5e5e5]">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-[#4f4f4f] uppercase tracking-wider">
                        <Link to="/" className="hover:text-[#9b7b45] transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/#rooms" className="hover:text-[#9b7b45] transition-colors">Rooms</Link>
                        <span>/</span>
                        <span className="text-[#0f1f47] font-semibold">{room.name}</span>
                    </nav>

                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#4f4f4f] hover:text-[#0f1f47] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Rooms
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Image Gallery */}
                        <section className="space-y-4">
                            <div
                                className="w-full h-[400px] md:h-[500px] cursor-pointer group relative overflow-hidden"
                                onClick={() => openLightbox(0)}
                            >
                                <img
                                    src={room.images[0]}
                                    alt="Featured"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Maximize className="text-white w-8 h-8" />
                                </div>
                            </div>

                            {room.images.length > 1 && (
                                <div className="grid grid-cols-3 gap-4">
                                    {room.images.slice(1, 4).map((img, idx) => (
                                        <div
                                            key={idx + 1}
                                            className="h-[100px] sm:h-[150px] cursor-pointer group relative overflow-hidden"
                                            onClick={() => openLightbox(idx + 1)}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* If there are more than 4 images, show overlay on the last thumbnail */}
                                            {idx === 2 && room.images.length > 4 && (
                                                <div className="absolute inset-0 bg-[#0f1f47]/80 flex items-center justify-center">
                                                    <span className="text-white font-semibold tracking-wider text-xl">
                                                        +{room.images.length - 4}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Room Overview Summary */}
                        <section className="bg-[#f7f5f1] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 border-l-4 border-[#0f1f47]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                                    <Maximize className="w-6 h-6 text-[#9b7b45]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Size</p>
                                    <p className="font-serif text-[#0f1f47] text-lg">{room.details.sqrFt}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                                    <Users className="w-6 h-6 text-[#9b7b45]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Occupancy</p>
                                    <p className="font-serif text-[#0f1f47] text-lg">{room.details.maxGuests}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                                    <BedDouble className="w-6 h-6 text-[#9b7b45]" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Bed Type</p>
                                    <p className="font-serif text-[#0f1f47] text-lg">{room.details.bedType}</p>
                                </div>
                            </div>
                        </section>

                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">Room Overview</h2>
                            <p className="text-[#4f4f4f] leading-relaxed text-justify">
                                {room.description}
                            </p>
                        </section>

                        {/* Features / Highlights */}
                        <section>
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">Room Highlights</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {room.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-[#9b7b45] flex-shrink-0" />
                                        <span className="text-[#4f4f4f]">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Amenities */}
                        <section>
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">Amenities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {room.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center flex-col text-center p-4 border border-[#e5e5e5] bg-white hover:border-[#9b7b45] transition-colors group">
                                        <div className="mb-3 transform group-hover:-translate-y-1 transition-transform">
                                            {getAmenityIcon(amenity)}
                                        </div>
                                        <span className="text-[#2d2d2d] font-medium text-sm">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Policies */}
                        <section className="border-t border-[#e5e5e5] pt-10">
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">Room Policies</h2>
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12">
                                    <span className="font-semibold text-[#0f1f47] uppercase tracking-wider text-sm min-w-[150px]">Check-In / Check-Out</span>
                                    <div className="text-[#4f4f4f]">
                                        <p>Check-in: {room.policies.checkIn}</p>
                                        <p>Check-out: {room.policies.checkOut}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12">
                                    <span className="font-semibold text-[#0f1f47] uppercase tracking-wider text-sm min-w-[150px]">Cancellation</span>
                                    <div className="text-[#4f4f4f]">
                                        <p>{room.policies.cancellation}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12">
                                    <span className="font-semibold text-[#0f1f47] uppercase tracking-wider text-sm min-w-[150px]">House Rules</span>
                                    <ul className="text-[#4f4f4f]">
                                        {room.policies.rules.map((rule, idx) => (
                                            <li key={idx} className="mb-1 flex items-center gap-2">
                                                <span className="text-[#9b7b45]">-</span> {rule}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar (Right) - Booking Widget */}
                    {/* Booking Form Simulation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-[#f7f5f1] border border-[#e5e5e5] p-6 shadow-xl">
                            <div className="mb-6 pb-6 border-b border-[#d8d1c2]">
                                <h3 className="font-serif text-[#0f1f47] text-2xl uppercase tracking-wide mb-2">{room.name}</h3>
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="text-3xl font-bold text-[#9b7b45]">{room.details.price}</span>
                                    <span className="text-[#4f4f4f] text-sm uppercase tracking-wider">/ Night</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0f1f47] mb-2">Check-In</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-[#9b7b45]" />
                                        <input
                                            type="date"
                                            className="w-full bg-white border border-[#e5e5e5] pl-10 pr-4 py-3 text-[#2d2d2d] focus:outline-none focus:border-[#9b7b45]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0f1f47] mb-2">Check-Out</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-[#9b7b45]" />
                                        <input
                                            type="date"
                                            className="w-full bg-white border border-[#e5e5e5] pl-10 pr-4 py-3 text-[#2d2d2d] focus:outline-none focus:border-[#9b7b45]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0f1f47] mb-2">Guests</label>
                                    <select className="w-full bg-white border border-[#e5e5e5] px-4 py-3 text-[#2d2d2d] focus:outline-none focus:border-[#9b7b45] appearance-none">
                                        <option>1 Adult</option>
                                        <option>2 Adults</option>
                                        <option>3 Adults</option>
                                    </select>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-[#0f1f47] text-white font-semibold uppercase tracking-widest hover:bg-[#9b7b45] transition-colors">
                                Book This Room
                            </button>

                            <p className="mt-4 text-center text-xs text-[#6a6a6a] uppercase tracking-wider flex items-center justify-center gap-2">
                                <Lock className="w-3 h-3 text-[#9b7b45]" /> Best Price Guaranteed
                            </p>
                        </div>
                    </div>
                </div>

                {/* Similar Rooms Section */}
                <div className="mt-20 pt-16 border-t border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wide">Other Rooms</h2>
                        <Link to="/" className="hidden sm:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0f1f47] hover:text-[#9b7b45] transition-colors">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedRooms.map(r => (
                            <Link
                                to={`/rooms/${r.id}`}
                                key={r.id}
                                className="group block bg-[#f7f5f1] border border-transparent hover:border-[#e5e5e5] transition-colors"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={r.image}
                                        alt={r.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-[#0f1f47] uppercase tracking-wider shadow-sm">
                                        {r.details.price} / Night
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-xl text-[#0f1f47] uppercase tracking-wide group-hover:text-[#9b7b45] transition-colors mb-2">
                                        {r.name}
                                    </h3>
                                    <p className="text-[#6a6a6a] text-sm uppercase tracking-wider flex items-center gap-4">
                                        <span><Users className="w-4 h-4 inline mr-1 text-[#9b7b45]" /> {r.details.maxGuests.charAt(0)} Max</span>
                                        <span><Maximize className="w-4 h-4 inline mr-1 text-[#9b7b45]" /> {r.details.sqrFt}</span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 lg:left-10 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
                    </button>

                    <img
                        src={room.images[currentImageIndex]}
                        alt="Lightbox View"
                        className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
                    />

                    <button
                        onClick={nextImage}
                        className="absolute right-4 lg:right-10 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
                    </button>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 tracking-widest text-sm font-semibold">
                        {currentImageIndex + 1} / {room.images.length}
                    </div>
                </div>
            )}
        </article>
    );
};

export default SingleRoom;

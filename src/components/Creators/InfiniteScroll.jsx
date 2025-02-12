import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const InfiniteScroll = () => {
    const creators = [
        {
            name: "Ethan Taylor",
            followers: "212k",
            img: "/pexels-ana-ferreira-914401-1895976-min.jpg",
        },
        {
            name: "Sophia Carter",
            followers: "56k",
            img: "/pexels-chloekalaartist-1043474-min.jpg",
        },
        {
            name: "Liam Anderson",
            followers: "582k",
            img: "/pexels-cxpturing-souls-1377266-3014808-min.jpg",
        },
        {
            name: "Agatha Ferraz",
            followers: "97k",
            img: "/pexels-danxavier-1121796-min.jpg",
        },
        {
            name: "Micael Wilson",
            followers: "83k",
            img: "/pexels-esma-atak-46104031-19270854-min.jpg",
        },
        {
            name: "Olivia Bennett",
            followers: "432k",
            img: "/pexels-mostafasanadd-878358-min.jpg",
        },
    ];

    const repeatedCreators = [...creators, ...creators, ...creators];
    const controls = useAnimationControls();
    const containerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [containerWidth, setContainerWidth] = useState(0);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = creators.map(creator => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = creator.img;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setIsLoading(false);
            } catch (error) {
                console.error('Error preloading images:', error);
                setIsLoading(false); // Continue even if some images fail to load
            }
        };

        preloadImages();
    }, []);

    // Set up animation after images are loaded
    useEffect(() => {
        if (isLoading || !containerRef.current) return;

        const container = containerRef.current;
        const scrollWidth = container.scrollWidth;
        const singleSetWidth = scrollWidth / 3;
        setContainerWidth(singleSetWidth);

        const animate = async () => {
            await controls.start({
                x: -singleSetWidth,
                transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        };

        animate();

        return () => controls.stop();
    }, [isLoading, containerWidth]);

    if (isLoading) {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <div className="animate-pulse text-lg">Loading creators...</div>
            </div>
        );
    }

    return (
        <>
            <h1 className="lg:text-6xl md:text-2xl font-semibold text-center  pb-20">
                Trusted by the world&apos;s biggest creators
            </h1>
            <div className="relative w-full overflow-hidden  py-10">
                <div ref={containerRef} className="relative w-full">
                    <motion.div 
                        animate={controls}
                        initial={{ x: 0 }}
                        className="flex whitespace-nowrap"
                    >
                        {repeatedCreators.map((creator, index) => (
                            <div
                                key={index}
                                className={`min-w-[250px] mx-4 flex-shrink-0 text-center transform transition-transform ${
                                    index % 2 === 0 ? "translate-y-10" : "-translate-y-10"
                                }`}
                            >
                                <img
                                    src={creator.img}
                                    alt={creator.name}
                                    className="w-60 h-80 object-cover rounded-lg shadow-lg"
                                />
                                <h3 className="mt-2 font-semibold text-lg">{creator.name}</h3>
                                <p className="text-red-500 text-sm">{creator.followers} followers</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default InfiniteScroll;
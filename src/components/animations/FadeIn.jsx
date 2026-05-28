import  { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                // trigger animation when element entewrs viewport

                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"   // triggers slightly before element is fully visible 
            }
        );

        if (elementref.current) {
            observer.observe(elementref.current);
        }

        return () => {
            if (elementref.current) {
                observer.unobserve(elementref.current);
            }
        };
    }, [threshold, isVisible]);



    return<div

    
        ref={elementref}
        className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
        style={{
            animationDelay: isVisible ? `${delay}ms` : '0ms',
            animationDuration: `${duration}ms`,
            animationFillMode: 'both',
        }}

    >

        {children}
    </div>
    
};

export default FadeIn
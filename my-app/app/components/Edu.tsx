"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Award, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Education() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      city: "Chennai",
      country: "India",
      coordinates: [13.0827, 80.2707],
      degree: "Bachelor's Degree",
      field: "Computer Science Engineering",
      institution: "Anna University",
      date: "Apr 2023",
      gpa: "8.72",
      distinction: "First Class with Distinction",
      color: "blue",
      cardPosition: { bottom: "10%", left: "5%" }
    },
    {
      id: 2,
      city: "Melbourne",
      country: "Australia",
      coordinates: [-37.8136, 144.9631],
      degree: "Master's Degree",
      field: "Information Technology",
      institution: "Royal Melbourne Institute of Technology",
      date: "Dec 2025",
      gpa: "3.5",
      color: "indigo",
      cardPosition: { bottom: "10%", right: "5%" }
    }
  ];

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window === 'undefined' || !mapRef.current) return;

      // Load Leaflet CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!(window as any).L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      // Initialize map
      const L = (window as any).L;
      if (!L || mapRef.current.querySelector('.leaflet-container')) return;

      const map = L.map(mapRef.current, {
        center: [0, 100],
        zoom: 3,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false
      });

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Custom marker icons
      const createCustomIcon = (color: string, locationId: number) => L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="position: relative;" class="marker-${locationId}">
            <div style="
              position: absolute;
              width: 80px;
              height: 80px;
              background: ${color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)'};
              border-radius: 50%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: pulse 2s infinite;
            "></div>
            <div style="
              width: 50px;
              height: 50px;
              background: linear-gradient(135deg, ${color === 'blue' ? '#3b82f6, #0ea5e9' : '#6366f1, #8b5cf6'});
              border-radius: 50%;
              border: 4px solid white;
              box-shadow: 0 4px 20px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              z-index: 10;
              cursor: pointer;
              transition: transform 0.3s;
            " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
          </div>
          <style>
            @keyframes pulse {
              0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
            }
          </style>
        `,
        iconSize: [50, 50],
        iconAnchor: [25, 25]
      });

      // Add markers with click handlers
      locations.forEach((location) => {
        const marker = L.marker([location.coordinates[0], location.coordinates[1]], {
          icon: createCustomIcon(location.color, location.id)
        }).addTo(map);

        marker.on('click', () => {
          setActiveLocation(prev => prev === location.id ? null : location.id);
        });
      });

      // Draw simple polyline between locations
      const latlngs = locations.map(loc => [loc.coordinates[0], loc.coordinates[1]]);
      L.polyline(latlngs, {
        color: '#6366f1',
        weight: 3,
        opacity: 0.6,
        dashArray: '10, 10'
      }).addTo(map);

      // Fit bounds to show both locations
      const bounds = L.latLngBounds(latlngs);
      map.fitBounds(bounds, { padding: [100, 100] });
    };

    loadLeaflet();
  }, []);

  const activeLocationData = locations.find(loc => loc.id === activeLocation);

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Click on the markers to explore my academic journey
          </p>
        </motion.div>

        {/* Map with Overlay Card */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Interactive Map */}
          <div 
            ref={mapRef}
            className="w-full h-[500px] lg:h-[600px] rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700"
            style={{ zIndex: 1 }}
          />

          {/* Education Card Overlay - Only shows when clicked */}
          <AnimatePresence>
            {activeLocationData && (
              <motion.div
                key={activeLocationData.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.3, type: "spring" }}
                className={`absolute ${
                  activeLocationData.cardPosition.left ? `left-[5%]` : `right-[5%]`
                } bottom-[10%] w-[90%] sm:w-96 bg-gradient-to-br ${
                  activeLocationData.color === "blue" 
                    ? "from-blue-50 to-cyan-50 dark:from-blue-950/98 dark:to-cyan-950/98 border-blue-300 dark:border-blue-600" 
                    : "from-indigo-50 to-purple-50 dark:from-indigo-950/98 dark:to-purple-950/98 border-indigo-300 dark:border-indigo-600"
                } rounded-2xl p-6 shadow-2xl border-2 backdrop-blur-sm ring-4 ${
                  activeLocationData.color === "blue" ? "ring-blue-500/50" : "ring-indigo-500/50"
                }`}
                style={{ zIndex: 1000 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveLocation(null)}
                  className={`absolute top-3 right-3 p-1.5 rounded-full ${
                    activeLocationData.color === "blue" ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800" : "bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800"
                  } transition-colors`}
                >
                  <X className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Location Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${
                  activeLocationData.color === "blue" ? "bg-blue-500" : "bg-indigo-500"
                } text-white rounded-full text-sm font-semibold mb-4`}>
                  <MapPin className="w-4 h-4" />
                  {activeLocationData.city}, {activeLocationData.country}
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {activeLocationData.degree}
                </h3>
                <p className={`text-lg font-semibold mb-3 ${
                  activeLocationData.color === "blue" ? "text-blue-600 dark:text-blue-400" : "text-indigo-600 dark:text-indigo-400"
                }`}>
                  {activeLocationData.field}
                </p>

                {/* Institution */}
                <p className="text-base text-gray-700 dark:text-gray-300 font-medium mb-4">
                  {activeLocationData.institution}
                </p>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Award className={`w-5 h-5 ${activeLocationData.color === "blue" ? "text-blue-500" : "text-indigo-500"}`} />
                    <span className="font-semibold">GPA: {activeLocationData.gpa}</span>
                  </div>
                  
                  {activeLocationData.distinction && (
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-md">
                      ⭐ {activeLocationData.distinction}
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className={`mt-4 pt-4 border-t ${
                  activeLocationData.color === "blue" ? "border-blue-200 dark:border-blue-800" : "border-indigo-200 dark:border-indigo-800"
                }`}>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Graduated: <span className="font-semibold">{activeLocationData.date}</span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instruction Hint */}
          {!activeLocation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
              style={{ zIndex: 1000 }}
            >
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span className="animate-pulse">👆</span>
                Click on the graduation caps to see details
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
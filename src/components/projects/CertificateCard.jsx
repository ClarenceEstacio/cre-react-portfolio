import { motion } from "framer-motion";

const CertificateCard = ({ cert, onImageClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer h-full"
      onClick={() => onImageClick(cert)}
    >
      <div className="bg-slate/10 backdrop-blur-sm border border-cloud/20 rounded-xl overflow-hidden hover:border-coral/50 transition-all duration-300 h-full flex flex-col">
        {/* Landscape Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-coral/10 to-blush/10">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjUiIHI9IjQwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y1OGY3YyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI2MDAiPkNlcnRpZmljYXRlPC90ZXh0Pgo8L3N2Zz4=";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content - with flex-grow to push content to bottom */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Title - with fixed height using line-clamp-2 */}
          <h3 className="text-lg font-bold font-poppins text-blush mb-3 line-clamp-2 min-h-[3.5rem]">
            {cert.title}
          </h3>

          {/* Bottom section - pushed to bottom with mt-auto */}
          <div className="mt-auto">
            {/* Issuer with line-clamp-2 for consistency */}
            <p className="text-coral font-medium text-sm font-roboto line-clamp-2 min-h-[2.5rem]">
              {cert.issuer}
            </p>

            {/* Date and View button row */}
            <div className="flex items-center justify-between mt-2">
              <p className="text-cloud/70 text-xs font-roboto">{cert.date}</p>
              <div className="px-3 py-1 bg-coral/10 text-coral rounded-lg text-xs font-medium border border-coral/30 font-roboto">
                View
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Alternative Solution 1: With Tooltip for full text
const CertificateCardWithTooltip = ({ cert, onImageClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer h-full"
      onClick={() => onImageClick(cert)}
    >
      <div className="bg-slate/10 backdrop-blur-sm border border-cloud/20 rounded-xl overflow-hidden hover:border-coral/50 transition-all duration-300 h-full flex flex-col">
        {/* Landscape Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-coral/10 to-blush/10">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjUiIHI9IjQwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y1OGY3YyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI2MDAiPkNlcnRpZmljYXRlPC90ZXh0Pgo8L3N2Zz4=";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h3
            className="text-lg font-bold font-poppins text-blush mb-3 line-clamp-2 min-h-[3.5rem]"
            title={cert.title}
          >
            {cert.title}
          </h3>

          <div className="mt-auto">
            <p
              className="text-coral font-medium text-sm font-roboto line-clamp-2 min-h-[2.5rem]"
              title={cert.issuer}
            >
              {cert.issuer}
            </p>

            <div className="flex items-center justify-between mt-2">
              <p className="text-cloud/70 text-xs font-roboto">{cert.date}</p>
              <div className="px-3 py-1 bg-coral/10 text-coral rounded-lg text-xs font-medium border border-coral/30 font-roboto">
                View
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Alternative Solution 2: Compact Design with Ellipsis
const CertificateCardCompact = ({ cert, onImageClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer h-full"
      onClick={() => onImageClick(cert)}
    >
      <div className="bg-slate/10 backdrop-blur-sm border border-cloud/20 rounded-xl overflow-hidden hover:border-coral/50 transition-all duration-300 h-full flex flex-col">
        {/* Landscape Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-coral/10 to-blush/10">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjUiIHI9IjQwIiBmaWxsPSIjZjU4ZjdjIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjEzMCiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmNThmN2MiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNjAwIj5DZXJ0aWZpY2F0ZTwvdGV4dD4KPC9zdmc+";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Compact Content with Fixed Heights */}
        <div className="p-4 flex-grow flex flex-col">
          <h3
            className="text-base font-bold font-poppins text-blush mb-2 truncate"
            title={cert.title}
          >
            {cert.title}
          </h3>

          <p
            className="text-coral font-medium text-sm font-roboto truncate mb-1"
            title={cert.issuer}
          >
            {cert.issuer}
          </p>

          <div className="flex items-center justify-between mt-auto pt-2">
            <p className="text-cloud/70 text-xs font-roboto">{cert.date}</p>
            <div className="px-3 py-1 bg-coral/10 text-coral rounded-lg text-xs font-medium border border-coral/30 font-roboto">
              View
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Export the main solution
export default CertificateCard;

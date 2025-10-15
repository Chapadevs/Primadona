import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16 md:py-24" id="gallery">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center text-primary dark:text-white mb-12">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Blonde balayage hair" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3dmkM0ButccgPSXRQ2Y_1v2xWIOgb4vykeKhanFV9I6JSs6IQXHlOemHecPndpT7pO6soECjGNN_mquqUxuBd9NsZJLOT5HzZE2nC6PSIaRCpsbYI6foSLc3Op2mdSQPr6DRZB0qXSYEwbkYCtY_ecRjm5RtOhvn9pIC0y9b7U28OPoJWgJq_Q1gkWvu9RqoUVGbLUSTE9f6os4z1G5bDJc58A7UJtvgzdN5zm7fw64_UC0C9HNKvAjtuvXsawVC3pkndN-OHH4"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Woman with elegant updo" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRE2Rk-11Gv6GCxsMN38RMpv6nBQW87600BsJbWAUpyaQuGBFtkN78N9NepEtcnoudiL0WhC4ygDD4sbu7Syp8TFmkIcEMnkR2D7bH4YOECoFY38FK13aOjO4ej8thqke84Ln-5mX0fzQ0ilKvpEY6hL1C_vnU6naBwyjzfsbsVlusW3lYcul088hQFA_jOUJ5DG51o1fnJTnEldT-nxePT8aUk9tUN72vODAwANbnX_euMtufnHBvpwUM7-E9fd5isMACB0_-p8"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Rich brunette hair color" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu5ZXY5SCQMP9dthQYdEYHUqIV0IqeRx-7qWeYxR3m9xaQjL3Nf5QKhAsdKfmST8c83GNCZWfRJCjrrvmoTe9pOPDu3mhuNezQ58RsJsntz_IGjkF3srbyxi-m61qyKf3YfLvJMcBkOErK9H5FxmUR4iVBt46HN1hAQI1dYsDZSyAN7MX3Ix5QQASDtQoRV8AcvL_b4cpXMOS-26_7eeQehi9shpcZPhZ-BbOCgn8i55mmfWpzMnFsvhxezV2ZTreDqGwYzywzyAA"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img 
              alt="Woman with stylish short haircut" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCaA4Ehl7yZdLgFSuKHxAZGko2arDZnu84GL1Cf5x3bqUdLXn_zwIEa-h_WQLQEY2g0k8_SZv8L9djD4FRNy-kUrijzkC29fzkRKepCqMaJTNhFdLnMqvugxkKJl2h0iqMAuaMFWLVM-UpxW7lixccRNLTLyNxnBCCHM0YwEdg_WSMw1tZs4Rve55EjwVKzpSP7rw5aWdxZ5z-APuR2jbZI-6iqkYdCmUSHbjfeCdRLgyzp33fSd1ytn4wgDXbTWuSdqkCHoMbk1o"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;




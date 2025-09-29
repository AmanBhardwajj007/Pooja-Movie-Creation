import React from 'react'

const MapComp = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.212464889937!2d77.37635027457249!3d28.623393684497383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6037e03e57%3A0x62d143a3ab46d8a5!2sA-167%2C%20A%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1758792922170!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapComp

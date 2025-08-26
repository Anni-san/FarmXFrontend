import React, { useState } from 'react'
import { motion } from 'framer-motion'
import QRModal from './QRModal'

const CropCard = ({ crop, userRole, onDelete, onEdit }) => {
  const [showQRModal, setShowQRModal] = useState(false)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <>
      <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-2xl border border-emerald-100 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all group">
        <div className="relative h-40 bg-emerald-50 overflow-hidden">
          {crop.image ? (
            <img src={crop.image instanceof File ? URL.createObjectURL(crop.image) : crop.image} alt={crop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute left-3 bottom-3 px-2 py-0.5 rounded-lg text-xs font-semibold bg-white/90 text-emerald-700">{crop.type}</div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">{crop.name}</h3>
          <p className="text-sm text-emerald-700/80 dark:text-emerald-200/80 mt-1 line-clamp-2">{crop.description || 'Healthy crop'}</p>

          <div className="grid grid-cols-2 gap-2 text-xs text-emerald-700/80 dark:text-emerald-200/80 mt-4">
            <div className="bg-emerald-50 dark:bg-gray-700 rounded-lg p-2">Harvest: {formatDate(crop.harvestDate)}</div>
            <div className="bg-emerald-50 dark:bg-gray-700 rounded-lg p-2">Expiry: {formatDate(crop.expiryDate)}</div>
          </div>

          <div className="flex gap-2 mt-4">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => setShowQRModal(true)} className="flex-1 text-sm py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold hover:from-emerald-700 hover:to-lime-700">QR Code</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onEdit && onEdit(crop)} className="px-3 py-2 text-sm rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100">Edit</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onDelete(crop.id)} className="px-3 py-2 text-sm rounded-lg bg-red-50 text-red-600 hover:bg-red-100">Delete</motion.button>
          </div>
        </div>
      </motion.div>

      {showQRModal && (<QRModal crop={crop} userRole={userRole} onClose={() => setShowQRModal(false)} />)}
    </>
  )
}

export default CropCard
